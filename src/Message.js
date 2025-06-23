import React, { useState } from 'react';

export default function Message() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div style={styles.container}>
      <h2>Here’s Your Gift 🎁</h2>
      <p>
        There’s something you’ve mentioned so many times…
    </br>A little dream of yours that kept getting postponed for one reason or another.
      </br>This year, I thought it’s finally time to make it happen!
      </br></br>
  But I didn’t want to choose it on my own —
because only you can decide what comfort truly feels like.
  </br></br>
  Can you guess what the gift is? 😉
      </p>
      <button style={styles.button} onClick={() => setShowGift(!showGift)}>
        {showGift ? "Hide Gift" : "Show Gift"}
      </button>
      {showGift && (
        <div style={{ marginTop: 20 }}>
          <img
            src="https://raw.githubusercontent.com/svshilna/birthday-gift/main/images/recliner.png"
            alt="Recliner"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 10,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
          />
        </div>
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
