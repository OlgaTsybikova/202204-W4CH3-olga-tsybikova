import keys from "../../data/keys";
import KeyComponent from "../KeyComponent/KeyComponent";

const KeyboardComponent = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keys.map((key, index) => (
          <KeyComponent
            key={index}
            className={typeof key === "string" ? "key big" : "key"}
            text={key}
          />
        ))}
      </ol>
    </div>
  );
};
export default KeyboardComponent;
