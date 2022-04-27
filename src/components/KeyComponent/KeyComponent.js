const KeyComponent = ({ text, className }) => {
  return (
    <li>
      <button className={className}>{text}</button>
    </li>
  );
};
export default KeyComponent;
