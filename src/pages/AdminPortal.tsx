import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

type LoginForm = {
  username: string;
  password: string;
};

type Event = {
  id: string;
  name: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  image?: string;
  rsvpLink?: string;
};

const AdminPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginForm>();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmit = (data: LoginForm) => {
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

  const handleAddEvent = (eventData: Event) => {
    const newEvent = { ...eventData, id: uuidv4() };
    setEvents([...events, newEvent]);
    resetForm();
  };

  const handleEditEvent = (eventData: Event) => {
    setEvents(events.map(event => event.id === eventData.id ? eventData : event));
    setEditingEvent(null);
    resetForm();
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const resetForm = () => {
    reset();
    setEditingEvent(null);
  };

  const handleRSVPChange = (eventId: string, rsvpLink: string) => {
    setEvents(events.map(event => event.id === eventId ? { ...event, rsvpLink } : event));
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
          <h3 className="text-2xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Add Event'}</h3>
          <form
            onSubmit={handleSubmit(editingEvent ? (data) => handleEditEvent({ ...data, id: editingEvent.id }) : (data) => handleAddEvent({ ...data }))}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label htmlFor="eventName" className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
              <input
                type="text"
                id="eventName"
                {...register('name', { required: 'Event name is required' })}
                defaultValue={editingEvent?.name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>
            {/* Add more fields like Date, Time, Description, Image Upload */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {editingEvent ? 'Update Event' : 'Add Event'}
              </button>
              {editingEvent && (
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>

          {/* Event List for Editing/Deleting */}
          <h3 className="text-2xl font-bold mb-4">Existing Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(event => (
              <div key={event.id} className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">{event.name}</h4>
                <p className="text-gray-600 mb-2">Date: {event.date}</p>
                {event.rsvpLink && <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-2">RSVP Link</a>}
                <button
                  onClick={() => setEditingEvent(event)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Implement similar sections for Team Members and Sponsors */}

    </div>
  );
};

export default AdminPortal;
