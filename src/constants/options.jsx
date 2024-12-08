export const selectTravelarList = [
    {
        id: 1,
        title: "Me",
        desc: "Traveling solo, just for yourself.",
        icon: "🙋‍♂️", 
        people:"1 People"
      },
      {
        id: 2,
        title: "Couple",
        desc: "Perfect for romantic getaways.",
        icon: "👩‍❤‍💋‍👨", // Example: Emoji for couple
        people:"2 People"
      },
      {
        id: 3,
        title: "Family",
        desc: "Ideal for family vacations with everyone.",
        icon: "👨‍👩‍👧‍👦", // Example: Emoji for family
        people: "3 to 5 People"
      },
      {
        id: 4,
        title: "Friend",
        desc: "Great for trips with your best buddies.",
        icon: "👯‍♂️", // Example: Emoji for friends
        people: "5 to 10 People"
      },
  ];

  export const selectBudgetOptions = [
    {
      id: 1,
      title: "Budget-Friendly",
      desc: "Affordable options for travelers on a budget.",
      icon: "💸", // Example: Emoji for budget
    },
    {
      id: 2,
      title: "Mid-Range",
      desc: "Balanced options offering comfort and affordability.",
      icon: "💵", // Example: Emoji for mid-range
    },
    {
      id: 3,
      title: "Luxury",
      desc: "Premium experiences for travelers seeking luxury.",
      icon: "💎", // Example: Emoji for luxury
    },
  ];

  export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays) Days for {traveler) with a (budget) budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest }, itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays) days with each day plan with best time to visit in JSON format.'