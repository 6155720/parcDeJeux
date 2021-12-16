import React, { useState, useRef } from 'react';
import dice1 from '../images/dice1.png';
import dice2 from '../images/dice2.png';
import dice3 from '../images/dice3.png';
import dice4 from '../images/dice4.png';
import dice5 from '../images/dice5.png';
import dice6 from '../images/dice6.png';

import './index.css';

function Dices() {
  const [result, setResult] = useState('Cliquer sur le bouton rouge pour jouer.');

  const user1 = useRef(null);
  const user2 = useRef(null);
  const resultDice = useRef(null);

  let diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const roll = () => {
    const firstRandomNum = Math.floor(Math.random() * 6);
    const secondRandomNum = Math.floor(Math.random() * 6);

    if (firstRandomNum > secondRandomNum) {
      setResult(`Vous avez gagner avec ${firstRandomNum + 1} points !`);

    } else if (firstRandomNum < secondRandomNum) {
      setResult(`Vous avez perdu... l'ordi à ${secondRandomNum + 1} points.`);

    } else {
      setResult(`- Match Null -`);

    }
    user1.current.setAttribute('src', diceImages[firstRandomNum]);
    user2.current.setAttribute('src', diceImages[secondRandomNum]);
  };

  const reset = () => {
    let diceUN = [dice1];
    user1.current.setAttribute('src', diceUN);
    user2.current.setAttribute('src', diceUN);
    setResult("Initialiser")
  };

  return (
    <>
      <div className='dice-wrapper'>
        <div className='dice-area'>
          <p>Vous</p>
          <img src={dice1} ref={user1} alt='Dice' />
        </div>

        <div className='dice-area'>
          <p>Ordi</p>
          <img src={dice1} ref={user2} alt='Dice' />
        </div>
      </div>

      <p className='result' ref={resultDice} style={{ textAlign: "center" }}>
        {result}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={roll} className='btn'>
          Brasser
        </button>
        &nbsp;&nbsp; &nbsp;&nbsp;

        <button onClick={reset} className='btn reset'>
          Initialiser
        </button>
      </div>
      <br />
    </>
  );
}

export default Dices;
