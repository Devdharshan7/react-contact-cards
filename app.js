const { useState } = React;

// Card component receiving props and managing like state
function Card({ title }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={`card ${isLiked ? 'card-liked' : ''}`}>
      <h3 className="card-title">{title}</h3>

      {/* Liked / Not Liked label */}
      <span className={`status-label ${isLiked ? 'label-liked' : 'label-unliked'}`}>
        {isLiked ? '❤️ Liked' : '🤍 Not liked'}
      </span>

      {/* Toggle button */}
      <button
        className={`like-button ${isLiked ? 'btn-unlike' : 'btn-like'}`}
        onClick={handleToggleLike}
      >
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
}

// App component passing props to cards
function App() {
  const titles = [
    'Learn React Basics',
    'Mastering useState Hook',
    'Understanding Props in React',
    'Building Reusable Components'
  ];

  return (
    <div className="app-container">
      <h1>React Card Like System</h1>
      <div className="card-grid">
        {titles.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    </div>
  );
}

// Render root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);