"use client";
import React, { createContext, useState } from 'react';

export const StoreContext = createContext()

export default function StoreContextProvider({ children }) {
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <StoreContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </StoreContext.Provider>
    );
}