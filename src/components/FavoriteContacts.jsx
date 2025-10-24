import React from 'react';

const FavoriteContacts = ({ favorites, contacts, onCallContact, onRemoveFavorite }) => {
  if (favorites.length === 0) {
    return null;
  }

  const favoriteContactsList = contacts.filter(contact => 
    favorites.includes(contact.id)
  );

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name) => {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <span className="favorites-icon">⭐</span>
        <h3>Favorite Contacts</h3>
        <span className="favorites-count">{favoriteContactsList.length}</span>
      </div>
      
      <div className="favorites-list">
        {favoriteContactsList.map(contact => (
          <div key={contact.id} className="favorite-item">
            <div 
              className="favorite-avatar"
              style={{ background: getAvatarColor(contact.name) }}
            >
              <span className="favorite-initials">{getInitials(contact.name)}</span>
            </div>
            <div className="favorite-info">
              <p className="favorite-name">{contact.name}</p>
            </div>
            <div className="favorite-actions">
              <button
                className="favorite-call-btn"
                onClick={() => onCallContact(contact)}
                title="Call"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>
              <button
                className="favorite-remove-btn"
                onClick={() => onRemoveFavorite(contact.id)}
                title="Remove from favorites"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;