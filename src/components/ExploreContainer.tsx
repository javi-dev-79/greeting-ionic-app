import './ExploreContainer.css';
import React, { useState } from 'react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [name, setName] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const askForName = () => {
    const enteredName = prompt("What's your name?");
    if (enteredName) {
      setName(enteredName);
      setShowMessage(true);
    }
  };

  const deleteMessage = () => {
    setShowMessage(false);
  };

  return (
    <div
      id="container"
      style={{
        background: 'linear-gradient(135deg, #8a2be2, #ff69b4)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <strong
        style={{
          marginBottom: '20px',
          fontSize: '22px',
          color: 'white',
        }}
      >
        Greeting APP
      </strong>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button
          onClick={askForName}
          style={{
            marginBottom: '20px',
            display: 'block',
            padding: '10px',
            backgroundColor: 'lavender',
            color: 'purple',
            borderRadius: '5px', // Añadido el border-radius
            border: 'none',
            cursor: 'pointer',
            width: '80px',
          }}
        >
          Greeting
        </button>
        {showMessage && (
          <div>
            <p style={{ marginTop: '20px', color: 'white', fontSize: '18px' }}>
            <strong>Hola {name}</strong> 
              </p>
            <button
              onClick={deleteMessage}
              style={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: 'lavender',
                color: 'purple',
                borderRadius: '5px', // Añadido el border-radius
                border: 'none',
                cursor: 'pointer',
                width: '80px',
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreContainer;
