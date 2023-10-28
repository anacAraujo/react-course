import React, { useState } from 'react';

const ConsumoForm = ({ onConsumoSubmit }) => {
  const [quilometros, setQuilometros] = useState('');
  const [combustivel, setCombustivel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConsumoSubmit({ quilometros, combustivel });
    setQuilometros('');
    setCombustivel('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quilômetros"
          value={quilometros}
          onChange={(e) => setQuilometros(e.target.value)}
        />
        <input
          type="text"
          placeholder="Combustível (litros)"
          value={combustivel}
          onChange={(e) => setCombustivel(e.target.value)}
        />
        <button type="submit">Adicionar Consumo</button>
      </form>
    </div>
  );
};

export default ConsumoForm;
