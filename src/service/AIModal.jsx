import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"tripDetails\": {\n    \"destination\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Motel 6 Las Vegas Tropicana\",\n      \"hotelAddress\": \"4125 Tropicana Ave, Las Vegas, NV 89119\",\n      \"price\": \"50-80\", \n      \"hotelImageUrl\": \"https://www.motel6.com/content/dam/motel6/property-images/4117/ext/4117_ext_1.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0957,\n        \"longitude\": -115.162\n      },\n      \"rating\": 3.5,\n      \"description\": \"Budget-friendly motel near the Strip.\"\n    },\n    {\n      \"hotelName\": \"Super 8 by Wyndham Las Vegas Airport North Strip Area\",\n      \"hotelAddress\": \"1213 Las Vegas Blvd N, Las Vegas, NV 89101\",\n      \"price\": \"60-90\",\n      \"hotelImageUrl\": \"https://example.com/super8.jpg\", \n      \"geoCoordinates\": {\n        \"latitude\": 36.1685,\n        \"longitude\": -115.1448\n      },\n      \"rating\": 3.0,\n      \"description\": \"Basic accommodation close to the airport and the north end of the Strip.\"\n    },\n        {\n      \"hotelName\": \"Travelodge by Wyndham Las Vegas Center Strip\",\n      \"hotelAddress\": \"2830 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"70-100\",\n      \"hotelImageUrl\": \"https://example.com/travelodge.jpg\", \n      \"geoCoordinates\": {\n        \"latitude\": 36.1139,\n        \"longitude\": -115.1715\n      },\n      \"rating\": 3.2,\n      \"description\": \"Affordable option in a central location on the Strip.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"plan\": [\n        {\n          \"placeName\": \"Welcome to Las Vegas Sign\",\n          \"placeDetails\": \"Iconic photo opportunity.\",\n          \"placeImageUrl\": \"https://example.com/welcome.jpg\", \n          \"geoCoordinates\": {\n            \"latitude\": 36.0803,\n            \"longitude\": -115.173\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"30 minutes\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Viva Vision light show and live entertainment.\",\n          \"placeImageUrl\": \"https://example.com/fremont.jpg\", \n          \"geoCoordinates\": {\n            \"latitude\": 36.1701,\n            \"longitude\": -115.1435\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"2-3 hours\"\n        },\n         {\n          \"placeName\": \"Dinner at In-N-Out Burger\",\n          \"placeDetails\": \"A West Coast classic for a budget-friendly meal.\",\n          \"placeImageUrl\": \"https://example.com/innout.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1016,\n             \"longitude\": -115.166\n          },\n          \"ticketPricing\": \"10-15 USD\", \n          \"rating\": 4.5,\n          \"timeTravel\": \"1 hour\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"bestTimeToVisit\": \"Afternoon/Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Stunning floral displays.\",\n          \"placeImageUrl\": \"https://example.com/bellagio.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.113,\n            \"longitude\": -115.1762\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": "},
          ],
        },
      ],
    });
  