import { useState } from 'react';

export const useToggle = (initialVal = false) => {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState((prev) => !prev);
    };

    // return [state, toggle];
    return { state, toggle }
};

/*
    If you want to set your own var name, return an array
    If you want to set same name as hooks, return an object
*/