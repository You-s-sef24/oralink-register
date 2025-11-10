"use client";

const { createContext, useState } = require("react");

const CounterContext = createContext();

export default function CounterProvider({ children }) {
    const [counter, setCounter] = useState(1);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
}