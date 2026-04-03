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
    lng: -1.2577
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
    lng: -1.2794
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
    lng: -1.3408
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
    lng: -1.1536
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
    lng: -1.4865
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
    lng: -1.2415
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
    lng: -1.4254
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
    lng: -1.2900
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
    lng: -0.9791
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
    lng: -1.1245
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
    lng: -1.5858
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
    lng: -1.5477
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
    lng: -1.4834
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
    lng: -1.3533
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
    lng: -1.6363
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
    lng: -1.2600
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
    lng: -1.3700
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
    lng: -1.3500
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
    lng: -1.1500
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
    lng: -1.4000
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
