import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card>
        <h2>Tarea 1</h2>
        <p>tarea 1</p>
        <p><strong>Asignado a:</strong> Persona 1</p>
        <p><strong>Fecha Inicio:</strong> 2024-09-01</p>
        <p><strong>Fecha Fin:</strong> 2024-09-15</p>
      </Card>
      <Card>
        <h2>Tarea 2</h2>
        <p>tarea 2</p>
        <p><strong>Asignado a:</strong> Persona 2</p>
        <p><strong>Fecha Inicio:</strong> 2024-09-05</p>
        <p><strong>Fecha Fin:</strong> 2024-09-20</p>
      </Card>
      <Card>
        <h2>Tarea 3</h2>
        <p>tarea 3</p>
        <p><strong>Asignado a:</strong> Persona 3</p>
        <p><strong>Fecha Inicio:</strong> 2024-09-10</p>
        <p><strong>Fecha Fin:</strong> 2024-09-25</p>
      </Card>
    </div>
  );
};

export default App;
