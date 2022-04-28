import React, { useState } from "react";
import KeyboardComponent from "./components/Keyboard/KeyboardComponent";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import Context from "./components/context/Context";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import keys from "./data/keys";

function App() {
  const [isCalling, setIsCalling] = useState(false);
  return (
    <>
      <Context.Provider value={isCalling}>
        <div className="container">
          <InfoComponent isCalling={isCalling} />
          <main className="phone">
            <div className="keyboard-container">
              <KeyboardComponent isCalling={isCalling} />
            </div>
            <div className="actions">
              <DisplayComponent {...Context} />
              <a href="#" className="call">
                Call
              </a>
              <a href="#" className="hang active">
                Hang
              </a>
            </div>
          </main>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
