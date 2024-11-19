/*import { createContext, useContext, useState, useEffect } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(function (prevCount) {
            return (prevcount += 1);

        })
    }
}

return (
    <CountContext.Provider
    value={{
      count,
      setCount,
      increment,
    }}>
    {children}
  </CountContext.Provider>
);


const useCount = () => useContext(CountContext);/*