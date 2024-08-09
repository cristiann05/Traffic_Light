import React, { useState } from 'react';
import '../../styles/index.css';

const Semaforos = () => {
    // Estado para el color seleccionado
    const [selected, setSelected] = useState('rojo'); // Inicialmente seleccionado el color rojo
    const [purpuraAdded, setPurpuraAdded] = useState(false); // Estado para verificar si el color púrpura ha sido añadido

    // Lista de colores del semáforo, incluyendo púrpura si ha sido añadido
    const colors = ['rojo', 'amarillo', 'verde', ...(purpuraAdded ? ['purpura'] : [])];

    // Maneja el clic en una luz
    const handleClick = (color) => {
        setSelected(color);
    };

    // Alterna el color seleccionado aleatoriamente entre los colores disponibles
    const handleChangeColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setSelected(randomColor);
    };

    // Añadir el color púrpura al semáforo
    const handleAddPurpura = () => {
        if (!purpuraAdded) {
            setPurpuraAdded(true);
        }
    };

    return (
        <div>
            <div className="estiloSemaforo">
                <div 
                    className={`semaforoRojo ${selected === 'rojo' ? 'whiteColor' : ''}`} // gracias ha este proyecto he aprendido a utilizar las clases en los ifs,  por ejemplo el  'whiteColor', para luego darle estilo en css
                    onClick={() => handleClick('rojo')}
                    style={{ backgroundColor: 'red' }}
                />
                <div 
                    className={`semaforoAmarillo ${selected === 'amarillo' ? 'whiteColor' : ''}`}
                    onClick={() => handleClick('amarillo')}
                    style={{ backgroundColor: 'yellow' }}
                />
                <div 
                    className={`semaforoVerde ${selected === 'verde' ? 'whiteColor' : ''}`}
                    onClick={() => handleClick('verde')}
                    style={{ backgroundColor: 'green' }}
                />
                {/* Agregar el color púrpura si está en la lista de colores */}
                {purpuraAdded && (
                    <div 
                        className={`semaforoPurpura ${selected === 'purpura' ? 'whiteColor' : ''}`}
                        onClick={() => handleClick('purpura')}
                        style={{ backgroundColor: '#8e44ad' }}
                    />
                )}
            </div>
            <button onClick={handleChangeColor} className="toggleButton">
                Alternar Color Aleatoriamente
            </button>
            <button onClick={handleAddPurpura} className="addPurpuraButton">
                Añadir Color Púrpura
            </button>
        </div>
    );
};

export default Semaforos;
