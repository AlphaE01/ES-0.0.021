import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About ADP Engineering Society</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            The ADP Engineering Society at Taylor's University is dedicated to fostering a community of passionate engineers, promoting innovation, and bridging the gap between academic knowledge and industry practices.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            We envision a future where our members are at the forefront of technological advancements, driving positive change in the engineering field and society at large.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Engineering students collaborating"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Organize workshops and seminars on cutting-edge engineering topics</li>
          <li>Facilitate networking events with industry professionals</li>
          <li>Coordinate team-building activities and social events</li>
          <li>Provide mentorship programs for junior members</li>
          <li>Collaborate on innovative engineering projects</li>
          <li>Participate in national and international engineering competitions</li>
        </ul>
      </div>
    </div>
  );
};

export default About;