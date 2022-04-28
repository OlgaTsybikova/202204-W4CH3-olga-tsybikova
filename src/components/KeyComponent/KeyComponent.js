import { useContext } from "react";
import Context from "../context/Context";

const KeyComponent = ({ text, className }) => {
  const { isCalling } = useContext(Context);
  return (
    <li>
      <button
        className={`key${text === "DELETE" ? " big" : ""}`}
        disabled={isCalling}
      >
        {text}
      </button>
    </li>
  );
};
export default KeyComponent;
