import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = useState(initialValue);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                const parsedItem = JSON.parse(localStorage.getItem(itemName)) || initialValue;
                setItem(parsedItem);
                setCargando(false);
            } catch (error) {
                console.error('Ocurrio un error: ', error);
                setCargando(false);
                setError(true);
            }
        }, 2000);
    }, [])

    const saveItem = (newItem, nameItem = 'todos_v1') => {
        setItem(newItem);
        localStorage.setItem(nameItem, JSON.stringify(newItem));
    }

    return { item, saveItem, cargando, error };
}