const sampleList = [
    {
      title: "Beachfront Villa",
      description: "A beautiful beachfront property with amazing views and private access to the beach.",
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 500000,
      location: "Malibu, California",
      country: "USA",
    },
    {
      title: "Modern Apartment in City Center",
      description: "A stylish apartment located in the heart of the city, close to all the major attractions.",
      image: "https://images.unsplash.com/photo-1690987601363-83022d125159?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 350000,
      location: "New York, New York",
      country: "USA",
    },
    {
      title: "Mountain Retreat",
      description: "Escape to the mountains in this cozy retreat, perfect for nature lovers and adventurers.",
      image: "https://images.unsplash.com/photo-1690143016326-43b283e92c51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjByZXRyZWF0fGVufDB8fDB8fHww",
      price: 200000,
      location: "Aspen, Colorado",
      country: "USA",
    },
    {
      title: "Luxury Penthouse",
      description: "A high-end penthouse with panoramic views, modern amenities, and luxury finishes.",
      image: "https://plus.unsplash.com/premium_photo-1661964071594-0d5ea642833b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVudGhvdXNlfGVufDB8fDB8fHww",
      price: 1000000,
      location: "Dubai, UAE",
      country: "UAE",
    },
    {
      title: "Countryside Cottage",
      description: "A quaint and charming cottage in the countryside, ideal for a peaceful getaway.",
      image: "https://images.unsplash.com/photo-1570127828934-c60aa3e1e5af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 120000,
      location: "Yorkshire, England",
      country: "UK",
    },
    {
        title: "Seaside Cottage",
        description: "A cozy cottage with breathtaking ocean views, perfect for a quiet retreat.",
        image: "https://images.unsplash.com/photo-1579627559431-e9082454f2c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
        price: 250000,
        location: "Maine, USA",
        country: "USA",
      },
      {
        title: "Tropical Paradise Villa",
        description: "Luxury living with stunning views of crystal-clear waters and tropical landscapes.",
        image: "https://images.unsplash.com/photo-1727187327978-5dd3e7cdb916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJvcGljYWwlMjBwYXJhZGlzZSUyMHZpbGxhfGVufDB8fDB8fHww",
        price: 800000,
        location: "Bora Bora, French Polynesia",
        country: "French Polynesia",
      },
      {
        title: "Cozy Downtown Studio",
        description: "A modern, fully-equipped studio apartment in the heart of the city.",
        image: "https://images.unsplash.com/photo-1607570799395-b968ad047e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvd250b3duJTIwc3R1ZGlvfGVufDB8fDB8fHww",
        price: 200000,
        location: "San Francisco, California",
        country: "USA",
      },
      {
        title: "Rustic Farmhouse",
        description: "A charming rustic farmhouse surrounded by farmland and rolling hills, perfect for a family.",
        image: "https://images.unsplash.com/photo-1635386052832-6d60e968e055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVzdGljJTIwZmFybWhvdXNlfGVufDB8fDB8fHww",
        price: 180000,
        location: "Kentucky, USA",
        country: "USA",
      },
      {
        title: "Spacious Family Home",
        description: "A spacious family home with a large backyard, perfect for kids and pets.",
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwYWNpb3VzJTIwZmFtaWx5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 450000,
        location: "Dallas, Texas",
        country: "USA",
      },
      {
        title: "Chic Urban Loft",
        description: "A trendy urban loft in a modern building, with high ceilings and a sleek design.",
        image: "https://plus.unsplash.com/premium_photo-1664266853060-359c07d6971f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXJiYW4lMjBsb2Z0fGVufDB8fDB8fHww",
        price: 600000,
        location: "Chicago, Illinois",
        country: "USA",
      },
      { title: "Charming Cottage in the Countryside", 
        description: "A beautiful 3-bedroom cottage surrounded by nature.", 
        image: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        price: 1200, 
        location: "Lancashire, UK", 
        country: "UK" 

      },
    { 
        title: "Luxury Penthouse in Downtown Paris", 
        description: "A stunning 5-bedroom penthouse with panoramic views of the Eiffel Tower.", 
        image: "https://images.unsplash.com/photo-1520608421741-68228b76b6df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwcGVudGhvdXNlfGVufDB8fDB8fHww", 
        price: 8500, 
        location: "Paris, France", 
        country: "France" 
    },
    { 
        title: "Cozy Studio Apartment in Tokyo", 
        description: "Compact and stylish studio perfect for city living.", 
        image: "https://plus.unsplash.com/premium_photo-1680281937008-f9b19ed9afb6?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        price: 1000, 
        location: "Shibuya, Tokyo", 
        country: "Japan"
     },
    { 
        title: "Spacious Villa in Bali", 
        description: "A luxury 6-bedroom villa with a private pool and garden.", 
        image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D", 
        price: 5000, 
        location: "Ubud, Bali", 
        country: "Indonesia" 
    },
    { 
        title: "Modern Loft in Brooklyn", 
        description: "An industrial-style loft with exposed brick walls and high ceilings.", 
        image: "https://plus.unsplash.com/premium_photo-1661950439212-558fa5cc82e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D", 
        price: 3200, 
        location: "Brooklyn, New York", 
        country: "USA" 
    },
    { 
        title: "Beachfront House in Miami", 
        description: "A beautiful 4-bedroom house located directly on the beach.", 
        image: "https://images.unsplash.com/photo-1731336477626-0fc6b6f3082e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2hmcm9udCUyMGhvdXNlfGVufDB8fDB8fHww", 
        price: 7000, 
        location: "Miami, Florida", 
        country: "USA" 
    },
    { 
        title: "Chic Apartment in London", 
        description: "A stylish 2-bedroom apartment in the heart of London.", 
        image: "https://images.unsplash.com/photo-1489936724440-afaf5a115ede?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        price: 2500, 
        location: "Soho, London", 
        country: "UK" 
    },
    { title: "Contemporary House in Sydney", 
        description: "A spacious 3-bedroom house with a private garden and rooftop terrace.", 
        image: "https://images.unsplash.com/photo-1711545024938-4c54e20a4aa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoZnJvbnQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D", 
        price: 4500, 
        location: "Bondi, Sydney",
         country: "Australia" 
        },
    { 
        title: "Lakefront Property in Vancouver", 
        description: "A charming 4-bedroom house with views of the lake and mountains.", 
        image: "https://images.unsplash.com/photo-1585544314038-a0d3769d0193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2hmcm9udCUyMGhvdXNlfGVufDB8fDB8fHww", 
        price: 6000, 
        location: "Vancouver, Canada", 
        country: "Canada" 
    },
    { 
        title: "Luxury Mountain Cabin in Colorado", 
        description: "A secluded cabin with stunning mountain views and access to hiking trails.", 
        image: "https://plus.unsplash.com/premium_photo-1688429241865-154f47a2ee78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D", 
        price: 3500, 
        location: "Aspen, Colorado", 
        country: "USA" 
    },
    { 
        title: "Historic Mansion in Rome", 
        description: "An ancient Roman mansion with restored antique furniture and a large garden.", 
        image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D", 
        price: 9500, 
        location: "Rome, Italy", 
        country: "Italy" 
    },
    { 
        title: "Eco-Friendly Home in Cape Town", 
        description: "A modern eco-house featuring solar panels and rainwater harvesting.", 
        image: "https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D", 
        price: 3000, 
        location: "Cape Town, South Africa", 
        country: "South Africa" 
    },
    { 
        title: "Secluded Beach House in Seychelles", 
        description: "A tropical 2-bedroom house surrounded by private beaches and lush nature.", 
        image: "https://plus.unsplash.com/premium_photo-1675615667583-f397d39441eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnNpb258ZW58MHx8MHx8fDA%3D", 
        price: 6200, 
        location: "Seychelles", 
        country: "Seychelles" 
    },
    { 
        title: "Urban Studio in Berlin", 
        description: "A minimalist-style studio located in the heart of Berlin.", 
        image: "https://images.unsplash.com/photo-1715353540404-ce652781868b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVyYmFuJTIwc3R1ZGlvfGVufDB8fDB8fHww", 
        price: 1500, 
        location: "Berlin, Germany", 
        country: "Germany" 
    },
    { 
        title: "Rural Retreat in Tuscany", 
        description: "A rustic farmhouse with scenic views of the rolling hills of Tuscany.", 
        image: "https://images.unsplash.com/photo-1516283011157-aa9a191cfadf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
        price: 1800,
        location: "Tuscany, Italy", 
        country: "Italy" 
    },
    { 
        title: "Minimalist Condo in Hong Kong", 
        description: "A sleek 1-bedroom condo with a breathtaking view of the Hong Kong skyline.", 
        image: "https://images.unsplash.com/photo-1467089744331-f3eef1bff8e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZG98ZW58MHx8MHx8fDA%3D", 
        price: 4200, 
        location: "Central, Hong Kong", 
        country: "Hong Kong" 
    },
    { 
        title: "Art Deco Apartment in Buenos Aires", 
        description: "A beautiful apartment with 1920s art deco design and modern amenities.", 
        image: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        price: 2100, 
        location: "Buenos Aires, Argentina", 
        country: "Argentina" 
    },
    { 
        title: "Urban Loft in Toronto", 
        description: "A stylish loft with contemporary design and an open floor plan.", 
        image: "https://images.unsplash.com/photo-1555400082-1a2152f840b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVyYmFuJTIwc3R1ZGlvfGVufDB8fDB8fHww", 
        price: 2800, 
        location: "Toronto, Canada", 
        country: "Canada" 
    },
    { 
        title: "Suburban Home in Los Angeles", 
        description: "A spacious family home with a backyard and garage.", 
        image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        price: 3500, 
        location: "Los Angeles, California", 
        country: "USA" 
    },
  ];

  module.exports = { data: sampleList };
  