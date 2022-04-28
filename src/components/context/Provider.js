import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [input, setInput] = useState("");

  const value = {
    input,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
