import "../styles/Header.css";

const Header = ({ score, bestScore }) => {
  return (
    <header className="header">
      <h1>Memory Card</h1>
      <p>
        The images will shuffle after each selection. Try to select each image
        only once!
      </p>
      <div className="score-board">
        <div className="score-item">
          <span className="score-label">Score:</span>
          <span className="score-value">{score}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Best Score:</span>
          <span className="score-value">{bestScore}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
