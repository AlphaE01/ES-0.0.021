import React from 'react';

const JoinUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Join ADP Engineering Society</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-4">
          We're excited that you're interested in joining the ADP Engineering Society! As a member, you'll have access to workshops, networking events, and opportunities to work on exciting projects.
        </p>
        <p className="text-lg mb-6">
          To become a member, please fill out our registration form by clicking the button below.
        </p>
        <a
          href="https://forms.gle/TdwpKBdaoM8Zib82A"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300"
        >
          Join Us Here
        </a>
      </div>
    </div>
  );
};

export default JoinUs;