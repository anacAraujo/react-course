import React, { useState } from 'react';
import ConsumoForm from './consumoForm';
import ConsumoChart from './consumoChart';

function DisplayConsumo() {
  const [consumos, setConsumos] = useState([]);

  const handleConsumoSubmit = (consumo) => {
    setConsumos([...consumos, consumo]);
  };

  return (
    <div className="App">
      <h1>Controle de Consumo de Combustível</h1>
      <ConsumoForm onConsumoSubmit={handleConsumoSubmit} />
      <ConsumoChart data={consumos} />
    </div>
  );
}

export {DisplayConsumo};