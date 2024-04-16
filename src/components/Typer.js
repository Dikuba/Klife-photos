import React from 'react';
import { Typewriter } from 'typewriting-react';

function Typer({ color }) {
    return (
      <div>
        <Typewriter
          options={{
            strings: [
              "A picture is worth a thousand words",
              "Every moment of your life is beautiful",
              "Capture life's priceless moments",
              "WE ARE KLIFE Photos",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
          style={{ color: color, fontSize: '2rem', textAlign: 'center' }} // Apply the color and other styles
        />
      </div>
    );
  }

export default Typer;
