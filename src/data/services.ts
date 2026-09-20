/**
 * Commercial service pages. One entry per /services/<slug> route.
 *
 * Copy here is deliberately specific (what is included, what is not, why a
 * repair gets refused) because these pages have to answer a buying question
 * and double as Google Ads landing pages. Nothing in here quotes a price —
 * see src/data/prices.ts.
 */

export type ServiceIcon = 'wrench' | 'puncture' | 'key' | 'emergency' | 'battery';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ServiceDefinition {
  slug: string;
  /** Short label for nav and footer lists. */
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** schema.org Service serviceType value. */
  serviceType: string;
  icon: ServiceIcon;
  accent: 'red' | 'blue';
  /** Card blurb on /services. */
  summary: string;
  image?: { src: string; width: number; height: number; alt: string };
  /** Hero paragraph, above the fold. */
  intro: string;
  /** "What's included" checklist. */
  included: string[];
  steps: { title: string; description: string }[];
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  /** Blog post slugs to link to from the body. */
  relatedBlog: string[];
}

const BS_AU_159 =
  'BS AU 159, the British Standard every reputable fitter works to, sets out exactly where a car tyre may and may not be repaired.';

export const services: ServiceDefinition[] = [
  {
    slug: 'mobile-tyre-fitting',
    navLabel: 'Mobile Tyre Fitting',
    h1: 'Mobile Tyre Fitting in Oxford & Oxfordshire',
    metaTitle: 'Mobile Tyre Fitting Oxford | We Come to You 24/7 | NN Mobile Tyres',
    metaDescription:
      'Mobile tyre fitting across Oxford and Oxfordshire, 24/7. We come to your home, work or roadside — typically within 30-45 minutes. Fitting, balancing, new valve and old tyre disposal included. Call 07362 638978.',
    serviceType: 'Mobile tyre fitting',
    icon: 'wrench',
    accent: 'red',
    summary:
      'New tyres fitted and balanced at your home, your workplace or the roadside — no garage visit, no waiting room.',
    image: {
      src: '/tyre-fitting-1024.webp',
      width: 1024,
      height: 747,
      alt: 'NN Mobile Tyres technician fitting a new tyre at a customer location in Oxfordshire',
    },
    intro:
      'We bring the garage to you. Our van carries the tyre machine, the wheel balancer, the torque wrenches and a working stock of the common sizes, so a full fitting happens on your driveway, in your office car park or at the side of the road — usually within 30 to 45 minutes of your call. We cover Oxford and the whole of Oxfordshire, 24 hours a day, 365 days a year.',
    included: [
      'Removal of the old tyre and inspection of the wheel and valve seat',
      'Fitting of your new tyre using a professional tyre machine',
      'Dynamic wheel balancing with new weights',
      'A new rubber or TPMS-compatible valve on every fitted tyre',
      'Correct inflation to the manufacturer placard pressure',
      'Torque-wrench tightening to your vehicle manufacturer specification',
      'Removal and legal disposal of your old tyre',
      'No call-out charge anywhere in our coverage area',
    ],
    steps: [
      {
        title: 'Tell us the size',
        description:
          'Read the numbers off the sidewall — for example 205/55 R16 91V — or send us a photo on WhatsApp and we will read it for you.',
      },
      {
        title: 'Get a quote up front',
        description:
          'We confirm the price for the tyre and the fitting before we set off. No surprises when we arrive.',
      },
      {
        title: 'We come to you',
        description:
          'Home, work, car park or roadside. You do not need to move the vehicle, and you do not need to be free for a whole afternoon.',
      },
      {
        title: 'Fitted, balanced, gone',
        description:
          'A single tyre typically takes 20 to 30 minutes on site. We take the old one away with us.',
      },
    ],
    sections: [
      {
        heading: 'Which tyres we fit',
        paragraphs: [
          'We fit premium, mid-range and budget tyres, and we are honest about the difference. Premium brands such as Michelin, Continental, Pirelli, Bridgestone and Goodyear generally give you shorter wet braking distances, better tread life and lower noise — which is why they are worth the money on a car you keep. Mid-range brands sit sensibly in between. Budget tyres are a legitimate choice on an older car or a low-mileage second vehicle, and we would rather fit you a good budget tyre today than leave you driving on something illegal.',
          'Whatever the tier, every tyre we fit is new, road legal and E-marked, and we will tell you its EU label ratings for wet grip, fuel efficiency and noise before you commit. We do not fit part-worn tyres.',
          'If your car runs staggered sizes front to rear, has run-flats, or uses TPMS sensors, tell us when you call — it changes what we need to bring.',
        ],
      },
      {
        heading: 'Where we can work',
        paragraphs: [
          'Almost anywhere with firm, level ground and enough room to get the jack in and the wheel off safely. In practice that means driveways, residential streets, business and supermarket car parks, farm tracks, and the hard shoulder or a lay-by where it is safe for us to stop.',
          'There are a few places we will not work, and it is worth knowing before you call. We cannot jack a car on a steep slope, on soft ground that will not take the jack, or in a live traffic lane. On a motorway or a fast A-road we will always ask you to get behind the barrier first, and if the position is genuinely unsafe we will tell you to call the police or Highways England for a recovery to a safe spot, then we will meet you there.',
        ],
        bullets: [
          'Driveways and residential parking',
          'Workplace and supermarket car parks',
          'Lay-bys and safe verges on the A34, A40, A44 and A420',
          'Roadside and hard shoulder, once you are safely behind the barrier',
        ],
      },
      {
        heading: 'One tyre or a full set',
        paragraphs: [
          'There is no minimum. Plenty of our work is a single replacement after a pothole or a kerb strike. If you are replacing a pair, we will always fit the new tyres to the rear axle regardless of whether the car is front or rear wheel drive — the deeper tread belongs at the back, because a rear axle that loses grip first is far harder to recover than a front one that does.',
          'If you are replacing all four, we can usually do the set in one visit of around an hour to an hour and a quarter. It is also the moment to talk about whether the car is due an alignment check: if the old tyres wore unevenly across the tread, new rubber will do exactly the same thing unless the geometry is looked at.',
        ],
      },
      {
        heading: 'When you should not wait',
        paragraphs: [
          'The UK legal minimum tread depth for cars is 1.6 mm across the central three quarters of the tread, around the complete circumference. Below that you are looking at a fine of up to £2,500 and three penalty points per tyre, and an MOT failure. Most tyre engineers would tell you to replace at around 3 mm, because wet braking distances lengthen sharply below that.',
          'Replace without waiting if you can see cords or steel belts, if there is a bulge or an egg in the sidewall, if the tyre has a cut deep enough to expose the carcass, or if the rubber has gone hard and crazed with age. Any of those can let go without warning at speed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How quickly can you get to me?',
        answer:
          'We typically arrive within 30 to 45 minutes anywhere in Oxford and across most of Oxfordshire. Outlying villages and the far end of the county can take a little longer. We will give you a realistic ETA on the phone rather than an optimistic one.',
      },
      {
        question: 'Do you charge a call-out fee?',
        answer:
          'No. There is no call-out charge anywhere in our coverage area, at any hour. You pay for the tyre and the fitting, and we tell you that figure before we travel.',
      },
      {
        question: 'Do I need to be with the car?',
        answer:
          'Not necessarily. If the car is on a private driveway and you can leave the keys accessible or the locking wheel nut key in the glovebox, plenty of customers have us fit while they are at work. We will call you when we are done and take payment over the phone.',
      },
      {
        question: 'Can you balance the wheel properly in a mobile van?',
        answer:
          'Yes. We carry a proper dynamic balancer, not a static bubble balancer. Every tyre we fit is balanced with new weights before it goes back on the car — an unbalanced wheel will vibrate through the steering from roughly 50 mph upwards.',
      },
      {
        question: 'What happens to my old tyre?',
        answer:
          'We take it away and dispose of it through a licensed waste carrier, which is included in the price. It is illegal to fly-tip a tyre, and we keep the paperwork.',
      },
      {
        question: 'Do you fit tyres I have bought myself?',
        answer:
          'Yes, we are happy to fit customer-supplied tyres. Call us with the size and we will quote you for the fitting, balancing, valve and disposal.',
      },
    ],
    relatedBlog: ['how-to-read-tyre-size', 'how-to-check-tyre-tread-depth', 'winter-tyres-vs-all-season'],
  },

  {
    slug: 'puncture-repair',
    navLabel: 'Puncture Repair',
    h1: 'Mobile Puncture Repair in Oxford & Oxfordshire',
    metaTitle: 'Mobile Puncture Repair Oxford | BS AU 159 Repairs 24/7 | NN Mobile Tyres',
    metaDescription:
      'Mobile puncture repair across Oxford and Oxfordshire, 24/7. Every repair assessed against British Standard BS AU 159 — if it can be safely repaired we repair it, if it cannot we will tell you why. Call 07362 638978.',
    serviceType: 'Tyre puncture repair',
    icon: 'puncture',
    accent: 'blue',
    summary:
      'A proper internal repair to British Standard BS AU 159 where the damage allows it — and an honest answer where it does not.',
    image: {
      src: '/puncture-repair-1024.webp',
      width: 1024,
      height: 747,
      alt: 'Puncture repair being carried out on a car tyre at the roadside in Oxfordshire',
    },
    intro:
      'A nail in the tread does not have to mean a new tyre. We come to you anywhere in Oxford and Oxfordshire, take the wheel off, break the tyre down off the rim and inspect it from the inside — because that is the only way to know whether a puncture can legally and safely be repaired. If it can, you get a permanent repair. If it cannot, we will show you why and fit a replacement from the van.',
    included: [
      'On-site assessment of the puncture position and the tyre condition',
      'Tyre removed from the rim for a full internal inspection',
      'Permanent combination plug-and-patch repair from the inside, to BS AU 159',
      'New valve fitted as part of the repair',
      'Wheel rebalanced after the repair',
      'Reinflation to placard pressure and torque-wrench refitting',
      'A straight answer, with the tyre in front of you, if it is not repairable',
      'No call-out charge',
    ],
    steps: [
      {
        title: 'Do not drive on it',
        description:
          'Running a tyre flat or very low destroys the sidewall from the inside and turns a repairable puncture into a scrap tyre. If you can, stop and call us.',
      },
      {
        title: 'We locate the damage',
        description:
          'We find the object, mark the position and check whether it sits inside the repairable area of the tread.',
      },
      {
        title: 'Off the rim, inspected inside',
        description:
          'The tyre comes off the wheel so we can look at the inner liner. Damage you cannot see from the outside is what decides the answer.',
      },
      {
        title: 'Repair or replace',
        description:
          'A proper internal plug-and-patch, rebalanced and refitted — or a new tyre from the van if the standard says no.',
      },
    ],
    sections: [
      {
        heading: 'What BS AU 159 actually allows',
        paragraphs: [
          `${BS_AU_159} It exists because a badly placed repair can fail at motorway speed, and because an external string plug pushed in without removing the tyre tells you nothing about the state of the inside.`,
          'In broad terms, a car tyre may be repaired only when the injury sits within the central three quarters of the tread width — the "minor repair area" — and the hole is no larger than 6 mm in diameter. The tyre must be removed from the wheel and inspected internally, the repair must be made from the inside with a combination plug and patch that fills the injury and seals the liner, and repairs must not overlap each other.',
        ],
        bullets: [
          'Injury within the central three quarters of the tread — never the shoulder or sidewall',
          'Injury diameter no greater than 6 mm on a passenger car tyre',
          'Tyre demounted and inspected internally, every time',
          'Repaired from the inside with a combination plug and patch',
          'No overlapping repairs',
        ],
      },
      {
        heading: 'When a puncture cannot be repaired',
        paragraphs: [
          'This is the part most people want a straight answer on, so here it is. We will not repair, and no reputable fitter should, in any of the following cases.',
          'It is worth saying plainly: the most common reason a perfectly repairable nail becomes a new tyre is that the car was driven on it while flat. A few hundred metres at low speed is usually survivable. A few miles is not — the sidewall folds over on itself and the internal cords are destroyed even though the outside still looks fine. If you have a puncture, stop somewhere safe and call rather than trying to reach home.',
        ],
        bullets: [
          'Damage in the sidewall or shoulder, including kerbing cuts and bulges',
          'Any bulge, lump or egg — that is a broken cord, not a surface mark',
          'Evidence the tyre has been run flat or very underinflated (a grey or powdery inner liner, or folded cord lines)',
          'Exposed, damaged or corroded cords',
          'Tread already at or below the 1.6 mm legal limit',
          'A previous repair that was done badly, or that the new injury overlaps',
          'Perished, crazed or age-hardened rubber, or bead damage',
          'Most run-flat tyres, where the manufacturer prohibits repair',
        ],
      },
      {
        heading: 'Slow punctures, and the ones that are not punctures at all',
        paragraphs: [
          'If a tyre loses a few psi a week, it is worth finding out why rather than topping it up forever. A genuinely slow leak is often a small nail that has partly sealed itself, but a surprising share of "slow punctures" turn out to be nothing to do with the tread. Corrosion on the rim where the bead seats is very common on alloy wheels once they are a few years old, and a perished valve or a leaking TPMS sensor seal accounts for many of the rest.',
          'Because we take the tyre off the rim anyway, we find those. A bead leak is cleaned up and resealed; a tired valve is replaced as standard with every repair we do. Driving around persistently underinflated is not a small thing — it wears the shoulders of the tyre, raises fuel consumption, and significantly increases the chance of a blowout on a hot motorway run.',
        ],
      },
      {
        heading: 'What about the sealant in my boot?',
        paragraphs: [
          'Many cars now ship with a sealant canister and a compressor instead of a spare. They are a genuine get-you-home tool for a small tread puncture, and there is no shame in using one. Be aware of two things, though. Sealant is a temporary fix, usually rated for a limited distance and a reduced speed, and it is not a repair — the tyre still needs to come off and be assessed properly afterwards.',
          'Sealant also coats the inside of the tyre and, in many cars, the TPMS sensor. Tell us if you have used it so we can clean the liner properly before repairing and check the sensor. It does not automatically write the tyre off, but a liner full of gel cannot be patched until it is cleaned back to bare rubber.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does a puncture repair take?',
        answer:
          'Around 30 minutes on site once we arrive, including taking the wheel off, demounting the tyre, inspecting it internally, repairing, rebalancing and refitting.',
      },
      {
        question: 'Is a repaired tyre as safe as a new one?',
        answer:
          'A repair carried out within BS AU 159 — right position, right size of injury, internal plug and patch, tyre inspected inside — is a permanent repair and is safe for the remaining life of the tyre at its full speed rating. Repairs made outside the standard, including external string plugs, are not.',
      },
      {
        question: 'Can you repair a run-flat tyre?',
        answer:
          'Usually not. Most run-flat manufacturers prohibit repair, because once the tyre has supported the car on its reinforced sidewall there is no reliable way to see the internal damage. We will check the specific tyre and tell you what the maker says.',
      },
      {
        question: 'Can you repair a puncture in the sidewall?',
        answer:
          'No, and nobody should. The sidewall flexes constantly as the wheel turns, so a patch there will work loose and the cords in that area cannot be restored. A sidewall injury means a replacement tyre.',
      },
      {
        question: 'I drove a couple of miles on it. Is it ruined?',
        answer:
          'Possibly, but not certainly — it depends on speed, load and how flat it really was. We will not guess. We take the tyre off and look at the inner liner, and if the tell-tale grey dust or folded cord lines are there, we will show you before recommending a replacement.',
      },
      {
        question: 'Do you repair punctures at night?',
        answer:
          'Yes. We operate 24 hours a day, 365 days a year, including bank holidays, and there is no night surcharge call-out fee.',
      },
    ],
    relatedBlog: ['puncture-repair-vs-tyre-replacement', 'what-to-do-flat-tyre', 'can-you-drive-on-flat-tyre'],
  },

  {
    slug: 'locking-wheel-nut-removal',
    navLabel: 'Locking Wheel Nut Removal',
    h1: 'Locking Wheel Nut Removal in Oxford & Oxfordshire',
    metaTitle: 'Locking Wheel Nut Removal Oxford | Mobile, Non-Destructive | NN Mobile Tyres',
    metaDescription:
      'Lost or broken locking wheel nut key? We remove locking wheel nuts at your location across Oxford and Oxfordshire, 24/7, without damaging your alloys where possible. Call 07362 638978.',
    serviceType: 'Locking wheel nut removal',
    icon: 'key',
    accent: 'red',
    summary:
      'Key lost, snapped or rounded off? We extract the nut at your location and leave you with wheel nuts you can actually undo.',
    image: {
      src: '/locking-nut-1024.webp',
      width: 1024,
      height: 747,
      alt: 'Locking wheel nut being removed from an alloy wheel with an extraction socket',
    },
    intro:
      'A missing locking wheel nut key turns a ten-minute tyre change into a recovery job — unless someone comes to you with the right extraction tools. We remove locking wheel nuts at the roadside, on your driveway or at your workplace anywhere in Oxford and Oxfordshire, usually within 30 to 45 minutes, and we can fit the replacement nuts at the same visit so it never happens again.',
    included: [
      'Assessment of the nut type and the condition of the wheel',
      'Non-destructive extraction using dedicated reverse-spiral removal sockets wherever possible',
      'Removal of all affected locking nuts on the vehicle if you want them gone',
      'Replacement standard or locking nuts supplied and fitted on request',
      'Torque-wrench tightening to manufacturer specification',
      'Any tyre work you need doing while the wheel is off, in the same visit',
      'No call-out charge',
    ],
    steps: [
      {
        title: 'Tell us the car',
        description:
          'Make, model, year and — if you know it — the style of nut. A photo of the nut on WhatsApp saves time and tells us what to bring.',
      },
      {
        title: 'We bring the extraction set',
        description:
          'We carry a comprehensive set of removal sockets covering the common OEM and aftermarket patterns.',
      },
      {
        title: 'Extraction',
        description:
          'The socket bites into the nut and drives it off anticlockwise. Most nuts come off in a few minutes without touching the alloy.',
      },
      {
        title: 'New nuts fitted',
        description:
          'We replace what we removed with standard or fresh locking nuts, torqued correctly, and carry on with the tyre job if there is one.',
      },
    ],
    sections: [
      {
        heading: 'How non-destructive removal works',
        paragraphs: [
          'A locking wheel nut is a normal nut with a patterned face that only the matching key will grip. When the key is gone, the trick is not brute force — it is a removal socket with a hardened reverse spiral cut into its bore. Driven on hard, the spiral bites into the outer skirt of the locking nut and locks solid, and because the spiral runs the opposite way to the thread, turning it anticlockwise winds the nut straight off.',
          'On the great majority of cars this is a clean job that never touches the wheel. The nut itself is sacrificed — it has to be, because the socket grips by deforming it — which is why we always carry replacement nuts and fit them as part of the work.',
        ],
      },
      {
        heading: 'The awkward cases, and what we do about them',
        paragraphs: [
          'Not every nut is straightforward, and we would rather tell you that in advance than on your driveway. Three situations need a bit more care.',
          'Recessed nuts sit deep inside the wheel spoke, so a standard removal socket will not reach and the gap between nut and alloy is tight. Free-spinning nuts have a loose outer collar designed to defeat exactly this method — the collar just rotates when gripped, and the nut has to be dealt with differently. And badly rounded or seized nuts, usually the result of someone already having had a go with a hammered-on socket or an impact gun, may have lost the skirt the socket needs to bite.',
          'In those cases we will always try the non-destructive route first. Where it genuinely will not work, we will explain what the alternative involves and what the risk to the wheel is before we do anything, and you decide. We do not start cutting without telling you.',
        ],
        bullets: [
          'Recessed nuts deep in the spoke — we use extended-reach sockets',
          'Free-spinning collar nuts — the collar must be removed before the nut can be gripped',
          'Already-rounded or over-torqued nuts — assessed case by case, risks explained first',
          'Corroded and seized nuts — penetrating fluid and heat before force',
        ],
      },
      {
        heading: 'Why keys go missing in the first place',
        paragraphs: [
          'The single most common story we hear is that the car came back from a service or an MOT and the key was never put back in the boot. The second is that a previous owner never handed it over. The third is that the key sheared — the small plastic-collared keys supplied with many cars are not designed for an impact gun, and a tyre fitted by someone in a hurry with a rattle gun will wreck one.',
          'Once your nuts are off, it is worth deciding whether you want locking nuts at all. They deter opportunist alloy theft, which is a real risk on some models, but they also cause exactly this problem. If you do keep them, note the key code stamped on the key, photograph it, and keep the key somewhere fixed in the car rather than loose in the boot. And ask any fitter to undo locking nuts by hand, never with an impact gun.',
        ],
      },
      {
        heading: 'Getting the torque right afterwards',
        paragraphs: [
          'A wheel nut that is too loose can let the wheel work itself off; one that is too tight stretches the stud, distorts the brake disc and makes the nut impossible to remove next time — which is how a lot of rounded nuts start. Manufacturer figures for a typical car sit somewhere around 100 to 130 Nm, but it varies by model and we set it to the figure for yours.',
          'We torque every nut with a calibrated torque wrench, in a star pattern, and we will tell you to recheck them after 25 to 50 miles. That is standard advice after any wheel removal, not a sign anything is wrong.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will removing the nut damage my alloy wheel?',
        answer:
          'In most cases, no. The removal socket grips the locking nut itself, not the wheel. On recessed or free-spinning nuts there is more risk, and we will tell you what that risk is before we start rather than after.',
      },
      {
        question: 'Can you remove the nut if I am not there?',
        answer:
          'Yes, provided the car is somewhere we can safely work and you are contactable. Plenty of these jobs happen in a workplace car park while the owner is at their desk.',
      },
      {
        question: 'Do I get replacement nuts?',
        answer:
          'The locking nut is destroyed during extraction, so it always needs replacing. We carry standard and locking replacements and fit them on the spot — just tell us which you want.',
      },
      {
        question: 'How long does it take?',
        answer:
          'A straightforward nut is a matter of minutes. Allow around 20 to 30 minutes on site for the job including refitting and torquing, longer if all four wheels need doing or the nut is a difficult type.',
      },
      {
        question: 'My key is snapped in the nut. Can you still help?',
        answer:
          'Usually yes. We extract the broken key fragment first, then remove the nut in the normal way. Send us a photo on WhatsApp so we can see how much of the key is protruding.',
      },
      {
        question: 'Can you do this at the same time as fitting a tyre?',
        answer:
          'That is most of our locking nut work. The wheel has to come off either way, so we remove the nut, do the tyre, and fit new nuts in one visit.',
      },
    ],
    relatedBlog: ['lost-locking-wheel-nut-key', 'how-to-change-a-tyre'],
  },

  {
    slug: 'emergency-tyre-replacement',
    navLabel: 'Emergency Tyre Replacement',
    h1: '24/7 Emergency Tyre Replacement in Oxford & Oxfordshire',
    metaTitle: 'Emergency Tyre Replacement Oxford | 24/7 Roadside Callout | NN Mobile Tyres',
    metaDescription:
      'Blowout or destroyed tyre? 24/7 emergency mobile tyre replacement across Oxford, Oxfordshire and the A34, A40 and M40 corridors. Typically on site in 30-45 minutes. Call 07362 638978.',
    serviceType: 'Emergency mobile tyre replacement',
    icon: 'emergency',
    accent: 'red',
    summary:
      'Blowout, pothole damage or a shredded tyre at 2am — we carry stock, we work nights, and there is no call-out charge.',
    image: {
      src: '/service-van-1024.webp',
      width: 1024,
      height: 585,
      alt: 'NN Mobile Tyres service van attending an emergency roadside tyre replacement in Oxfordshire',
    },
    intro:
      'If a tyre has let go, you need someone who is actually awake and actually carries stock. We answer the phone at any hour, every day of the year, and we are typically with you in 30 to 45 minutes anywhere in Oxford and Oxfordshire — including the A34, the A40, the A44, the A420 and the M40 corridor. There is no call-out charge and no night surcharge for turning out.',
    included: [
      'Answered 24 hours a day, 365 days a year, including bank holidays',
      'Typical 30 to 45 minute response across Oxford and Oxfordshire',
      'Common tyre sizes carried in the van for same-visit replacement',
      'Full fitting, dynamic balancing, new valve and correct torque on site',
      'Old tyre removed and disposed of legally',
      'Card and cash payment taken at the roadside',
      'No call-out charge, day or night',
    ],
    steps: [
      {
        title: 'Get safe first',
        description:
          'Hazards on, out of the vehicle on the passenger side, and behind the barrier if you are on a fast road. The car matters much less than you do.',
      },
      {
        title: 'Call us',
        description:
          'Give us your location, the tyre size from the sidewall if you can reach it safely, and the make and model. We quote before we set off.',
      },
      {
        title: 'We come to you',
        description:
          'We arrive with the tyre, the machine and the balancer. If the size is unusual we tell you honestly how long sourcing it will take.',
      },
      {
        title: 'Back on the road',
        description:
          'Fitted, balanced, torqued and inflated. Most roadside replacements are done within 30 minutes of arrival.',
      },
    ],
    sections: [
      {
        heading: 'What to do while you wait',
        paragraphs: [
          'If you are on a motorway or a dual carriageway, this matters more than anything else on this page. Pull as far left as you can, put the hazards on, and get everyone out through the nearside doors and behind the safety barrier, up the bank, away from the traffic. Do not stand in front of or behind the vehicle, and do not attempt to change the wheel yourself on the hard shoulder — a surprising number of serious injuries happen exactly that way. Leave animals in the car unless it is unsafe to do so.',
          'On an ordinary road, get onto a verge, into a lay-by or into an entrance if you possibly can, and put a warning triangle out well back if it is safe to walk there. At night, a hi-vis makes a genuine difference to how early an approaching driver sees you.',
          'Then call us, and tell us exactly where you are. Marker posts on the motorway, a junction number, a pub name, a what3words reference — anything that lets us drive straight to you instead of hunting.',
        ],
      },
      {
        heading: 'Blowouts, potholes and kerbs',
        paragraphs: [
          'A blowout at speed is almost always the end of the tyre, and usually a sudden one. The common causes are running badly underinflated for a long period, which overheats and destroys the sidewall from the inside, an impact that has already broken cords weeks earlier, or simple age — rubber perishes whether or not the car is driven.',
          'Pothole damage is the Oxfordshire speciality, particularly on the rural B-roads after a hard winter. A sharp-edged hole hit at speed pinches the tyre between the rim and the edge, which cuts the inner liner and frequently buckles the alloy at the same time. The tell-tale is a bulge or an egg in the sidewall appearing a day or two later. That bulge is a broken cord bundle. It is not repairable, it is not cosmetic, and it can let go without warning — replace it.',
          'Kerbing tends to damage the shoulder and the bead area. Even where it looks superficial, a shoulder cut deep enough to reach the cords is outside the repairable area of the tyre, so it needs replacing rather than patching.',
        ],
      },
      {
        heading: 'Will you have my size?',
        paragraphs: [
          'We carry a working stock of the sizes that turn up most often on Oxfordshire roads — the common 15, 16 and 17 inch fitments that cover the bulk of family cars, hatchbacks and small vans. If your size is in the van, you are back on the road in one visit.',
          'Nobody carries everything, and we will not pretend otherwise. Larger and lower-profile fitments, unusual load ratings, van-specific sizes and run-flats sometimes need sourcing. When that happens we tell you straight away on the phone — how long it will take, and what the options are in the meantime. Depending on the car that might be fitting your spare or space-saver so you can get home tonight and doing the real tyre tomorrow.',
        ],
        bullets: [
          'Give us the full sidewall code, e.g. 205/55 R16 91V',
          'Tell us if the car has run-flats or TPMS sensors',
          'Tell us if it is a van — load ratings differ and matter legally',
          'Mention if the alloy also looks buckled, so we can advise',
        ],
      },
      {
        heading: 'Space-savers and the limits of your spare',
        paragraphs: [
          'If you have a space-saver and you can fit it safely where you are, it will get you off a dangerous road. Remember what it is, though: almost all are restricted to 50 mph and a limited distance, they change the handling and braking balance of the car noticeably, and on some vehicles driving any distance with a mismatched rolling radius is hard on the differential or the four-wheel-drive system.',
          'A space-saver is a way of reaching somewhere safe. It is not a tyre, and it should not still be on the car next week.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you really answer at 3am?',
        answer:
          'Yes. We operate 24 hours a day, 365 days a year, including Christmas and bank holidays. Night calls are a large part of what we do.',
      },
      {
        question: 'Is there a night or weekend surcharge for coming out?',
        answer:
          'There is no call-out charge at any hour. The time of night can affect the overall price of a job, and if it does we will say so on the phone before we travel — you will never be surprised on arrival.',
      },
      {
        question: 'Can you come out on the motorway?',
        answer:
          'We attend the M40 corridor and the fast A-roads, but only where we can work safely. Please get behind the barrier and call us. If the vehicle is in a genuinely unsafe position, the right first call is the police or National Highways to get it moved, and we will meet you at the safe location.',
      },
      {
        question: 'How do I pay at the roadside?',
        answer:
          'Cash or card. We take card payments on site, so you do not need to find a cash machine at midnight.',
      },
      {
        question: 'What if you do not have my tyre size in the van?',
        answer:
          'We will tell you on the phone, before we travel, rather than turning up and shrugging. We will give you a realistic time to source it and talk through what gets you moving in the meantime.',
      },
      {
        question: 'My alloy is buckled as well as the tyre. Can you help?',
        answer:
          'We can fit a new tyre and tell you whether the wheel is holding air and safe to drive on in the short term. Straightening or refurbishing a buckled alloy is a specialist workshop job, and we will say so rather than bodge it.',
      },
    ],
    relatedBlog: ['what-to-do-flat-tyre', 'can-you-drive-on-flat-tyre', 'run-flat-tyres-vs-regular-tyres'],
  },

  {
    slug: 'jump-start',
    navLabel: 'Mobile Jump Start',
    h1: 'Mobile Jump Start & Flat Battery Help in Oxford & Oxfordshire',
    metaTitle: 'Mobile Jump Start Oxford | 24/7 Flat Battery Callout | NN Mobile Tyres',
    metaDescription:
      'Flat battery in Oxford or Oxfordshire? 24/7 mobile jump start service, typically on site in 30-45 minutes. We get you started and tell you honestly whether the battery will last. Call 07362 638978.',
    serviceType: 'Mobile vehicle jump start',
    icon: 'battery',
    accent: 'blue',
    summary:
      'Car will not turn over? We come to you, start it properly, and tell you whether it is the battery or something else.',
    image: {
      src: '/jump-start-1024.webp',
      width: 1024,
      height: 747,
      alt: 'Mobile jump start being carried out on a car with a flat battery in Oxfordshire',
    },
    intro:
      'A flat battery on a cold morning does not need a recovery truck. We come to you anywhere in Oxford and Oxfordshire, usually within 30 to 45 minutes, and get the car running with professional jump start equipment rather than a set of dubious clamps. Just as importantly, we tell you honestly whether the battery will get you through next week or whether it is finished.',
    included: [
      'Jump start using professional-grade equipment, safe for modern electronics',
      'A check of the battery terminals and earth connections for corrosion and looseness',
      'An honest assessment of whether the battery is likely to hold a charge',
      'Advice on whether the fault looks like the battery, the alternator or a parasitic drain',
      'Guidance on the drive needed to put real charge back in',
      '24/7 availability, 365 days a year',
      'No call-out charge',
    ],
    steps: [
      {
        title: 'Call us with the car details',
        description:
          'Make, model, engine size and whether it is petrol, diesel, hybrid or stop-start. It changes the kit we use.',
      },
      {
        title: 'We connect properly',
        description:
          'Correct polarity, correct earth point, and equipment rated for modern vehicle electronics. Getting this wrong is an expensive mistake on a modern car.',
      },
      {
        title: 'Start and assess',
        description:
          'Once it is running we look at how it behaves — that is what tells us whether the battery is merely flat or actually dead.',
      },
      {
        title: 'You get a straight answer',
        description:
          'Drive it and it will be fine, or replace the battery soon, or this is not a battery problem at all.',
      },
    ],
    sections: [
      {
        heading: 'Flat, or dead?',
        paragraphs: [
          'These are different problems with different answers, and it is worth knowing which you have before you spend money. A flat battery has simply been discharged — interior light left on, a door not shut properly, a few weeks standing still, or a run of short cold journeys that never let the alternator catch up. Charge it properly and it is fine.',
          'A dead battery has lost its capacity and will not hold charge no matter what you do. Most car batteries last somewhere between three and five years, and the failure is usually sudden from the driver\'s point of view even though it has been coming for months. The classic signs are a car that cranks slowly for a few mornings, needs a couple of tries when cold, or goes flat again within days of a jump.',
          'Cold weather exposes both. A battery loses a significant share of its available cranking power near freezing, while a cold engine needs more to turn over — which is why so many batteries die on the first genuinely cold morning of the year rather than gradually in October.',
        ],
      },
      {
        heading: 'When it is not the battery',
        paragraphs: [
          'Sometimes the battery is the symptom rather than the cause, and we will tell you when it looks that way. A failing alternator will not replace the charge the starter used, so the car starts off a jump, runs while it is running, and is flat again tomorrow. The battery warning light staying on with the engine running, dimming headlights at idle or a whine that rises with revs all point that way.',
          'A parasitic drain is something staying awake after you lock the car — an aftermarket dashcam wired into a permanent live, a failing module that will not go to sleep, a boot or glovebox light that never switches off. The signature is a car that is flat after two or three days standing, repeatedly, with a battery that tests fine.',
          'And a few "flat batteries" are not electrical at all. If the dashboard lights up brightly, the starter clicks once or does nothing, and nothing changes when we jump it, you are usually looking at a starter motor, an immobiliser or a security fault instead.',
        ],
        bullets: [
          'Flat again within a day of a jump — suspect the alternator',
          'Flat after a few days standing, repeatedly — suspect a parasitic drain',
          'Bright dash but a single click — suspect the starter or immobiliser',
          'Slow cranking on cold mornings for weeks — the battery is on its way out',
        ],
      },
      {
        heading: 'After a jump start: do this',
        paragraphs: [
          'The most common mistake is jumping the car, driving three miles to work and being surprised it is flat again at five o\'clock. Starting the engine takes a lot out of a battery and idling barely replaces it. Give the car a decent continuous run — roughly 30 minutes or more at road speed, not stop-start town driving — so the alternator can put meaningful charge back.',
          'Better still, if the car will be standing or does mostly short journeys, use a mains battery charger or a smart trickle charger overnight. That does something a 20 minute drive genuinely cannot.',
          'Be aware too that some cars need a little attention afterwards: stop-start systems may stay disabled until the battery management system relearns the state of charge, and on some models the radio, windows or sunroof need resetting after a power interruption.',
        ],
      },
      {
        heading: 'What this service is, and is not',
        paragraphs: [
          'To be clear about scope, because it saves everyone a wasted journey. This is a mobile jump start and battery assessment service. We get vehicles running, we check and clean up terminal and earth connections, and we give you a considered opinion about what is actually wrong.',
          'We are not a recovery operator and we do not carry out electrical diagnostics or alternator and starter replacement. If the fault turns out to be one of those, we will say so plainly and point you at what you actually need rather than jumping the car repeatedly and taking your money.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is jump starting safe on a modern car?',
        answer:
          'With the right equipment and correct connection, yes. The risk with amateur jump leads is a voltage spike or a reverse-polarity connection damaging control modules, which is a genuinely expensive repair. We use equipment intended for modern vehicle electronics.',
      },
      {
        question: 'Can you jump start a diesel or a van?',
        answer:
          'Yes. Diesels need considerably more cranking current than petrol engines, particularly when cold, and our equipment is sized for that. Tell us the engine size when you call.',
      },
      {
        question: 'Can you jump start a hybrid or an electric car?',
        answer:
          'We can jump the 12 volt auxiliary battery in most hybrids, which is what typically fails and leaves the car apparently dead. We do not work on high voltage traction battery systems — that is a franchised dealer or EV specialist job.',
      },
      {
        question: 'Do you supply and fit a new battery?',
        answer:
          'Where we can source the correct battery for your vehicle we can often supply and fit it. Give us the make, model and year when you call and we will tell you straight away whether we can do it on this visit.',
      },
      {
        question: 'How long will you be?',
        answer:
          'Typically 30 to 45 minutes to reach you across Oxford and Oxfordshire, and usually only a few minutes on site once we are there.',
      },
      {
        question: 'The car went flat again the next day. What now?',
        answer:
          'That is diagnostic information, not bad luck. It almost always means the battery will no longer hold charge or the alternator is not charging it. Call us back and we will talk through which of the two it looks like.',
      },
    ],
    relatedBlog: ['how-often-check-tyre-pressure'],
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find(service => service.slug === slug);
}
