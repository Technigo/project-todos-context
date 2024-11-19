import { useButton } from "../context/ButtonContext";
import "../styling/ButtonActions.css";

const ButtonActions = () => {
  const { onCompleteAll, onRemoveAll } = useButton();

  const handleCompleteAll = () => {
    onCompleteAll();
  };

  const handleRemoveAll = () => {
    onRemoveAll();
  };

  return (
    <div className="actionsContainer">
      <button onClick={handleCompleteAll} className="completeAllButton">
        Complete All
      </button>
      <button onClick={handleRemoveAll} className="removeAllButton">
        Remove All
      </button>
    </div>
  );
};

export default ButtonActions;
