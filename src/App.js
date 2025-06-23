import React, { useState } from "react";

export default function App() {
  const [showClue, setShowClue] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Happy Birthday! 🎉</h1>

      <p style={styles.text}>
        There’s one thing you’ve talked about getting for ages…<br />
        I figured it’s finally time we made it happen!<br />
        But I didn’t buy it yet — because comfort like that?<br />
        Only <em>you</em> can pick it right 😌
      </p>

      <button style={styles.button} onClick={() => setShowClue(!showClue)}>
        {showClue ? "Hide Clue" : "Show Clue"}
      </button>

      {showClue && (
        <p style={styles.clue}>
          Clue: It’s the chair you’ll never want to get up from 😉
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "50px auto",
    padding: 20,
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    border: "2px solid #f0c040",
    borderRadius: 10,
    boxShadow: "0 4px 10px rgba(240,192,64,0.3)",
    backgroundColor: "#fffbe6",
  },
  title: {
    color: "#d97706",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 1.5,
    marginBottom: 20,
  },
  button: {
    padding: "10px 20px",
    fontSize: 16,
    cursor: "pointer",
    backgroundColor: "#f0c040",
    border: "none",
    borderRadius: 5,
    color: "#5a3e01",
  },
  clue: {
    marginTop: 20,
    fontStyle: "italic",
    fontSize: 16,
    color: "#b45309",
  },
};