import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Tabs, Tab, Button, Modal, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

// Define types for the forms
type LoginForm = {
  username: string;
  password: string;
};

type EventForm = {
  eventName: string;
  eventDate: string;
  eventDescription: string;
};

type TeamMemberForm = {
  name: string;
  role: string;
  image: FileList;
};

type SponsorForm = {
  sponsorName: string;
  sponsorLogo: FileList;
  sponsorDescription: string;
};

const AdminPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('events');
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showAddTeamMemberModal, setShowAddTeamMemberModal] = useState(false);
  const [showAddSponsorModal, setShowAddSponsorModal] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const { register: eventRegister, handleSubmit: handleEventSubmit, reset: resetEventForm } = useForm<EventForm>();
  const { register: teamMemberRegister, handleSubmit: handleTeamMemberSubmit, reset: resetTeamMemberForm } = useForm<TeamMemberForm>();
  const { register: sponsorRegister, handleSubmit: handleSponsorSubmit, reset: resetSponsorForm } = useForm<SponsorForm>();

  const onSubmit = (data: LoginForm) => {
    // Validate credentials
    if (data.username === 'adpengineering' && data.password === 'TaylorsADP2024!') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const addEvent = (data: EventForm) => {
    // Logic to add event (e.g., send to backend)
    console.log('Event Added:', data);
    setShowAddEventModal(false);
    resetEventForm();
  };

  const addTeamMember = (data: TeamMemberForm) => {
    // Logic to add team member (e.g., send to backend)
    console.log('Team Member Added:', data);
    setShowAddTeamMemberModal(false);
    resetTeamMemberForm();
  };

  const addSponsor = (data: SponsorForm) => {
    // Logic to add sponsor (e.g., send to backend)
    console.log('Sponsor Added:', data);
    setShowAddSponsorModal(false);
    resetSponsorForm();
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input type="text" placeholder="Username" {...register('username', { required: true })} />
            {errors.username && <span>Username is required</span>}
          </div>
          <div>
            <input type="password" placeholder="Password" {...register('password', { required: true })} />
            {errors.password && <span>Password is required</span>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-portal">
      <h2>Admin Portal</h2>
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'events')}>
        <Tab eventKey="events" title="Manage Events">
          <Button variant="primary" onClick={() => setShowAddEventModal(true)}>Add Event</Button>
          {/* Event list goes here */}
        </Tab>
        <Tab eventKey="team" title="Manage Team Members">
          <Button variant="primary" onClick={() => setShowAddTeamMemberModal(true)}>Add Team Member</Button>
          {/* Team members list goes here */}
        </Tab>
        <Tab eventKey="sponsors" title="Manage Sponsors">
          <Button variant="primary" onClick={() => setShowAddSponsorModal(true)}>Add Sponsor</Button>
          {/* Sponsor list goes here */}
        </Tab>
      </Tabs>

      {/* Modal for adding an event */}
      <Modal show={showAddEventModal} onHide={() => setShowAddEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEventSubmit(addEvent)}>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Enter event name" {...eventRegister('eventName', { required: true })} />
            </Form.Group>
            <Form.Group controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date" {...eventRegister('eventDate', { required: true })} />
            </Form.Group>
            <Form.Group controlId="eventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control as="textarea" rows={3} {...eventRegister('eventDescription', { required: true })} />
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
          <Form onSubmit={handleTeamMemberSubmit(addTeamMember)}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" {...teamMemberRegister('name', { required: true })} />
            </Form.Group>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" {...teamMemberRegister('role', { required: true })} />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" {...teamMemberRegister('image', { required: true })} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Team Member
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal for adding a sponsor */}
      <Modal show={showAddSponsorModal} onHide={() => setShowAddSponsorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sponsor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSponsorSubmit(addSponsor)}>
            <Form.Group controlId="sponsorName">
              <Form.Label>Sponsor Name</Form.Label>
              <Form.Control type="text" placeholder="Enter sponsor name" {...sponsorRegister('sponsorName', { required: true })} />
            </Form.Group>
            <Form.Group controlId="sponsorLogo">
              <Form.Label>Upload Sponsor Logo</Form.Label>
              <Form.Control type="file" {...sponsorRegister('sponsorLogo', { required: true })} />
            </Form.Group>
            <Form.Group controlId="sponsorDescription">
              <Form.Label>Sponsor Description</Form.Label>
              <Form.Control as="textarea" rows={3} {...sponsorRegister('sponsorDescription', { required: true })} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Sponsor
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminPortal;
