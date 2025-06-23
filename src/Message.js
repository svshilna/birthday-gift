import React, { useState } from 'react';

export default function Message() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div style={styles.container}>
      <h2>Here’s Your Gift 🎁</h2>
      <p>
        Remember the one thing you've always wanted but never bought?<br />
        Well, I didn’t get mine either.<br />
        Because this time, <strong>yours comes first</strong> ❤️<br />
        We'll choose it together – for your comfort!
      </p>
      <button style={styles.button} onClick={() => setShowGift(!showGift)}>
        {showGift ? "Hide Gift" : "Show Gift"}
      </button>
      {showGift && (
        <img
          src="https://raw.githubusercontent.com/svshilna/birthday-gift/main/images/recliner.png"
          alt="Recliner"
          style={{
            marginTop: 20,
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 10,
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        />
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
  }
};
