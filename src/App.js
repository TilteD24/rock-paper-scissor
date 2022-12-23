import React from "react";
import { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import rock from "./images/icon-rock.svg";
import scissor from "./images/icon-scissors.svg";
import paper from "./images/icon-spock.svg";
import Modal from "react-modal";
import close from "./images/icon-close.svg";
import rules from "./images/image-rules.svg";
import "./app.css";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    fontFamily: "sans-serif",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Rock = () => (
  <div
    className="btn"
    id="rock-btn"
    style={{
      backgroundColor: "whitesmoke",
      width: "150px",
      height: "150px",
      borderRadius: "100%",
      border: "25px solid blue",
    }}
  >
    <img style={{ margin: "50px 50px" }} src={rock} alt="rock" />
  </div>
);

const Scissor = () => (
  <div
    className="btn"
    id="scissor-btn"
    style={{
      backgroundColor: "whitesmoke",
      width: "150px",
      height: "150px",
      borderRadius: "100%",
      border: "25px solid yellow",
    }}
  >
    <img style={{ margin: "50px 50px" }} src={scissor} alt="scissors" />
  </div>
);

const Paper = () => (
  <div
    className="btn"
    id="paper-btn"
    style={{
      backgroundColor: "whitesmoke",
      width: "150px",
      height: "150px",
      borderRadius: "100%",
      border: "25px solid red",
      margin: "10px auto",
    }}
  >
    <img style={{ margin: "50px 50px" }} src={paper} alt="paper" />
  </div>
);

const Won = () => (
  <h2
    style={{
      marginTop: "100px",
      textAlign: "center",
      color: "whitesmoke",
    }}
  >
    YOU WON
  </h2>
);

const Lost = () => (
  <h2
    style={{
      marginTop: "100px",
      textAlign: "center",
      color: "whitesmoke",
    }}
  >
    YOU LOST
  </h2>
);

const Tie = () => (
  <h2
    style={{
      marginTop: "100px",
      textAlign: "center",
      color: "whitesmoke",
    }}
  >
    TIE
  </h2>
);

const Winner = ({ showResults, houseResults, changeScore, score }) => {
  // console.log(showResults + " at Winner");
  // console.log(houseResults + " at Winner call");

  if (showResults === houseResults) return <Tie />;
  if (showResults === "rock") {
    if (houseResults === "scissor") return <Won />;
    if (houseResults === "paper") return <Lost />;
  }
  if (showResults === "scissor") {
    if (houseResults === "rock") return <Lost />;
    if (houseResults === "paper") return <Won />;
  }
  if (showResults === "paper") {
    if (houseResults === "rock") return <Won />;
    if (houseResults === "scissor") return <Lost />;
  }
};

const Random = ({
  showResults,
  houseResults,
  setHouseResults,
  score,
  changeScore,
}) => {
  const [random, setRandom] = useState(false);
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 3 + 1));
  }, []);
  useEffect(() => {
    console.log(random);
    if (random === 1) {
      setHouseResults("rock"); // setHouseResults triggers rerender of component
    } else if (random === 2) {
      setHouseResults("scissor");
    } else {
      setHouseResults("paper");
    }
    if (random) {
      // console.log(showResults + " at Random");
      // console.log(houseResults + " at Random");

      if (showResults === "rock") {
        if (random === 2) changeScore(score + 1);
        else if (random === 3) changeScore(score - 1);
      }
      if (showResults === "scissor") {
        if (random === 1) changeScore(score - 1);
        else if (random === 3) changeScore(score + 1);
      }
      if (showResults === "paper") {
        if (random === 1) changeScore(score + 1);
        else if (random === 2) changeScore(score - 1);
      }
    }
  }, [random]);
  // console.log(random);
  //console.log(houseResults + " at Random");

  // useEffect(() => {
  //   console.log(houseResults + " at Random call");
  // });

  if (random === 1) return <Rock />;
  if (random === 2) return <Scissor />;
  return <Paper />;
};

