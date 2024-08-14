import { useState, useEffect } from "react";
import FetchCharaters from "./FetchCharaters";
import Model from "./Model";
import Header from "./Header";
import "../styles/Card.css";

export default function Card() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchCharaters = async () => {
      const characters = await FetchCharaters();
      setCards(characters.slice(0, 8));
    };
    fetchCharaters();
  }, []);
  const Shuffel = () => {
    const Shuffeled = cards.sort(() => Math.random() - 0.8);
    setCards(Shuffeled);
  };

  const handleClick = (id) => {
    if (selectedCards.includes(id)) {
      setScore(0);
      setSelectedCards([]);
      setResult("you Lost! try again!, better luck next time");
    } else {
      setSelectedCards([...selectedCards, id]);
      const newScore = score + 1;
      setScore(newScore);
      if (score > bestScore) {
        setBestScore(score);
      }
      if (selectedCards.length === cards.length) {
        setScore(0);
        setSelectedCards([]);
        setResult("you won the game!!! congrats ");
      }
    }

    Shuffel();
  };
  return (
    <div className="body">
      <Header score={score} bestScore={bestScore}></Header>
      {result && (
        <Model result={result} closeModal={() => setResult("")}></Model>
      )}
      <div className="cards">
        {cards.map((char) => (
          <div
            key={char.id}
            onClick={() => handleClick(char.id)}
            className="card"
          >
            <img src={char.imageUrl} alt={char.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
