import ContactCard from './ContactCard';

const ContactList = ({ contacts, onNotification, favoriteIds, onToggleFavorite, onDeleteContact, onEditContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onNotification={onNotification}
          isFavorite={favoriteIds.includes(contact.id)}
          onToggleFavorite={onToggleFavorite}
          onDeleteContact={onDeleteContact}
          onEditContact={onEditContact}
        />
      ))}
    </div>
  );
};

export default ContactList;