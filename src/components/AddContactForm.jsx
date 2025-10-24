import React, { useState } from 'react';

function AddContactForm({ onAddContact, isLoading }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert('Name is required.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    if (email && !emailRegex.test(email)) {
      alert('Email must be a valid @gmail.com address.');
      return;
    }

    onAddContact({ name, phone, email });

    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form className="add-contact-form" onSubmit={handleSubmit}>
      <h3>Add New Contact</h3>
      
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      
      <input
        type="tel"
        placeholder="Phone (10 digits)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={isLoading}
      />
      
      <input
        type="email"
        placeholder="Email (Optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <span className="button-spinner"></span>
            Adding...
          </>
        ) : (
          'Add Contact'
        )}
      </button>
    </form>
  );
}

export default AddContactForm;
