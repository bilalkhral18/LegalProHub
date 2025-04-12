import { useSelector } from "react-redux";
import Login from "../common/Login";
import SignUp from "../common/SignUp";
const Authwrapper = () => {
  const setlogin = useSelector((store) => store.logsignup.islogin);
  const setsignup = useSelector((store) => store.logsignup.issignup);
  return (
    <>
      {setlogin && <Login />}
      {setsignup && <SignUp />}
    </>
  );
};
export default Authwrapper;
