import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Tabs, Tab, Button, Form, Modal } from 'react-bootstrap';

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
      <Button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Logout
      </Button>
      
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k || 'events')}
        className="mb-4"
      >
        <Tab eventKey="events" title="Manage Events">
          <Button variant="primary" onClick={() => setShowAddEventModal(true)}>Add Event</Button>
          {/* Event management table goes here */}
        </Tab>
        
        <Tab eventKey="team" title="Manage Team Members">
          <Button variant="primary" onClick={() => setShowAddTeamMemberModal(true)}>Add Team Member</Button>
          {/* Team members management table goes here */}
        </Tab>
        
        <Tab eventKey="sponsors" title="Manage Sponsors">
          <Button variant="primary">Add Sponsor</Button>
          {/* Sponsor management table goes here */}
        </Tab>
      </Tabs>

      {/* Modal for adding an event */}
      <Modal show={showAddEventModal} onHide={() => setShowAddEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Enter event name" />
            </Form.Group>
            <Form.Group controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="eventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Event
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal for adding a team member */}
      <Modal show={showAddTeamMemberModal} onHide={() => setShowAddTeamMemberModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="teamMemberName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="teamMemberRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" />
            </Form.Group>
            <Form.Group controlId="teamMemberImage">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Team Member
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminPortal;

