export interface LocationArea {
  name: string;
  slug: string;
  hub: string;
  isHub: boolean;
  description: string;
  nearbyAreas: string[];
  postcode: string;
  responseTime: string;
  lat: number;
  lng: number;
  longDescription?: string[];
  localFaqs?: { question: string; answer: string }[];
  coverageHighlights?: string[];
  localContext?: string;
}

export const locations: LocationArea[] = [
  // ==================== HUBS ====================
  {
    name: 'Oxford',
    slug: 'oxford',
    hub: 'Oxford',
    isHub: true,
    description: 'Our home base in Oxford means we can reach you fast, whether you are stuck on the Headington roundabout, parked near the Westgate Centre, or stranded on the Botley Road. With the city\'s mix of narrow college streets and busy ring roads, a flat tyre can cause chaos — we get to you in minutes.',
    nearbyAreas: ['Headington', 'Cowley', 'Summertown', 'Botley', 'Kidlington'],
    postcode: 'OX1',
    responseTime: '15-25 minutes',
    lat: 51.7520,
    lng: -1.2577,
    longDescription: [
      'Oxford is our home city, which is why no other area gets a faster response from us. We know the place inside out — from the controlled-parking residential streets of East Oxford and Jericho, where kerbed alloys and slow punctures are a daily occurrence, to the constant stop-start traffic of the ring road that flings up debris and catches drivers out at speed.',
      'Because the city centre is largely pedestrianised and hemmed in by narrow college lanes and the low Botley Road railway bridge, getting a stricken car to a garage can be a real headache. That is exactly the problem we solve: our fully-stocked van comes to wherever you are parked, whether that is a residents’ bay off the Cowley Road, a workplace car park out at the Oxford Business Park, or one of the city’s Park & Ride sites. We fit premium tyres from Michelin, Continental, Pirelli and Bridgestone, repair punctures to British Standard BS AU 159 where they are safe to fix, free off seized locking wheel nuts and jump-start flat batteries — all without you needing to move the car.',
      'We cover the whole of Oxford and its suburbs around the clock, 365 days a year. With a typical arrival time of 15-25 minutes across the city, a flat tyre in Oxford rarely means more than a short wait.'
    ],
    coverageHighlights: [
      'Westgate Centre and the city centre',
      'Cowley Road and East Oxford',
      'Botley Road and the railway station',
      'Headington and the John Radcliffe',
      'Summertown and the Banbury Road',
      'Jericho and Walton Street',
      'the A34/A40 ring road',
      'the A4142 Eastern Bypass',
      'Oxford Business Park, Cowley',
      'the Pear Tree, Thornhill, Seacourt and Redbridge Park & Ride sites'
    ],
    localContext: 'The A34 ring road and the Eastern Bypass throw up a steady stream of debris punctures at speed, while the tight controlled-parking streets of Jericho and East Oxford make kerbed alloys one of our most common city callouts.',
    localFaqs: [
      {
        question: 'Can you fit tyres in Oxford city centre and its controlled parking zones?',
        answer: 'Yes. We regularly work at residents’ parking bays, college and workplace car parks, and on-street spaces across central Oxford, Jericho and East Oxford. Because the centre is pedestrianised, just send us the exact postcode or what3words and we’ll come to wherever the car is legally parked.'
      },
      {
        question: 'Do you cover Oxford’s Park & Ride car parks?',
        answer: 'We do — including Pear Tree, Thornhill, Seacourt and Redbridge. If you’ve returned to your car to find a flat at a Park & Ride, call us on 07362 638978 and we’ll fit a replacement on site so you can carry on with your day.'
      }
    ]
  },
  {
    name: 'Abingdon',
    slug: 'abingdon',
    hub: 'Abingdon',
    isHub: true,
    description: 'Abingdon-on-Thames sits just south of Oxford along the A34, and we cover the whole town from Ock Street to the Abingdon bypass. Whether you are near the historic Market Place or stuck in the Peachcroft estate, our van is stocked and ready to reach you quickly.',
    nearbyAreas: ['Drayton', 'Sutton Courtenay', 'Radley', 'Marcham', 'Kennington'],
    postcode: 'OX14',
    responseTime: '20-30 minutes',
    lat: 51.6710,
    lng: -1.2794,
    longDescription: [
      'Abingdon-on-Thames claims to be one of England’s oldest continuously inhabited towns, and its mix of narrow medieval streets around the Market Place and County Hall and fast modern roads keeps us busy. The town threads onto the A34 at the Marcham interchange just to the west, so plenty of our Abingdon callouts are commuters who have picked up motorway debris and limped into town on a deflating tyre.',
      'We cover the whole of Abingdon, from the older terraces off Ock Street to the large Peachcroft and Caldecott estates, as well as the trading estates and the busy A415 bypass that loops the town. Tight parking around the historic centre means a fair share of kerbed alloys, while the surrounding rural lanes toward Drayton, Radley and Sutton Courtenay are a common source of punctures from hedge-cutting and potholes. Whatever the cause, our van arrives stocked with branded tyres and the kit to repair punctures to BS AU 159, remove stubborn locking wheel nuts and jump-start a flat battery on the spot.',
      'Just south of Oxford and an easy run down the A34, Abingdon gets a typical 20-30 minute response from us, day or night, all year round.'
    ],
    coverageHighlights: [
      'Market Place and County Hall',
      'Ock Street and the town centre',
      'the A415 Abingdon bypass',
      'the A34 Marcham interchange',
      'Peachcroft estate',
      'Caldecott and the Drayton Road area',
      'Abingdon Business Park and trading estates',
      'the lanes out to Radley and Sutton Courtenay'
    ],
    localContext: 'The A34 Marcham interchange feeds a lot of high-speed debris damage into Abingdon, while the lanes toward Drayton and Radley regularly leave drivers with potholed or hedge-trimming punctures.',
    localFaqs: [
      {
        question: 'Do you cover the villages around Abingdon as well as the town?',
        answer: 'Yes. As well as Abingdon itself we regularly fit tyres in Drayton, Sutton Courtenay, Radley, Marcham and Kennington. If you’re on one of the lanes between these villages and pick up a puncture, we’ll come to you rather than you risking driving on it.'
      },
      {
        question: 'I’ve had a blowout on the A34 near Abingdon — can you help?',
        answer: 'We do attend A34 incidents near the Marcham and Milton interchanges, provided you can stop somewhere safe. For live-lane motorway-style breakdowns always get everyone behind a barrier first, then call us with your location and direction of travel.'
      }
    ]
  },
  {
    name: 'Banbury',
    slug: 'banbury',
    hub: 'Banbury',
    isHub: true,
    description: 'Banbury sits at the junction of the M40 and A422, making it a busy crossroads for commuters and lorries alike. From the famous Banbury Cross to the Castle Quay shopping centre, we provide fast mobile tyre fitting across the whole town and its surrounding villages.',
    nearbyAreas: ['Bodicote', 'Adderbury', 'Bloxham', 'Kings Sutton', 'Deddington'],
    postcode: 'OX16',
    responseTime: '35-50 minutes',
    lat: 52.0629,
    lng: -1.3408,
    longDescription: [
      'Banbury sits right on Junction 11 of the M40, which makes it one of the busiest crossroads in the north of the county and a frequent source of high-speed tyre damage. Lorries, commuters and shoppers all converge here, and a blowout on the motorway slip roads or the A422 ring road can bring things to a standstill. We attend the whole of Banbury, from the famous Banbury Cross and the Castle Quay shopping centre out to the residential edges of Bretch Hill, Easington and Grimsbury.',
      'The town’s industrial estates off the Southam Road keep plenty of vans and fleet vehicles on the move, and we handle a steady stream of work tyres alongside everyday family cars. Our van carries premium brands including Michelin, Continental, Pirelli and Bridgestone, and we repair eligible punctures to British Standard BS AU 159, free off seized locking wheel nuts and provide jump starts — all wherever you’re parked, whether that’s a driveway in Bodicote or a layby on the A361.',
      'Banbury is toward the northern limit of our patch, so we quote a realistic 35-50 minute response, but our direct M40 and A4260 routes from Oxford keep that as tight as the distance allows.'
    ],
    coverageHighlights: [
      'Banbury Cross and the town centre',
      'Castle Quay shopping centre',
      'M40 Junction 11',
      'the A422 ring road',
      'Southam Road industrial estates',
      'Grimsbury and Easington',
      'Bretch Hill',
      'the A361 toward Bloxham',
      'Banbury railway station'
    ],
    localContext: 'M40 Junction 11 and the A422 ring road generate a lot of high-speed blowouts and sidewall damage, while heavy fleet and HGV traffic around the Southam Road estates means commercial tyre wear is a constant in Banbury.',
    localFaqs: [
      {
        question: 'Can you fit van and fleet tyres in Banbury’s industrial estates?',
        answer: 'Yes. We regularly attend the Southam Road estates for vans and light commercials, and carry common commercial sizes. Call with your tyre size and we’ll confirm stock before we set off.'
      },
      {
        question: 'How long will you really take to reach Banbury?',
        answer: 'Banbury is near the northern edge of our coverage, so we’re honest about a 35-50 minute arrival depending on traffic on the M40 and A4260. If it’s a planned fitting rather than an emergency we can also book a set time that suits you.'
      }
    ]
  },
  {
    name: 'Bicester',
    slug: 'bicester',
    hub: 'Bicester',
    isHub: true,
    description: 'Bicester is one of Oxfordshire\'s fastest-growing towns, and with Bicester Village drawing thousands of shoppers daily, tyre troubles are common on the surrounding roads. We cover everything from the A41 junction to the new Kingsmere development and the Bicester Avenue retail park.',
    nearbyAreas: ['Ambrosden', 'Launton', 'Chesterton', 'Kingsmere', 'Bicester Village'],
    postcode: 'OX26',
    responseTime: '25-40 minutes',
    lat: 51.9003,
    lng: -1.1536,
    longDescription: [
      'Bicester is one of the fastest-growing towns in Oxfordshire, and the sheer volume of traffic drawn in by Bicester Village outlet shopping means tyre trouble on the surrounding roads is a near-daily event for us. Weekend queues on the A41 and around the Pingle Drive approach to the village leave plenty of drivers nursing kerb damage or slow punctures, and we’re often called to the retail and station car parks to fit a replacement before someone heads home.',
      'Beyond the shopping crowds, Bicester is a town of large new developments — Kingsmere and Graven Hill among them — with smooth estate roads but plenty of construction traffic, alongside the older centre around Sheep Street and Market Square. We cover all of it, plus the Bicester Avenue garden and retail park and the junctions onto the M40 at J9 and J10. Our van carries branded tyres and the equipment to repair punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries, so most problems are solved without the car leaving the car park.',
      'With good road links out from Oxford, we typically reach Bicester in 25-40 minutes, any time of day or night.'
    ],
    coverageHighlights: [
      'Bicester Village outlet shopping',
      'Bicester Avenue retail park',
      'the A41 and Pingle Drive',
      'Kingsmere development',
      'Graven Hill',
      'Sheep Street and Market Square',
      'Bicester North and Bicester Village stations',
      'M40 Junctions 9 and 10',
      'London Road and Launton Road'
    ],
    localContext: 'Weekend congestion around Bicester Village and the A41 leaves a lot of drivers with kerbed alloys and slow punctures, while construction traffic on the Kingsmere and Graven Hill estates adds its own crop of nails and screws to the roads.',
    localFaqs: [
      {
        question: 'Can you fit a tyre at Bicester Village or the retail park car parks?',
        answer: 'Yes — we’re regularly called to the Bicester Village, Pingle Drive and Bicester Avenue car parks to fit a tyre while customers finish shopping. Just give us the car park, the bay area and your tyre size.'
      },
      {
        question: 'Do you cover the new Kingsmere and Graven Hill estates?',
        answer: 'We do. These newer developments are well within our Bicester coverage, and we’ll come to your driveway or kerbside — handy when a construction-site nail has left you with a flat overnight.'
      }
    ]
  },
  {
    name: 'Witney',
    slug: 'witney',
    hub: 'Witney',
    isHub: true,
    description: 'Witney\'s position on the A40 west of Oxford makes it a regular stop for our mobile tyre van. From the Woolgate Centre to the Witney Lake and Country Park area, we handle everything from emergency puncture repairs on the Ducklington Lane roundabout to pre-booked fittings at your home.',
    nearbyAreas: ['Ducklington', 'Cogges', 'Eynsham', 'Minster Lovell', 'Carterton'],
    postcode: 'OX28',
    responseTime: '25-40 minutes',
    lat: 51.7865,
    lng: -1.4865,
    longDescription: [
      'Witney straddles the A40 to the west of Oxford, and that road is the single biggest reason we’re in the town so often. The stretch between the Witney junctions and the Eynsham bottleneck carries heavy commuter traffic, and the Ducklington Lane roundabout in particular sees its share of rushed lane changes and kerb strikes. We’re regularly called to fit a fresh tyre for someone who has limped off the A40 into one of the town’s car parks.',
      'The town itself blends the historic Market Square and the old blanket-weaving streets around Newland with modern shopping at Marriotts Walk and the Woolgate Centre, plus the large residential expanse of the Leys and Cogges. Out toward the industrial units off the Burford Road we handle plenty of van and fleet work too. Whatever you drive, our van comes to you stocked with Michelin, Continental, Pirelli and Bridgestone, ready to repair eligible punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries on site.',
      'Witney sits a comfortable run down the A40 from Oxford, so we usually arrive within 25-40 minutes, 24 hours a day.'
    ],
    coverageHighlights: [
      'Market Square and Newland',
      'Marriotts Walk and the Woolgate Centre',
      'the A40 Witney junctions',
      'Ducklington Lane roundabout',
      'the Leys and Cogges',
      'Burford Road industrial estate',
      'Witney Lake and Country Park',
      'Welch Way and the town-centre car parks'
    ],
    localContext: 'The A40 and the busy Ducklington Lane roundabout are behind many of our Witney callouts — fast commuter traffic and tight lane changes mean kerbed alloys and sidewall damage are common here.',
    localFaqs: [
      {
        question: 'I’ve come off the A40 with a flat near Witney — where can you meet me?',
        answer: 'We can fit a replacement in any of Witney’s town-centre car parks, such as Woolgate or Marriotts Walk, or on your driveway. If you’re still on the A40 itself, find a safe place to pull well clear of the carriageway first, then call us with your location.'
      },
      {
        question: 'Do you cover Carterton and the villages west of Witney?',
        answer: 'Yes. Carterton, Minster Lovell, Ducklington and Eynsham all fall within our Witney coverage. Rural lanes around here are a frequent puncture source, so we’d rather come to you than have you drive on a damaged tyre.'
      }
    ]
  },
  {
    name: 'Didcot',
    slug: 'didcot',
    hub: 'Didcot',
    isHub: true,
    description: 'Didcot\'s rapid growth and proximity to the A34 means plenty of tyre emergencies. Whether you are near Didcot Parkway station, the Orchard Centre, or one of the new housing estates off the perimeter road, we can reach you within 30 minutes from our Oxford base.',
    nearbyAreas: ['Harwell', 'East Hagbourne', 'Blewbury', 'Chilton', 'Wallingford'],
    postcode: 'OX11',
    responseTime: '25-40 minutes',
    lat: 51.6069,
    lng: -1.2415,
    longDescription: [
      'Didcot has grown rapidly around its railway and the science and business parks nearby, and with the A34 running right past on its western side, tyre emergencies here are common. The Milton interchange in particular is a frequent spot for high-speed debris damage as traffic peels off the dual carriageway toward the town. We attend the whole of Didcot, from the Orchard Centre and Broadway in the middle of town to the sprawling Great Western Park and Ladygrove estates.',
      'Didcot Parkway is a major commuter hub, and we’re often called to its car parks to fit a tyre for someone who has returned from London to find a flat. Out at Milton Park, one of the area’s biggest employment sites, we handle a steady flow of company-car and van work. Our fully-equipped van carries premium branded tyres and the tools to repair eligible punctures to BS AU 159, free off seized locking wheel nuts and jump-start a dead battery — wherever the car happens to be.',
      'An easy run from Oxford down the A34, Didcot gets a typical 25-40 minute response from us at any hour.'
    ],
    coverageHighlights: [
      'Orchard Centre and Broadway',
      'Didcot Parkway station car parks',
      'the A34 Milton interchange',
      'Milton Park business park',
      'Great Western Park',
      'Ladygrove estate',
      'the perimeter and station roads',
      'the road toward Harwell and Chilton'
    ],
    localContext: 'The A34 Milton interchange feeds plenty of high-speed punctures and blowouts into Didcot, while commuters returning to Didcot Parkway frequently discover a flat tyre after a day away in London.',
    localFaqs: [
      {
        question: 'Can you fit a tyre at Didcot Parkway station?',
        answer: 'Yes — the Parkway car parks are one of our regular Didcot callouts. If you’ve come back from a trip to find a flat, send us the car park and bay area along with your tyre size and we’ll fit a replacement so you can drive home.'
      },
      {
        question: 'Do you cover Milton Park and the surrounding business parks?',
        answer: 'We do. Milton Park, Harwell Campus and the Didcot trading estates are all within our coverage, and we’re happy to attend workplace car parks for both company cars and fleet vans.'
      }
    ]
  },
  {
    name: 'Wantage',
    slug: 'wantage',
    hub: 'Wantage',
    isHub: true,
    description: 'Nestled beneath the Ridgeway and White Horse Hill, Wantage is a market town with a strong commuter community heading toward Oxford and Didcot. We cover the town centre around the Market Place, the Grove industrial estate, and all roads leading to the A417 and A338.',
    nearbyAreas: ['Grove', 'East Hanney', 'Ardington', 'Letcombe Regis', 'Harwell Campus'],
    postcode: 'OX12',
    responseTime: '30-45 minutes',
    lat: 51.5880,
    lng: -1.4254,
    longDescription: [
      'Wantage sits in the Vale of White Horse beneath the ancient Ridgeway, and although it’s a handsome market town centred on the King Alfred statue in the Market Place, the roads around it can be hard on tyres. The lanes climbing toward White Horse Hill and the Ridgeway are narrow, flinty and pothole-prone, while the A417 and A338 carry fast commuter traffic toward Didcot, Oxford and the M4. A surprising number of our Wantage callouts are sharp-stone or pothole punctures picked up on these rural routes.',
      'We cover the whole town and its near-neighbour Grove, including the large Grove industrial and trading estates and the growing housing on the northern edge. Parking is tight around the cobbled Market Place, so kerbed alloys are a regular job too. Our van arrives stocked with Michelin, Continental, Pirelli and Bridgestone, and we repair eligible punctures to BS AU 159, remove locking wheel nuts without damaging your alloys and jump-start flat batteries on the spot.',
      'Wantage is a fair distance south-west of our Oxford base, so we quote an honest 30-45 minute response, available 24 hours a day, every day of the year.'
    ],
    coverageHighlights: [
      'Market Place and the King Alfred statue',
      'Grove and the Grove industrial estate',
      'the A417 toward Didcot',
      'the A338 toward Oxford',
      'Manor Road and Charlton',
      'the lanes up to the Ridgeway and White Horse Hill',
      'Letcombe Regis and the southern villages'
    ],
    localContext: 'The flinty, pothole-prone lanes climbing toward the Ridgeway and White Horse Hill are a frequent cause of sharp-stone and sidewall punctures around Wantage, while fast A417 and A338 commuter traffic adds its own share of damage.',
    localFaqs: [
      {
        question: 'Do you cover Grove as well as Wantage?',
        answer: 'Yes — Grove sits right next to Wantage and is fully within our coverage, including the Grove industrial estate and the newer housing on the north side. We treat the two as a single area for response times.'
      },
      {
        question: 'I’ve hit a pothole on a lane near the Ridgeway and have a flat — can you reach me?',
        answer: 'We can. The rural lanes around Letcombe, Charlton and the downs are a common source of pothole damage. Pull into a safe field gateway or verge, share your location, and we’ll come out to fit or repair on site.'
      }
    ]
  },
  {
    name: 'Kidlington',
    slug: 'kidlington',
    hub: 'Kidlington',
    isHub: true,
    description: 'Kidlington sits just north of Oxford along the A4260, close to London Oxford Airport and the A34 interchange. Whether you are on the High Street, near the Sainsbury\'s roundabout, or stuck at Peartree, we can be with you in under 20 minutes from central Oxford.',
    nearbyAreas: ['Yarnton', 'Begbroke', 'Bletchingdon', 'Islip', 'Woodstock'],
    postcode: 'OX5',
    responseTime: '20-30 minutes',
    lat: 51.8225,
    lng: -1.2900,
    longDescription: [
      'Kidlington likes to call itself one of the largest villages in England, and sitting just north of Oxford on the A4260 it gets one of our quickest response times outside the city itself. The Sainsbury’s roundabout and the A34 interchange at the southern end are busy pinch points, and the Langford Lane business area around London Oxford Airport keeps plenty of commercial and fleet traffic moving — all of which generates a steady flow of tyre work for us.',
      'We cover the whole of Kidlington, from the High Street and Mill Street shops to the residential streets off the Banbury Road and the Gosford and Garden City areas, as well as the Oxford Parkway station and Water Eaton Park & Ride on the edge of the village. Whether you’ve kerbed an alloy in a tight car park or picked up a nail on Langford Lane, our van comes to you stocked with branded tyres and ready to repair punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries.',
      'Just a short hop up the A4260 or A34 from our base, Kidlington usually sees us within 20-30 minutes, day or night.'
    ],
    coverageHighlights: [
      'High Street and Mill Street',
      'the Sainsbury’s roundabout',
      'the A34 Kidlington interchange',
      'Langford Lane and London Oxford Airport',
      'Oxford Parkway and Water Eaton Park & Ride',
      'Gosford and Garden City',
      'Begbroke Science Park',
      'the A4260 Banbury Road'
    ],
    localContext: 'The A34 interchange and the busy Sainsbury’s roundabout are common spots for debris punctures around Kidlington, while the Langford Lane business area and airport bring a steady stream of fleet and commercial tyre work.',
    localFaqs: [
      {
        question: 'Can you fit a tyre at Oxford Parkway or the Water Eaton Park & Ride?',
        answer: 'Yes. Both sit on the edge of Kidlington and are regular callouts for us — ideal if you’ve returned from a trip to London to find a flat. Send us the car park and your tyre size and we’ll come to the bay.'
      },
      {
        question: 'Do you cover the Langford Lane and airport business area?',
        answer: 'We do. The Langford Lane estates and London Oxford Airport fall well within our Kidlington coverage, and we handle both company cars and light commercial vans there.'
      }
    ]
  },
  {
    name: 'Thame',
    slug: 'thame',
    hub: 'Thame',
    isHub: true,
    description: 'Thame is a picturesque market town east of Oxford near the Buckinghamshire border, well connected via the A418 and A329. We regularly serve customers around the High Street, the cattle market area, and the Thame Park Road estates. Our response times are excellent thanks to the direct route from Oxford.',
    nearbyAreas: ['Chinnor', 'Long Crendon', 'Haddenham', 'Wheatley', 'Tetsworth'],
    postcode: 'OX9',
    responseTime: '25-40 minutes',
    lat: 51.7494,
    lng: -0.9791,
    longDescription: [
      'Thame is a classic Oxfordshire market town right on the Buckinghamshire border, with one of the widest historic high streets in the country and a busy weekly market and cattle auction. That broad High Street, with its angled parking, accounts for plenty of the kerbed alloys we’re called out to, while the A418 and A329 either side of town carry fast commuter traffic toward Oxford, Aylesbury and the M40 at Junction 7.',
      'We cover all of Thame, from the centre and the Southern Road and Thame Park Road estates to the industrial units on the edge of town, and out to neighbouring villages like Haddenham, Long Crendon and Chinnor. The country lanes around here, hemmed in by hedges that are cut hard each year, are a reliable source of thorn and flint punctures. Our van arrives with premium tyres and the kit to repair eligible punctures to BS AU 159, free off seized locking wheel nuts and jump-start a flat battery wherever you’ve stopped.',
      'Thanks to the direct A418 route from Oxford, Thame usually sees us within 25-40 minutes, around the clock.'
    ],
    coverageHighlights: [
      'the High Street and market square',
      'the cattle market',
      'Thame Park Road and Southern Road',
      'the A418 toward Oxford',
      'the A329 and M40 Junction 7',
      'the industrial estate',
      'Haddenham and Long Crendon',
      'the Chinnor Road'
    ],
    localContext: 'Thame’s wide, angle-parked High Street is a frequent source of kerbed alloys, while the hard-cut hedgerow lanes toward Haddenham, Long Crendon and Chinnor regularly leave drivers with thorn and flint punctures.',
    localFaqs: [
      {
        question: 'Do you cover the villages around Thame?',
        answer: 'Yes — Chinnor, Long Crendon, Haddenham, Tetsworth and Wheatley are all within our Thame coverage. The lanes between them are a common puncture spot, so we’ll always come to you rather than have you drive on a damaged tyre.'
      },
      {
        question: 'Can you reach the M40 at Junction 7 near Thame?',
        answer: 'We do attend incidents near Junction 7, provided you can get the car to a safe stopping point off the live carriageway. For a flat picked up on the slip road or in nearby Wheatley, just call with your exact location.'
      }
    ]
  },
  {
    name: 'Wallingford',
    slug: 'wallingford',
    hub: 'Wallingford',
    isHub: true,
    description: 'The historic Thames-side town of Wallingford is reached easily via the A4130 from Didcot or the A4074 from Oxford. From the castle ruins to the Hithercroft industrial estate, we provide mobile tyre fitting across the whole town including the busy Wallingford bypass.',
    nearbyAreas: ['Cholsey', 'Benson', 'Crowmarsh Gifford', 'Dorchester-on-Thames', 'Berinsfield'],
    postcode: 'OX10',
    responseTime: '30-45 minutes',
    lat: 51.5990,
    lng: -1.1245,
    longDescription: [
      'Wallingford is a historic Thames-side town with a compact medieval centre and one of the most attractive market places in the county, but its single ancient bridge over the river and the narrow streets around it can make a breakdown genuinely awkward. We come to you, so there’s no need to nurse a flat across the bridge or up to a garage — we’ll fit at the kerbside, in the Market Place car parks, or on your driveway.',
      'The town is reached via the A4130 from Didcot and the A4074 from Oxford, both fast roads that contribute their share of high-speed punctures, and the Wallingford bypass loops traffic around the eastern edge. We also cover the Hithercroft industrial estate, where there’s plenty of van and fleet work, and the surrounding villages of Cholsey, Crowmarsh Gifford and Benson. Our van carries Michelin, Continental, Pirelli and Bridgestone, and we repair eligible punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries on site.',
      'Sitting toward the south-eastern edge of our patch, Wallingford gets an honest 30-45 minute response from us, every day of the year.'
    ],
    coverageHighlights: [
      'the Market Place and town centre',
      'the Wallingford bypass',
      'the A4130 toward Didcot',
      'the A4074 toward Oxford',
      'Hithercroft industrial estate',
      'the Thames bridge area',
      'Crowmarsh Gifford and Benson',
      'Cholsey'
    ],
    localContext: 'Wallingford’s narrow medieval streets and single Thames bridge make moving a stricken car difficult, while the fast A4074 and A4130 approaches contribute a regular crop of high-speed punctures.',
    localFaqs: [
      {
        question: 'Can you fit a tyre in Wallingford town centre near the bridge?',
        answer: 'Yes. The streets around the Market Place and the Thames bridge are tight, which is exactly why a come-to-you service makes sense here. We’ll fit at the kerb or in one of the central car parks rather than you risk driving on a flat.'
      },
      {
        question: 'Do you cover the Hithercroft estate and nearby villages?',
        answer: 'We do. The Hithercroft industrial estate and villages such as Cholsey, Benson and Crowmarsh Gifford are all within our Wallingford coverage, for cars and light commercials alike.'
      }
    ]
  },
  {
    name: 'Faringdon',
    slug: 'faringdon',
    hub: 'Faringdon',
    isHub: true,
    description: 'Faringdon sits on the A420 between Oxford and Swindon, making it a key route for commuters who need roadside assistance. We cover the Market Place, the Folly Tower area, and all the surrounding villages. Despite the distance, our direct A420 route keeps response times reasonable.',
    nearbyAreas: ['Stanford in the Vale', 'Shrivenham', 'Watchfield', 'Longworth', 'Kingston Bagpuize'],
    postcode: 'SN7',
    responseTime: '35-50 minutes',
    lat: 51.6581,
    lng: -1.5858,
    longDescription: [
      'Faringdon is a small but historic market town perched on the A420 roughly halfway between Oxford and Swindon, crowned by the quirky Folly Tower on Folly Hill. That A420 location defines a lot of our work here: the road is a fast single carriageway notorious for potholed stretches and accidents, and we’re frequently called to drivers who’ve picked up sidewall or wheel damage on it before reaching the safety of the town.',
      'Within Faringdon we cover the old Market Place and the streets around it, the Park Road industrial estate, and the residential edges spreading toward Folly Hill, as well as the surrounding villages of Stanford in the Vale, Shrivenham, Watchfield and Kingston Bagpuize. Tight parking around the historic centre brings the usual kerbed alloys, while the country lanes off the A420 add pothole and flint punctures. Our van comes fully stocked with branded tyres and equipped to repair punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries wherever you are.',
      'Faringdon is one of the further-flung towns we serve, but the direct A420 run keeps our response to a realistic 35-50 minutes, day or night.'
    ],
    coverageHighlights: [
      'the Market Place and town centre',
      'Folly Hill and the surrounding streets',
      'the A420 Oxford-Swindon road',
      'Park Road industrial estate',
      'the A417 toward Wantage',
      'Stanford in the Vale',
      'Shrivenham and Watchfield',
      'Kingston Bagpuize'
    ],
    localContext: 'The A420 between Oxford and Swindon is known for potholed stretches and a poor accident record, and a large share of our Faringdon callouts are sidewall and wheel damage picked up on that road.',
    localFaqs: [
      {
        question: 'I’ve had tyre damage on the A420 near Faringdon — can you help?',
        answer: 'Yes, this is one of our most common Faringdon jobs. If you can reach a safe layby or get into Faringdon itself, we’ll come and fit a replacement. The A420 is fast, so always stop somewhere well clear of moving traffic first.'
      },
      {
        question: 'Do you cover the villages between Faringdon and Shrivenham?',
        answer: 'We do — Stanford in the Vale, Shrivenham, Watchfield, Longworth and Kingston Bagpuize all fall within our Faringdon coverage, including the lanes off the A420 where punctures are common.'
      }
    ]
  },
  {
    name: 'Chipping Norton',
    slug: 'chipping-norton',
    hub: 'Chipping Norton',
    isHub: true,
    description: 'Known locally as "Chippy," Chipping Norton is a Cotswold market town on the A44 in the north-west corner of Oxfordshire. The rolling hills and country lanes around here can be treacherous with potholes, especially in winter. We service the town and all nearby villages.',
    nearbyAreas: ['Hook Norton', 'Enstone', 'Churchill', 'Kingham', 'Middle Barton'],
    postcode: 'OX7',
    responseTime: '35-50 minutes',
    lat: 51.9414,
    lng: -1.5477,
    longDescription: [
      'Chipping Norton — “Chippy” to everyone local — is the highest town in Oxfordshire, sitting up in the Cotswold hills where the A44 and A361 cross. That elevation and the surrounding network of steep, winding country lanes make it one of the toughest areas in the county for tyres. Hard winters open up potholes on the climbs around town, and the flinty Cotswold roads are unkind to sidewalls; a large share of our Chippy callouts are pothole and sharp-stone punctures rather than slow leaks.',
      'We cover the whole town, from the handsome Market Place and Town Hall to Over Norton and the residential streets below the landmark Bliss Mill, plus the many villages scattered across the hills — Hook Norton, Enstone, Kingham and Churchill among them. Because a garage can be a long drive across exposed countryside from some of these spots, our come-to-you service is especially valued here. The van carries premium branded tyres and the tools to repair eligible punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries on site.',
      'Up in the north-west corner of the county, Chipping Norton is a longer run for us, so we quote a realistic 35-50 minutes via the A44, available 24 hours a day.'
    ],
    coverageHighlights: [
      'the Market Place and Town Hall',
      'Over Norton',
      'the area below Bliss Mill',
      'the A44 toward Oxford and Evesham',
      'the A361 toward Banbury',
      'Hook Norton and Enstone',
      'Kingham and Churchill',
      'the surrounding Cotswold lanes'
    ],
    localContext: 'As the highest town in Oxfordshire, Chipping Norton and its steep, flinty Cotswold lanes are hard on tyres — pothole damage and sharp-stone sidewall punctures make up a large share of our callouts here, especially through winter.',
    localFaqs: [
      {
        question: 'Why are tyre punctures so common around Chipping Norton?',
        answer: 'The town sits high in the Cotswolds where winters are harsh and the rural lanes are flinty and pothole-prone. That combination causes a lot of sidewall and sharp-stone damage, which is why we carry a good range of stock when heading up to Chippy.'
      },
      {
        question: 'Do you cover the villages around Chipping Norton?',
        answer: 'Yes — Hook Norton, Enstone, Churchill, Kingham and Middle Barton are all within our coverage. Garages can be a long drive from these hamlets, so a mobile fitter that comes to you makes a real difference out here.'
      }
    ]
  },
  {
    name: 'Charlbury',
    slug: 'charlbury',
    hub: 'Charlbury',
    isHub: true,
    description: 'Charlbury is a small Cotswold town with a mainline rail station on the Cotswold Line, popular with Oxford commuters. The narrow lanes around the Evenlode valley and Wychwood Forest mean punctures from hedgerow debris are common. We reach Charlbury via the B4437 and A44.',
    nearbyAreas: ['Stonesfield', 'Finstock', 'Combe', 'Leafield', 'Woodstock'],
    postcode: 'OX7',
    responseTime: '30-45 minutes',
    lat: 51.8726,
    lng: -1.4834,
    longDescription: [
      'Charlbury is a small, well-to-do Cotswold town strung along the Evenlode valley, best known for its station on the Cotswold Line that makes it popular with Oxford and London commuters. The narrow, tree-lined lanes around the town and the edge of the ancient Wychwood Forest are beautiful but punishing on tyres — overhanging hedgerows shed thorns and the verges hide flints and potholes, so the bulk of our Charlbury work is punctures picked up on these rural roads.',
      'We reach the town via the B4437 and the A44, and cover the centre around Sheep Street and the Spendlove area as well as the neighbouring villages of Stonesfield, Finstock, Combe and Leafield. Commuters returning to the station car park to find a flat are a regular callout, and rather than have anyone risk the drive home on a damaged tyre we come straight to wherever the car is parked. The van is stocked with branded tyres and equipped to repair eligible punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries on site.',
      'Tucked into the Cotswolds north-west of Oxford, Charlbury gets a typical 30-45 minute response from us, at any time of day or night.'
    ],
    coverageHighlights: [
      'Sheep Street and the town centre',
      'the Spendlove area',
      'Charlbury railway station car park',
      'the B4437 toward the A44',
      'the Evenlode valley lanes',
      'the edge of Wychwood Forest',
      'Stonesfield and Finstock',
      'Combe and Leafield'
    ],
    localContext: 'The tree-lined lanes of the Evenlode valley and the fringes of Wychwood Forest shed thorns, flints and potholes onto the road, and most of our Charlbury callouts are punctures picked up on these rural routes.',
    localFaqs: [
      {
        question: 'Can you fit a tyre at Charlbury station?',
        answer: 'Yes — commuters returning to the station car park to find a flat are one of our regular Charlbury jobs. Send us the tyre size and we’ll come to the car park so you can drive home rather than risk it on a damaged tyre.'
      },
      {
        question: 'Do you cover the villages around Charlbury?',
        answer: 'We do. Stonesfield, Finstock, Combe and Leafield all fall within our Charlbury coverage. The wooded lanes linking them are a frequent puncture source, so we’d always rather come out to you than have you drive on it.'
      }
    ]
  },
  {
    name: 'Woodstock',
    slug: 'woodstock',
    hub: 'Woodstock',
    isHub: true,
    description: 'Woodstock is famous for Blenheim Palace and its elegant High Street, drawing visitors year-round. Sitting on the A44 just eight miles north of Oxford, we can reach Woodstock incredibly quickly. We cover the town centre, the Blenheim estate roads, and all surrounding areas.',
    nearbyAreas: ['Bladon', 'Wootton', 'Old Woodstock', 'Kidlington', 'Charlbury'],
    postcode: 'OX20',
    responseTime: '20-30 minutes',
    lat: 51.8479,
    lng: -1.3533,
    longDescription: [
      'Woodstock is one of Oxfordshire’s most visited towns, thanks to the magnificent Blenheim Palace and its World Heritage parkland on the doorstep. That draws a constant flow of tourist traffic onto the A44 and into the town’s car parks, and the elegant but narrow Georgian streets around the High Street and Park Street mean kerbed alloys and tight-parking scrapes are among our most common Woodstock jobs.',
      'Sitting just eight miles north of Oxford on the A44, Woodstock is one of the quickest towns for us to reach, and we cover the whole of it — the centre, the Hensington Road area, Old Woodstock across the bridge, and the Blenheim estate roads — as well as nearby Bladon and Wootton. Whether you’ve picked up a flat in a visitor car park or found a slow puncture on the driveway, our van comes to you stocked with Michelin, Continental, Pirelli and Bridgestone and ready to repair eligible punctures to BS AU 159, free off locking wheel nuts and jump-start flat batteries.',
      'With such a direct run up the A44 from Oxford, Woodstock typically sees us within 20-30 minutes, any time of day or night.'
    ],
    coverageHighlights: [
      'the High Street and Park Street',
      'Blenheim Palace and its car parks',
      'Hensington Road',
      'Old Woodstock',
      'the A44 toward Oxford and Chipping Norton',
      'Bladon',
      'Wootton',
      'the Blenheim estate roads'
    ],
    localContext: 'Tourist traffic around Blenheim Palace and the narrow Georgian streets of Woodstock’s centre make kerbed alloys and tight-parking damage some of our most frequent callouts here.',
    localFaqs: [
      {
        question: 'Can you fit a tyre near Blenheim Palace or in Woodstock’s visitor car parks?',
        answer: 'Yes — we’re often called to the town’s car parks and the Blenheim visitor areas to fit a tyre for someone who’s discovered a flat after a day out. Just send us the car park and your tyre size.'
      },
      {
        question: 'How quickly can you reach Woodstock?',
        answer: 'Woodstock is only about eight miles up the A44 from our Oxford base, so it’s one of the faster towns for us — typically 20-30 minutes, day or night.'
      }
    ]
  },
  {
    name: 'Burford',
    slug: 'burford',
    hub: 'Burford',
    isHub: true,
    description: 'Burford\'s steep High Street and position as the "Gateway to the Cotswolds" on the A40 makes it a busy spot, especially on weekends and bank holidays. The winding roads around Burford and the Windrush valley often catch out drivers with hidden potholes. We cover the town and all nearby hamlets.',
    nearbyAreas: ['Fulbrook', 'Taynton', 'Asthall', 'Swinbrook', 'Carterton'],
    postcode: 'OX18',
    responseTime: '35-50 minutes',
    lat: 51.8089,
    lng: -1.6363,
    longDescription: [
      'Burford is famous for its dramatically steep High Street sweeping down to the medieval bridge over the River Windrush, and as the “Gateway to the Cotswolds” it pulls in heavy visitor traffic from the A40, especially at weekends and on bank holidays. That long hill and the tight, historic parking along it account for plenty of the kerb and alloy damage we attend, while the winding lanes of the Windrush valley hide potholes that catch drivers out year-round.',
      'We cover the town from the top of the hill down to the bridge, the Sheep Street area, and out along the A40 and A361, as well as the surrounding hamlets of Fulbrook, Taynton, Swinbrook and Asthall and over toward Carterton. The Cotswold Wildlife Park just south of town adds its own weekend traffic. Because a garage means a real trek from this corner of the county, our come-to-you service is genuinely useful here — the van carries branded tyres and the kit to repair eligible punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries on the spot.',
      'Out in the far west of Oxfordshire, Burford is a longer run for us, so we quote an honest 35-50 minutes via the A40, available around the clock.'
    ],
    coverageHighlights: [
      'the High Street and the Windrush bridge',
      'Sheep Street',
      'the A40 toward Oxford and Cheltenham',
      'the A361 toward Lechlade',
      'the Cotswold Wildlife Park area',
      'Fulbrook and Taynton',
      'Swinbrook and Asthall',
      'the road toward Carterton'
    ],
    localContext: 'Burford’s long, steep High Street and the potholed lanes of the Windrush valley are behind much of our work here — kerbed alloys on the hill and sharp-stone punctures on the surrounding Cotswold roads.',
    localFaqs: [
      {
        question: 'Do you cover Burford’s surrounding villages and the Wildlife Park?',
        answer: 'Yes. Fulbrook, Taynton, Swinbrook, Asthall and the Cotswold Wildlife Park area are all within our Burford coverage, along with the run toward Carterton. These rural lanes are a common puncture spot, so we come to you.'
      },
      {
        question: 'How long will you take to reach Burford?',
        answer: 'Burford is in the far west of the county, so we’re honest about a 35-50 minute response via the A40. If it’s a planned tyre change rather than an emergency, we can book a set time to suit you.'
      }
    ]
  },

  // ==================== OXFORD MICRO-AREAS ====================
  {
    name: 'Headington',
    slug: 'headington',
    hub: 'Oxford',
    isHub: false,
    description: 'Headington is home to the John Radcliffe Hospital, Oxford Brookes University, and the famous Headington Shark. With London Road being one of Oxford\'s busiest routes, flat tyres here are a regular callout for us. We can reach you in Headington in around 15 minutes from our base.',
    nearbyAreas: ['Old Headington', 'Marston', 'Risinghurst', 'Barton', 'Cowley'],
    postcode: 'OX3',
    responseTime: '15-25 minutes',
    lat: 51.7619,
    lng: -1.2115
  },
  {
    name: 'Cowley',
    slug: 'cowley',
    hub: 'Oxford',
    isHub: false,
    description: 'Cowley is Oxford\'s industrial heartland, home to the BMW Mini plant and the busy Cowley Road with its diverse shops and restaurants. Heavy traffic around the Oxford Business Park and the Cowley Centre roundabout means tyre damage is common. We are just minutes away.',
    nearbyAreas: ['Temple Cowley', 'Rose Hill', 'Littlemore', 'Florence Park', 'Iffley'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7355,
    lng: -1.2184
  },
  {
    name: 'Rose Hill',
    slug: 'rose-hill',
    hub: 'Oxford',
    isHub: false,
    description: 'Rose Hill overlooks the Thames valley from its elevated position south-east of Oxford city centre. The estate roads and the Rose Hill roundabout connecting to the Iffley Road and Eastern Bypass see steady traffic. We reach Rose Hill quickly from our Cowley area base.',
    nearbyAreas: ['Iffley', 'Cowley', 'Donnington', 'Littlemore', 'Kennington'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7310,
    lng: -1.2270
  },
  {
    name: 'Iffley',
    slug: 'iffley',
    hub: 'Oxford',
    isHub: false,
    description: 'Iffley village sits along the Thames near the famous Iffley Lock, with the Norman church of St Mary the Virgin drawing visitors. The narrow Iffley Road and turn into the village can be tricky, and we regularly help drivers here. Our response time to Iffley is excellent.',
    nearbyAreas: ['Rose Hill', 'Cowley', 'Donnington', 'East Oxford', 'Kennington'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7356,
    lng: -1.2397
  },
  {
    name: 'Littlemore',
    slug: 'littlemore',
    hub: 'Oxford',
    isHub: false,
    description: 'Littlemore lies just south of the Oxford ring road, home to the Oxford Science Park and the Kassam Stadium. The A4142 Eastern Bypass runs right past, and we can reach Littlemore from our base in just a few minutes for any tyre emergency or pre-booked fitting.',
    nearbyAreas: ['Cowley', 'Rose Hill', 'Blackbird Leys', 'Sandford-on-Thames', 'Kennington'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7222,
    lng: -1.2218
  },
  {
    name: 'Blackbird Leys',
    slug: 'blackbird-leys',
    hub: 'Oxford',
    isHub: false,
    description: 'Blackbird Leys is one of Oxford\'s largest housing estates on the south-eastern edge of the city, near the Kassam Stadium and the new Blackbird Leys community centre. We serve the estate regularly and can get to you quickly from our nearby Oxford base.',
    nearbyAreas: ['Littlemore', 'Cowley', 'Temple Cowley', 'Florence Park', 'Rose Hill'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7190,
    lng: -1.2088
  },
  {
    name: 'Temple Cowley',
    slug: 'temple-cowley',
    hub: 'Oxford',
    isHub: false,
    description: 'Temple Cowley sits between the main Cowley Road and the Oxford ring road, with a mix of residential streets and local shops along Temple Road. The area\'s proximity to the BMW plant means plenty of traffic and the occasional pothole casualty. We are right around the corner.',
    nearbyAreas: ['Cowley', 'Florence Park', 'Blackbird Leys', 'Rose Hill', 'Iffley'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7388,
    lng: -1.2164
  },
  {
    name: 'Marston',
    slug: 'marston',
    hub: 'Oxford',
    isHub: false,
    description: 'Marston is a village-like suburb north-east of Oxford centre, bordered by the Cherwell valley and University Parks. Marston Road connects it to the city, while the narrow lanes around Old Marston can be rough. We handle callouts here regularly and arrive in under 20 minutes.',
    nearbyAreas: ['Headington', 'Northway', 'Summertown', 'Barton', 'Old Headington'],
    postcode: 'OX3',
    responseTime: '15-25 minutes',
    lat: 51.7692,
    lng: -1.2293
  },
  {
    name: 'Summertown',
    slug: 'summertown',
    hub: 'Oxford',
    isHub: false,
    description: 'Summertown is one of Oxford\'s most affluent suburbs, known for its independent shops along the Banbury Road and proximity to the Dragon School. Parking here is tight and curb damage to tyres is a regular issue. We provide fast mobile tyre fitting to your door in Summertown.',
    nearbyAreas: ['North Oxford', 'Wolvercote', 'Cutteslowe', 'Marston', 'Jericho'],
    postcode: 'OX2',
    responseTime: '15-25 minutes',
    lat: 51.7762,
    lng: -1.2631
  },
  {
    name: 'Jericho',
    slug: 'jericho',
    hub: 'Oxford',
    isHub: false,
    description: 'Jericho is Oxford\'s trendy neighbourhood, packed with cafes, the Phoenix Picturehouse, and the Oxford University Press buildings. Street parking is tight and the narrow Victorian streets mean kerb scuffs and punctures are common. We navigate Jericho\'s streets daily and can reach you fast.',
    nearbyAreas: ['Osney', 'North Oxford', 'Summertown', 'Botley', 'Oxford'],
    postcode: 'OX2',
    responseTime: '15-25 minutes',
    lat: 51.7598,
    lng: -1.2677
  },
  {
    name: 'Osney',
    slug: 'osney',
    hub: 'Oxford',
    isHub: false,
    description: 'Osney is a small island community between the Thames and the railway, just west of Oxford station. The low bridge and narrow streets make it a tricky spot, but our fully-equipped van can access the area easily. We handle tyre fittings here including for residents by the river.',
    nearbyAreas: ['Jericho', 'Botley', 'Oxford', 'North Hinksey', 'South Hinksey'],
    postcode: 'OX2',
    responseTime: '15-25 minutes',
    lat: 51.7488,
    lng: -1.2726
  },
  {
    name: 'Botley',
    slug: 'botley',
    hub: 'Oxford',
    isHub: false,
    description: 'Botley sits just west of Oxford on the A420, home to the Elms Parade shops and West Way Square. The busy Botley Road is one of Oxford\'s main commuter routes, and breakdowns here during rush hour need fast attention. We reach Botley from our base in about 15 minutes.',
    nearbyAreas: ['North Hinksey', 'Osney', 'Jericho', 'South Hinksey', 'Oxford'],
    postcode: 'OX2',
    responseTime: '15-25 minutes',
    lat: 51.7507,
    lng: -1.2890
  },
  {
    name: 'North Oxford',
    slug: 'north-oxford',
    hub: 'Oxford',
    isHub: false,
    description: 'North Oxford\'s grand Victorian houses line the Banbury and Woodstock Roads between the city centre and Summertown. This area is home to many university departments and the Radcliffe Observatory Quarter. We provide discreet, professional tyre fitting on your driveway or roadside.',
    nearbyAreas: ['Summertown', 'Jericho', 'Wolvercote', 'Oxford', 'Marston'],
    postcode: 'OX2',
    responseTime: '15-25 minutes',
    lat: 51.7680,
    lng: -1.2610
  },
  {
    name: 'Wolvercote',
    slug: 'wolvercote',
    hub: 'Oxford',
    isHub: false,
    description: 'Wolvercote sits at Oxford\'s northern edge near the A40/A44 Peartree interchange, close to Port Meadow and the Trout Inn. The busy Peartree roundabout is a frequent spot for tyre emergencies. We can be at the Peartree area in just 15 minutes.',
    nearbyAreas: ['Summertown', 'Cutteslowe', 'North Oxford', 'Kidlington', 'Yarnton'],
    postcode: 'OX2',
    responseTime: '15-25 minutes',
    lat: 51.7861,
    lng: -1.2859
  },
  {
    name: 'Cutteslowe',
    slug: 'cutteslowe',
    hub: 'Oxford',
    isHub: false,
    description: 'Cutteslowe is a residential area in north Oxford near the popular Cutteslowe Park, one of the city\'s best green spaces. The area borders the A40 Northern Bypass and the Banbury Road. We provide mobile tyre fitting to homes and roadsides across Cutteslowe.',
    nearbyAreas: ['Summertown', 'Wolvercote', 'North Oxford', 'Kidlington', 'Marston'],
    postcode: 'OX2',
    responseTime: '15-25 minutes',
    lat: 51.7875,
    lng: -1.2620
  },
  {
    name: 'Barton',
    slug: 'barton',
    hub: 'Oxford',
    isHub: false,
    description: 'Barton is an estate on the north-eastern edge of Oxford, just off the A40 Northern Bypass near the Barton Park development. The area is growing rapidly with new homes, and we serve both new and existing residents with fast mobile tyre fitting and puncture repair.',
    nearbyAreas: ['Headington', 'Risinghurst', 'Northway', 'Marston', 'Sandhills'],
    postcode: 'OX3',
    responseTime: '15-25 minutes',
    lat: 51.7758,
    lng: -1.1990
  },
  {
    name: 'Risinghurst',
    slug: 'risinghurst',
    hub: 'Oxford',
    isHub: false,
    description: 'Risinghurst is a quiet residential area east of Headington, close to Shotover Country Park and the A40. The country lanes around Shotover often have debris and potholes, making punctures a regular occurrence. We get to Risinghurst in around 15 minutes.',
    nearbyAreas: ['Headington', 'Barton', 'Sandhills', 'Old Headington', 'Wheatley'],
    postcode: 'OX3',
    responseTime: '15-25 minutes',
    lat: 51.7650,
    lng: -1.1918
  },
  {
    name: 'Sandhills',
    slug: 'sandhills',
    hub: 'Oxford',
    isHub: false,
    description: 'Sandhills sits on the A40 London Road between Headington and Wheatley, a busy commuter corridor into Oxford. The stretch of road here sees frequent tyre issues, especially during the commuter rush. We are perfectly positioned to respond quickly to callouts along this route.',
    nearbyAreas: ['Risinghurst', 'Headington', 'Barton', 'Wheatley', 'Old Headington'],
    postcode: 'OX3',
    responseTime: '15-25 minutes',
    lat: 51.7625,
    lng: -1.1791
  },
  {
    name: 'Kennington',
    slug: 'kennington',
    hub: 'Oxford',
    isHub: false,
    description: 'Kennington is a large village south of Oxford between the A34 and the Abingdon Road. It serves as a key commuter corridor and the roads around the village see heavy traffic. We cover Kennington quickly and can also divert from A34 callouts in the area.',
    nearbyAreas: ['Rose Hill', 'Littlemore', 'Abingdon', 'South Hinksey', 'Iffley'],
    postcode: 'OX1',
    responseTime: '15-25 minutes',
    lat: 51.7168,
    lng: -1.2441
  },
  {
    name: 'South Hinksey',
    slug: 'south-hinksey',
    hub: 'Oxford',
    isHub: false,
    description: 'South Hinksey is a tiny village nestled between the A34 and the railway, just south of Oxford. Despite its small size, its proximity to the busy A34 means we regularly attend tyre emergencies nearby. Access is via the Hinksey Hill interchange.',
    nearbyAreas: ['North Hinksey', 'Botley', 'Kennington', 'Oxford', 'Osney'],
    postcode: 'OX1',
    responseTime: '15-25 minutes',
    lat: 51.7350,
    lng: -1.2660
  },
  {
    name: 'North Hinksey',
    slug: 'north-hinksey',
    hub: 'Oxford',
    isHub: false,
    description: 'North Hinksey sits between Botley and the A34 Hinksey Hill interchange, with views across to Oxford\'s dreaming spires. The village lanes are peaceful but the A34 junction nearby generates frequent tyre-related callouts. We handle both local and roadside emergencies here.',
    nearbyAreas: ['Botley', 'South Hinksey', 'Osney', 'Oxford', 'Kennington'],
    postcode: 'OX2',
    responseTime: '15-25 minutes',
    lat: 51.7427,
    lng: -1.2828
  },
  {
    name: 'Florence Park',
    slug: 'florence-park',
    hub: 'Oxford',
    isHub: false,
    description: 'Florence Park is a popular residential area in east Oxford, centred around the well-loved Florence Park green space. The area\'s tree-lined streets sit between Cowley Road and the ring road. We reach Florence Park in minutes and regularly fit tyres for residents here.',
    nearbyAreas: ['Cowley', 'Temple Cowley', 'Iffley', 'Rose Hill', 'Blackbird Leys'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7349,
    lng: -1.2262
  },
  {
    name: 'Donnington',
    slug: 'donnington',
    hub: 'Oxford',
    isHub: false,
    description: 'Donnington is a residential area in south Oxford between Iffley Road and the Thames. The Donnington Bridge connects it to the Abingdon Road, and the bridge approach roads can be bumpy. We cover Donnington as part of our core Oxford coverage area.',
    nearbyAreas: ['Iffley', 'Rose Hill', 'Cowley', 'Florence Park', 'Kennington'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7345,
    lng: -1.2372
  },
  {
    name: 'Northway',
    slug: 'northway',
    hub: 'Oxford',
    isHub: false,
    description: 'Northway is a residential estate in north-east Oxford, close to the A40 roundabout and the Marston cycle path. The Northway estate roads connect easily to the ring road, making it a fast callout for our mobile tyre van from anywhere in Oxford.',
    nearbyAreas: ['Marston', 'Headington', 'Barton', 'Risinghurst', 'Summertown'],
    postcode: 'OX3',
    responseTime: '15-25 minutes',
    lat: 51.7742,
    lng: -1.2177
  },
  {
    name: 'Old Headington',
    slug: 'old-headington',
    hub: 'Oxford',
    isHub: false,
    description: 'Old Headington is a charming village conservation area with narrow lanes, stone walls, and period cottages near the JR Hospital. The tight lanes and uneven surfaces mean punctures happen regularly. We navigate Old Headington with care and reach you fast.',
    nearbyAreas: ['Headington', 'Marston', 'Risinghurst', 'Barton', 'Sandhills'],
    postcode: 'OX3',
    responseTime: '15-25 minutes',
    lat: 51.7660,
    lng: -1.2130
  },
  {
    name: 'East Oxford',
    slug: 'east-oxford',
    hub: 'Oxford',
    isHub: false,
    description: 'East Oxford — the area around Cowley Road between Magdalen Bridge and the Plain — is one of Oxford\'s most vibrant neighbourhoods. Busy traffic, speed bumps, and tight parallel parking mean tyre issues are a daily occurrence. We are just a short drive away.',
    nearbyAreas: ['Iffley', 'Cowley', 'Florence Park', 'Rose Hill', 'Oxford'],
    postcode: 'OX4',
    responseTime: '15-25 minutes',
    lat: 51.7460,
    lng: -1.2380
  },

  // ==================== ABINGDON MICRO-AREAS ====================
  {
    name: 'Drayton',
    slug: 'drayton',
    hub: 'Abingdon',
    isHub: false,
    description: 'Drayton is a village just south of Abingdon along the B4017, with a mix of older cottages and newer developments. The road between Drayton and Abingdon is well-travelled, and we cover the village as part of our regular Abingdon area service.',
    nearbyAreas: ['Abingdon', 'Sutton Courtenay', 'Steventon', 'Milton', 'Marcham'],
    postcode: 'OX14',
    responseTime: '20-30 minutes',
    lat: 51.6557,
    lng: -1.2868
  },
  {
    name: 'Sutton Courtenay',
    slug: 'sutton-courtenay',
    hub: 'Abingdon',
    isHub: false,
    description: 'Sutton Courtenay is a Thames-side village south of Abingdon, known for its historic church where Eric Blair (George Orwell) is buried. The village lanes and the B4016 connecting to Didcot are within our core service zone. We reach Sutton Courtenay in about 25 minutes.',
    nearbyAreas: ['Abingdon', 'Drayton', 'Culham', 'Milton', 'Didcot'],
    postcode: 'OX14',
    responseTime: '25-35 minutes',
    lat: 51.6394,
    lng: -1.2581
  },
  {
    name: 'Culham',
    slug: 'culham',
    hub: 'Abingdon',
    isHub: false,
    description: 'Culham is home to the famous Culham Science Centre and JET fusion research facility, as well as a small village community. The A415 bridge over the Thames here is a bottleneck, and tyre issues in this area need a fast response. We cover Culham regularly.',
    nearbyAreas: ['Abingdon', 'Sutton Courtenay', 'Clifton Hampden', 'Dorchester-on-Thames', 'Radley'],
    postcode: 'OX14',
    responseTime: '25-35 minutes',
    lat: 51.6556,
    lng: -1.2279
  },
  {
    name: 'Radley',
    slug: 'radley',
    hub: 'Abingdon',
    isHub: false,
    description: 'Radley sits between Oxford and Abingdon along the railway line, home to Radley College and the popular Radley Lakes nature reserve. The village is easily reached from the A4183 and we provide quick mobile tyre fitting to residents and commuters at Radley station.',
    nearbyAreas: ['Abingdon', 'Kennington', 'Culham', 'Sutton Courtenay', 'Oxford'],
    postcode: 'OX14',
    responseTime: '20-30 minutes',
    lat: 51.6873,
    lng: -1.2435
  },
  {
    name: 'Marcham',
    slug: 'marcham',
    hub: 'Abingdon',
    isHub: false,
    description: 'Marcham is a village west of Abingdon on the A415, on the route towards Wantage. The road through Marcham sees steady traffic including agricultural vehicles, and debris on the road can cause punctures. We cover Marcham as part of our Abingdon hub service.',
    nearbyAreas: ['Abingdon', 'Drayton', 'Kingston Bagpuize', 'Steventon', 'Wantage'],
    postcode: 'OX13',
    responseTime: '25-35 minutes',
    lat: 51.6632,
    lng: -1.3302
  },
  {
    name: 'Steventon',
    slug: 'steventon',
    hub: 'Abingdon',
    isHub: false,
    description: 'Steventon is a village between Abingdon and Wantage, straddling the old A34 route. The village\'s proximity to the Steventon storage facility and the Milton Park industrial area means steady traffic. We provide mobile tyre fitting here with reliable response times.',
    nearbyAreas: ['Drayton', 'Milton', 'Abingdon', 'Marcham', 'Wantage'],
    postcode: 'OX13',
    responseTime: '25-35 minutes',
    lat: 51.6384,
    lng: -1.3203
  },
  {
    name: 'Milton',
    slug: 'milton',
    hub: 'Abingdon',
    isHub: false,
    description: 'Milton is home to the massive Milton Park business and science campus, one of Europe\'s largest such parks. With thousands of commuters daily and the A4130 running nearby, tyre emergencies in Milton are frequent. We reach the area quickly via the A34.',
    nearbyAreas: ['Didcot', 'Sutton Courtenay', 'Steventon', 'Drayton', 'Abingdon'],
    postcode: 'OX14',
    responseTime: '25-35 minutes',
    lat: 51.6262,
    lng: -1.2856
  },

  // ==================== BANBURY MICRO-AREAS ====================
  {
    name: 'Bodicote',
    slug: 'bodicote',
    hub: 'Banbury',
    isHub: false,
    description: 'Bodicote lies immediately south of Banbury along the A4260, home to Bodicote House where Cherwell District Council sits. The village has grown significantly with new housing, and we serve residents here whenever they need mobile tyre assistance.',
    nearbyAreas: ['Banbury', 'Adderbury', 'Bloxham', 'Deddington', 'Kings Sutton'],
    postcode: 'OX15',
    responseTime: '35-50 minutes',
    lat: 52.0477,
    lng: -1.3307
  },
  {
    name: 'Adderbury',
    slug: 'adderbury',
    hub: 'Banbury',
    isHub: false,
    description: 'Adderbury is a picturesque ironstone village just south of Banbury on the A4260. The village green and its 14th-century church attract visitors, while the Oxford Road carries commuter traffic. We cover Adderbury as part of our Banbury area service.',
    nearbyAreas: ['Banbury', 'Bodicote', 'Bloxham', 'Deddington', 'Kings Sutton'],
    postcode: 'OX17',
    responseTime: '35-50 minutes',
    lat: 52.0155,
    lng: -1.3152
  },
  {
    name: 'Bloxham',
    slug: 'bloxham',
    hub: 'Banbury',
    isHub: false,
    description: 'Bloxham is an attractive village west of Banbury, home to Bloxham School and a striking church spire visible for miles. The A361 runs through the village and the narrow lanes around can be punishing on tyres. We provide prompt mobile tyre fitting in Bloxham.',
    nearbyAreas: ['Banbury', 'Adderbury', 'Bodicote', 'Hook Norton', 'Deddington'],
    postcode: 'OX15',
    responseTime: '35-50 minutes',
    lat: 52.0192,
    lng: -1.3770
  },
  {
    name: 'Kings Sutton',
    slug: 'kings-sutton',
    hub: 'Banbury',
    isHub: false,
    description: 'Kings Sutton is a village south of Banbury near the Northamptonshire border, with its own railway station on the Chiltern Main Line. The village sits near the A4260 and the Cherwell valley. We cover Kings Sutton with the same reliable service as our Banbury hub.',
    nearbyAreas: ['Banbury', 'Adderbury', 'Bodicote', 'Deddington', 'Cropredy'],
    postcode: 'OX17',
    responseTime: '40-55 minutes',
    lat: 52.0230,
    lng: -1.2824
  },
  {
    name: 'Deddington',
    slug: 'deddington',
    hub: 'Banbury',
    isHub: false,
    description: 'Deddington is a historic market town on the A4260 between Oxford and Banbury, famous for its monthly farmers\' market and castle ruins. The road through Deddington is a busy commuter route, and we stop here frequently on our way to and from Banbury-area callouts.',
    nearbyAreas: ['Adderbury', 'Bodicote', 'Banbury', 'Bloxham', 'Steeple Aston'],
    postcode: 'OX15',
    responseTime: '35-50 minutes',
    lat: 51.9814,
    lng: -1.3220
  },
  {
    name: 'Cropredy',
    slug: 'cropredy',
    hub: 'Banbury',
    isHub: false,
    description: 'Cropredy is a charming canal-side village north of Banbury, famous for its annual Fairport Convention music festival. The narrow lanes and the route along the Oxford Canal towpath draw visitors year-round. We cover Cropredy as part of our wider Banbury service area.',
    nearbyAreas: ['Banbury', 'Kings Sutton', 'Bodicote', 'Adderbury', 'Bloxham'],
    postcode: 'OX17',
    responseTime: '40-55 minutes',
    lat: 52.0943,
    lng: -1.3491
  },
  {
    name: 'Broughton',
    slug: 'broughton',
    hub: 'Banbury',
    isHub: false,
    description: 'Broughton is a small village west of Banbury, known for the magnificent moated Broughton Castle. The B4035 passes through, connecting to Shipston and the Cotswolds. We serve Broughton and its surrounding lanes as part of our Banbury coverage.',
    nearbyAreas: ['Banbury', 'Bloxham', 'Bodicote', 'Adderbury', 'Hook Norton'],
    postcode: 'OX15',
    responseTime: '40-55 minutes',
    lat: 52.0497,
    lng: -1.3826
  },

  // ==================== BICESTER MICRO-AREAS ====================
  {
    name: 'Ambrosden',
    slug: 'ambrosden',
    hub: 'Bicester',
    isHub: false,
    description: 'Ambrosden is a village east of Bicester near the former MOD Graven Hill site, which is now a major self-build housing development. The roads between Ambrosden and Bicester are well-used, and we provide mobile tyre fitting to the village and surrounding area.',
    nearbyAreas: ['Bicester', 'Launton', 'Chesterton', 'Kingsmere', 'Bicester Village'],
    postcode: 'OX25',
    responseTime: '25-40 minutes',
    lat: 51.8881,
    lng: -1.1165
  },
  {
    name: 'Launton',
    slug: 'launton',
    hub: 'Bicester',
    isHub: false,
    description: 'Launton is a village east of Bicester along the road toward Marsh Gibbon. The village is growing with new developments and sits close to the A41. We cover Launton with prompt response times as part of our Bicester hub service.',
    nearbyAreas: ['Bicester', 'Ambrosden', 'Chesterton', 'Kingsmere', 'Bicester Village'],
    postcode: 'OX26',
    responseTime: '25-40 minutes',
    lat: 51.9028,
    lng: -1.1124
  },
  {
    name: 'Chesterton',
    slug: 'chesterton',
    hub: 'Bicester',
    isHub: false,
    description: 'Chesterton is a small village just south of Bicester on the A4095, known for its cricket ground and village pub. The road from Chesterton connects to the A41 and M40, and we reach it quickly on our route to Bicester from Oxford.',
    nearbyAreas: ['Bicester', 'Kingsmere', 'Ambrosden', 'Launton', 'Islip'],
    postcode: 'OX26',
    responseTime: '25-40 minutes',
    lat: 51.8821,
    lng: -1.1574
  },
  {
    name: 'Caversfield',
    slug: 'caversfield',
    hub: 'Bicester',
    isHub: false,
    description: 'Caversfield lies north of Bicester adjacent to the former RAF Bicester airfield, now a heritage site. The area includes newer residential developments and connects via the A4421. We serve Caversfield with fast mobile tyre fitting when you need it.',
    nearbyAreas: ['Bicester', 'Launton', 'Ambrosden', 'Fritwell', 'Steeple Aston'],
    postcode: 'OX27',
    responseTime: '25-40 minutes',
    lat: 51.9141,
    lng: -1.1457
  },
  {
    name: 'Steeple Aston',
    slug: 'steeple-aston',
    hub: 'Bicester',
    isHub: false,
    description: 'Steeple Aston is an attractive village on the B4030 between Bicester and Deddington, twice winner of Oxfordshire\'s Best Kept Village. The narrow lanes and rural roads around here can catch out tyres, and we are happy to cover this area.',
    nearbyAreas: ['Bicester', 'Deddington', 'Fritwell', 'Middle Barton', 'Bletchingdon'],
    postcode: 'OX25',
    responseTime: '30-45 minutes',
    lat: 51.9348,
    lng: -1.2658
  },
  {
    name: 'Fritwell',
    slug: 'fritwell',
    hub: 'Bicester',
    isHub: false,
    description: 'Fritwell is a quiet village north of Bicester along the B4100, surrounded by farmland and crossed by country lanes. Potholes are common on the rural roads around here, making puncture repair a frequent request. We cover Fritwell from our Bicester runs.',
    nearbyAreas: ['Bicester', 'Steeple Aston', 'Caversfield', 'Deddington', 'Banbury'],
    postcode: 'OX27',
    responseTime: '30-45 minutes',
    lat: 51.9509,
    lng: -1.2195
  },
  {
    name: 'Bicester Village',
    slug: 'bicester-village',
    hub: 'Bicester',
    isHub: false,
    description: 'Bicester Village is one of the UK\'s most visited outlet shopping destinations, drawing millions of visitors annually. The car parks here are enormous, and drivers regularly discover flat tyres after a day of shopping. We provide fast mobile tyre fitting right in the car park.',
    nearbyAreas: ['Bicester', 'Kingsmere', 'Chesterton', 'Launton', 'Ambrosden'],
    postcode: 'OX26',
    responseTime: '25-40 minutes',
    lat: 51.8938,
    lng: -1.1530
  },
  {
    name: 'Kingsmere',
    slug: 'kingsmere',
    hub: 'Bicester',
    isHub: false,
    description: 'Kingsmere is one of Bicester\'s newest and largest housing developments on the south-western edge of town. The development has thousands of homes and growing infrastructure. We serve Kingsmere residents with doorstep mobile tyre fitting, no garage trip needed.',
    nearbyAreas: ['Bicester', 'Bicester Village', 'Chesterton', 'Launton', 'Ambrosden'],
    postcode: 'OX26',
    responseTime: '25-40 minutes',
    lat: 51.8907,
    lng: -1.1672
  },

  // ==================== WITNEY MICRO-AREAS ====================
  {
    name: 'Ducklington',
    slug: 'ducklington',
    hub: 'Witney',
    isHub: false,
    description: 'Ducklington is a village immediately south of Witney on the edge of the Witney Lake and Country Park. The Ducklington Lane roundabout is one of Witney\'s busiest junctions, and we attend tyre emergencies here frequently. Quick access via the A415.',
    nearbyAreas: ['Witney', 'Standlake', 'Cogges', 'Minster Lovell', 'Carterton'],
    postcode: 'OX29',
    responseTime: '25-40 minutes',
    lat: 51.7738,
    lng: -1.4834
  },
  {
    name: 'Minster Lovell',
    slug: 'minster-lovell',
    hub: 'Witney',
    isHub: false,
    description: 'Minster Lovell is a beautiful Cotswold village along the River Windrush, known for its atmospheric ruined medieval hall. The B4047 connects to Witney, and the rural lanes can be rough. We provide mobile tyre fitting here as part of our Witney area service.',
    nearbyAreas: ['Witney', 'Cogges', 'Ducklington', 'Burford', 'Carterton'],
    postcode: 'OX29',
    responseTime: '25-40 minutes',
    lat: 51.7979,
    lng: -1.5283
  },
  {
    name: 'Cogges',
    slug: 'cogges',
    hub: 'Witney',
    isHub: false,
    description: 'Cogges is the eastern neighbourhood of Witney, home to the historic Cogges Manor Farm Museum and large residential estates. The area sits beside the A40 junction and has seen significant new development. We cover Cogges with fast response times from our Witney route.',
    nearbyAreas: ['Witney', 'Ducklington', 'Eynsham', 'Minster Lovell', 'Long Hanborough'],
    postcode: 'OX29',
    responseTime: '25-40 minutes',
    lat: 51.7879,
    lng: -1.4696
  },
  {
    name: 'Standlake',
    slug: 'standlake',
    hub: 'Witney',
    isHub: false,
    description: 'Standlake is a village south of Witney surrounded by gravel pit lakes popular with windsurfers and fishermen. The rural roads through Standlake can be rough, especially near the lake access points. We cover Standlake as part of our wider Witney area service.',
    nearbyAreas: ['Witney', 'Ducklington', 'Eynsham', 'Kingston Bagpuize', 'Carterton'],
    postcode: 'OX29',
    responseTime: '30-45 minutes',
    lat: 51.7510,
    lng: -1.4458
  },
  {
    name: 'Eynsham',
    slug: 'eynsham',
    hub: 'Witney',
    isHub: false,
    description: 'Eynsham is a large village on the A40 between Witney and Oxford, known for its Anglo-Saxon heritage and the popular Eynsham Hall hotel. The A40 bottleneck through Eynsham is notorious, and flat tyres at the roadside here are a regular callout for us.',
    nearbyAreas: ['Witney', 'Long Hanborough', 'Cogges', 'Cassington', 'Botley'],
    postcode: 'OX29',
    responseTime: '20-35 minutes',
    lat: 51.7826,
    lng: -1.3770
  },
  {
    name: 'Long Hanborough',
    slug: 'long-hanborough',
    hub: 'Witney',
    isHub: false,
    description: 'Long Hanborough sits on the A4095 north of Eynsham, with a railway station on the Cotswold Line and close proximity to Blenheim Palace. The village is a popular commuter base, and we offer convenient mobile tyre fitting so you don\'t have to leave home.',
    nearbyAreas: ['Eynsham', 'Witney', 'Freeland', 'Bladon', 'Woodstock'],
    postcode: 'OX29',
    responseTime: '25-40 minutes',
    lat: 51.8133,
    lng: -1.3794
  },
  {
    name: 'Freeland',
    slug: 'freeland',
    hub: 'Witney',
    isHub: false,
    description: 'Freeland is a village on the A4095 between Witney and Woodstock, surrounded by farmland and close to the Cotswold Line railway. The village roads and nearby lanes can be pothole-prone, especially in winter. We provide reliable mobile tyre service to Freeland residents.',
    nearbyAreas: ['Long Hanborough', 'Eynsham', 'North Leigh', 'Cogges', 'Witney'],
    postcode: 'OX29',
    responseTime: '25-40 minutes',
    lat: 51.8123,
    lng: -1.4141
  },
  {
    name: 'North Leigh',
    slug: 'north-leigh',
    hub: 'Witney',
    isHub: false,
    description: 'North Leigh is a village north-east of Witney, known for the North Leigh Roman Villa mosaic pavements. The A4095 connects North Leigh to Witney and Woodstock, and the surrounding lanes see regular agricultural traffic. We cover North Leigh with prompt service.',
    nearbyAreas: ['Witney', 'Freeland', 'Long Hanborough', 'Stonesfield', 'Eynsham'],
    postcode: 'OX29',
    responseTime: '25-40 minutes',
    lat: 51.8148,
    lng: -1.4442
  },
  {
    name: 'Cassington',
    slug: 'cassington',
    hub: 'Witney',
    isHub: false,
    description: 'Cassington is a small village just off the A40 near the Eynsham roundabout, with the Cassington gravel pits and the Oxey Mead nature reserve nearby. Its position on the A40 corridor means we pass through regularly and can respond to callouts quickly.',
    nearbyAreas: ['Eynsham', 'Yarnton', 'Wolvercote', 'Witney', 'Long Hanborough'],
    postcode: 'OX29',
    responseTime: '20-30 minutes',
    lat: 51.7924,
    lng: -1.3391
  },
  {
    name: 'Carterton',
    slug: 'carterton',
    hub: 'Witney',
    isHub: false,
    description: 'Carterton is Oxfordshire\'s second-largest town, home to RAF Brize Norton and a large community of military families and civilian residents. The town sits on the B4477 south-west of Witney, and we provide regular mobile tyre fitting to the town and the base perimeter area.',
    nearbyAreas: ['Witney', 'Burford', 'Ducklington', 'Minster Lovell', 'Standlake'],
    postcode: 'OX18',
    responseTime: '30-45 minutes',
    lat: 51.7602,
    lng: -1.5935
  },

  // ==================== DIDCOT MICRO-AREAS ====================
  {
    name: 'Harwell',
    slug: 'harwell',
    hub: 'Didcot',
    isHub: false,
    description: 'Harwell village sits just south of Didcot, not to be confused with the Harwell Campus science park nearby. The village\'s position on the A417 and proximity to the A34 means heavy traffic. We cover Harwell and the surrounding area with reliable tyre fitting.',
    nearbyAreas: ['Didcot', 'Chilton', 'Rowstock', 'East Hagbourne', 'Wantage'],
    postcode: 'OX11',
    responseTime: '25-40 minutes',
    lat: 51.5927,
    lng: -1.2798
  },
  {
    name: 'East Hagbourne',
    slug: 'east-hagbourne',
    hub: 'Didcot',
    isHub: false,
    description: 'East Hagbourne is a charming village immediately south of Didcot, known for its thatched cottages and the annual Christmas lights display. The village lanes connect to the main Didcot roads, and we provide fast mobile tyre fitting to residents here.',
    nearbyAreas: ['Didcot', 'Harwell', 'Blewbury', 'Rowstock', 'Wallingford'],
    postcode: 'OX11',
    responseTime: '25-40 minutes',
    lat: 51.5960,
    lng: -1.2250
  },
  {
    name: 'Blewbury',
    slug: 'blewbury',
    hub: 'Didcot',
    isHub: false,
    description: 'Blewbury is a beautiful downland village beneath the Berkshire Downs, with thatched cottages, cob walls, and watercress beds. The narrow lanes through the village and the A417 link to Didcot can be tricky. We reach Blewbury from Didcot in about 10 minutes.',
    nearbyAreas: ['Didcot', 'East Hagbourne', 'Harwell', 'Chilton', 'Wallingford'],
    postcode: 'OX11',
    responseTime: '30-45 minutes',
    lat: 51.5730,
    lng: -1.2293
  },
  {
    name: 'Chilton',
    slug: 'chilton',
    hub: 'Didcot',
    isHub: false,
    description: 'Chilton is a village next to the Harwell Science and Innovation Campus, home to the Diamond Light Source and the Rutherford Appleton Laboratory. Thousands of scientists commute here daily, and we provide convenient mobile tyre fitting in the area.',
    nearbyAreas: ['Didcot', 'Harwell', 'Rowstock', 'Blewbury', 'Wantage'],
    postcode: 'OX11',
    responseTime: '25-40 minutes',
    lat: 51.5755,
    lng: -1.3047
  },
  {
    name: 'Long Wittenham',
    slug: 'long-wittenham',
    hub: 'Didcot',
    isHub: false,
    description: 'Long Wittenham sits alongside the Thames near the Wittenham Clumps, one of Oxfordshire\'s most recognisable landmarks. The village roads connect to the A4130 and Didcot is close by. We serve Long Wittenham as part of our Didcot area coverage.',
    nearbyAreas: ['Didcot', 'Clifton Hampden', 'Brightwell-cum-Sotwell', 'Dorchester-on-Thames', 'Wallingford'],
    postcode: 'OX14',
    responseTime: '25-40 minutes',
    lat: 51.6302,
    lng: -1.1903
  },
  {
    name: 'Brightwell-cum-Sotwell',
    slug: 'brightwell-cum-sotwell',
    hub: 'Didcot',
    isHub: false,
    description: 'Brightwell-cum-Sotwell is a peaceful village east of Didcot, known for its vineyard and community orchard. The village lanes wind through to Wallingford and the A4130. We provide mobile tyre fitting here with reliable response times from our Didcot runs.',
    nearbyAreas: ['Didcot', 'Wallingford', 'Long Wittenham', 'East Hagbourne', 'Cholsey'],
    postcode: 'OX10',
    responseTime: '25-40 minutes',
    lat: 51.6085,
    lng: -1.1698
  },
  {
    name: 'Rowstock',
    slug: 'rowstock',
    hub: 'Didcot',
    isHub: false,
    description: 'Rowstock is a small hamlet at the junction of the A34 and A417, effectively Didcot\'s western gateway. The Rowstock roundabout handles heavy traffic and is a common spot for tyre issues. We can reach Rowstock very quickly from our usual routes.',
    nearbyAreas: ['Didcot', 'Harwell', 'Chilton', 'East Hagbourne', 'Wantage'],
    postcode: 'OX11',
    responseTime: '25-40 minutes',
    lat: 51.5995,
    lng: -1.2661
  },

  // ==================== WANTAGE MICRO-AREAS ====================
  {
    name: 'Grove',
    slug: 'grove',
    hub: 'Wantage',
    isHub: false,
    description: 'Grove is the twin town to Wantage, rapidly expanding with new housing developments on the former RAF Grove airfield site. The A338 runs through, and the growing population means increasing demand for mobile services. We cover Grove alongside Wantage.',
    nearbyAreas: ['Wantage', 'East Hanney', 'Ardington', 'Steventon', 'Didcot'],
    postcode: 'OX12',
    responseTime: '30-45 minutes',
    lat: 51.6044,
    lng: -1.4111
  },
  {
    name: 'East Hanney',
    slug: 'east-hanney',
    hub: 'Wantage',
    isHub: false,
    description: 'East Hanney is a village on the A338 between Wantage and Abingdon, close to the Letcombe Brook. The village sees regular traffic from commuters heading north, and we provide mobile tyre fitting along this busy route.',
    nearbyAreas: ['Wantage', 'Grove', 'Steventon', 'Marcham', 'Abingdon'],
    postcode: 'OX12',
    responseTime: '30-45 minutes',
    lat: 51.6282,
    lng: -1.3884
  },
  {
    name: 'Ardington',
    slug: 'ardington',
    hub: 'Wantage',
    isHub: false,
    description: 'Ardington is a small estate village just east of Wantage, with the grand Ardington House and its grounds. The village sits along the A417 and provides a quiet alternative to the busier routes. We serve Ardington as part of our Wantage hub coverage.',
    nearbyAreas: ['Wantage', 'East Hendred', 'Grove', 'Harwell', 'Didcot'],
    postcode: 'OX12',
    responseTime: '30-45 minutes',
    lat: 51.5912,
    lng: -1.3963
  },
  {
    name: 'Letcombe Regis',
    slug: 'letcombe-regis',
    hub: 'Wantage',
    isHub: false,
    description: 'Letcombe Regis is a picturesque village tucked into the base of the Berkshire Downs south of Wantage. The village is known for its watercress beds and racehorse training yards. The lanes leading up to the Ridgeway are steep and can be harsh on tyres.',
    nearbyAreas: ['Wantage', 'Childrey', 'Grove', 'East Hendred', 'Ardington'],
    postcode: 'OX12',
    responseTime: '30-45 minutes',
    lat: 51.5724,
    lng: -1.4429
  },
  {
    name: 'Childrey',
    slug: 'childrey',
    hub: 'Wantage',
    isHub: false,
    description: 'Childrey is a quiet village west of Wantage along the B4001, at the foot of the downs. The village has a lovely duck pond and medieval church. The rural roads connecting Childrey to Wantage and the surrounding area are within our regular service zone.',
    nearbyAreas: ['Wantage', 'Letcombe Regis', 'Grove', 'Faringdon', 'Shrivenham'],
    postcode: 'OX12',
    responseTime: '35-50 minutes',
    lat: 51.5753,
    lng: -1.4780
  },
  {
    name: 'East Hendred',
    slug: 'east-hendred',
    hub: 'Wantage',
    isHub: false,
    description: 'East Hendred is a beautiful downland village south of Wantage, home to the Hendred Estate and the Champs Chapel Museum. The A417 runs nearby connecting to Harwell and the science campus. We cover East Hendred with reliable response times.',
    nearbyAreas: ['Wantage', 'Ardington', 'Harwell', 'Harwell Campus', 'Didcot'],
    postcode: 'OX12',
    responseTime: '30-45 minutes',
    lat: 51.5792,
    lng: -1.3565
  },
  {
    name: 'Harwell Campus',
    slug: 'harwell-campus',
    hub: 'Wantage',
    isHub: false,
    description: 'Harwell Campus is one of Europe\'s leading science and innovation hubs, hosting the Diamond Light Source, ISIS Neutron Source, and numerous tech companies. With thousands of staff and visitors daily, tyre issues in the campus car parks are common. We attend promptly.',
    nearbyAreas: ['Chilton', 'Harwell', 'Didcot', 'East Hendred', 'Wantage'],
    postcode: 'OX11',
    responseTime: '25-40 minutes',
    lat: 51.5714,
    lng: -1.3136
  },

  // ==================== KIDLINGTON MICRO-AREAS ====================
  {
    name: 'Yarnton',
    slug: 'yarnton',
    hub: 'Kidlington',
    isHub: false,
    description: 'Yarnton is a village just west of Kidlington, close to the A44 and the Peartree interchange. The village sits near Yarnton Garden Centre and the A40/A44 junction. We reach Yarnton in under 20 minutes and regularly attend roadside calls along the A44.',
    nearbyAreas: ['Kidlington', 'Wolvercote', 'Cassington', 'Begbroke', 'Woodstock'],
    postcode: 'OX5',
    responseTime: '20-30 minutes',
    lat: 51.8060,
    lng: -1.3149
  },
  {
    name: 'Begbroke',
    slug: 'begbroke',
    hub: 'Kidlington',
    isHub: false,
    description: 'Begbroke is a small village between Kidlington and Yarnton, home to the Oxford University Begbroke Science Park. The village is set to grow significantly with the planned Begbroke development. We cover Begbroke as part of our core north Oxford service.',
    nearbyAreas: ['Kidlington', 'Yarnton', 'Wolvercote', 'Cassington', 'Woodstock'],
    postcode: 'OX5',
    responseTime: '20-30 minutes',
    lat: 51.8151,
    lng: -1.3129
  },
  {
    name: 'Bletchingdon',
    slug: 'bletchingdon',
    hub: 'Kidlington',
    isHub: false,
    description: 'Bletchingdon is a village north-east of Kidlington, near the popular Greenhill Leisure Park. The B4027 runs through connecting to the A34, and the surrounding farmland roads can be bumpy. We provide mobile tyre fitting to Bletchingdon with good response times.',
    nearbyAreas: ['Kidlington', 'Islip', 'Kirtlington', 'Steeple Aston', 'Bicester'],
    postcode: 'OX5',
    responseTime: '25-35 minutes',
    lat: 51.8479,
    lng: -1.2535
  },
  {
    name: 'Islip',
    slug: 'islip',
    hub: 'Kidlington',
    isHub: false,
    description: 'Islip is a historic village on the River Ray near the B4027, famous as the birthplace of King Edward the Confessor. The village has a railway station on the Marylebone line and sits near the A34/M40 junction. We cover Islip as part of our Kidlington area service.',
    nearbyAreas: ['Kidlington', 'Bletchingdon', 'Kirtlington', 'Bicester', 'Marston'],
    postcode: 'OX5',
    responseTime: '20-30 minutes',
    lat: 51.8268,
    lng: -1.2265
  },
  {
    name: 'Kirtlington',
    slug: 'kirtlington',
    hub: 'Kidlington',
    isHub: false,
    description: 'Kirtlington is a village on the A4095 between Kidlington and Bicester, known for Kirtlington Park and its annual polo matches. The road through the village carries steady traffic, and we pass through regularly on our way to Bicester-area callouts.',
    nearbyAreas: ['Kidlington', 'Bletchingdon', 'Islip', 'Bicester', 'Steeple Aston'],
    postcode: 'OX5',
    responseTime: '25-35 minutes',
    lat: 51.8594,
    lng: -1.2636
  },

  // ==================== THAME MICRO-AREAS ====================
  {
    name: 'Chinnor',
    slug: 'chinnor',
    hub: 'Thame',
    isHub: false,
    description: 'Chinnor sits at the base of the Chiltern Hills along the B4009, home to the Chinnor and Princes Risborough Railway heritage line. The village is close to the M40 Junction 6 and the Icknield Way. We reach Chinnor quickly from our Thame route.',
    nearbyAreas: ['Thame', 'Long Crendon', 'Tetsworth', 'Wheatley', 'Haddenham'],
    postcode: 'OX39',
    responseTime: '30-45 minutes',
    lat: 51.7009,
    lng: -0.9074
  },
  {
    name: 'Long Crendon',
    slug: 'long-crendon',
    hub: 'Thame',
    isHub: false,
    description: 'Long Crendon is a picturesque village just north of Thame across the Buckinghamshire border, famous for its 14th-century courthouse and needle-making history. The B4011 connects it to Thame, and we serve Long Crendon as part of our Thame coverage.',
    nearbyAreas: ['Thame', 'Haddenham', 'Chinnor', 'Tetsworth', 'Great Milton'],
    postcode: 'HP18',
    responseTime: '25-40 minutes',
    lat: 51.7694,
    lng: -0.9907
  },
  {
    name: 'Haddenham',
    slug: 'haddenham',
    hub: 'Thame',
    isHub: false,
    description: 'Haddenham is a large village with a Chiltern Railways station providing fast trains to London. The village is known for its Aylesbury duck breed heritage and wichert walls. With commuters using the station daily, we provide convenient mobile tyre fitting nearby.',
    nearbyAreas: ['Thame', 'Long Crendon', 'Chinnor', 'Great Milton', 'Wheatley'],
    postcode: 'HP17',
    responseTime: '30-45 minutes',
    lat: 51.7730,
    lng: -0.9352
  },
  {
    name: 'Tetsworth',
    slug: 'tetsworth',
    hub: 'Thame',
    isHub: false,
    description: 'Tetsworth is a village on the A40 between Oxford and Thame, home to the well-known Tetsworth antiques centre in the Old Swan pub. The village sits near M40 Junction 6, making it a handy stop on our Oxford-to-Thame route.',
    nearbyAreas: ['Thame', 'Chinnor', 'Great Milton', 'Wheatley', 'Long Crendon'],
    postcode: 'OX9',
    responseTime: '25-40 minutes',
    lat: 51.7150,
    lng: -1.0151
  },
  {
    name: 'Great Milton',
    slug: 'great-milton',
    hub: 'Thame',
    isHub: false,
    description: 'Great Milton is a small village on the A329 between Oxford and Thame, home to the famous Le Manoir aux Quat\'Saisons restaurant. The rural roads around Great Milton can be rough, and we provide mobile tyre service to this area as part of our Thame coverage.',
    nearbyAreas: ['Thame', 'Tetsworth', 'Wheatley', 'Long Crendon', 'Chinnor'],
    postcode: 'OX44',
    responseTime: '25-40 minutes',
    lat: 51.7244,
    lng: -1.0571
  },
  {
    name: 'Wheatley',
    slug: 'wheatley',
    hub: 'Thame',
    isHub: false,
    description: 'Wheatley is a large village east of Oxford on the A40, formerly home to an Oxford Brookes campus. The village sits between Oxford and the M40, and the A40 through here is a frequent spot for roadside tyre emergencies. We reach Wheatley in about 20 minutes.',
    nearbyAreas: ['Thame', 'Great Milton', 'Sandhills', 'Tetsworth', 'Risinghurst'],
    postcode: 'OX33',
    responseTime: '20-35 minutes',
    lat: 51.7472,
    lng: -1.1337
  },

  // ==================== WALLINGFORD MICRO-AREAS ====================
  {
    name: 'Cholsey',
    slug: 'cholsey',
    hub: 'Wallingford',
    isHub: false,
    description: 'Cholsey is a village just south of Wallingford with its own Great Western Railway station, known as the place where Agatha Christie lived and is buried. The village is growing with new developments, and we provide mobile tyre fitting to residents and commuters.',
    nearbyAreas: ['Wallingford', 'Benson', 'Brightwell-cum-Sotwell', 'Didcot', 'Ewelme'],
    postcode: 'OX10',
    responseTime: '30-45 minutes',
    lat: 51.5712,
    lng: -1.1522
  },
  {
    name: 'Benson',
    slug: 'benson',
    hub: 'Wallingford',
    isHub: false,
    description: 'Benson is a village east of Wallingford, adjacent to RAF Benson, one of the UK\'s main helicopter bases. The A4074 runs through connecting Oxford to Reading, and the military traffic adds to busy roads. We cover Benson with prompt mobile tyre service.',
    nearbyAreas: ['Wallingford', 'Ewelme', 'Cholsey', 'Crowmarsh Gifford', 'Berinsfield'],
    postcode: 'OX10',
    responseTime: '30-45 minutes',
    lat: 51.6186,
    lng: -1.0989
  },
  {
    name: 'Shillingford',
    slug: 'shillingford',
    hub: 'Wallingford',
    isHub: false,
    description: 'Shillingford is a small village on the Thames with the well-known Shillingford Bridge Hotel. The A4074 crosses the river here, and the bridge approach can be tight. We cover Shillingford as part of our Wallingford area service with reliable response times.',
    nearbyAreas: ['Wallingford', 'Dorchester-on-Thames', 'Berinsfield', 'Crowmarsh Gifford', 'Benson'],
    postcode: 'OX10',
    responseTime: '30-45 minutes',
    lat: 51.6322,
    lng: -1.1131
  },
  {
    name: 'Crowmarsh Gifford',
    slug: 'crowmarsh-gifford',
    hub: 'Wallingford',
    isHub: false,
    description: 'Crowmarsh Gifford sits directly across the Thames from Wallingford, connected by the town bridge. The village is home to the Environment Agency offices and various business parks. We serve Crowmarsh Gifford alongside Wallingford with fast response times.',
    nearbyAreas: ['Wallingford', 'Benson', 'Shillingford', 'Cholsey', 'Ewelme'],
    postcode: 'OX10',
    responseTime: '30-45 minutes',
    lat: 51.5976,
    lng: -1.1135
  },
  {
    name: 'Ewelme',
    slug: 'ewelme',
    hub: 'Wallingford',
    isHub: false,
    description: 'Ewelme is a historic village south-east of Wallingford, famous for its medieval almshouses, church, and the grave of Jerome K. Jerome. The winding lanes up to the Chilterns can be tough on tyres. We reach Ewelme from the Wallingford direction.',
    nearbyAreas: ['Wallingford', 'Benson', 'Cholsey', 'Crowmarsh Gifford', 'Berinsfield'],
    postcode: 'OX10',
    responseTime: '35-50 minutes',
    lat: 51.5930,
    lng: -1.0725
  },
  {
    name: 'Berinsfield',
    slug: 'berinsfield',
    hub: 'Wallingford',
    isHub: false,
    description: 'Berinsfield is a community on the A4074 between Dorchester-on-Thames and Wallingford, originally built as post-war housing on a former RAF site. The village sits close to the busy Oxford-Reading road, and we attend tyre emergencies along this route frequently.',
    nearbyAreas: ['Wallingford', 'Dorchester-on-Thames', 'Shillingford', 'Benson', 'Clifton Hampden'],
    postcode: 'OX10',
    responseTime: '25-40 minutes',
    lat: 51.6454,
    lng: -1.1448
  },
  {
    name: 'Dorchester-on-Thames',
    slug: 'dorchester-on-thames',
    hub: 'Wallingford',
    isHub: false,
    description: 'Dorchester-on-Thames is an ancient settlement at the confluence of the Thames and Thame, home to the magnificent Dorchester Abbey. The village sits on the A4074 and is a popular tourist stop. We provide mobile tyre fitting in this area as part of our Wallingford route.',
    nearbyAreas: ['Wallingford', 'Berinsfield', 'Shillingford', 'Clifton Hampden', 'Long Wittenham'],
    postcode: 'OX10',
    responseTime: '25-40 minutes',
    lat: 51.6436,
    lng: -1.1645
  },
  {
    name: 'Clifton Hampden',
    slug: 'clifton-hampden',
    hub: 'Wallingford',
    isHub: false,
    description: 'Clifton Hampden is a picturesque Thames-side village with a distinctive brick bridge and the Barley Mow pub, immortalised by Jerome K. Jerome. The village sits between Abingdon and Dorchester, and we cover it from both our Abingdon and Wallingford routes.',
    nearbyAreas: ['Dorchester-on-Thames', 'Berinsfield', 'Culham', 'Long Wittenham', 'Abingdon'],
    postcode: 'OX14',
    responseTime: '25-40 minutes',
    lat: 51.6505,
    lng: -1.1973
  },

  // ==================== FARINGDON MICRO-AREAS ====================
  {
    name: 'Stanford in the Vale',
    slug: 'stanford-in-the-vale',
    hub: 'Faringdon',
    isHub: false,
    description: 'Stanford in the Vale is a village on the A417 between Wantage and Faringdon, with a growing community and new housing. The village sits in the Vale of White Horse, and the connecting roads carry commuter traffic. We cover Stanford in the Vale on our Faringdon route.',
    nearbyAreas: ['Faringdon', 'Wantage', 'Kingston Bagpuize', 'Southmoor', 'Grove'],
    postcode: 'SN7',
    responseTime: '35-50 minutes',
    lat: 51.6255,
    lng: -1.4684
  },
  {
    name: 'Shrivenham',
    slug: 'shrivenham',
    hub: 'Faringdon',
    isHub: false,
    description: 'Shrivenham is home to the Defence Academy of the United Kingdom and sits on the A420 near the Wiltshire border. Military and civilian traffic is steady, and the A420 can be fast and unforgiving on tyres. We cover Shrivenham as the western edge of our service area.',
    nearbyAreas: ['Faringdon', 'Watchfield', 'Wantage', 'Childrey', 'Longworth'],
    postcode: 'SN6',
    responseTime: '40-55 minutes',
    lat: 51.6026,
    lng: -1.6529
  },
  {
    name: 'Watchfield',
    slug: 'watchfield',
    hub: 'Faringdon',
    isHub: false,
    description: 'Watchfield sits on the A420 between Faringdon and Shrivenham, close to the Defence Academy. The village has good road links but the fast A420 means tyre emergencies happen. We extend our Faringdon coverage to include Watchfield.',
    nearbyAreas: ['Faringdon', 'Shrivenham', 'Longworth', 'Kingston Bagpuize', 'Southmoor'],
    postcode: 'SN6',
    responseTime: '40-55 minutes',
    lat: 51.6097,
    lng: -1.6296
  },
  {
    name: 'Longworth',
    slug: 'longworth',
    hub: 'Faringdon',
    isHub: false,
    description: 'Longworth is a hilltop village between Faringdon and Kingston Bagpuize, with views across the Thames valley. The winding lanes through Longworth and nearby Hinton Waldrist are classic English countryside but can be rough. We cover Longworth on our Faringdon runs.',
    nearbyAreas: ['Faringdon', 'Kingston Bagpuize', 'Southmoor', 'Stanford in the Vale', 'Abingdon'],
    postcode: 'OX13',
    responseTime: '35-50 minutes',
    lat: 51.6706,
    lng: -1.4523
  },
  {
    name: 'Kingston Bagpuize',
    slug: 'kingston-bagpuize',
    hub: 'Faringdon',
    isHub: false,
    description: 'Kingston Bagpuize sits at the junction of the A415 and A420, a busy crossroads between Abingdon, Faringdon, and Witney. The village has a well-known garden at Kingston Bagpuize House. We pass through regularly and can respond quickly to tyre callouts.',
    nearbyAreas: ['Faringdon', 'Abingdon', 'Southmoor', 'Longworth', 'Marcham'],
    postcode: 'OX13',
    responseTime: '30-45 minutes',
    lat: 51.6647,
    lng: -1.4047
  },
  {
    name: 'Southmoor',
    slug: 'southmoor',
    hub: 'Faringdon',
    isHub: false,
    description: 'Southmoor is a village on the A420 between Kingston Bagpuize and Faringdon. The village sits alongside the busy Oxford-to-Swindon road, and we use this route frequently. Tyre emergencies on the A420 near Southmoor are a regular callout for us.',
    nearbyAreas: ['Faringdon', 'Kingston Bagpuize', 'Longworth', 'Stanford in the Vale', 'Abingdon'],
    postcode: 'OX13',
    responseTime: '30-45 minutes',
    lat: 51.6576,
    lng: -1.4320
  },

  // ==================== CHIPPING NORTON MICRO-AREAS ====================
  {
    name: 'Hook Norton',
    slug: 'hook-norton',
    hub: 'Chipping Norton',
    isHub: false,
    description: 'Hook Norton is famous for its independent Hook Norton Brewery, one of the few remaining tower breweries in the UK. The village sits south-west of Banbury and the hilly lanes around it are beautiful but can be harsh on tyres. We cover Hook Norton on our Chipping Norton runs.',
    nearbyAreas: ['Chipping Norton', 'Bloxham', 'Banbury', 'Enstone', 'Middle Barton'],
    postcode: 'OX15',
    responseTime: '40-55 minutes',
    lat: 52.0039,
    lng: -1.4837
  },
  {
    name: 'Enstone',
    slug: 'enstone',
    hub: 'Chipping Norton',
    isHub: false,
    description: 'Enstone is a village on the B4030 south-east of Chipping Norton, near the famous Soho Farmhouse private members\' club. The area also hosts Enstone Airfield. Rural lanes and farm traffic mean punctures happen, and we cover this area from our Chipping Norton route.',
    nearbyAreas: ['Chipping Norton', 'Middle Barton', 'Charlbury', 'Hook Norton', 'Churchill'],
    postcode: 'OX7',
    responseTime: '35-50 minutes',
    lat: 51.9099,
    lng: -1.4496
  },
  {
    name: 'Churchill',
    slug: 'churchill',
    hub: 'Chipping Norton',
    isHub: false,
    description: 'Churchill is a Cotswold village on the B4450 south-west of Chipping Norton, known as the birthplace of William Smith, the father of English geology. The village sits on the edge of the Cotswolds AONB. We service Churchill as part of our Chipping Norton coverage.',
    nearbyAreas: ['Chipping Norton', 'Kingham', 'Burford', 'Charlbury', 'Enstone'],
    postcode: 'OX7',
    responseTime: '35-50 minutes',
    lat: 51.8975,
    lng: -1.5680
  },
  {
    name: 'Kingham',
    slug: 'kingham',
    hub: 'Chipping Norton',
    isHub: false,
    description: 'Kingham is a sought-after Cotswold village with a mainline railway station, home to the famous Kingham Plough pub and the Daylesford Farm Shop nearby. The village draws visitors from across the country, and we provide mobile tyre fitting to this popular area.',
    nearbyAreas: ['Chipping Norton', 'Churchill', 'Burford', 'Charlbury', 'Enstone'],
    postcode: 'OX7',
    responseTime: '35-50 minutes',
    lat: 51.9006,
    lng: -1.6192
  },
  {
    name: 'Middle Barton',
    slug: 'middle-barton',
    hub: 'Chipping Norton',
    isHub: false,
    description: 'Middle Barton is a village on the B4030 between Chipping Norton and the A4260, part of the Bartons cluster of villages. The village has local amenities and sits in rolling farmland. We cover Middle Barton as part of our north Oxfordshire service area.',
    nearbyAreas: ['Chipping Norton', 'Enstone', 'Steeple Aston', 'Deddington', 'Hook Norton'],
    postcode: 'OX7',
    responseTime: '30-45 minutes',
    lat: 51.9225,
    lng: -1.3791
  },

  // ==================== CHARLBURY MICRO-AREAS ====================
  {
    name: 'Stonesfield',
    slug: 'stonesfield',
    hub: 'Charlbury',
    isHub: false,
    description: 'Stonesfield is a Cotswold village known historically for its stone slate roofing tiles, mined from local quarries. The village sits on steep hills above the Evenlode valley, and the narrow lanes can be rough. We cover Stonesfield from our Charlbury and Witney routes.',
    nearbyAreas: ['Charlbury', 'Woodstock', 'North Leigh', 'Finstock', 'Long Hanborough'],
    postcode: 'OX29',
    responseTime: '25-40 minutes',
    lat: 51.8380,
    lng: -1.4175
  },
  {
    name: 'Finstock',
    slug: 'finstock',
    hub: 'Charlbury',
    isHub: false,
    description: 'Finstock is a small village near Charlbury on the edge of Wychwood Forest, with a halt on the Cotswold Line railway. The village\'s rural lanes and woodland tracks can throw up debris that damages tyres. We serve Finstock as part of our Charlbury hub coverage.',
    nearbyAreas: ['Charlbury', 'Stonesfield', 'Leafield', 'North Leigh', 'Combe'],
    postcode: 'OX7',
    responseTime: '30-45 minutes',
    lat: 51.8525,
    lng: -1.4602
  },
  {
    name: 'Combe',
    slug: 'combe',
    hub: 'Charlbury',
    isHub: false,
    description: 'Combe is a village on the edge of the Blenheim estate near the Combe Gate entrance, with lovely views across the Evenlode valley. The village sits between Woodstock and Charlbury on the B4437. We provide mobile tyre fitting here with reliable response times.',
    nearbyAreas: ['Charlbury', 'Stonesfield', 'Woodstock', 'Long Hanborough', 'Finstock'],
    postcode: 'OX29',
    responseTime: '25-40 minutes',
    lat: 51.8392,
    lng: -1.3928
  },
  {
    name: 'Leafield',
    slug: 'leafield',
    hub: 'Charlbury',
    isHub: false,
    description: 'Leafield is a village perched on a hilltop above the Wychwood Forest, with the distinctive spire of St Michael\'s Church visible for miles. The lanes around Leafield are typically rural Cotswold — scenic but often potholed. We cover Leafield on our Charlbury runs.',
    nearbyAreas: ['Charlbury', 'Finstock', 'Witney', 'Burford', 'Shipton-under-Wychwood'],
    postcode: 'OX29',
    responseTime: '30-45 minutes',
    lat: 51.8360,
    lng: -1.5141
  },
  {
    name: 'Ascott-under-Wychwood',
    slug: 'ascott-under-wychwood',
    hub: 'Charlbury',
    isHub: false,
    description: 'Ascott-under-Wychwood is a village in the Evenlode valley with a stop on the Cotswold Line. The village is known for the Ascott Martyrs memorial, commemorating 16 women imprisoned during an 1873 agricultural dispute. We cover this area on our Charlbury route.',
    nearbyAreas: ['Charlbury', 'Shipton-under-Wychwood', 'Leafield', 'Burford', 'Finstock'],
    postcode: 'OX7',
    responseTime: '30-45 minutes',
    lat: 51.8636,
    lng: -1.5516
  },
  {
    name: 'Shipton-under-Wychwood',
    slug: 'shipton-under-wychwood',
    hub: 'Charlbury',
    isHub: false,
    description: 'Shipton-under-Wychwood is a Cotswold village with a railway halt on the Cotswold Line, known for its village green and the annual Wychwood Festival. The A361 passes nearby, and we cover Shipton as part of our west Oxfordshire service area.',
    nearbyAreas: ['Charlbury', 'Ascott-under-Wychwood', 'Burford', 'Leafield', 'Churchill'],
    postcode: 'OX7',
    responseTime: '30-45 minutes',
    lat: 51.8615,
    lng: -1.5703
  },

  // ==================== WOODSTOCK MICRO-AREAS ====================
  {
    name: 'Bladon',
    slug: 'bladon',
    hub: 'Woodstock',
    isHub: false,
    description: 'Bladon is a small village just south of Woodstock, famous as the burial place of Sir Winston Churchill in St Martin\'s churchyard. The village sits on the A4095 near the Blenheim Palace estate. We reach Bladon quickly on our way to Woodstock from Oxford.',
    nearbyAreas: ['Woodstock', 'Long Hanborough', 'Combe', 'Kidlington', 'Eynsham'],
    postcode: 'OX20',
    responseTime: '20-30 minutes',
    lat: 51.8356,
    lng: -1.3598
  },
  {
    name: 'Wootton',
    slug: 'wootton',
    hub: 'Woodstock',
    isHub: false,
    description: 'Wootton is a village just north of Woodstock off the B4027, with the Killingworth Castle pub and peaceful countryside surroundings. The village roads connect to the A44 and the surrounding rural network. We cover Wootton as part of our Woodstock hub service.',
    nearbyAreas: ['Woodstock', 'Old Woodstock', 'Glympton', 'Tackley', 'Kidlington'],
    postcode: 'OX20',
    responseTime: '25-35 minutes',
    lat: 51.8645,
    lng: -1.3459
  },
  {
    name: 'Old Woodstock',
    slug: 'old-woodstock',
    hub: 'Woodstock',
    isHub: false,
    description: 'Old Woodstock is the historic northern part of Woodstock, with older buildings and a more village-like feel compared to the main town. The area borders the Blenheim estate and the A44. We cover Old Woodstock alongside the main Woodstock hub.',
    nearbyAreas: ['Woodstock', 'Wootton', 'Bladon', 'Glympton', 'Tackley'],
    postcode: 'OX20',
    responseTime: '20-30 minutes',
    lat: 51.8529,
    lng: -1.3557
  },
  {
    name: 'Tackley',
    slug: 'tackley',
    hub: 'Woodstock',
    isHub: false,
    description: 'Tackley is a village north of Woodstock with its own railway station on the Cotswold Line. The village sits between the A4260 and the A44, surrounded by farmland. We cover Tackley as part of our wider north Oxfordshire service from the Woodstock hub.',
    nearbyAreas: ['Woodstock', 'Wootton', 'Kirtlington', 'Kidlington', 'Bletchingdon'],
    postcode: 'OX5',
    responseTime: '25-35 minutes',
    lat: 51.8719,
    lng: -1.3102
  },
  {
    name: 'Glympton',
    slug: 'glympton',
    hub: 'Woodstock',
    isHub: false,
    description: 'Glympton is a tiny estate village north of Woodstock along the River Glyme, with beautiful parkland and period cottages. The quiet lanes around Glympton see little traffic but the road surface can be poor. We cover Glympton from our Woodstock route.',
    nearbyAreas: ['Woodstock', 'Wootton', 'Old Woodstock', 'Tackley', 'Kirtlington'],
    postcode: 'OX20',
    responseTime: '25-35 minutes',
    lat: 51.8699,
    lng: -1.3644
  },

  // ==================== BURFORD MICRO-AREAS ====================
  {
    name: 'Fulbrook',
    slug: 'fulbrook',
    hub: 'Burford',
    isHub: false,
    description: 'Fulbrook is a village immediately north of Burford on the A361, effectively Burford\'s northern neighbour. The village sits on the hillside above the Windrush valley with views toward the Cotswolds. We cover Fulbrook as part of our Burford area service.',
    nearbyAreas: ['Burford', 'Taynton', 'Asthall', 'Swinbrook', 'Minster Lovell'],
    postcode: 'OX18',
    responseTime: '35-50 minutes',
    lat: 51.8151,
    lng: -1.6288
  },
  {
    name: 'Taynton',
    slug: 'taynton',
    hub: 'Burford',
    isHub: false,
    description: 'Taynton is a tiny Cotswold village near Burford, historically famous for its quarries that supplied stone for St Paul\'s Cathedral and many Oxford colleges. The narrow lanes through Taynton are quintessential Cotswolds. We serve the village on our Burford rounds.',
    nearbyAreas: ['Burford', 'Fulbrook', 'Asthall', 'Swinbrook', 'Broadwell'],
    postcode: 'OX18',
    responseTime: '35-50 minutes',
    lat: 51.8124,
    lng: -1.6543
  },
  {
    name: 'Asthall',
    slug: 'asthall',
    hub: 'Burford',
    isHub: false,
    description: 'Asthall is a hamlet along the River Windrush east of Burford, known for Asthall Manor, childhood home of the Mitford sisters. The winding lane from the A40 to the village is atmospheric but can be rough. We cover Asthall as part of our Burford service zone.',
    nearbyAreas: ['Burford', 'Swinbrook', 'Minster Lovell', 'Fulbrook', 'Taynton'],
    postcode: 'OX18',
    responseTime: '35-50 minutes',
    lat: 51.8009,
    lng: -1.5866
  },
  {
    name: 'Swinbrook',
    slug: 'swinbrook',
    hub: 'Burford',
    isHub: false,
    description: 'Swinbrook is a picture-perfect Cotswold village on the River Windrush, associated with the Mitford family and home to the Swan Inn. The village is reached by narrow lanes from the A40. We cover Swinbrook on our Burford area visits.',
    nearbyAreas: ['Burford', 'Asthall', 'Fulbrook', 'Taynton', 'Leafield'],
    postcode: 'OX18',
    responseTime: '35-50 minutes',
    lat: 51.8121,
    lng: -1.5666
  },
  {
    name: 'Broadwell',
    slug: 'broadwell',
    hub: 'Burford',
    isHub: false,
    description: 'Broadwell is a tiny Cotswold village near Stow-on-the-Wold, on the western edge of our service area. The village is surrounded by classic Cotswold countryside, and the roads here can be challenging in bad weather. We extend our Burford coverage to Broadwell.',
    nearbyAreas: ['Burford', 'Taynton', 'Fulbrook', 'Kingham', 'Churchill'],
    postcode: 'OX18',
    responseTime: '40-55 minutes',
    lat: 51.8666,
    lng: -1.6856
  },

  // ==================== ROAD CORRIDOR PAGES ====================
  {
    name: 'A34 Corridor',
    slug: 'a34-corridor',
    hub: 'A34 Corridor',
    isHub: true,
    description: 'The A34 is one of the busiest dual carriageways in southern England, running from the M40 at Oxford down through Abingdon, Didcot, and on toward Newbury. Tyre blowouts and punctures at speed on this road need immediate professional assistance. We attend A34 emergencies between Peartree and the Berkshire border.',
    nearbyAreas: ['Oxford', 'Abingdon', 'Didcot', 'Kennington', 'Wantage'],
    postcode: 'OX1',
    responseTime: '20-40 minutes',
    lat: 51.6800,
    lng: -1.2600,
    longDescription: [
      'The A34 is one of the busiest dual carriageways in southern England, funnelling traffic and heavy freight from the M40 at Oxford south through Abingdon and Didcot toward Newbury and the M4. At national-speed-limit traffic, a tyre failure on the A34 is no minor inconvenience — a blowout or sudden deflation can be genuinely dangerous, and getting a damaged vehicle off the carriageway and to a garage is rarely straightforward. That’s where a mobile fitter who comes to the roadside makes the difference.',
      'We attend tyre emergencies along the Oxfordshire stretch of the A34, from the Peartree interchange in the north down through the Botley, Hinksey Hill, Abingdon and Milton junctions toward the Berkshire border. The road is notorious for debris — shed loads, blown lorry tyres and pothole-edged carriageway all take their toll on car tyres at speed. Our van carries premium branded tyres and the equipment to fit a replacement or repair eligible damage to BS AU 159, free off locking wheel nuts and jump-start flat batteries, wherever you’ve managed to stop safely.',
      'Because the A34 runs straight past our Oxford base, our response along the corridor is quick for a major road — typically 20-40 minutes depending on which junction you’re nearest.'
    ],
    coverageHighlights: [
      'the Peartree interchange',
      'the Botley and A40 junction',
      'Hinksey Hill',
      'the Abingdon junctions',
      'the Milton interchange',
      'the Chilton and Rowstock area',
      'the run toward the Berkshire border',
      'the laybys and junctions between Oxford and Didcot'
    ],
    localContext: 'The A34 is notorious for debris — shed loads and blown HGV tyres — and at national speed limits this causes sudden blowouts and sidewall failures that need an immediate roadside response.',
    localFaqs: [
      {
        question: 'Is it safe for you to fit a tyre on the A34 itself?',
        answer: 'We can only work where it’s safe to do so. If you’ve managed to reach a junction, layby or off-slip and are well clear of moving traffic, we’ll come to you. If you’re stranded in a live lane on the dual carriageway, get everyone behind a barrier and call National Highways and the emergency services first.'
      },
      {
        question: 'Which part of the A34 do you cover?',
        answer: 'We attend the Oxfordshire stretch of the A34, from the Peartree interchange in the north down past Abingdon and Didcot toward the Berkshire border. Tell us your nearest junction and direction of travel and we’ll give you an ETA.'
      }
    ]
  },
  {
    name: 'A40 Corridor',
    slug: 'a40-corridor',
    hub: 'A40 Corridor',
    isHub: true,
    description: 'The A40 links Oxford to Witney, Burford, and Cheltenham, passing through Eynsham and the notorious bottleneck at the Wolvercote roundabout. Whether you are stuck at the Eynsham roundabout, broken down near Witney, or stranded between junctions, we provide fast roadside tyre assistance along the entire A40 corridor.',
    nearbyAreas: ['Oxford', 'Eynsham', 'Witney', 'Burford', 'Cassington'],
    postcode: 'OX29',
    responseTime: '15-35 minutes',
    lat: 51.7900,
    lng: -1.3700,
    longDescription: [
      'The A40 is the main artery west of Oxford, linking the city to Eynsham, Witney, Burford and ultimately Cheltenham. It’s a road of two halves — fast open stretches out toward the Cotswolds, and chronic congestion at the Wolvercote roundabout and the Eynsham bottleneck where queues build daily. Stop-start jams and sudden lane changes around these pinch points lead to plenty of kerb strikes and low-speed knocks, while the faster sections produce the occasional high-speed blowout.',
      'We provide roadside tyre assistance along the whole Oxfordshire length of the A40, from the Wolvercote and Cassington junctions through the Eynsham roundabout and on to the Witney turn-offs and beyond toward Burford. Whether you’ve crept off the carriageway into a side road with a deflating tyre or pulled into a layby after picking up debris, our van comes to you stocked with branded tyres and ready to repair eligible punctures to BS AU 159, remove locking wheel nuts and jump-start flat batteries on the spot.',
      'With the eastern end of the A40 right on our doorstep, we reach most points on the corridor within 15-35 minutes, day or night.'
    ],
    coverageHighlights: [
      'the Wolvercote roundabout',
      'the Cassington junction',
      'the Eynsham roundabout and bottleneck',
      'the Witney junctions',
      'the run toward Burford',
      'the A40 laybys west of Oxford',
      'the Duke’s Cut and canal-bridge area',
      'the approach to the Oxford ring road'
    ],
    localContext: 'Daily congestion at the Wolvercote roundabout and the Eynsham bottleneck means stop-start traffic and rushed lane changes, which is why kerbed alloys and low-speed knocks dominate our A40 callouts.',
    localFaqs: [
      {
        question: 'Can you reach me if I break down in the A40 queues at Eynsham?',
        answer: 'Yes. The Eynsham and Wolvercote pinch points are some of our most frequent A40 callouts. If you can edge off the carriageway into a side road, junction or layby, we’ll come to you with a replacement tyre — just don’t sit in a live lane.'
      },
      {
        question: 'How far along the A40 do you cover?',
        answer: 'We cover the Oxfordshire stretch from the Wolvercote roundabout out through Eynsham and Witney toward Burford. Give us your nearest junction and we’ll tell you how quickly we can get to you.'
      }
    ]
  },
  {
    name: 'A44 Corridor',
    slug: 'a44-corridor',
    hub: 'A44 Corridor',
    isHub: true,
    description: 'The A44 Evesham Road runs north-west from Oxford through Woodstock, Chipping Norton, and on toward Evesham. This scenic route passes Blenheim Palace and climbs into the Cotswolds, where potholes and rural road hazards are common. We cover the full A44 from Peartree to the county boundary.',
    nearbyAreas: ['Oxford', 'Woodstock', 'Chipping Norton', 'Charlbury', 'Enstone'],
    postcode: 'OX20',
    responseTime: '20-45 minutes',
    lat: 51.8500,
    lng: -1.3500,
    longDescription: [
      'The A44 strikes north-west out of Oxford as the Evesham Road, climbing through Woodstock and Chipping Norton before crossing the Cotswolds toward Evesham. It’s a scenic route past the gates of Blenheim Palace, but it changes character quickly — from the busy Peartree and ring-road end near Oxford to fast rural stretches and steep, pothole-scarred climbs higher into the hills. That variety means we see everything on the A44, from low-speed kerb damage in Woodstock to sharp-stone and pothole punctures up beyond Enstone.',
      'We cover the full Oxfordshire length of the A44, from the Peartree interchange through Begbroke, Woodstock and Enstone up to Chipping Norton and the county boundary. The higher, more exposed sections can be a long way from the nearest garage, so a mobile fitter that comes to the roadside is especially valuable here. Our van carries premium branded tyres and the tools to fit a replacement or repair eligible damage to BS AU 159, remove locking wheel nuts and jump-start flat batteries wherever you’ve safely stopped.',
      'Response times along the A44 vary with distance from Oxford, so we quote a realistic 20-45 minutes depending on whether you’re near Woodstock or up toward Chippy.'
    ],
    coverageHighlights: [
      'the Peartree interchange',
      'the Begbroke and Yarnton stretch',
      'the Woodstock and Blenheim approach',
      'the Enstone junction',
      'the climb toward Chipping Norton',
      'the run to the county boundary',
      'the laybys along the Evesham Road',
      'the A44/A4260 junctions'
    ],
    localContext: 'The A44 changes from busy ring-road traffic near Oxford to steep, pothole-scarred Cotswold climbs beyond Enstone, so callouts range from low-speed kerb damage to sharp-stone punctures depending on where you are on the road.',
    localFaqs: [
      {
        question: 'How quickly can you reach me on the A44?',
        answer: 'It depends where you are. Near Woodstock and the Oxford end we’re usually with you in around 20-30 minutes; up toward Chipping Norton and the county boundary it’s closer to 45. Tell us your nearest landmark or junction for an accurate ETA.'
      },
      {
        question: 'Do you cover the A44 up into the Cotswolds?',
        answer: 'Yes — we attend the full Oxfordshire stretch through Woodstock and Enstone up to Chipping Norton. The higher sections are far from the nearest garage, which is exactly where our come-to-you service earns its keep.'
      }
    ]
  },
  {
    name: 'M40 Corridor',
    slug: 'm40-corridor',
    hub: 'M40 Corridor',
    isHub: true,
    description: 'The M40 motorway runs through Oxfordshire between Junctions 7 (Thame) and 11 (Banbury), carrying heavy traffic between London and Birmingham. Tyre blowouts on the hard shoulder need a fast response, and we attend M40 emergencies across the Oxfordshire stretch. We meet you at the nearest safe stopping point.',
    nearbyAreas: ['Thame', 'Bicester', 'Banbury', 'Wheatley', 'Tetsworth'],
    postcode: 'OX26',
    responseTime: '25-45 minutes',
    lat: 51.9000,
    lng: -1.1500,
    longDescription: [
      'The M40 carries a relentless stream of traffic between London and Birmingham, and the Oxfordshire stretch between Junction 7 at Thame and Junction 11 at Banbury is one of the busiest motorway sections in the region. A tyre blowout on a motorway hard shoulder is one of the most hazardous breakdowns a driver can face, and the priority is always getting everyone to safety behind the barrier before any thought of repairs. Once you’re safe and recovered to a place we can reach, we’ll get a fresh tyre on quickly.',
      'We attend M40-related tyre emergencies across the Oxfordshire junctions — J7 (Thame), J8/8a (Wheatley and the A40), J9 (Bicester and Ardley), J10 (the A43 toward Brackley) and J11 (Banbury) — meeting you at the nearest safe stopping point, services or off-slip rather than on the live carriageway. The van is stocked with premium branded tyres and equipped to fit replacements, repair eligible damage to BS AU 159, free off locking wheel nuts and jump-start flat batteries. We work in around whatever recovery the motorway requires.',
      'Given the distances along the motorway, we quote an honest 25-45 minute response depending on which junction you’re nearest, available 24 hours a day.'
    ],
    coverageHighlights: [
      'Junction 7 (Thame)',
      'Junction 8/8a (Wheatley and A40)',
      'Junction 9 (Bicester and Ardley)',
      'Junction 10 (A43 / Brackley)',
      'Junction 11 (Banbury)',
      'the Cherwell Valley services area',
      'the off-slips and safe stopping points along the route',
      'the A-roads feeding each junction'
    ],
    localContext: 'A blowout on the M40 hard shoulder is one of the most dangerous breakdowns there is — getting everyone behind the barrier comes first, which is why we meet you at the nearest safe junction or services rather than on the live carriageway.',
    localFaqs: [
      {
        question: 'I’ve had a blowout on the M40 — can you come to the hard shoulder?',
        answer: 'For safety and legal reasons we don’t work on the live motorway or hard shoulder. Get everyone behind the barrier, call National Highways on 0300 123 5000 and the emergency services, and once you’re recovered to a junction, services or safe off-slip we’ll fit a replacement tyre there.'
      },
      {
        question: 'Which M40 junctions do you cover?',
        answer: 'We cover the Oxfordshire stretch from Junction 7 at Thame up to Junction 11 at Banbury, including the Cherwell Valley services. Tell us your nearest junction and direction and we’ll meet you at the closest safe point.'
      }
    ]
  },
  {
    name: 'A420 Corridor',
    slug: 'a420-corridor',
    hub: 'A420 Corridor',
    isHub: true,
    description: 'The A420 connects Oxford to Swindon via Botley, Kingston Bagpuize, Faringdon, and Shrivenham. This fast single-carriageway road is known for its accident rate and potholed stretches. We provide emergency tyre fitting along the full A420 from Botley to the Wiltshire border.',
    nearbyAreas: ['Oxford', 'Botley', 'Kingston Bagpuize', 'Faringdon', 'Shrivenham'],
    postcode: 'OX2',
    responseTime: '15-45 minutes',
    lat: 51.7100,
    lng: -1.4000,
    longDescription: [
      'The A420 is the direct link between Oxford and Swindon, running south-west through Botley, past Cumnor and Kingston Bagpuize, and on through Faringdon and Shrivenham to the Wiltshire border. It’s a fast single-carriageway road with a poor safety reputation and several notoriously potholed and uneven stretches, and that combination produces a steady stream of sidewall splits, wheel damage and sudden punctures — a large share of our roadside corridor work happens here.',
      'We provide emergency tyre fitting along the full Oxfordshire length of the A420, from the Botley interchange with the ring road out to the county boundary beyond Shrivenham. Because much of the road runs through open countryside with few facilities, being able to call a fitter to the roadside rather than limping miles to a garage is a real advantage. Our van carries premium branded tyres and the equipment to fit replacements, repair eligible damage to BS AU 159, remove locking wheel nuts and jump-start flat batteries wherever you’ve pulled over safely.',
      'With the Botley end of the road just minutes from our base, response times range from around 15 minutes near Oxford to 45 minutes toward Swindon, day or night.'
    ],
    coverageHighlights: [
      'the Botley interchange',
      'the Cumnor and Dean Court stretch',
      'Kingston Bagpuize',
      'the Faringdon approach',
      'Shrivenham and Watchfield',
      'the run to the Wiltshire border',
      'the A420 laybys and junctions',
      'the A338 and A417 turn-offs'
    ],
    localContext: 'The A420 is a fast single carriageway with a poor accident record and several badly potholed stretches, so sidewall splits and wheel damage make up a large share of our callouts along this road.',
    localFaqs: [
      {
        question: 'Where can you reach me on the A420?',
        answer: 'We cover the whole Oxfordshire stretch from the Botley interchange out to the Wiltshire border beyond Shrivenham. If you’ve pulled into a layby, junction or side road clear of the traffic, we’ll come to you — the A420 is fast, so never attempt a change at the roadside yourself in a live lane.'
      },
      {
        question: 'How quickly can you get to the A420?',
        answer: 'It depends on the stretch — near Botley and Oxford we can be with you in around 15-20 minutes, while toward Faringdon and Shrivenham it’s closer to 35-45. Give us your nearest village or junction for an accurate ETA.'
      }
    ]
  },
];

// Helper to get a location by slug
export function getLocationBySlug(slug: string): LocationArea | undefined {
  return locations.find(l => l.slug === slug);
}

// Helper to get all locations for a hub
export function getLocationsByHub(hubName: string): LocationArea[] {
  return locations.filter(l => l.hub === hubName && !l.isHub);
}

// Helper to get all hub locations
export function getHubLocations(): LocationArea[] {
  return locations.filter(l => l.isHub && !l.slug.includes('-corridor'));
}

// Helper to get road corridor locations
export function getRoadCorridors(): LocationArea[] {
  return locations.filter(l => l.slug.includes('-corridor'));
}

// Helper to get URL path for a location
export function getLocationPath(location: LocationArea): string {
  if (location.isHub) {
    return `/areas/${location.slug}`;
  }
  const hub = locations.find(l => l.name === location.hub && l.isHub);
  if (hub) {
    return `/areas/${hub.slug}/${location.slug}`;
  }
  return `/areas/${location.slug}`;
}

// Helper to find location by name
export function getLocationByName(name: string): LocationArea | undefined {
  return locations.find(l => l.name === name);
}