const Options = ({ setShowResults }) => (
  <div id="options">
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        className="btn"
        id="rock-btn"
        style={{
          backgroundColor: "whitesmoke",
          width: "150px",
          height: "150px",
          borderRadius: "100%",
          border: "25px solid blue",
        }}
        onClick={() => {
          setShowResults("rock");
        }}
      >
        <img style={{ margin: "50px 50px" }} src={rock} alt="rock" />
      </div>
      <div
        className="btn"
        id="scissor-btn"
        style={{
          backgroundColor: "whitesmoke",
          width: "150px",
          height: "150px",
          borderRadius: "100%",
          border: "25px solid yellow",
        }}
        onClick={() => {
          setShowResults("scissor");
        }}
      >
        <img style={{ margin: "50px 50px" }} src={scissor} alt="scissors" />
      </div>
    </div>
    <div
      className="btn"
      id="paper-btn"
      style={{
        backgroundColor: "whitesmoke",
        width: "150px",
        height: "150px",
        borderRadius: "100%",
        border: "25px solid red",
        margin: "10px auto",
      }}
      onClick={() => {
        setShowResults("paper");
      }}
    >
      <img style={{ margin: "50px 50px" }} src={paper} alt="paper" />
    </div>
  </div>
);

const Results = ({ showResults, setShowResults, score, changeScore }) => {
  const [houseResults, setHouseResults] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "400px",
          marginRight: "400px",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            textAlign: "center",
            color: "white",
            letterSpacing: "1px",
          }}
        >
          <h4>YOU PICKED</h4>
          {showResults === "rock" ? (
            <Rock />
          ) : showResults === "scissor" ? (
            <Scissor />
          ) : (
            <Paper />
          )}
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            textAlign: "center",
            letterSpacing: "1px",
            color: "white",
          }}
        >
          <h4>HOUSE PICKED</h4>
          <Random
            showResults={showResults}
            houseResults={houseResults}
            setHouseResults={setHouseResults}
            score={score}
            changeScore={changeScore}
          />
        </div>
      </div>
      <div>
        <Winner
          showResults={showResults}
          houseResults={houseResults}
          changeScore={changeScore}
          score={score}
        />
        <button
          style={{
            display: "block",
            margin: "0px auto",
            width: "150px",
            height: "50px",
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
          onClick={() => {
            setShowResults(false);
            setHouseResults(false);
          }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "red",
            }}
          >
            PLAY AGAIN
          </h3>
        </button>
      </div>
    </>
  );
};

const App = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, changeScore] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", width: "800px", margin: "0 auto" }}>
        <div
          id="board"
          style={{
            marginTop: "40px",
            marginBottom: "40px",

            width: "700px",
            height: "150px",
            border: "3px solid white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ margin: "30px", color: "whitesmoke" }}>
            <img src={logo} alt="" />
          </div>

          <div
            style={{
              backgroundColor: "white",
              margin: "15px",
              width: "120px",
              height: "120px",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <h4
              style={{
                color: "darkblue",
                fontSize: "15px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              SCORE
            </h4>
            <h2
              id="score"
              style={{ margin: "0px", fontSize: "36px", color: "darkviolet" }}
            >
              {score}
            </h2>
          </div>
        </div>
        <button
          className="btn"
          style={{
            backgroundColor: "blueviolet",
            height: "40px",
            width: "80px",
            border: "3px solid white",
            borderRadius: "5px",
            letterSpacing: "2px",
            marginTop: "150px",
            marginLeft: "20px",
            marginRight: "auto",
            color: "white",
          }}
          onClick={openModal}
        >
          RULES
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ color: "darkgray" }}>RULES</h2>
            <button
              onClick={closeModal}
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "none",
                marginTop: "20px",
              }}
            >
              <img src={close} alt="" />
            </button>
          </div>
          <img src={rules} alt="" />
        </Modal>
      </div>

      {showResults ? (
        <Results
          showResults={showResults}
          setShowResults={setShowResults}
          score={score}
          changeScore={changeScore}
        />
      ) : (
        <Options setShowResults={setShowResults} />
      )}
    </div>
  );
};

export default App;
