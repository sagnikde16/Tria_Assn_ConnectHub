# ConnectHub – Your Modern Contact Manager

ConnectHub is a sleek and modern contact manager built with React. It’s designed to help you organize and access your contacts quickly while offering a beautiful, interactive interface. With features like searching, adding, and favoriting contacts, ConnectHub is perfect for both personal and professional use.

---

## Features

### Contact Management
- **Add Contacts**: Easily add new contacts with name, phone number, and avatar.  
- **Search**: Quickly find contacts using the live search bar.  
- **Remove Contacts**: Delete contacts you no longer need.  
- **Interactive Cards**: Each contact card has smooth hover animations and interactive elements.

### Favorite Contacts
- **Mark Favorites**: Click the golden star on a contact to add it to your favorites.  
- **Favorites Section**: All favorite contacts appear in a dedicated section below the search bar for quick access.  
- **Quick Actions**: Call or remove favorites directly from the favorites section.  
- **Session Persistence**: Favorites remain highlighted while using the app.

### Design & User Experience
- **Animated Gradient Background**: Purple-to-pink shifting gradient creates a dynamic and lively feel.  
- **Glassmorphism Cards**: Frosted glass effect with blur for forms and contact cards.  
- **Glowing Title**: Gradient title with floating animation and soft shadows.  
- **Responsive Layout**: Works beautifully on both desktop and mobile devices.  
- **Optimized Spacing**: Compact, visually pleasing layout without unnecessary blank space.

---

## Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/](https://github.com/)<your-username>/<repo-name>.git
    cd <repo-name>
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the app**
    ```bash
    npm start
    ```
    
The app should now open in your browser at `http://localhost:3000`.

## Usage
- Use the search bar to quickly filter contacts.
- Click “Add Contact” to create a new contact card.
- Click the star icon on a contact to mark/unmark it as a favorite.
- Favorites appear below the search bar for quick access.
- Hover over contact cards for interactive animations and quick action buttons.

## Folder Structure
```text
src/
├─ components/
│  ├─ ContactCard.jsx
│  ├─ ContactList.jsx
│  ├─ AddContactForm.jsx
│  ├─ FavoriteContacts.jsx
├─ data.js
├─ App.jsx
├─ App.css
```
## Technologies Used

- **React** – Frontend library for building the UI.  
- **CSS3** – Modern styling with gradients, glassmorphism, and animations.  
- **JavaScript (ES6+)** – App logic and interactivity.  

---

## Design Highlights

- Smooth animations for cards, buttons, and headers.  
- Vibrant purple-pink-blue gradient palette.  
- Glassmorphism and layered shadows for depth.  
- Fully responsive and visually engaging interface.  

---

## Future Improvements

- Persistent storage of contacts (e.g., localStorage or backend integration).  
- Dark/light theme toggle.  
- Contact categories or tags for better organization.  
