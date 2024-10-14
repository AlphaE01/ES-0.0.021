import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ADP Engineering Society</h1>
          <p className="text-xl mb-8">Empowering future engineers at Taylor's University</p>
          <Link to="/join-us" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300">
            Join Now
          </Link>
        </div>
      </div>
      <div className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Workshops</h3>
              <p>Enhance your skills with our hands-on workshops led by industry experts.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Networking</h3>
              <p>Connect with peers and professionals to build valuable relationships.</p>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <p>Gain practical experience by working on real-world engineering projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;