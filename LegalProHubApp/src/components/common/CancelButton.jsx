import { MdCancel } from "react-icons/md";
import { loginsignupactions } from "../../store/LoginSignUpSlice";
import { useDispatch } from "react-redux";
const CancelButton = () => {
  const dispatch = useDispatch();
  const handleCancelButton = () => {
    dispatch(loginsignupactions.cancelModal());
  };
  return <MdCancel onClick={handleCancelButton} className="cancelIcon" />;
};
export default CancelButton;
