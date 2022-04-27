import React, { useState } from "react";
import KeyboardComponent from "./components/Keyboard/KeyboardComponent";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import Context from "./components/context/Context";
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
              <span className="number">667359961</span>
              <a href>Call</a>
              <a href>Hang</a>
            </div>
          </main>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
