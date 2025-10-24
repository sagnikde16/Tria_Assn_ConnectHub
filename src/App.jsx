import { useState, useEffect } from 'react';
import { initialContacts } from './data';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContactForm from './components/AddContactForm';
import FavoriteContacts from './components/FavoriteContacts';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [isSearching, setIsSearching] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
    }
    
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setIsSearching(false);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts
    .filter(contact => 
      contact.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const showNotification = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleAddContact = (newContact) => {
    setIsAdding(true);
    
    setTimeout(() => {
      const contactWithId = {
        ...newContact,
        id: Date.now(),
      };
      
      setContacts([...contacts, contactWithId]);
      setIsAdding(false);
      showNotification(`✅ ${newContact.name} added successfully!`, 'success');
    }, 1500);
  };
  
  const handleToggleFavorite = (contactId) => {
    setFavoriteIds(prev => {
      if (prev.includes(contactId)) {
        const contact = contacts.find(c => c.id === contactId);
        showNotification(`⭐ ${contact.name} removed from favorites`, 'info');
        return prev.filter(id => id !== contactId);
      } else {
        const contact = contacts.find(c => c.id === contactId);
        showNotification(`⭐ ${contact.name} added to favorites!`, 'success');
        return [...prev, contactId];
      }
    });
  };

  const handleCallContact = (contact) => {
    showNotification(`📞 Calling ${contact.name}...`, 'info');
  };

  return (
    <div className="app-container">
      <h1>Contact Manager</h1>
      
      {isAdding && (
        <div className="loading-overlay">
          <div className="loading-content">
            <div className="spinner"></div>
            <p className="loading-text">Connecting with your smartphone...</p>
          </div>
        </div>
      )}
      
      {showToast && (
        <div className={`toast-notification toast-${toastType}`}>
          <div className="toast-content">
            <span className="toast-icon">
              {toastType === 'success' && '✓'}
              {toastType === 'info' && 'ℹ'}
              {toastType === 'error' && '✕'}
            </span>
            <span className="toast-message">{toastMessage}</span>
            <button 
              className="toast-close"
              onClick={() => setShowToast(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      <div className="form-search-container">
        <div className="form-wrapper">
          <AddContactForm 
            onAddContact={handleAddContact}
            isLoading={isAdding}
          />
        </div>
        
        <div className="search-wrapper">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={handleSearchChange} 
          />
          
          {isSearching && (
            <div className="search-loading">
              <div className="search-spinner"></div>
              <span>🔍 Searching in database...</span>
            </div>
          )}
          
          {!isSearching && !debouncedSearchTerm && (
            <FavoriteContacts
              favorites={favoriteIds}
              contacts={contacts}
              onCallContact={handleCallContact}
              onRemoveFavorite={handleToggleFavorite}
            />
          )}
          
          {!isSearching && filteredContacts.length === 0 && debouncedSearchTerm && (
            <div className="empty-state-inline">
              <div className="empty-state-icon">📭</div>
              <div className="empty-state-text">
                <h4>None in your contacts</h4>
                <p>No contacts match your search.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <ContactList 
        contacts={filteredContacts} 
        onNotification={showNotification}
        favoriteIds={favoriteIds}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;