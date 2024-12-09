import Groq from 'groq-sdk';

// Initialize the Groq client with your API key
const groq = new Groq({ apiKey:import.meta.env.VITE_META_AI_API_KEY, dangerouslyAllowBrowser:true}); // Use environment variable for the API key

export const chatCompletion = await groq.chat.completions.create({
  messages:  [
    {
      "role": "user",
      "content": "'Generate Travel Plan for Location for {totalDays) Days for {traveler) with a (budget) budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest, itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays) days with each day plan with best time to visit in JSON format.'"
    },
    {
      "role": "assistant",
      "content": "Based on your requirements, I will provide a travel plan for a city, let's assume we are planning for a trip to Paris, France for 5 days. Here is the plan in JSON format.\n\n```json\n{\n    \"location\": \"Paris, France\",\n    \"totalDays\": 5,\n    \"traveler\": \"John Doe\",\n    \"budget\": \"500USD\",\n    \"HotelOptions\": [\n        {\n            \"HotelName\": \"Hotel Le Walt\",\n            \"HotelAddress\": \"24 Rue de la Gaîté, 75014 Paris, France\",\n            \"Price\": 120,\n            \"HotelImageUrl\": \"https://picsum.photos/200/300\",\n            \"GeoCoordinates\": [-48.8524, 2.3111],\n            \"Rating\": 4.2,\n            \"Description\": \"A 3-star hotel in the heart of Paris, equipped with comfortable rooms and a restaurant serving French cuisine.\"\n        },\n        {\n            \"HotelName\": \"Hotel Plaza Athenee\",\n            \"HotelAddress\": \"25 Avenue Montaigne, 75008 Paris, France\",\n            \"Price\": 200,\n            \"HotelImageUrl\": \"https://picsum.photos/200/301\",\n            \"GeoCoordinates\": [-48.8634, 2.2944],\n            \"Rating\": 4.8,\n            \"Description\": \"A 5-star hotel located on the Champs-Élysées, offering luxurious rooms and exceptional service.\"\n        },\n        {\n            \"HotelName\": \"Ibis Paris Pont de Bercy\",\n            \"HotelAddress\": \"36 Boulevard de Bercy, 75012 Paris, France\",\n            \"Price\": 80,\n            \"HotelImageUrl\": \"https://picsum.photos/200/302\",\n            \"GeoCoordinates\": [-48.8463, 2.3723],\n            \"Rating\": 3.9,\n            \"Description\": \"A 2-star hotel located near the Bercy area, offering comfortable rooms and a convenient location.\"\n        }\n    ],\n    \"Itinerary\": [\n        {\n            \"Day\": 1,\n            \"Date\": \"20-02-2024\",\n            \"Places\": [\n                {\n                    \"PlaceName\": \"Eiffel Tower\",\n                    \"PlaceDetails\": \"The iconic iron lattice tower is a symbol of Paris and one of the most visited attractions in the world.\",\n                    \"PlaceImageUrl\": \"https://picsum.photos/200/303\",\n                    \"GeoCoordinates\": [-48.8584, 2.2945],\n                    \"TicketPricing\": \"30EUR\",\n                    \"TimeTravel\": \"9:00 AM - 12:00 PM\"\n                },\n                {\n                    \"PlaceName\": \"Lac de la Grande-Motte\",\n                    \"PlaceDetails\": \"A beautiful lake and park located in the heart of Paris, perfect for a relaxing walk or picnic.\",\n                    \"PlaceImageUrl\": \"https://picsum.photos/200/304\",\n                    \"GeoCoordinates\": [-48.8745, 2.3112],\n                    \"TicketPricing\": \"Free\",\n                    \"TimeTravel\": \"1:00 PM - 3:00 PM\"\n                }\n            ]\n        },\n        {\n            \"Day\": 2,\n            \"Date\": \"21-02-2024\",\n            \"Places\": [\n                {\n                    \"PlaceName\": \"Louvre Museum\",\n                    \"PlaceDetails\": \"One of the world's largest and most famous museums, housing an impressive collection of art and artifacts.\",\n                    \"PlaceImageUrl\": \"https://picsum.photos/200/305\",\n                    \"GeoCoordinates\": [-48.8602, 2.3087],\n                    \"TicketPricing\": \"18EUR\",\n                    \"TimeTravel\": \"10:00 AM - 12:30 PM\"\n                },\n                {\n                    \"PlaceName\": \"Palais-Royal\",\n                    \"PlaceDetails\": \"A former royal palace turned into a public park and contains impressive gardens and architectural features.\",\n                    \"PlaceImageUrl\": \"https://picsum.photos/200/306\",\n                    \"GeoCoordinates\": [-48.8602, 2.3414],\n                    \"TicketPricing\": \"Free\",\n                    \"TimeTravel\": \"1:30 PM - 3:30 PM\"\n                }\n            ]\n        },\n        {\n            \"Day\": 3,\n            \"Date\": \"22-02-2024\",\n            \"Places\": [\n                {\n                    \"PlaceName\": \"Notre-Dame Cathedral\",\n                    \"PlaceDetails\": \"A beautiful and historic cathedral located on the Île de la Cité, known for its stunning architecture and significance in French history.\",\n                    \"PlaceImageUrl\": \"https://picsum.photos/200/307\",\n                    \"GeoCoordinates\": [-48.8555, 2.3104],\n                    \"TicketPricing\": \"Free\",\n                    \"TimeTravel\": \"9:00 AM - 11:00 AM\"\n                },\n"
    }
  ],
  model: "llama-3.3-70b-versatile",
  temperature: 1,
  max_tokens: 1024,
  top_p: 1,
  stream: true,
  stop: null
});






  