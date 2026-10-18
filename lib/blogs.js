const places = [
  {
    id: "somnath",
    name: "Somnath",
    km: "a few minutes between the gates",
    time: "the time you spend in darshan, not on the highway",
    fact: "Somnath is the home desk. The Jyotirlinga, Triveni Ghat and Bhalka Tirth are close, and the lanes fill when the aarti starts.",
    road: "Most pickups are a hotel on the temple road or Veraval Junction, about twenty minutes away.",
    stop: "Bhalka Tirth and the sangam are the two stops guests add after the mandir.",
    watch: "Do not plan a tight train if the evening aarti is the reason you came.",
    image: "/images/place-somnath.jpg",
    dest: "somnath",
  },
  {
    id: "diu",
    name: "Diu",
    km: "about 90 km",
    time: "about 2 hours via Kodinar",
    fact: "Diu is the light coastal add-on after Somnath darshan: a fort, a quiet beach, and Portuguese streets.",
    road: "The road is coastal and usually calm if you leave after an early darshan.",
    stop: "Diu Fort and Nagoa are the two stops that justify the drive.",
    watch: "Say if the driver waits in Diu or only drops you. Those are different plans.",
    image: "/images/place-diu.jpg",
    dest: "diu",
    route: "somnath-to-diu-taxi",
  },
  {
    id: "gir",
    name: "Sasan Gir",
    km: "about 45 km",
    time: "about 1 hour",
    fact: "Gir is close enough for a morning safari and an evening aarti back in Somnath. The forest permit is separate from the cab.",
    road: "The useful booking is a driver who knows the safari gate, not a guess at Sasan village.",
    stop: "Devaliya is the easier add-on when a full jungle slot is not available.",
    watch: "Dawn slots mean a dark departure from the Somnath hotel. Write the slot time in the note.",
    image: "/images/place-gir.jpg",
    dest: "gir",
    route: "somnath-to-sasan-gir-taxi",
  },
  {
    id: "dwarka",
    name: "Dwarka",
    km: "about 235 km",
    time: "about 5.5 hours",
    fact: "Dwarka is the long pilgrimage from the first Jyotirlinga to Dwarkadhish, usually with a night on the coast.",
    road: "The coastal road via Porbandar is the one families actually use.",
    stop: "Porbandar, Bet Dwarka jetty and Nageshwar are the three decisions to make before you leave.",
    watch: "A same-day return is a very long day. Most groups sleep in Dwarka.",
    image: "/images/place-dwarka.jpg",
    dest: "dwarka",
    route: "somnath-to-dwarka-taxi",
  },
  {
    id: "junagadh",
    name: "Junagadh",
    km: "about 90 km",
    time: "about 2 hours",
    fact: "Junagadh is the fort city and the base of the Girnar climb. The steps reward an early start.",
    road: "A pre-dawn leave from Somnath is the version that reaches the foothill before the heat.",
    stop: "Uparkot and Mahabat Maqbara fit after the climb only if the group still has energy.",
    watch: "Tell us if anyone in the car is not climbing, so the driver knows where to wait.",
    image: "/images/place-junagadh.jpg",
    dest: "junagadh",
    route: "somnath-to-junagadh-taxi",
  },
  {
    id: "porbandar",
    name: "Porbandar",
    km: "about 125 km",
    time: "about 2.5 hours",
    fact: "Porbandar is the calm halt between Somnath and Dwarka: Kirti Mandir, Sudama Mandir and a long beach.",
    road: "It works as its own day, or as an hour on the Dwarka morning.",
    stop: "Kirti Mandir is the stop guests regret skipping when they only look at the sea.",
    watch: "If Porbandar is only a halt, say so. A full city tour is a different day.",
    image: "/images/place-porbandar.jpg",
    dest: "porbandar",
    route: "somnath-to-porbandar-taxi",
  },
  {
    id: "rajkot",
    name: "Rajkot",
    km: "about 190 km",
    time: "about 4 hours",
    fact: "Rajkot Hirasar is the usual airport for a Somnath trip. The city itself is a hub, not a temple town.",
    road: "Share the flight number if you want the driver to watch a delay before leaving Somnath.",
    stop: "Most airport runs are a direct transfer. A city halt belongs in the first message.",
    watch: "Late landings still reach Somnath, but they will miss the evening aarti.",
    image: "/images/place-rajkot.jpg",
    dest: "rajkot",
    route: "rajkot-to-somnath-taxi",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    km: "about 410 km",
    time: "about 8 hours",
    fact: "Ahmedabad to Somnath is a full highway day, kinder if you land the evening before and start in the morning.",
    road: "One proper meal stop belongs in the plan. A night drive is possible and tiring.",
    stop: "The airport and the Sabarmati side of the city are the two pickup zones we hear most.",
    watch: "Say which terminal and the flight number. A vague 'Ahmedabad' pickup wastes the first hour.",
    image: "/images/place-ahmedabad.jpg",
    dest: "ahmedabad",
    route: "ahmedabad-to-somnath-taxi",
  },
  {
    id: "kutch",
    name: "Kutch",
    km: "about 450 km",
    time: "about 9 hours to Bhuj",
    fact: "Kutch is the far edge of a Somnath booking: Bhuj, the white Rann and Mandvi need nights, not a single sitting.",
    road: "The Innova or a group vehicle is the comfortable tool for hour six.",
    stop: "Rann entry timings change with the season. Send the dates before the route is locked.",
    watch: "Do not promise the desert and Mandvi on the same arrival evening.",
    image: "/images/place-kutch.jpg",
    dest: "kutch",
    route: "somnath-to-kutch-taxi",
  },
  {
    id: "palitana",
    name: "Palitana",
    km: "about 280 km via Bhavnagar",
    time: "about 6 hours to Bhavnagar",
    fact: "Palitana is a stairway at dawn. Bhavnagar is the night halt that makes the climb possible.",
    road: "A same-day climb after the drive from Somnath is how groups miss the steps.",
    stop: "Velavadar can follow in the cooler months, not on the climb morning.",
    watch: "Ask for a 4 am drop if Shatrunjaya is the reason for the trip.",
    image: "/images/place-bhavnagar.jpg",
    dest: "bhavnagar",
    route: "somnath-to-bhavnagar-taxi",
  },
];

