import React, { useState } from 'react';

export default function Message() {
  const [showClue, setShowClue] = useState(false);

  return (
    <div style={styles.container}>
      <h2>Here’s Your Gift 🎁</h2>
      <p>
        Remember the one thing you've always wanted but never bought?<br />
        Well, I didn’t get mine either.<br />
        Because this time, <strong>yours comes first</strong> ❤️<br />
        We'll choose it together – for your comfort!
      </p>
      <button style={styles.button} onClick={() => setShowClue(!showClue)}>
        {showClue ? "Hide Clue" : "Show Clue"}
      </button>
      {showClue && (
        <p style={styles.clue}>Clue: It's where comfort meets dreams — and probably naps too 😉</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: '100px auto',
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Georgia, serif'
  },
  button: {
    padding: '10px 20px',
    fontSize: 16,
    backgroundColor: '#fbbf24',
    border: 'none',
    borderRadius: 5,
    marginTop: 20,
    cursor: 'pointer'
  },
  clue: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#92400e'
  }
};