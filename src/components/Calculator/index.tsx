import React, { useState } from "react";

type CalculatorProps = {};

type DisplayProps = {
  value: string;
};

type KeypadProps = {
  numClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  commaClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  signClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  equalsClickHandler: () => void;
  clearClickHandler: () => void;
};

const Calculator: React.FC<CalculatorProps> = () => {
  const [num, setNum] = useState<string>("");
  const [sign, setSign] = useState<string>("");
  const [res, setRes] = useState<string>("");

  const numClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;
    setNum((prevState) => prevState + value);
  };

  const commaClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    setNum((prevState) =>
      !prevState.toString().includes(".") ? prevState + value : prevState
    );
  };

  const signClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    setRes(num);
    setSign(value);
    setNum("");
  };

  const equalsClickHandler = () => {
    if (res === "" || num === "") return;
    let result = 0;
    switch (sign) {
      case "+":
        result = parseFloat(res) + parseFloat(num);
        break;
      case "-":
        result = parseFloat(res) - parseFloat(num);
        break;
      case "*":
        result = parseFloat(res) * parseFloat(num);
        break;
      case "/":
        result = parseFloat(res) / parseFloat(num);
        break;
      default:
        result = parseFloat(num);
    }

    setNum(result.toString());
    setSign("");
    setRes("");
  };

  const clearClickHandler = () => {
    setNum("");
    setSign("");
    setRes("");
  };

  return (
    <div className="calculator">
      <Display value={num} />
      <Keypad
        numClickHandler={numClickHandler}
        commaClickHandler={commaClickHandler}
        signClickHandler={signClickHandler}
        equalsClickHandler={equalsClickHandler}
        clearClickHandler={clearClickHandler}
      />
    </div>
  );
};

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <input type="text" className="display" value={value} disabled />;
};

const Keypad: React.FC<KeypadProps> = ({
  numClickHandler,
  commaClickHandler,
  signClickHandler,
  equalsClickHandler,
  clearClickHandler,
}) => {
  return (
    <div className="keypad">
      <button onClick={numClickHandler}>1</button>
      <button onClick={numClickHandler}>2</button>
      <button onClick={numClickHandler}>3</button>
      <br />
      <button onClick={numClickHandler}>4</button>
      <button onClick={numClickHandler}>5</button>
      <button onClick={numClickHandler}>6</button>
      <br />
      <button onClick={numClickHandler}>7</button>
      <button onClick={numClickHandler}>8</button>
      <button onClick={numClickHandler}>9</button>
      <br />
      <button onClick={numClickHandler}>0</button>
      <button onClick={commaClickHandler}>.</button>
      <button onClick={signClickHandler}>+</button>
      <br />
      <button onClick={signClickHandler}>-</button>
      <button onClick={signClickHandler}>*</button>
      <button onClick={signClickHandler}>/</button>
      <br />
      <button onClick={equalsClickHandler}>=</button>
      <button onClick={clearClickHandler}>C</button>
    </div>
  );
};

export default Calculator;