const angles = [
  {
    id: "when-to-leave",
    category: "Timing",
    title: (p) => `When to leave for ${p.name} by taxi from Somnath`,
    description: (p) => `What time a Madhuli cab should leave Somnath for ${p.name}. ${p.time}. Phone 8140204231.`,
    paragraphs: (p) => [
      `The clock matters more than the kilometre count on a ${p.name} day. ${p.fact} From the Somnath desk the road is ${p.km}, and you should allow ${p.time}.`,
      p.road,
      `${p.watch} Build a little slack for a tea stop and for the lane outside the hotel, which slows down on festival mornings.`,
      `Send the enquiry with the pickup point and the time you need to arrive, not only the time you hope to leave. Madhuli Taxi confirms the car on WhatsApp after the form is saved.`,
    ],
  },
  {
    id: "which-car",
    category: "Fleet",
    title: (p) => `Which Somnath cab suits a ${p.name} trip`,
    description: (p) => `Swift, Dzire, Ertiga, Innova, Force Traveller or Urbania for ${p.name}. How Madhuli Taxi matches seats to the road, with no rates on the site.`,
    paragraphs: (p) => [
      `Choose the car for ${p.name} by seats and hours, not by a number on a page. This website does not list rates. ${p.fact}`,
      `Up to three people with light bags are comfortable in a Swift or Dzire. A family of five, or anyone who wants a third row, should ask for the Ertiga. Dwarka, Ahmedabad and Kutch days are kinder in an Innova Crysta because the seat still matters at hour five.`,
      `A satsang, a wedding party, or a school group belongs in the Force Traveller or the Urbania. ${p.road} Tell us the headcount and the bags, including prasad and a spare pair of shoes.`,
      `The enquiry form asks for a vehicle. Pick one, or leave it as “suggest a car”. The WhatsApp message that opens after submit carries that choice to the Somnath desk.`,
    ],
  },
  {
    id: "stops",
    category: "Route notes",
    title: (p) => `Stops worth making on the way to ${p.name}`,
    description: (p) => `Which halt belongs on a Madhuli taxi from Somnath toward ${p.name}, and which one makes the day too tight.`,
    paragraphs: (p) => [
      `A stop is only worth it if you named it before the car left. ${p.stop}`,
      `${p.fact} Adding a halt from the back seat changes the arrival, especially if someone in the car has an aarti or a safari slot.`,
      p.road,
      `Write the stop in the note on the enquiry. WhatsApp then opens with the full plan: name, mobile, pickup, destination, time and that halt. The desk can say honestly if the day is too tight.`,
    ],
  },
  {
    id: "family",
    category: "Family travel",
    title: (p) => `Taking elders and children to ${p.name} from Somnath`,
    description: (p) => `A calmer family cab plan from Somnath to ${p.name}: seats, stops, and what to tell Madhuli Taxi before pickup.`,
    paragraphs: (p) => [
      `Families do not fail the ${p.name} trip on the highway. They fail it in the last lane, with an elder who needed the car closer and a child who needed a stop an hour earlier. ${p.fact}`,
      `Ask for the Ertiga when five or six of you are travelling. Put the person who gets carsick in the front, and say so in the note. ${p.watch}`,
      p.stop,
      `The Somnath driver can wait between gates. That is the point of a local desk. Send the hotel name and a mobile that someone in the car will actually answer.`,
    ],
  },
  {
    id: "arrival",
    category: "Pickups",
    title: (p) => `Train and flight arrivals before a ${p.name} cab`,
    description: (p) => `How to connect Veraval, Rajkot or Ahmedabad into a Madhuli taxi toward ${p.name}. Send the train or flight number.`,
    paragraphs: (p) => [
      `Arrivals are where Somnath trips go wrong: a train at Veraval, a flight at Hirasar, and a plan that assumed both were on time. ${p.road}`,
      `If you are starting in Somnath and then going on to ${p.name}, land or detrain with slack. ${p.time} is the drive once you are actually in the car, not once the plane touches the runway.`,
      `${p.fact} Put the PNR, flight number, or train name in the note. The WhatsApp message keeps it with the rest of the enquiry.`,
      `Night arrivals are normal. The desk is open all night. Say if the first stop is the hotel or straight on toward ${p.name}.`,
    ],
  },
  {
    id: "darshan",
    category: "Darshan",
    title: (p) => `Temple timing and a taxi to ${p.name}`,
    description: (p) => `How aarti, gate closure and queue time should shape a Madhuli cab from Somnath to ${p.name}.`,
    paragraphs: (p) => [
      `Temple time is not road time. ${p.fact} People remember the aarti and forget the walk from the car park to the gate.`,
      `For ${p.name}, start from the moment you need to be present, then work backward by ${p.time}. ${p.watch}`,
      p.stop,
      `Madhuli’s enquiry asks for a pickup time. Use the time the car should be at the hotel, not the time of the aarti itself. The driver still needs the lane, the bags and a headcount.`,
    ],
  },
  {
    id: "weather",
    category: "Season",
    title: (p) => `Heat, monsoon and the road to ${p.name}`,
    description: (p) => `Seasonal notes for a Somnath taxi to ${p.name}: summer starts, monsoon slack, and winter pilgrimage weeks.`,
    paragraphs: (p) => [
      `Saurashtra changes the same road. Summer wants an early wheel. Monsoon wants slack for a slow truck. Winter pilgrimage weeks fill the Somnath hotels and the lane outside them. ${p.fact}`,
      `On a ${p.name} day of ${p.km}, leave the margin in the morning, not at the toll plaza in the afternoon. ${p.road}`,
      `An AC cab is the whole fleet, which matters from April onward. In the rains, do not stack a safari, a fort and an aarti into one unbroken hope.`,
      `Tell the desk the month, not only the date. A January Dwarka week and a July coastal week are not the same conversation.`,
    ],
  },
  {
    id: "overnight",
    category: "Trip shape",
    title: (p) => `Same-day or overnight: ${p.name} from Somnath`,
    description: (p) => `When a Madhuli taxi to ${p.name} should come back the same day, and when the honest plan is a night halt.`,
    paragraphs: (p) => [
      `${p.watch} The drive itself is ${p.time} and ${p.km}. Double it, then add darshan, and you can see whether a return belongs in the same sunset.`,
      `${p.fact} A one-way drop and a car that stays are different jobs. Say which one you want in the enquiry so the driver is not guessing at the hotel gate.`,
      p.road,
      `If you already have a hotel, send the area. If you do not, the desk can still run the cab. Hotel booking stays yours unless you ask for an area that is easy at dawn.`,
    ],
  },
  {
    id: "what-to-send",
    category: "Booking",
    title: (p) => `What to send the Somnath desk for a ${p.name} taxi`,
    description: (p) => `The enquiry fields Madhuli Taxi needs for ${p.name}: name, mobile, pickup, time and notes. Submit opens WhatsApp with the same details.`,
    paragraphs: (p) => [
      `A useful ${p.name} message is short and complete. Name, mobile, pickup, destination, date, time, vehicle and one note. That is the form on this site. After it saves to the desk, WhatsApp opens with the same lines.`,
      `${p.fact} ${p.watch}`,
      `The note is where ${p.name} trips are won: flight number, safari slot, elder who should not climb stairs, or a halt at ${p.stop.split(" ")[0] || p.name}.`,
      `Call 8140204231 if the car is for today. The form is better when you still have an evening to confirm. Either way the details reach the Somnath desk, not a general inbox.`,
    ],
  },
  {
    id: "day-plan",
    category: "Day plans",
    title: (p) => `A calm day plan: Somnath and ${p.name} by cab`,
    description: (p) => `A practical Madhuli Taxi day from Somnath toward ${p.name}, with the order of stops and the moment to turn back.`,
    paragraphs: (p) => [
      `Start with the thing that cannot move. If that thing is Somnath aarti, do it first. If it is a Gir slot or a Palitana step, the hotel wakeup moves instead. ${p.fact}`,
      `Then the road: ${p.km}, ${p.time}. ${p.road} ${p.stop}`,
      `Turn back when the return would steal the evening aarti or the night train at Veraval. ${p.watch}`,
      `Madhuli Taxi is based in Somnath. One car can hold this day if the enquiry says the order. The website will not show a rate. The confirmation comes back on WhatsApp.`,
    ],
  },
];

function dateFor(index) {
  const start = new Date(Date.UTC(2026, 0, 6));
  start.setUTCDate(start.getUTCDate() + index * 2);
  return start.toISOString().slice(0, 10);
}

export const blogs = places.flatMap((place, placeIndex) =>
  angles.map((angle, angleIndex) => {
    const index = placeIndex * angles.length + angleIndex;
    return {
      slug: `${angle.id}-${place.id}-taxi`,
      title: angle.title(place),
      description: angle.description(place),
      category: angle.category,
      place: place.name,
      image: place.image,
      dest: place.dest,
      route: place.route || null,
      date: dateFor(index),
      paragraphs: angle.paragraphs(place),
    };
  })
);

export function getBlog(slug) {
  return blogs.find((item) => item.slug === slug);
}

export function relatedBlogs(slug, limit = 3) {
  const current = getBlog(slug);
  if (!current) return blogs.slice(0, limit);
  const samePlace = blogs.filter((item) => item.slug !== slug && item.place === current.place);
  const more = blogs.filter((item) => item.slug !== slug && item.category === current.category && item.place !== current.place);
  return [...samePlace, ...more].slice(0, limit);
}
