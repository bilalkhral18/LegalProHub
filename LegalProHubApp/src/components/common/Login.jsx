import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { loginsignupactions } from "../../Store/LoginSignUpSlice";
import Modal from "../Wrappers/Modal";
import styles from "./Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icons
import { FaEnvelope, FaLock, FaMobileAlt, FaTimes } from "react-icons/fa";

const CancelButton = () => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(loginsignupactions.cancelModal());
  };

  return (
    <button className={styles.cancelButton} onClick={handleCancel}>
      <FaTimes />
    </button>
  );
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loginType, setLoginType] = useState("gmail");
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (loginType === "gmail" && emailRef.current) {
        emailRef.current.focus();
      } else if (loginType === "phone" && phoneRef.current) {
        phoneRef.current.focus();
      }
    }, 100);
  }, [loginType]);

  const showSignUpForm = () => {
    dispatch(loginsignupactions.showsignupform());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const identifier =
        loginType === "gmail"
          ? emailRef.current.value.trim()
          : phoneRef.current.value.trim();

      const password = passwordRef.current.value.trim();

      if (!identifier || !password) {
        throw new Error("Please fill in all fields");
      }

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login Successful!", { position: "top-right" });
        setTimeout(() => {
          dispatch(loginsignupactions.cancelModal());
          console.log(data);
          localStorage.setItem("token", data.token);
          if (loginType === "gmail") {
            if (emailRef.current.value === "dweb88905@gmail.com") {
              localStorage.setItem("userType", "admin");
            }
          }
          navigate("/");
          window.location.reload();
        }, 3000);

        // navigate(data.redirectTo); // Redirect fix
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.message);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal>
      <ToastContainer />
      <motion.form
        className={styles.Loginform}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handleSubmit}
      >
        <div className={styles.loginHeading}>
          <CancelButton />
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            HELLO & WELCOME
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            LegalProHub connects users with legal professionals.
          </motion.p>
        </div>

        <div className={styles.logincredentials}>
          <h1>USER LOGIN</h1>

          {/* Login Type Buttons - Replacing dropdown select */}
          <div className={styles.loginTypeButtons}>
            <motion.button
              type="button"
              className={`${styles.loginTypeButton} ${
                loginType === "gmail" ? styles.active : ""
              }`}
              onClick={() => {
                setLoginType("gmail");
                setErrorMessage("");
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FaEnvelope style={{ marginRight: "5px" }} />
              Email
            </motion.button>
            <motion.button
              type="button"
              className={`${styles.loginTypeButton} ${
                loginType === "phone" ? styles.active : ""
              }`}
              onClick={() => {
                setLoginType("phone");
                setErrorMessage("");
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FaMobileAlt style={{ marginRight: "5px" }} />
              Phone
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {loginType === "gmail" ? (
              <motion.label
                key="email"
                htmlFor="EmailInput"
                className={styles.InputContainer}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className={styles.EmailIcon} />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  id="EmailInput"
                  required
                  ref={emailRef}
                />
              </motion.label>
            ) : (
              <motion.label
                key="phone"
                htmlFor="PhoneInput"
                className={styles.InputContainer}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <FaMobileAlt className={styles.EmailIcon} />
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  id="PhoneInput"
                  required
                  ref={phoneRef}
                  pattern="\d*"
                  inputMode="numeric"
                  maxLength="11"
                />
              </motion.label>
            )}
          </AnimatePresence>

          <motion.label
            htmlFor="password"
            className={styles.InputContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <FaLock className={styles.EmailIcon} />
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              required
              ref={passwordRef}
            />
          </motion.label>
          {/* 
          <AnimatePresence>
            {errorMessage && (
              <motion.div
                className={styles.errorMessage}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence> */}

          <motion.button
            type="submit"
            className={styles.Submitbtn}
            disabled={isLoading}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? "LOGGING IN..." : "LOGIN"}
          </motion.button>

          <motion.span
            className={styles.newaccount}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            New User?{" "}
            <Link to="" onClick={showSignUpForm}>
              Create Account
            </Link>
          </motion.span>
        </div>
      </motion.form>
    </Modal>
  );
};

export default Login;
