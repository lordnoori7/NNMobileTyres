/**
 * Restores React's text-node boundaries in a prerendered page.
 *
 * The prerender snapshots a client render with page.content(), and HTML
 * serialization has no way to express two adjacent text nodes — `"` and
 * `{r.text}` come back out as one merged text node. React hydration compares
 * each text child against its own DOM node, so the merged node never matches
 * and the whole page is thrown away and re-rendered on the client (error #418).
 *
 * Server rendering has the same problem and solves it by writing an empty
 * comment between adjacent text nodes; React's hydration walk skips comments
 * that are not Suspense markers, so each text child lines up with its own
 * node again. This re-inserts exactly those separators before the snapshot is
 * serialized.
 *
 * Runs inside the page via page.evaluate, so it must not close over anything.
 *
 * @returns {number} how many separators were inserted
 */
export function insertTextNodeSeparators() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const needsSeparator = [];

  // Collect first, mutate after — inserting during the walk would disturb it.
  let node = walker.nextNode();
  while (node) {
    const previous = node.previousSibling;
    if (previous && previous.nodeType === Node.TEXT_NODE) {
      needsSeparator.push(node);
    }
    node = walker.nextNode();
  }

  for (const textNode of needsSeparator) {
    textNode.parentNode.insertBefore(document.createComment(''), textNode);
  }

  return needsSeparator.length;
}
