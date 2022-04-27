import React, { useState } from "react";
import KeyboardComponent from "./components/Keyboard/KeyboardComponent";
export const TelefonoContext = React.createContext();
function App() {
  const [iscalling, setIsCalling] = useState(false);
  return (
    <>
      <TelefonoContext.Provider value={iscalling}>
        <div className="container">
          <span className="message">Calling...</span>
          <main className="phone">
            <div className="keyboard-container">
              <KeyboardComponent />
            </div>
            <div className="actions">
              <span className="number">667359961</span>
              <a href>Call</a>
              <a href>Hang</a>
            </div>
          </main>
        </div>
      </TelefonoContext.Provider>
    </>
  );
}

export default App;
