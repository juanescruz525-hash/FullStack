import React from 'react';

const Hero = ({ title = 'Bienvenidos', buttonText = 'Iniciar', onStart }) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <button onClick={onStart}>{buttonText}</button>
      </div>
    </section>
  );
};

export default Hero;