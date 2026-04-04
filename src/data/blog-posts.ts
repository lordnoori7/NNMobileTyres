export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  updatedDate: string;
  author: string;
  readTime: string;
  tags: string[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-to-do-flat-tyre',
    title: 'What to Do If You Get a Flat Tyre',
    metaTitle: 'What to Do If You Get a Flat Tyre | Step-by-Step Guide | NN Mobile Tyres',
    metaDescription: 'Got a flat tyre? Follow our step-by-step guide to stay safe, assess the damage, and get back on the road. Expert advice from NN Mobile Tyres, Oxford.',
    excerpt: 'A flat tyre can happen to anyone at any time. Here is a calm, step-by-step guide on exactly what to do when it happens to you — from pulling over safely to getting professional help.',
    readTime: '6 min read',
    publishedDate: '2026-03-15',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Flat Tyre', 'Emergency', 'Safety'],
    relatedSlugs: ['can-you-drive-on-flat-tyre', 'puncture-repair-vs-tyre-replacement', 'how-to-change-a-tyre'],
    content: `
      <p>Getting a flat tyre is one of those driving experiences that catches you completely off guard. Whether it happens on a quiet residential street in Oxford or on the A34 during rush hour, knowing what to do can make the difference between a minor inconvenience and a dangerous situation.</p>

      <h2>Step 1: Stay Calm and Slow Down Gradually</h2>
      <p>The moment you notice something feels wrong — a pulling sensation, a thumping sound, or your steering becoming heavy — do not slam the brakes. Instead, ease off the accelerator gently and allow the car to slow down naturally. Sudden braking on a flat tyre can cause you to lose control of the vehicle.</p>

      <h2>Step 2: Find a Safe Place to Stop</h2>
      <p>Switch on your hazard lights immediately to alert other drivers. Look for a safe, flat area to pull over — a lay-by, car park, or wide section of road. Avoid stopping on a bend, the brow of a hill, or anywhere with poor visibility. If you are on a motorway, try to reach the hard shoulder or, ideally, an emergency refuge area.</p>
      <p>Once you have stopped, keep your hazard lights on and, if it is dark or visibility is poor, switch on your sidelights too.</p>

      <h2>Step 3: Make Yourself Visible</h2>
      <p>If you have a high-visibility vest, put it on before exiting the vehicle. Place a warning triangle at least 45 metres behind your car on a single carriageway road. On a motorway, do not attempt to place a warning triangle — it is too dangerous with fast-moving traffic.</p>

      <h2>Step 4: Assess the Damage</h2>
      <p>Take a careful look at the affected tyre. You are looking for:</p>
      <ul>
        <li><strong>A nail, screw, or sharp object</strong> — if one is embedded in the tread, leave it in place. Removing it will cause the tyre to deflate faster.</li>
        <li><strong>Sidewall damage</strong> — any cuts, bulges, or tears in the sidewall mean the tyre cannot be repaired and must be replaced.</li>
        <li><strong>Complete deflation</strong> — if the tyre is completely flat and sitting on the rim, you will need a replacement rather than a repair.</li>
      </ul>

      <h2>Step 5: Decide Your Next Move</h2>
      <p>You have a few options depending on your situation:</p>
      <ul>
        <li><strong>Use the spare tyre</strong> — if you have a spare and feel confident changing it, this is a good option in safe conditions. Make sure the spare itself is properly inflated.</li>
        <li><strong>Use a tyre inflation kit</strong> — many modern cars come with a sealant and compressor kit instead of a spare. These work for small punctures in the tread but will not help with sidewall damage or large tears.</li>
        <li><strong>Call for professional help</strong> — if you are on a busy road, in the dark, unsure about the damage, or simply not comfortable doing it yourself, calling a mobile tyre fitting service is always the safest choice.</li>
      </ul>

      <h2>Step 6: Avoid Driving on a Flat Tyre</h2>
      <p>It can be tempting to limp to the nearest garage, but driving on a flat tyre — even a short distance — can cause serious damage to the wheel rim, brake components, and suspension. What starts as a simple puncture can quickly become a far more serious problem.</p>

      <h2>When to Call a Professional</h2>
      <p>There is no shame in calling for help. In fact, it is often the smartest decision. If you are in Oxfordshire, NN Mobile Tyres operates 24/7 and can come to your exact location — whether that is a car park, your driveway, or the side of the road. A qualified technician will assess the damage and either repair or replace the tyre on the spot.</p>

      <h2>Prevention Tips</h2>
      <p>While you cannot prevent every flat tyre, regular checks go a long way:</p>
      <ul>
        <li>Check your tyre pressures at least once a month</li>
        <li>Inspect your tyres for embedded objects, cracks, and uneven wear</li>
        <li>Avoid potholes and kerbs where possible</li>
        <li>Replace tyres before they reach the legal minimum tread depth of 1.6mm</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>Can I drive to a garage on a flat tyre?</h3>
      <p>It is not recommended. Driving on a flat tyre can damage the wheel rim, brake disc, and suspension components. If you cannot safely change the tyre yourself, it is best to call a mobile tyre fitting service to come to you.</p>

      <h3>How long does it take to fix a flat tyre?</h3>
      <p>A professional can typically repair a puncture in around 20 to 30 minutes. A full tyre replacement takes a similar amount of time. NN Mobile Tyres usually arrives within 30 to 45 minutes across Oxford and Oxfordshire.</p>

      <h3>What if I get a flat tyre at night?</h3>
      <p>Safety is the priority. Turn on your hazard lights, move to a well-lit area if possible, and stay inside the vehicle with doors locked until help arrives. NN Mobile Tyres operates 24/7, so you can call or WhatsApp at any time of day or night.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'how-to-check-tyre-tread-depth',
    title: 'How to Check Your Tyre Tread Depth',
    metaTitle: 'How to Check Tyre Tread Depth | The 20p Test & Legal Minimum | NN Mobile Tyres',
    metaDescription: 'Learn how to check your tyre tread depth using the 20p test. Understand the UK legal minimum of 1.6mm and when to replace your tyres. Expert guide from NN Mobile Tyres.',
    excerpt: 'Your tyre tread is the only thing connecting your car to the road. Learn the simple 20p test, understand UK legal limits, and know when it is time to replace your tyres.',
    readTime: '5 min read',
    publishedDate: '2026-03-18',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Tyre Safety', 'Tread Depth', 'Legal'],
    relatedSlugs: ['how-often-check-tyre-pressure', 'puncture-repair-vs-tyre-replacement', 'how-to-read-tyre-size'],
    content: `
      <p>Your tyres are the only point of contact between your car and the road surface. The tread pattern is specifically designed to channel water away, maintain grip, and keep you safe — but as it wears down, your stopping distances increase dramatically. Knowing how to check your tread depth takes just a few seconds and could save your life.</p>

      <h2>What Is the Legal Minimum Tread Depth in the UK?</h2>
      <p>In the UK, the legal minimum tread depth is <strong>1.6mm across the central three-quarters of the tyre</strong>, around the entire circumference. Driving with tyres below this limit is not only dangerous — it is also illegal and can result in a fine of up to £2,500 and three penalty points per tyre. That means four illegal tyres could land you a £10,000 fine and 12 penalty points, which is an automatic ban.</p>

      <h2>The 20p Test: Quick and Simple</h2>
      <p>The easiest way to check your tyre tread at home is the 20p test:</p>
      <ul>
        <li>Take a 20p coin and insert it into the main tread grooves of your tyre</li>
        <li>If the outer band of the coin is hidden by the tread, your tyre is above the legal limit</li>
        <li>If you can see the outer band, your tread is getting low and the tyre should be inspected or replaced</li>
      </ul>
      <p>Repeat this test in several places across each tyre — both in the centre and near the edges — as wear is not always even.</p>

      <h2>Using a Tread Depth Gauge</h2>
      <p>For a more precise measurement, you can use a tread depth gauge, available from most motor factors for just a few pounds. Simply push the gauge into the tread groove and read the measurement. New tyres typically start with around 8mm of tread, so anything below 3mm is worth paying attention to, and at 1.6mm you must replace immediately.</p>

      <h2>Why 3mm Is the Recommended Replacement Point</h2>
      <p>While 1.6mm is the legal minimum, most tyre safety experts and motoring organisations recommend replacing tyres at 3mm. Research shows that stopping distances increase significantly below 3mm:</p>
      <ul>
        <li>At 3mm, stopping from 50mph on a wet road takes approximately 35 metres</li>
        <li>At 1.6mm, the same stop takes around 43 metres — that is an extra 8 metres, or roughly two car lengths</li>
      </ul>
      <p>In wet conditions, those extra metres could be the difference between stopping safely and a collision.</p>

      <h2>Signs of Uneven Tyre Wear</h2>
      <p>When checking your tread, look for patterns that suggest other problems:</p>
      <ul>
        <li><strong>Wear on both edges</strong> — the tyre is likely underinflated</li>
        <li><strong>Wear in the centre</strong> — the tyre is likely overinflated</li>
        <li><strong>Wear on one edge only</strong> — this often indicates a wheel alignment issue</li>
        <li><strong>Patchy or cupped wear</strong> — could point to suspension problems or unbalanced wheels</li>
      </ul>
      <p>If you spot uneven wear, it is worth having the cause investigated before fitting new tyres — otherwise the new ones will wear unevenly too.</p>

      <h2>How Often Should You Check?</h2>
      <p>A good rule of thumb is to check your tyre tread depth at least once a month and before any long journey. It only takes a couple of minutes and gives you peace of mind. If you are in Oxford or anywhere across Oxfordshire and are unsure about the state of your tyres, NN Mobile Tyres can inspect them at your location.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Is it an MOT failure if my tread is below 1.6mm?</h3>
      <p>Yes. Any tyre with tread depth below the legal minimum of 1.6mm across the central three-quarters will result in an MOT failure. It is also a dangerous defect classification, which means the vehicle should not be driven until the tyre is replaced.</p>

      <h3>Can I be fined for worn tyres even if I have not been in an accident?</h3>
      <p>Absolutely. The police can issue a fixed penalty notice for illegal tyre tread during a routine stop or spot check. Each illegal tyre carries a potential fine and penalty points.</p>

      <h3>Does tyre age matter as well as tread depth?</h3>
      <p>Yes. Even if the tread looks fine, tyres older than five years should be inspected regularly, and most manufacturers recommend replacing them after ten years regardless of tread. Rubber deteriorates over time, becoming harder and less grippy.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'run-flat-tyres-vs-regular-tyres',
    title: 'Run Flat Tyres vs Regular Tyres: What You Need to Know',
    metaTitle: 'Run Flat Tyres vs Regular Tyres | Pros, Cons & Repair Guide | NN Mobile Tyres',
    metaDescription: 'Run flat tyres vs regular tyres — how they work, pros and cons, can they be repaired? Complete guide from NN Mobile Tyres, Oxford.',
    excerpt: 'Run flat tyres let you keep driving after a puncture, but they come with trade-offs. Here is everything you need to know about how they work, whether they can be repaired, and when to replace them.',
    readTime: '6 min read',
    publishedDate: '2026-03-20',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Run Flat Tyres', 'Tyre Types', 'Safety'],
    relatedSlugs: ['what-to-do-flat-tyre', 'puncture-repair-vs-tyre-replacement', 'winter-tyres-vs-all-season'],
    content: `
      <p>If you drive a BMW, MINI, or certain Mercedes, Audi, or Lexus models, there is a good chance your car came fitted with run flat tyres from the factory. These clever tyres are designed to keep working even after losing air pressure — but they are quite different from conventional tyres. Here is everything you need to know.</p>

      <h2>How Do Run Flat Tyres Work?</h2>
      <p>Run flat tyres have reinforced sidewalls made from a much stiffer, heat-resistant rubber compound. When a conventional tyre loses pressure, the sidewall collapses and the tyre folds under the weight of the car. With a run flat, the strengthened sidewall is rigid enough to support the vehicle even when fully deflated.</p>
      <p>Most run flat tyres allow you to continue driving for up to <strong>50 miles at a maximum speed of 50mph</strong> after a puncture. This gives you enough range to reach a safe location or your home rather than being stranded at the roadside.</p>

      <h2>How Do You Know You Have a Puncture?</h2>
      <p>Because run flat tyres maintain their shape, you often cannot tell by looking that one is flat. This is why vehicles fitted with run flats always have a <strong>Tyre Pressure Monitoring System (TPMS)</strong>. A dashboard warning light will alert you when pressure drops below the safe threshold.</p>
      <p>Never ignore a TPMS warning. Even though you can keep driving, the tyre is compromised and needs attention as soon as possible.</p>

      <h2>Advantages of Run Flat Tyres</h2>
      <ul>
        <li><strong>No need for a spare tyre</strong> — saving boot space and reducing vehicle weight</li>
        <li><strong>Continued mobility after a puncture</strong> — you can drive to safety rather than stopping on a dangerous road</li>
        <li><strong>Better stability after a blowout</strong> — the rigid sidewall prevents the sudden loss of control that can occur with a standard tyre failure</li>
      </ul>

      <h2>Disadvantages of Run Flat Tyres</h2>
      <ul>
        <li><strong>Firmer ride quality</strong> — the reinforced sidewalls are less flexible, so you will feel bumps and road imperfections more</li>
        <li><strong>Limited repair options</strong> — many manufacturers and tyre specialists will not repair a run flat tyre that has been driven on whilst deflated</li>
        <li><strong>Shorter tread life</strong> — due to the stiffer construction, run flats can wear faster than conventional tyres</li>
        <li><strong>Reduced availability</strong> — not every tyre size is available in a run flat option, and they can be harder to source at short notice</li>
      </ul>

      <h2>Can You Repair a Run Flat Tyre?</h2>
      <p>This is one of the most common questions we get at NN Mobile Tyres. The answer depends on the specific circumstances:</p>
      <ul>
        <li><strong>If you have driven on the tyre while it was flat</strong>, most manufacturers say it cannot be repaired. The internal structure may be damaged in ways that are not visible from the outside.</li>
        <li><strong>If the puncture was caught early</strong> (TPMS warning appeared and you stopped promptly) and the damage is in the repairable zone of the tread, some specialists will carry out a repair.</li>
        <li><strong>Sidewall damage</strong> is never repairable on any tyre, run flat or otherwise.</li>
      </ul>
      <p>Because of the uncertainty, many drivers opt for replacement rather than repair when a run flat is punctured.</p>

      <h2>Can You Replace Run Flats with Regular Tyres?</h2>
      <p>Technically, yes — but there are important considerations. If your car was designed for run flat tyres, it may not have a spare wheel or space for one. Switching to conventional tyres means that a puncture would leave you stranded without a backup plan. You would also need to ensure your TPMS system is still functioning correctly.</p>
      <p>If you are in the Oxford area and unsure whether run flats are right for your vehicle, the team at NN Mobile Tyres can advise you on the best options for your specific car and driving habits.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>How far can you drive on a run flat tyre after a puncture?</h3>
      <p>Most run flat tyres are designed to travel up to 50 miles at a maximum of 50mph after losing pressure. However, this varies by manufacturer, so check your vehicle handbook for the exact specification.</p>

      <h3>Do run flat tyres need special rims?</h3>
      <p>Not always. Most modern run flat tyres fit on standard rims. However, the vehicle does need a functioning TPMS system, as you cannot rely on visual inspection to detect a loss of pressure.</p>

      <h3>Are run flat tyres noisier than regular tyres?</h3>
      <p>They can be. The stiffer sidewall construction means run flat tyres generally produce slightly more road noise and transmit more vibration into the cabin compared to their conventional equivalents.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'how-to-read-tyre-size',
    title: 'How to Read Your Tyre Size: A Complete Guide',
    metaTitle: 'How to Read Tyre Size | What 205/55 R16 91V Means | NN Mobile Tyres',
    metaDescription: 'Learn how to read your tyre size markings. We break down what 205/55 R16 91V means, where to find it, and why it matters. Guide from NN Mobile Tyres, Oxford.',
    excerpt: 'Those numbers on the side of your tyre might look like a secret code, but they are actually straightforward once you know what each one means. Here is how to decode your tyre size.',
    readTime: '5 min read',
    publishedDate: '2026-03-22',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Tyre Size', 'Guide', 'Tyre Basics'],
    relatedSlugs: ['how-to-check-tyre-tread-depth', 'run-flat-tyres-vs-regular-tyres', 'how-often-check-tyre-pressure'],
    content: `
      <p>When you need new tyres, the first thing you will be asked is your tyre size. It might look like a random string of numbers and letters — something like <strong>205/55 R16 91V</strong> — but every character has a specific meaning. Understanding your tyre size ensures you get the right fit for your vehicle and stay safe on the road.</p>

      <h2>Where to Find Your Tyre Size</h2>
      <p>There are several places to check:</p>
      <ul>
        <li><strong>On the tyre sidewall</strong> — the most reliable source. Look for a sequence like 205/55 R16 91V moulded into the rubber.</li>
        <li><strong>Inside the driver's door frame</strong> — most vehicles have a sticker or plate here showing the recommended tyre sizes and pressures.</li>
        <li><strong>In the vehicle handbook</strong> — the manufacturer's recommended size will be listed in the specifications section.</li>
        <li><strong>Inside the fuel filler cap</strong> — some vehicles display tyre information here too.</li>
      </ul>

      <h2>Breaking Down the Numbers: 205/55 R16 91V</h2>
      <p>Let us take the common size <strong>205/55 R16 91V</strong> and explain each part:</p>

      <h3>205 — Tyre Width</h3>
      <p>This is the width of the tyre in millimetres, measured from sidewall to sidewall. In this case, the tyre is 205mm wide. Wider tyres generally offer more grip but may increase rolling resistance.</p>

      <h3>55 — Aspect Ratio (Profile)</h3>
      <p>This number is a percentage representing the height of the sidewall relative to the width. So 55 means the sidewall height is 55% of 205mm, which works out to approximately 113mm. A lower number means a shorter sidewall (a lower-profile tyre), which gives sportier handling but a firmer ride.</p>

      <h3>R — Construction Type</h3>
      <p>The letter R stands for <strong>Radial</strong>, which is the construction method used in virtually all modern car tyres. Radial tyres have layers of cord running at right angles to the direction of travel, giving them better grip, longer life, and a more comfortable ride than the older cross-ply design.</p>

      <h3>16 — Rim Diameter</h3>
      <p>This is the diameter of the wheel rim in inches. This tyre is designed to fit a 16-inch wheel. Getting this wrong means the tyre simply will not fit.</p>

      <h3>91 — Load Index</h3>
      <p>The load index indicates the maximum weight each tyre can support when properly inflated. An index of 91 means the tyre can carry up to 615kg. You should never fit a tyre with a lower load index than specified by your vehicle manufacturer.</p>

      <h3>V — Speed Rating</h3>
      <p>The speed rating tells you the maximum speed the tyre is designed to handle safely. Common ratings include:</p>
      <ul>
        <li><strong>T</strong> — up to 190 km/h (118 mph)</li>
        <li><strong>H</strong> — up to 210 km/h (130 mph)</li>
        <li><strong>V</strong> — up to 240 km/h (149 mph)</li>
        <li><strong>W</strong> — up to 270 km/h (168 mph)</li>
        <li><strong>Y</strong> — up to 300 km/h (186 mph)</li>
      </ul>
      <p>You can fit a tyre with a higher speed rating than recommended, but never a lower one.</p>

      <h2>Other Markings You Might See</h2>
      <ul>
        <li><strong>XL or RF</strong> — Extra Load or Reinforced, indicating the tyre can carry more weight than standard</li>
        <li><strong>M+S</strong> — Mud and Snow, indicating some winter capability</li>
        <li><strong>The snowflake symbol (3PMSF)</strong> — indicates the tyre meets the required performance standard for severe snow conditions</li>
        <li><strong>DOT code</strong> — the last four digits indicate the week and year of manufacture (e.g., 2524 means week 25 of 2024)</li>
      </ul>

      <h2>Why Getting the Right Size Matters</h2>
      <p>Fitting the wrong tyre size can affect your speedometer accuracy, handling, braking performance, and even damage your vehicle's suspension. It will also result in an MOT failure. If you are unsure about your size, a quick call to NN Mobile Tyres can sort it out — we deal with tyre sizes every day across Oxford and Oxfordshire.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Can I fit a different tyre size to my car?</h3>
      <p>In some cases, yes — there may be alternative sizes approved by your vehicle manufacturer. However, you should only ever fit sizes that are listed as acceptable for your specific vehicle. Fitting an unapproved size can compromise safety and invalidate your insurance.</p>

      <h3>What does the DOT code on my tyre mean?</h3>
      <p>The DOT (Department of Transportation) code is a series of characters on the sidewall. The most useful part is the last four digits, which tell you the week and year the tyre was manufactured. For example, 0326 means the tyre was made in week 3 of 2026.</p>

      <h3>Do all four tyres need to be the same size?</h3>
      <p>Most vehicles require the same size on all four corners. However, some performance and luxury cars use a staggered setup with wider tyres on the rear axle. Always check your vehicle handbook for the correct specification.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'can-you-drive-on-flat-tyre',
    title: 'Can You Drive on a Flat Tyre? Here\'s What Happens',
    metaTitle: 'Can You Drive on a Flat Tyre? Risks & What to Do | NN Mobile Tyres',
    metaDescription: 'Can you drive on a flat tyre? Learn the risks, damage it causes to your wheel and suspension, and what to do instead. Expert advice from NN Mobile Tyres, Oxford.',
    excerpt: 'Tempted to drive on a flat tyre to the nearest garage? Here is why that could cause serious damage to your vehicle, and what you should do instead.',
    readTime: '5 min read',
    publishedDate: '2026-03-24',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Flat Tyre', 'Safety', 'Driving Tips'],
    relatedSlugs: ['what-to-do-flat-tyre', 'puncture-repair-vs-tyre-replacement', 'how-to-change-a-tyre'],
    content: `
      <p>You have just noticed your tyre is flat. Maybe you are in a car park, on a residential street, or — worst case — on a busy dual carriageway. Your first instinct might be to keep going and try to make it to a garage. But should you? The short answer is <strong>no</strong>, and here is why.</p>

      <h2>What Happens When You Drive on a Flat Tyre</h2>
      <p>When a tyre loses all its air pressure, it can no longer support the weight of the vehicle. The metal wheel rim ends up sitting directly on the rubber — or worse, on the road surface itself. Here is what happens as you continue driving:</p>

      <h3>Immediate Effects</h3>
      <ul>
        <li><strong>The tyre shreds</strong> — the flat rubber gets pinched between the rim and the road, cutting and tearing it apart. Even a short distance can destroy a tyre beyond repair.</li>
        <li><strong>Steering becomes unpredictable</strong> — you lose proper control of the vehicle as the flat tyre cannot respond to steering inputs correctly.</li>
        <li><strong>Braking distance increases dramatically</strong> — with reduced grip on one corner, stopping takes significantly longer.</li>
      </ul>

      <h3>After a Few Hundred Metres</h3>
      <ul>
        <li><strong>The wheel rim gets damaged</strong> — alloy wheels are particularly vulnerable. Driving on a flat can bend, crack, or gouge the rim, meaning you will need a new wheel as well as a new tyre.</li>
        <li><strong>The tyre bead breaks</strong> — the bead is the part of the tyre that seals against the rim. Once this is damaged, the tyre is beyond saving even if the tread was fine.</li>
      </ul>

      <h3>After a Kilometre or More</h3>
      <ul>
        <li><strong>Brake components suffer</strong> — the caliper, disc, and pads can be damaged by the abnormal forces and vibrations.</li>
        <li><strong>Suspension damage</strong> — the shock absorber, spring, and control arms are put under enormous stress they were never designed to handle.</li>
        <li><strong>Bodywork and wheel arch damage</strong> — the shredded remains of the tyre can flap against and damage the inner wheel arch and bodywork.</li>
      </ul>

      <h2>How Far Can You Actually Drive?</h2>
      <p>On a completely flat standard tyre, the honest answer is <strong>you should not drive at all</strong>. Every metre causes more damage. If you absolutely must move the car — for example, to get off a live lane of traffic — keep it to the absolute minimum distance at walking speed.</p>
      <p>If you have run flat tyres, that is a different matter — they are designed to travel up to 50 miles at 50mph. But check your TPMS warning and your vehicle handbook for the exact limitations.</p>

      <h2>What to Do Instead</h2>
      <p>Here is the sensible course of action:</p>
      <ul>
        <li><strong>Stop safely</strong> as soon as you can — hazard lights on, pull over to a safe spot.</li>
        <li><strong>Assess the tyre</strong> — is it repairable or does it need replacing?</li>
        <li><strong>Use a spare or inflation kit</strong> if you have one and feel confident.</li>
        <li><strong>Call a mobile tyre fitting service</strong> — a technician comes to you, so there is no need to drive anywhere.</li>
      </ul>
      <p>NN Mobile Tyres covers the whole of Oxfordshire and can reach most locations within 30 to 45 minutes, day or night. It is always better to wait for professional help than to risk causing hundreds of pounds of additional damage by driving on a flat.</p>

      <h2>The Real Risk: Safety</h2>
      <p>Beyond the mechanical damage, driving on a flat tyre is genuinely dangerous. A flat tyre on the front axle makes the car pull violently to one side. At any meaningful speed, this can cause you to veer into oncoming traffic or off the road entirely. It is simply not worth the risk.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>What if I only need to drive 100 metres to a safer spot?</h3>
      <p>If you need to move a very short distance to get off a dangerous road, drive as slowly as possible with your hazard lights on. This may still cause some rim damage, but your safety comes first. Once you are in a safe location, stop and call for help.</p>

      <h3>Will my insurance cover damage from driving on a flat tyre?</h3>
      <p>Most insurance policies will not cover consequential damage caused by continuing to drive on a flat tyre, as it is considered avoidable. This includes damage to the rim, brakes, and suspension.</p>

      <h3>Can a flat tyre damage the road surface?</h3>
      <p>When a metal wheel rim is grinding against tarmac, yes, it can score and damage the road surface. More importantly, the sparks generated from metal-on-road contact are a fire risk, particularly if there are fuel spills on the road.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'how-often-check-tyre-pressure',
    title: 'How Often Should You Check Your Tyre Pressure?',
    metaTitle: 'How Often to Check Tyre Pressure | Complete Guide | NN Mobile Tyres',
    metaDescription: 'How often should you check tyre pressure? Learn why it matters, how to check, recommended PSI, and the effects of under and over inflation. NN Mobile Tyres, Oxford.',
    excerpt: 'Tyre pressure affects everything from grip and handling to fuel efficiency and tyre life. Here is how often to check, how to do it, and what the right pressure looks like.',
    readTime: '5 min read',
    publishedDate: '2026-03-26',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Tyre Pressure', 'Maintenance', 'Safety'],
    relatedSlugs: ['how-to-check-tyre-tread-depth', 'how-to-read-tyre-size', 'puncture-repair-vs-tyre-replacement'],
    content: `
      <p>Tyre pressure is one of the most overlooked aspects of vehicle maintenance, yet it has a direct impact on your safety, fuel consumption, and tyre lifespan. The good news is that checking it takes less than five minutes — and it could save you from a blowout on the motorway.</p>

      <h2>How Often Should You Check?</h2>
      <p>The general recommendation is to check your tyre pressures <strong>at least once a month</strong> and <strong>before any long journey</strong>. Tyres naturally lose pressure over time — roughly 1 to 2 PSI per month under normal conditions — so even if everything seems fine, pressure will slowly drop.</p>
      <p>Temperature changes also affect tyre pressure. For every 10°C drop in temperature, tyre pressure decreases by about 1 to 2 PSI. This means that if you set your pressures in summer, they could be significantly low by the time winter arrives in Oxfordshire.</p>

      <h2>How to Check Your Tyre Pressure</h2>
      <p>Follow these steps for an accurate reading:</p>
      <ul>
        <li><strong>Check when tyres are cold</strong> — ideally before driving or after the car has been stationary for at least two hours. Warm tyres give a higher reading, which can be misleading.</li>
        <li><strong>Find your recommended pressure</strong> — this is usually shown on a sticker inside the driver's door frame, in the fuel filler cap, or in the vehicle handbook. It is given in PSI (pounds per square inch) or bar.</li>
        <li><strong>Remove the valve cap</strong> and press the gauge firmly onto the valve stem.</li>
        <li><strong>Read the measurement</strong> and compare it to the recommended figure.</li>
        <li><strong>Inflate or deflate</strong> as needed. Most petrol station air machines let you set the desired pressure and will stop automatically.</li>
        <li><strong>Replace the valve cap</strong> — this keeps dirt and moisture out of the valve.</li>
      </ul>

      <h2>What Happens with Underinflated Tyres</h2>
      <p>Running tyres below the recommended pressure is more common — and more dangerous — than most people realise:</p>
      <ul>
        <li><strong>Increased stopping distances</strong> — less contact patch efficiency means reduced braking performance</li>
        <li><strong>Higher fuel consumption</strong> — underinflated tyres create more rolling resistance, making the engine work harder</li>
        <li><strong>Accelerated edge wear</strong> — the outer edges of the tread wear faster, reducing tyre life significantly</li>
        <li><strong>Overheating risk</strong> — the flexing of an underinflated tyre generates excess heat, which can lead to a blowout at motorway speeds</li>
        <li><strong>Poor handling</strong> — the car may feel sluggish, wander on straight roads, and respond slowly to steering inputs</li>
      </ul>

      <h2>What Happens with Overinflated Tyres</h2>
      <p>Too much pressure is also problematic:</p>
      <ul>
        <li><strong>Reduced grip</strong> — the contact patch becomes smaller and more rounded, reducing traction especially in wet conditions</li>
        <li><strong>Harsher ride</strong> — the tyre cannot absorb road imperfections as effectively</li>
        <li><strong>Centre wear</strong> — the middle of the tread wears faster than the edges</li>
        <li><strong>Increased vulnerability to damage</strong> — an overinflated tyre is more susceptible to damage from potholes and sharp objects</li>
      </ul>

      <h2>Front vs Rear Pressure</h2>
      <p>Many vehicles have different recommended pressures for the front and rear tyres. This is because front-wheel-drive cars carry more weight over the front axle due to the engine. Always check both the front and rear specifications — they are usually listed separately on the door sticker.</p>

      <h2>Do Not Forget the Spare</h2>
      <p>If your car has a spare tyre, check its pressure too. There is nothing worse than getting a flat, retrieving the spare, and discovering it is also flat. The spare should be checked every time you check your main tyres. The recommended pressure for space-saver spares is usually higher than for full-size tyres — typically around 60 PSI.</p>

      <p>For drivers across Oxford and Oxfordshire, NN Mobile Tyres is always available if you need help with tyre pressure, inspections, or any tyre-related issue. We come to your location, so there is no need to queue at a garage.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>What PSI should my tyres be?</h3>
      <p>The correct PSI varies by vehicle, tyre size, and load. You will find the manufacturer's recommended pressure on a sticker inside the driver's door frame or in your vehicle handbook. Common passenger car pressures range from 28 to 36 PSI.</p>

      <h3>Can I use a TPMS instead of checking manually?</h3>
      <p>A Tyre Pressure Monitoring System is a helpful safety net, but it typically only alerts you when pressure drops significantly below the recommended level — often by 25% or more. Regular manual checks catch slow leaks and minor drops that a TPMS might not flag.</p>

      <h3>Does tyre pressure affect fuel consumption?</h3>
      <p>Yes, significantly. Studies show that tyres underinflated by just 10 PSI can increase fuel consumption by up to 2.5%. Over a year of driving, that adds up to a noticeable difference at the pump.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'puncture-repair-vs-tyre-replacement',
    title: 'Puncture Repair vs Tyre Replacement: When Can a Tyre Be Fixed?',
    metaTitle: 'Puncture Repair vs Tyre Replacement | When Can a Tyre Be Fixed? | NN Mobile Tyres',
    metaDescription: 'Can your tyre be repaired or does it need replacing? Learn about BS AU 159, the repairable zone, nail punctures, and sidewall damage. NN Mobile Tyres, Oxford.',
    excerpt: 'Found a nail in your tyre? Not every puncture means you need a new tyre. Here is how to tell when a repair is possible and when replacement is the only safe option.',
    readTime: '6 min read',
    publishedDate: '2026-03-28',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Puncture Repair', 'Tyre Replacement', 'Safety'],
    relatedSlugs: ['what-to-do-flat-tyre', 'can-you-drive-on-flat-tyre', 'how-to-check-tyre-tread-depth'],
    content: `
      <p>Discovering a nail, screw, or sharp object in your tyre is an annoying but common part of driving. The good news is that not every puncture means you need to buy a new tyre. The bad news is that not every puncture can be safely repaired either. Here is how to tell the difference.</p>

      <h2>The British Standard: BS AU 159</h2>
      <p>In the UK, tyre repairs must comply with <strong>British Standard BS AU 159</strong>. This sets out strict rules about where and how a tyre can be repaired, and is designed to ensure that repaired tyres are safe to use at motorway speeds. Any reputable tyre technician will follow this standard — and refuse to repair a tyre that does not meet the criteria.</p>

      <h2>The Repairable Zone</h2>
      <p>Not all of the tyre surface is eligible for repair. According to BS AU 159, only the <strong>central three-quarters of the tread area</strong> (sometimes called the minor repair area) can be repaired. This means:</p>
      <ul>
        <li><strong>Punctures in the centre of the tread</strong> — generally repairable, provided other conditions are met</li>
        <li><strong>Punctures near the shoulder</strong> (where the tread meets the sidewall) — cannot be safely repaired</li>
        <li><strong>Sidewall damage</strong> — never repairable. The sidewall flexes constantly while driving, and a repair would fail under the stress</li>
      </ul>

      <h2>When Can a Tyre Be Repaired?</h2>
      <p>A puncture repair is typically possible when:</p>
      <ul>
        <li>The damage is in the central tread area</li>
        <li>The puncture is no larger than <strong>6mm in diameter</strong></li>
        <li>There is only one puncture (or existing repairs are well separated from each other)</li>
        <li>The tyre has <strong>not been driven on while flat</strong> — driving on a deflated tyre can cause internal damage that is invisible from the outside</li>
        <li>The remaining tread depth is above the legal minimum of 1.6mm</li>
        <li>The tyre is not excessively aged or deteriorated</li>
      </ul>

      <h2>When Must a Tyre Be Replaced?</h2>
      <p>A tyre must be replaced rather than repaired when:</p>
      <ul>
        <li>The damage is in the <strong>sidewall or shoulder area</strong></li>
        <li>The puncture hole is <strong>larger than 6mm</strong></li>
        <li>The tyre has been <strong>driven on whilst flat</strong>, potentially causing hidden internal damage</li>
        <li>There are <strong>multiple punctures close together</strong></li>
        <li>The tyre shows signs of <strong>bulging, cracking, or cord exposure</strong></li>
        <li>The tread depth is already at or near 1.6mm</li>
        <li>A previous repair has failed</li>
      </ul>

      <h2>What About a Nail Still Stuck in the Tyre?</h2>
      <p>If you spot a nail or screw embedded in your tyre and it is still holding air, <strong>leave it in place</strong>. It is acting as a plug and removing it will cause the tyre to deflate. Drive carefully (avoiding high speeds) to a safe location and call for professional help.</p>
      <p>The technician will remove the tyre from the wheel, inspect the interior for hidden damage, and then perform a proper combination repair (patch and plug) from the inside — if the tyre meets the repair criteria.</p>

      <h2>Why Plug-Only Repairs Are Not Safe</h2>
      <p>You might have seen tyre repair kits that push a rubber plug into the puncture from the outside. While these can be a useful temporary measure to get you home, they are <strong>not considered a permanent repair</strong> under BS AU 159. A proper repair requires the tyre to be removed from the rim, the interior inspected for damage, and a combination patch-plug applied from the inside.</p>

      <h2>Getting It Right</h2>
      <p>At NN Mobile Tyres, every puncture is assessed on-site following BS AU 159 guidelines. If a repair is safe and appropriate, we carry it out at your location across Oxfordshire. If the tyre needs replacing, we carry a wide range of sizes in our van to get you back on the road quickly.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>How long does a puncture repair last?</h3>
      <p>When carried out correctly to BS AU 159, a combination repair is designed to last the remaining life of the tyre. It is a permanent fix that is safe for motorway driving.</p>

      <h3>Can I get a puncture repaired if my tyre is already low on tread?</h3>
      <p>If the remaining tread depth is close to or below the legal minimum of 1.6mm, most technicians will recommend replacement rather than repair. There is little point repairing a tyre that will need replacing soon anyway.</p>

      <h3>Is it safe to drive with a slow puncture?</h3>
      <p>A slow puncture should be dealt with as soon as possible. While you may be able to top up the pressure and drive short distances, the cause needs to be identified and properly repaired or the tyre replaced. Ignoring a slow puncture risks a sudden deflation at speed.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'lost-locking-wheel-nut-key',
    title: 'What to Do If You Lose Your Locking Wheel Nut Key',
    metaTitle: 'Lost Locking Wheel Nut Key? How to Remove Locking Wheel Nuts | NN Mobile Tyres',
    metaDescription: 'Lost your locking wheel nut key? Learn your options for removal, how professionals extract them, and tips to prevent losing it again. NN Mobile Tyres, Oxford.',
    excerpt: 'Lost your locking wheel nut key? You are not alone — it is one of the most common tyre-related problems. Here are your options for getting those wheels off safely.',
    readTime: '5 min read',
    publishedDate: '2026-03-30',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Locking Wheel Nuts', 'Wheel Security', 'Guide'],
    relatedSlugs: ['what-to-do-flat-tyre', 'how-to-change-a-tyre', 'puncture-repair-vs-tyre-replacement'],
    content: `
      <p>You have got a flat tyre, or your tyres are due for replacement, and then you realise — where is the locking wheel nut key? It is one of the most common problems we deal with at NN Mobile Tyres. Locking wheel nut keys are small, easy to misplace, and essential when you need to remove a wheel. Here is what to do if yours has gone missing.</p>

      <h2>What Is a Locking Wheel Nut?</h2>
      <p>Locking wheel nuts (also called locking bolts on some vehicles) are a security feature designed to prevent wheel theft. One of the four or five nuts on each wheel has a unique pattern that requires a matching key socket to remove it. Without this key, the nut cannot be removed using a standard socket.</p>

      <h2>Why Do People Lose Them?</h2>
      <p>It happens more often than you might think. Common reasons include:</p>
      <ul>
        <li><strong>Left at a garage</strong> — after a tyre change or service, the key is sometimes left on the workbench or put back in the wrong vehicle</li>
        <li><strong>Moved from its usual spot</strong> — the key is often stored in the boot with the spare tyre or jack kit, and gets relocated during a clear-out</li>
        <li><strong>Bought a second-hand car</strong> — previous owners do not always pass on the locking key</li>
        <li><strong>Broken or rounded off</strong> — if forced with the wrong tool or at the wrong angle, the key can snap or the pattern can wear smooth</li>
      </ul>

      <h2>Your Options for Removal</h2>
      <p>If you need your wheels off and the key is nowhere to be found, here is what you can do:</p>

      <h3>1. Check Everywhere First</h3>
      <p>Before calling for help, do a thorough search:</p>
      <ul>
        <li>The glove box</li>
        <li>Under the boot floor or carpet, near the spare wheel or jack</li>
        <li>In the side pockets of the boot</li>
        <li>In the door pockets</li>
        <li>With any toolkits that came with the car</li>
      </ul>

      <h3>2. Contact the Dealer</h3>
      <p>If your car has a dealer service history, they may have the key code on file and can order a replacement. This typically takes a few days. Some manufacturers can identify the key pattern from a code number stamped on the nut or listed in the service book.</p>

      <h3>3. Professional Locking Wheel Nut Removal</h3>
      <p>This is the quickest option. A skilled technician can remove locking wheel nuts without the key using specialist extraction tools. The process typically involves:</p>
      <ul>
        <li>Using a dedicated extraction socket that grips the outside of the locking nut</li>
        <li>Carefully applying torque to loosen the nut without damaging the wheel</li>
        <li>Replacing the locking nut with a standard nut (or a new locking set if preferred)</li>
      </ul>
      <p>The whole process usually takes 15 to 30 minutes per wheel and can be done at your location. NN Mobile Tyres carries professional extraction tools and can remove locking wheel nuts from all major vehicle makes across Oxford and Oxfordshire.</p>

      <h3>4. Do Not Try DIY Methods</h3>
      <p>You might see advice online about hammering a slightly smaller socket onto the locking nut or using a chisel to create a grip point. These methods risk:</p>
      <ul>
        <li>Damaging the alloy wheel</li>
        <li>Rounding the nut further, making professional removal harder</li>
        <li>Injuring yourself</li>
      </ul>
      <p>Leave it to someone with the right tools and experience.</p>

      <h2>Prevention Tips</h2>
      <p>Once you have a new key or locking set, keep it safe:</p>
      <ul>
        <li><strong>Always store it in the same place</strong> — next to the spare tyre or jack is ideal</li>
        <li><strong>Note down the key number</strong> — write it in your service book or take a photo for your records</li>
        <li><strong>Tell your garage</strong> — when you book a tyre change or service, remind them where the key is so it does not get misplaced</li>
        <li><strong>Consider a spare key</strong> — some manufacturers sell replacement keys, so having a backup is worthwhile</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>Can locking wheel nuts be removed without damaging the wheel?</h3>
      <p>Yes, in most cases a professional can remove the locking nut without any damage to the alloy wheel. The specialist extraction tools are designed to grip the nut itself, not the wheel. However, if previous DIY attempts have damaged the nut, removal may be more difficult.</p>

      <h3>How long does locking wheel nut removal take?</h3>
      <p>Typically 15 to 30 minutes per wheel with professional equipment. If the nut is severely damaged or corroded, it may take a little longer. NN Mobile Tyres can carry out the removal at your location — home, work, or roadside.</p>

      <h3>Should I replace the locking nuts or switch to standard nuts?</h3>
      <p>That is entirely your choice. Locking nuts add a layer of security against wheel theft, which may be worth having if you park on the street. If you decide to replace them, make sure you keep the new key somewhere safe and note down the key code.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'winter-tyres-vs-all-season',
    title: 'Winter Tyres vs All-Season Tyres: Which Are Right for You?',
    metaTitle: 'Winter Tyres vs All-Season Tyres UK | Which to Choose? | NN Mobile Tyres',
    metaDescription: 'Winter tyres vs all-season tyres — when to switch, temperature thresholds, grip differences, and UK weather considerations. Guide from NN Mobile Tyres, Oxford.',
    excerpt: 'Should you fit winter tyres or all-season tyres? Here is an honest comparison covering grip, temperature, UK weather conditions, and which option suits most Oxfordshire drivers.',
    readTime: '6 min read',
    publishedDate: '2026-04-01',
    updatedDate: '2026-04-01',
    author: 'NN Mobile Tyres',
    tags: ['Winter Tyres', 'All-Season Tyres', 'Seasonal'],
    relatedSlugs: ['run-flat-tyres-vs-regular-tyres', 'how-to-check-tyre-tread-depth', 'how-often-check-tyre-pressure'],
    content: `
      <p>As temperatures drop across Oxfordshire each autumn, the question of winter tyres versus all-season tyres comes up again and again. Unlike many European countries, the UK does not legally require winter tyres — but that does not mean they are not worth considering. Here is a straightforward comparison to help you decide.</p>

      <h2>How Winter Tyres Work</h2>
      <p>Winter tyres are not just about snow. They are designed to perform better in <strong>all cold conditions</strong>, typically when temperatures consistently drop below 7°C. They differ from summer tyres in three key ways:</p>
      <ul>
        <li><strong>Softer rubber compound</strong> — summer tyre rubber hardens in cold weather, reducing grip. Winter tyres use a compound that stays flexible at low temperatures.</li>
        <li><strong>More sipes (tiny slits)</strong> — the tread blocks on winter tyres are covered in hundreds of small cuts called sipes, which create extra biting edges on ice and compacted snow.</li>
        <li><strong>Deeper tread pattern</strong> — designed to channel slush and water away more effectively and pack snow into the tread for better snow-on-snow grip.</li>
      </ul>

      <h2>How All-Season Tyres Work</h2>
      <p>All-season tyres (sometimes called four-season tyres) aim to be a compromise between summer and winter tyres. They use a moderately soft compound and a tread pattern that balances wet and dry performance with some cold-weather capability.</p>
      <p>The best all-season tyres carry the <strong>3PMSF (Three Peak Mountain Snowflake)</strong> symbol, meaning they have passed the required performance test in severe snow conditions. Not all all-season tyres have this certification, so it is worth checking.</p>

      <h2>Performance Comparison</h2>

      <h3>In Cold, Wet Conditions (Below 7°C)</h3>
      <p>Winter tyres are the clear winner. Their softer compound and aggressive sipe pattern provide noticeably better grip on cold, wet roads. Braking distances can be <strong>up to 10 metres shorter</strong> in cold, wet conditions compared to summer tyres.</p>

      <h3>In Snow and Ice</h3>
      <p>Winter tyres excel here. All-season tyres perform adequately in light snow but cannot match the grip of dedicated winter rubber in heavy snow or icy conditions.</p>

      <h3>In Warm, Dry Conditions (Above 10°C)</h3>
      <p>Summer tyres perform best in warm weather. Winter tyres wear faster and feel less precise in warm conditions. All-season tyres offer a reasonable middle ground but do not quite match a dedicated summer tyre's dry performance.</p>

      <h3>In Mixed British Conditions</h3>
      <p>This is where all-season tyres shine. The UK climate is typically mild and damp, with occasional cold snaps. For many drivers, all-season tyres provide a practical year-round solution without the hassle of swapping between two sets.</p>

      <h2>Which Is Right for Oxfordshire?</h2>
      <p>Oxfordshire sees relatively mild winters compared to northern regions, but frost, ice, and occasional snow are common from November through March. Here is a general guide:</p>
      <ul>
        <li><strong>All-season tyres suit most drivers</strong> — if you mainly drive in town, on well-gritted roads, and are not regularly tackling rural lanes in the early morning, a quality all-season tyre will serve you well year-round.</li>
        <li><strong>Winter tyres are worth it if</strong> — you have a long commute that starts early on ungritted roads, you live in a rural area like the Cotswolds or North Oxfordshire, or you regularly drive in conditions where frost and ice are common.</li>
        <li><strong>A two-set approach is ideal if</strong> — you do high mileage and want the best performance in every condition. Summer tyres from April to October, winter tyres from November to March. This also means each set lasts longer, giving you the best of both worlds.</li>
      </ul>

      <h2>Storage Considerations</h2>
      <p>If you opt for the two-set approach, you will need somewhere to store the off-season set. Tyres should be stored in a cool, dry place away from direct sunlight. Some people keep them in the garage, while tyre hotels (storage services) are available at some garages. The team at NN Mobile Tyres can advise on the best approach for your situation.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>Are winter tyres a legal requirement in the UK?</h3>
      <p>No. Unlike countries such as Germany, Austria, and Sweden, there is no legal requirement to fit winter tyres in the UK. However, if you are driving to mainland Europe in winter, check the requirements for the countries you will be visiting — many do mandate winter tyres during certain months.</p>

      <h3>Can I just fit winter tyres on the drive wheels?</h3>
      <p>This is not recommended. Fitting winter tyres on only two wheels creates an imbalance in grip that can make the car dangerously unpredictable, especially in corners. Always fit them as a full set of four.</p>

      <h3>How long do all-season tyres last compared to summer tyres?</h3>
      <p>All-season tyres typically have a slightly softer compound than pure summer tyres, so they may wear a little faster in warm weather. However, since you use them year-round instead of swapping sets, the convenience often outweighs the modest difference in wear rate.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  },
  {
    slug: 'how-to-change-a-tyre',
    title: 'How to Change a Tyre: Step-by-Step Guide',
    metaTitle: 'How to Change a Tyre | Step-by-Step Guide With Safety Tips | NN Mobile Tyres',
    metaDescription: 'Complete step-by-step guide to changing a tyre safely. Jack placement, torque sequence, and safety tips. If unsure, call NN Mobile Tyres in Oxford for professional help.',
    excerpt: 'Knowing how to change a tyre is a valuable life skill, but safety comes first. Here is a complete walkthrough with jack placement, torque sequence, and important safety tips.',
    readTime: '7 min read',
    publishedDate: '2026-04-02',
    updatedDate: '2026-04-02',
    author: 'NN Mobile Tyres',
    tags: ['How To', 'Tyre Change', 'Safety'],
    relatedSlugs: ['what-to-do-flat-tyre', 'can-you-drive-on-flat-tyre', 'lost-locking-wheel-nut-key'],
    content: `
      <p>Knowing how to change a tyre is one of those skills you hope you will never need — but when you do, you will be glad you know the basics. This guide walks you through the process step by step, with an emphasis on doing it safely. And if at any point you are unsure or uncomfortable, calling a professional is always the safest option.</p>

      <h2>Before You Start: What You Need</h2>
      <p>Check that you have the following in your car (ideally before you actually need them):</p>
      <ul>
        <li><strong>A spare tyre</strong> — either a full-size spare or a space-saver. Check it is properly inflated.</li>
        <li><strong>A jack</strong> — the one supplied with your car is designed for your specific vehicle.</li>
        <li><strong>A wheel brace (lug wrench)</strong> — the correct size for your wheel nuts.</li>
        <li><strong>Your locking wheel nut key</strong> — if your car has locking nuts.</li>
        <li><strong>A high-visibility vest</strong> — essential if you are at the roadside.</li>
        <li><strong>A torch</strong> — if you are working in low light.</li>
        <li><strong>Gloves</strong> — optional but useful, as wheels and tyres can be dirty and sharp.</li>
      </ul>

      <h2>Step 1: Find a Safe Location</h2>
      <p>Never change a tyre on a motorway hard shoulder if you can avoid it — call for breakdown assistance instead. For other roads, find a flat, stable surface away from traffic. Switch on your hazard lights and wear your high-visibility vest. If you have a warning triangle, place it at least 45 metres behind your car.</p>

      <h2>Step 2: Prepare the Vehicle</h2>
      <ul>
        <li>Apply the <strong>handbrake firmly</strong></li>
        <li>Put the car in <strong>first gear</strong> (manual) or <strong>Park</strong> (automatic)</li>
        <li>If possible, place a <strong>wheel chock</strong> (or a brick or heavy stone) behind the wheel diagonally opposite the one you are changing — this prevents the car from rolling</li>
        <li>Get all passengers out of the vehicle and to a safe location away from the road</li>
      </ul>

      <h2>Step 3: Loosen the Wheel Nuts</h2>
      <p>Before jacking up the car, use the wheel brace to loosen the wheel nuts by about a quarter turn. Do this while the tyre is still on the ground — this gives you the resistance you need to break the nuts free. Turn <strong>anticlockwise</strong> to loosen.</p>
      <p>If the nuts are very tight, you can use your body weight by carefully standing on the brace (make sure it is securely on the nut). Do not use extensions or pipes on the brace — this can damage the nuts or the brace.</p>

      <h2>Step 4: Position and Raise the Jack</h2>
      <p>This is a critical step. Using the jack in the wrong position can damage your car or, worse, cause it to fall.</p>
      <ul>
        <li>Consult your <strong>vehicle handbook</strong> for the correct jacking point — there are reinforced areas on the sill (the metal strip along the bottom of the car) designed specifically for this purpose.</li>
        <li>Place the jack on <strong>firm, level ground</strong>. If the surface is soft (like grass or gravel), place a flat board under the jack to spread the load.</li>
        <li>Raise the jack until the flat tyre is about <strong>2 to 3 centimetres off the ground</strong> — you do not need it any higher.</li>
      </ul>

      <h2>Step 5: Remove the Flat Tyre</h2>
      <ul>
        <li>Fully unscrew the loosened wheel nuts and place them somewhere safe — a pocket or a cup holder, not on the ground where they can roll away.</li>
        <li>Pull the flat tyre straight towards you and off the hub. Tyres are heavy (typically 15 to 25kg for a car tyre and wheel), so brace yourself.</li>
        <li>Lay the flat tyre flat on the ground, ideally under the car near the jack as a safety measure — if the jack fails, the car will land on the old tyre rather than the bare brake disc.</li>
      </ul>

      <h2>Step 6: Fit the Spare Tyre</h2>
      <ul>
        <li>Lift the spare tyre onto the hub, lining up the bolt holes.</li>
        <li>Hand-tighten the wheel nuts in a <strong>star or cross pattern</strong> — this ensures the wheel seats evenly against the hub. Do not fully tighten them yet.</li>
      </ul>

      <h2>Step 7: Lower the Car and Tighten</h2>
      <ul>
        <li>Lower the jack until the tyre is firmly on the ground but the full weight of the car is not yet on it.</li>
        <li>Now tighten the wheel nuts firmly using the <strong>star pattern</strong> — tighten one, then the one opposite, and so on. This prevents the wheel from tilting.</li>
        <li>Lower the jack completely and remove it.</li>
        <li>Give each nut a final check with the brace to make sure they are all secure.</li>
      </ul>

      <h2>Step 8: After the Change</h2>
      <ul>
        <li><strong>Check the spare tyre pressure</strong> as soon as possible — many space-savers need to be inflated to 60 PSI.</li>
        <li>If you are on a space-saver spare, <strong>do not exceed 50mph</strong> and get a full-size tyre fitted as soon as you can. Space-savers are temporary.</li>
        <li><strong>Get your wheel nuts re-torqued</strong> — after driving 50 miles on the spare, have the nuts checked with a torque wrench to ensure they are at the correct tightness.</li>
        <li>Store the flat tyre, jack, and tools back in the boot.</li>
      </ul>

      <h2>When to Call a Professional Instead</h2>
      <p>There is absolutely no shame in calling for help. In fact, it is the recommended course of action if:</p>
      <ul>
        <li>You are on a busy or fast road</li>
        <li>You are unsure about the jacking point</li>
        <li>The ground is uneven or soft</li>
        <li>You do not have the right tools</li>
        <li>The wheel nuts are seized or you cannot find the locking key</li>
        <li>It is dark, raining, or otherwise poor conditions</li>
        <li>You have a physical limitation that makes the task difficult</li>
      </ul>
      <p>NN Mobile Tyres provides professional mobile tyre fitting across Oxford and Oxfordshire, 24 hours a day, 7 days a week. A qualified technician will come to your exact location with the right tools and equipment to get you sorted safely.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>How tight should wheel nuts be?</h3>
      <p>Wheel nuts should be tightened to the manufacturer's specified torque, which varies by vehicle — typically between 90 and 120 Nm for most cars. Over-tightening can damage the studs and make future removal difficult. After fitting a spare, have the nuts checked with a torque wrench at the earliest opportunity.</p>

      <h3>Can I change a tyre on a slope?</h3>
      <p>It is not recommended. Jacks are designed to work on flat, level surfaces. On a slope, the car could roll or the jack could topple. If you cannot find a flat area, it is safer to call for professional assistance.</p>

      <h3>How long can I drive on a space-saver spare?</h3>
      <p>Space-saver spares are designed for temporary use only — ideally no more than 50 miles and at speeds not exceeding 50mph. They have a thinner tread, a smaller contact patch, and are not suitable for extended driving. Get a full-size replacement fitted as soon as possible.</p>

      <p><strong>Need help? Call NN Mobile Tyres on <a href="tel:+447362638978">07362 638978</a> or <a href="https://wa.me/447362638978" target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we are available 24/7 across Oxfordshire.</strong></p>
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs
    .map(slug => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);
}
