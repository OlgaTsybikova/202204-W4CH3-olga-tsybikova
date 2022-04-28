import { useContext } from "react";
import Context from "../context/Context";

const DisplayComponent = () => {
  const { numbers } = useContext(Context);
  return (
    <span className="number">
      {numbers} <input type="numbers" maxLength={9} />
    </span>
  );
};
export default DisplayComponent;
