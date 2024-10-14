import React from 'react';

const teamMembers = [
  { name: "Sharat", role: "President 🫡", description: "Leads the society, organizes events, and manages collaborations.", image: "/images/sharat.jpg" },
  { name: "Hrithvik", role: "Vice President", description: "Assists with planning and coordination and answers members' questions.", image: "/images/hrithvik.jpg" },
  { name: "Khujaev", role: "Secretary", description: "Handles student support and manages the committee operations.", image: "/images/khujaev.jpg" },
  { name: "Logan", role: "Event Coordinator", description: "Leads event planning and logistics.", image: "/images/logan.jpg" },
  { name: "Sindu", role: "Assistant Event Coordinator", description: "Assists with managing event schedules and tasks.", image: "/images/sindu.jpg" },
  { name: "Lohith", role: "Treasurer and PR", description: "Handles financial management and sponsor relations.", image: "/images/lohith.jpg" },
  { name: "Zhan Jong", role: "Social Media Manager", description: "Manages the club's social media channels.", image: "/images/zhanjong.jpg" },
  { name: "Yihung", role: "Content Creator", description: "Creates promotional content and manages written materials.", image: "/images/yihung.jpg" },
  { name: "Dellina", role: "Student Representative", description: "Represents student concerns and helps organize activities.", image: "/images/dellina.jpg" },
];

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <h3 className="text-lg text-gray-600 mb-2">{member.role}</h3>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;