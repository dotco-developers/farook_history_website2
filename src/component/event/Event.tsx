// components/Carousel.js
// components/Carousel.js
"use client"
import { useState } from 'react';
import styles from './event.module.css';

const Carousel = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleClick = (index) => {
    setSelectedCard(index);
  };

  const cards = [
    { id: 0, text: 'Card 1' },
    { id: 1, text: 'Card 2' },
    { id: 2, text: 'Card 3' },
  ];

  const renderCards = () => {
    return cards.map((card, index) => (
      <div
        key={card.id}
        className={`${styles.card} ${
          selectedCard === index ? styles.selected : ''
        }`}
        onClick={() => handleClick(index)}
        style={{
          transform: `rotateY(${(index - selectedCard) * 120}deg) translateZ(200px)  `,
        }}
      >
        {card.text}
      </div>
    ));
  };

  return <div className={styles.carousel}>{renderCards()}</div>;
};

export default Carousel;
