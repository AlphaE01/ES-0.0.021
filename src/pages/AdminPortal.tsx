import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type LoginForm = {
  username: string;
  password: string;
};

const AdminPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    // In a real application, you would validate credentials against a backend
    if (data.username === 'adpengineering' && data.password === 'TaylorsADP2024!') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  // ... rest of the component remains the same
};

export default AdminPortal;