const InfoComponent = ({ isCalling }) => {
  return (
    <span data-testid="info" className={`message${isCalling ? "" : " off"}`}>
      Calling...
    </span>
  );
};
export default InfoComponent;
