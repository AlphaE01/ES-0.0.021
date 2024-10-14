import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type LoginForm = {
  username: string;
  password: string;
};

const AdminPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('events');
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showAddTeamMemberModal, setShowAddTeamMemberModal] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmit = (data: LoginForm) => {
    // In a real application, credentials should be validated against a backend
    if (data.username === 'adpengineering' && data.password === 'TaylorsADP2024!') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Logout
      </button>
      
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('events')}
          className={`py-2 px-4 rounded ${activeTab === 'events' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Manage Events
        </button>
        <button
          onClick={() => setActiveTab('team')}
          className={`py-2 px-4 rounded ${activeTab === 'team' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Manage Team Members
        </button>
        <button
          onClick={() => setActiveTab('sponsors')}
          className={`py-2 px-4 rounded ${activeTab === 'sponsors' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Manage Sponsors
        </button>
      </div>

      {activeTab === 'events' && (
        <div>
          <button
            onClick={() => setShowAddEventModal(true)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Add Event
          </button>
          {/* Event management table goes here */}
        </div>
      )}

      {activeTab === 'team' && (
        <div>
          <button
            onClick={() => setShowAddTeamMemberModal(true)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Add Team Member
          </button>
          {/* Team members management table goes here */}
        </div>
      )}

      {activeTab === 'sponsors' && (
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Add Sponsor
          </button>
          {/* Sponsor management table goes here */}
        </div>
      )}

      {/* Modal components can be added similarly with simple HTML/CSS without react-bootstrap */}
    </div>
  );
};

export default AdminPortal;
