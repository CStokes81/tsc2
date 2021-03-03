import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    //This remembers the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    //This controls the interval in which the tetromino moves with a slight delay
    useEffect (() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}