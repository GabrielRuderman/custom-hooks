import { useState } from 'react';

export const useCounter = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);
    
    const reset = (valor = initialState) => setCounter(valor);
    const increment = (factor = 1) => setCounter(counter + factor);
    const decrement = (factor = 1) => setCounter(counter - factor);

    return {
        counter,
        increment,
        reset,
        decrement
    };
}