import { v4 as uuid } from "uuid";

import { useState } from "react";
import styled from "styled-components";

function App() {
  const [a, setA] = useState({
    show: true,
    list: [
      { rating: "5.0", name: "Horizon: Zero Dawn", id: uuid() },
      { rating: 4.7, name: "Witcher 3: Wild Hunt ", id: uuid() },
      { rating: 4.4, name: "Skrim V: Elder's Scroll", id: uuid() },
      { rating: 4.2, name: "Assassin's Creed: Valhalla", id: uuid() },
      { rating: "4.0", name: "Monster Hunter: World", id: uuid() },
    ],
  });
  const [b, setB] = useState({
    show: false,
    list: [
      { rating: 4.4, name: "No Man's Sky", id: uuid() },
      { rating: 4.3, name: "CyberPunk: 2077", id: uuid() },
      { rating: "4.0", name: "Life Is Strange", id: uuid() },
      { rating: 4, name: "Red Dead Redemption 2", id: uuid() },
      { rating: 3.9, name: "Spider-Man 2018", id: uuid() },
    ],
  });
  const [c, setC] = useState({
    show: false,
    list: [
      { rating: 4.9, name: "Counter Strike: Global Offensive", id: uuid() },
      { rating: 4.5, name: "Battlefield 1", id: uuid() },
      { rating: 4.3, name: "Call of Duty: Black Ops Cold War", id: uuid() },
      { rating: 3.7, name: "Valorant", id: uuid() },
      { rating: 3.5, name: "Destiny 2", id: uuid() },
    ],
  });

  // Event Hanlders

  const handleBtnClickA = () => {
    setA(prevState => {
      return {
        ...prevState,
        show: true,
      };
    });

    setB(prevState => {
      return {
        ...prevState,
        show: false,
      };
    });

    setC(prevState => {
      return {
        ...prevState,
        show: false,
      };
    });
  };

  const handleBtnClickB = () => {
    setA(prevState => {
      return {
        ...prevState,
        show: false,
      };
    });

    setB(prevState => {
      return {
        ...prevState,
        show: true,
      };
    });

    setC(prevState => {
      return {
        ...prevState,
        show: false,
      };
    });
  };

  const handleBtnClickC = () => {
    setA(prevState => {
      return {
        ...prevState,
        show: false,
      };
    });

    setB(prevState => {
      return {
        ...prevState,
        show: false,
      };
    });

    setC(prevState => {
      return {
        ...prevState,
        show: true,
      };
    });
  };

  return (
    <AppContainer>
      <h1>🎮 goodgames</h1>
      <p>Checkout my favorite games. Select a genre to get started.</p>
      <div className="options">
        <button
          style={{
            backgroundColor: a.show ? "#000" : "transparent",
            color: a.show ? "#fff" : "#000",
          }}
          onClick={handleBtnClickA}
        >
          Action Role-Playing
        </button>
        <button
          style={{
            backgroundColor: b.show ? "#000" : "transparent",
            color: b.show ? "#fff" : "#000",
          }}
          onClick={handleBtnClickB}
        >
          Adventure
        </button>
        <button
          style={{
            backgroundColor: c.show ? "#000" : "transparent",
            color: c.show ? "#fff" : "#000",
          }}
          onClick={handleBtnClickC}
        >
          First Person Shooter
        </button>
      </div>
      <Line></Line>
      <Output>
        {a.show && a.list.map(item => <Item item={item} />)}
        {b.show && b.list.map(item => <Item item={item} />)}
        {c.show && c.list.map(item => <Item item={item} />)}
      </Output>
    </AppContainer>
  );
}

export default App;

const Item = ({ item }) => {
  return (
    <ItemContainer key={item.id}>
      <h4>{item.name}</h4>
      <p>{item.rating}/5</p>
    </ItemContainer>
  );
};

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div`
  width: 50rem;
  height: 100vh;
  max-width: 96%;
  margin: auto;
  background-color: #fff;
  border: 0.1rem solid #000;
  border-radius: 3px;
  padding: 5rem 2.5rem;

  h1 {
    padding-bottom: 2rem;
  }

  .options {
    padding: 1rem 0;
    button {
      background-color: transparent;
      padding: 0.5rem 1rem;
      border-radius: 3px;
      border: 1px solid #000;
      margin-right: 1rem;
      cursor: pointer;
      &:hover {
        background-color: #000;
        color: #fff;
        /* border: none; */
        outline: none;
      }
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #ccc;
  margin-bottom: 1rem;
`;

const Output = styled.div``;

const ItemContainer = styled.div`
  line-height: 1.5;
  background-color: #f2f2f2;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  width: 50%;
`;
