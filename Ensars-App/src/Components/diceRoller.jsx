import { useState } from "react";
import { useNavigate } from "react-router-dom";
import one from "../Assets/One.png";
import two from "../Assets/Two.png";
import three from "../Assets/Three.png";
import four from "../Assets/Four.png";
import five from "../Assets/Five.png";
import six from "../Assets/Six.png";

export const DiceRoller = () => {
  const [roll, setRoll] = useState(0);

  const rollDice = () => {
    setRoll(Math.floor(Math.random() * 6) + 1);
  };
  
  const Navigate = useNavigate();
  
  let rollValue;
  let rollImage;
  switch (roll) {
    case 1:
      rollImage = one;
      rollValue = "You rolled a 1";
      break;
    case 2:
      rollImage = two;
      rollValue = "You rolled a 2";
      break;
    case 3:
      rollImage = three;
      rollValue = "You rolled a 3";
      break;
    case 4:
      rollImage = four;
      rollValue = "You rolled a 4";
      break;
    case 5:
      rollImage = five;
      rollValue = "You rolled a 5";
      break;
    case 6:
      rollImage = six;
      rollValue = "You rolled a 6";
      break;
  }

  return (
    <div>
      <h1>Ensar's Dice Roller</h1>
      <button onClick={rollDice}>Roll</button>
      <h1>{rollValue}</h1>
      <img src={rollImage} style={{ width: "100px" }} />
      <div>
        <button onClick={() => Navigate("/")}>Return Home</button>
      </div>
    </div>
  );
};
