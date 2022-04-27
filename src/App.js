import React, { useState } from "react";
import KeyboardComponent from "./components/Keyboard/KeyboardComponent";
export const TelefonoContext = React.createContext();
function App() {
  return (
    <>
      <div className="container">
        <span className="message">Calling...</span>
        <main className="phone">
          <KeyboardComponent />
          <div className="actions">
            <span className="number">667359961</span>
            <a href>Call</a>
            <a href>Hang</a>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
