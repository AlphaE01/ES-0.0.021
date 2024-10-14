import React from 'react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "ADP Fresh Man Day",
      date: "2024-05-01",
      time: "10:00 - 16:00",
      location: "Taylor's University Campus",
      description: "Welcome event for new ADP students, featuring orientation activities and campus tours.",
    },
    {
      id: 2,
      name: "Welcoming Party",
      date: "2024-05-15",
      time: "18:00 - 22:00",
      location: "Taylor's University Grand Hall",
      description: "A fun-filled evening to welcome new members and celebrate the start of the academic year.",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      name: "STEM Challenge",
      date: "2024-03-20",
      description: "An exciting competition showcasing innovative STEM projects from our talented students.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-gray-600 mb-2">Time: {event.time}</p>
              <p className="text-gray-600 mb-2">Location: {event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;