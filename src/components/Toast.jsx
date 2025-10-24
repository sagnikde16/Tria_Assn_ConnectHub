import React from 'react';

function Toast({ message, type = 'success', onClose }) {
  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          icon: '✓',
          iconBg: 'rgba(255, 255, 255, 0.3)',
        };
      case 'error':
        return {
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          icon: '✕',
          iconBg: 'rgba(255, 255, 255, 0.3)',
        };
      case 'info':
        return {
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
          icon: 'ℹ',
          iconBg: 'rgba(255, 255, 255, 0.3)',
        };
      default:
        return {
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          icon: '✓',
          iconBg: 'rgba(255, 255, 255, 0.3)',
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div className="toast-notification">
      <div className="toast-content" style={{ background: styles.background }}>
        <span className="toast-icon" style={{ backgroundColor: styles.iconBg }}>
          {styles.icon}
        </span>
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}

export default Toast;
