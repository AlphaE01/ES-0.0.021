import React from 'react';

const sponsors = [
  { name: "Tech Innovators", logo: "https://via.placeholder.com/150?text=Tech+Innovators", description: "Leading technology solutions provider" },
  { name: "Engineering Excellence", logo: "https://via.placeholder.com/150?text=Engineering+Excellence", description: "Cutting-edge engineering consultancy" },
  { name: "Future Builders", logo: "https://via.placeholder.com/150?text=Future+Builders", description: "Sustainable construction and design firm" },
];

const Sponsors: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Sponsors</h1>
      <p className="text-lg mb-8">
        We are grateful for the support of our sponsors who help make our events and initiatives possible. Their contributions allow us to provide valuable experiences to our members and advance the field of engineering.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <img src={sponsor.logo} alt={sponsor.name} className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
            <p className="text-center text-gray-600">{sponsor.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Become a Sponsor</h2>
        <p className="mb-4">
          Interested in becoming a sponsor? Partner with us to connect with talented engineering students, showcase your brand, and contribute to the development of future engineers.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Brand exposure to a network of aspiring engineers</li>
          <li>Participation in our events and workshops</li>
          <li>Recruitment opportunities</li>
          <li>Collaboration on innovative projects</li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Contact Us for Sponsorship
        </button>
      </div>
    </div>
  );
};

export default Sponsors;