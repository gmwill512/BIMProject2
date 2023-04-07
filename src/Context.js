import React, { createContext, useState } from 'react';

export const Store = createContext();

export const MyContextProvider = (props) => {
  const [Button1, setButton1] = useState(true);
  const [Button2, setButton2] = useState(true);
  const [Button3, setButton3] = useState(true);
  

  return (
    <Store.Provider value={{ Button1, setButton1, Button2, setButton2, Button3, setButton3 }}>
      {props.children}
    </Store.Provider>
  );
};


