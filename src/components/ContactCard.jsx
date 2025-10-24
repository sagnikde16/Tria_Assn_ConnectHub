import { useState } from 'react';

const ContactCard = ({ contact, onNotification, isFavorite, onToggleFavorite }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleCall = (e) => {
    e.stopPropagation();
    onNotification(`📞 Calling ${contact.name}...`, 'info');
  };

  const handleVideoCall = (e) => {
    e.stopPropagation();
    onNotification(`📹 Starting video call with ${contact.name}...`, 'info');
  };

  const handleMessage = (e) => {
    e.stopPropagation();
    onNotification(`💬 Opening messages with ${contact.name}...`, 'info');
  };

  const handleHistory = (e) => {
    e.stopPropagation();
    onNotification(`📜 Viewing call history with ${contact.name}...`, 'info');
  };

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    onToggleFavorite(contact.id);
  };

  return (
    <div className={`contact-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="contact-card-main" onClick={() => setIsExpanded(!isExpanded)}>
        <div 
          className="contact-avatar"
          style={{ background: getAvatarColor(contact.name) }}
        >
          <span className="avatar-initials">{getInitials(contact.name)}</span>
        </div>
        
        <div className="contact-info">
          <h3>{contact.name}</h3>
          <p>
            <span>📱</span>
            {contact.phone}
          </p>
          {contact.email && (
            <p>
              <span>📧</span>
              {contact.email}
            </p>
          )}
        </div>

        <button 
          className={`favorite-star-btn ${isFavorite ? 'is-favorite' : ''}`}
          onClick={handleFavoriteToggle}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </button>
        
        <button className="call-icon-always" onClick={handleCall}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="contact-actions">
          <div className="action-icon video-icon" onClick={handleVideoCall}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
            <span>Video</span>
          </div>

          <div className="action-icon message-icon" onClick={handleMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Message</span>
          </div>

          <div className="action-icon history-icon" onClick={handleHistory}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>History</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;