// import { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginsignupactions } from "../../Store/LoginSignUpSlice";
// import Modal from "../Wrappers/Modal";
// import CancelButton from "./CancelButton";
// import { useForm } from "react-hook-form";
// import styles from "./Sign_Up.module.css";
// import { toast, ToastContainer } from "react-toastify";

// const EnhancedSignUp = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const [userType, setUserType] = useState("client");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [imagePreview, setImagePreview] = useState({
//     photo: null,
//     idFront: null,
//     idBack: null,
//     lawyerLicense: null,
//   });

//   const handleUserTypeChange = (type) => {
//     setUserType(type);
//     // setErrorMessage("");
//   };

//   const handleTermsConditions = () => {
//     dispatch(loginsignupactions.termsAndConditions());
//   };

//   const showLogInForm = () => {
//     dispatch(loginsignupactions.showloginform());
//   };

//   const handleImageChange = (e, type) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];

//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setImagePreview((prev) => ({
//           ...prev,
//           [type]: event.target.result,
//         }));
//       };
//       reader.readAsDataURL(file);

//       setValue(type, e.target.files);
//     }
//   };

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("firstName", data.name);
//     formData.append("lastName", data.lastName);
//     formData.append("email", data.email);
//     formData.append("mobile", data.mobile);
//     formData.append("password", data.password);
//     formData.append("userType", userType);

//     if (data.photo && data.photo.length > 0) {
//       formData.append("photo", data.photo[0]);
//     }
//     if (data.idFront && data.idFront.length > 0) {
//       formData.append("idFront", data.idFront[0]);
//     }
//     if (data.idBack && data.idBack.length > 0) {
//       formData.append("idBack", data.idBack[0]);
//     }
//     if (userType === "lawyer" && data.lawyerLicense) {
//       formData.append("lawyerLicense", data.lawyerLicense[0]);
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json();

//       if (response.ok) {
//         toast.success("Signup Successful!", { position: "top-right" });
//         reset();
//         setImagePreview({
//           photo: null,
//           idFront: null,
//           idBack: null,
//           lawyerLicense: null,
//         });
//       } else {
//         if (result.message) {
//           toast.error(`${result.message}, { position: "top-right" }`);
//         } else {
//           toast.error("Signup Failed! Please try again.", {
//             position: "top-right",
//           });
//         }
//       }
//     } catch (error) {
//       toast.error("Error submitting form!", { position: "top-right" });
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <Modal>
//       <ToastContainer />
//       <form
//         className={styles.signUpContainer}
//         onSubmit={handleSubmit(onSubmit)}
//         noValidate
//       >
//         <CancelButton />

//         <div className={styles.imageContainer}>
//           <p className={styles.logo}>LPH</p>
//           <p className={styles.tagline}>Justice Made Simple</p>
//         </div>

//         <div className={styles.credentialsContainer}>
//           <h2>Create an account</h2>
//           <span>
//             Already have an account?{" "}
//             <Link to="" onClick={showLogInForm}>
//               Log in
//             </Link>
//           </span>

//           <div className={styles.userTypeSelector}>
//             <button
//               type="button"
//               className={`${styles.userTypeButton} ${
//                 userType === "client" ? styles.activeType : ""
//               }`}
//               onClick={() => handleUserTypeChange("client")}
//             >
//               Sign up as Client
//             </button>
//             <button
//               type="button"
//               className={`${styles.userTypeButton} ${
//                 userType === "lawyer" ? styles.activeType : ""
//               }`}
//               onClick={() => handleUserTypeChange("lawyer")}
//             >
//               Sign up as Lawyer
//             </button>
//           </div>

//           <div className={styles.inputCredentials}>
//             {/* Name Fields */}
//             <div className={styles.nameContainer}>
//               <input
//                 type="text"
//                 placeholder="First name *"
//                 {...register("name")}
//               />
//               <input
//                 type="text"
//                 {...register("lastName")}
//                 placeholder="Last name *"
//               />
//             </div>

//             <input type="email" {...register("email")} placeholder="Email *" />
//             <div className={styles.mobileInputContainer}>
//               <input
//                 type="tel"
//                 {...register("mobile")}
//                 placeholder="Mobile number *"
//               />
//             </div>

//             <input
//               type="password"
//               {...register("password")}
//               placeholder="Password *"
//             />

//             <div className={styles.documentUploads}>
//               <div className={styles.uploadField}>
//                 <label htmlFor="photo">
//                   Profile Photo
//                   {imagePreview.photo && (
//                     <div className={styles.previewIcon}>
//                       <img src={imagePreview.photo} alt="Profile preview" />
//                     </div>
//                   )}
//                 </label>

//                 <input
//                   type="file"
//                   id="photo"
//                   name="photo"
//                   accept="image/*"
//                   {...register("photo")}
//                   onChange={(e) => handleImageChange(e, "photo")}
//                 />
//               </div>

//               <div className={styles.uploadField}>
//                 <label htmlFor="idFront">
//                   ID Card (Front)
//                   {imagePreview.idFront && (
//                     <div className={styles.previewIcon}>
//                       <img src={imagePreview.idFront} alt="ID front preview" />
//                     </div>
//                   )}
//                 </label>
//                 <input
//                   type="file"
//                   id="idFront"
//                   name="idFront"
//                   accept="image/*"
//                   {...register("idFront")}
//                   onChange={(e) => handleImageChange(e, "idFront")}
//                 />
//               </div>

//               <div className={styles.uploadField}>
//                 <label htmlFor="idBack">
//                   ID Card (Back)
//                   {imagePreview.idBack && (
//                     <div className={styles.previewIcon}>
//                       <img src={imagePreview.idBack} alt="ID back preview" />
//                     </div>
//                   )}
//                 </label>
//                 <input
//                   type="file"
//                   id="idBack"
//                   name="idBack"
//                   accept="image/*"
//                   {...register("idBack")}
//                   onChange={(e) => handleImageChange(e, "idBack")}
//                 />
//               </div>

//               {/* Lawyer License Upload (only for lawyers) */}
//               {userType === "lawyer" && (
//                 <div className={styles.uploadField}>
//                   <label htmlFor="lawyerLicense">
//                     Lawyer License
//                     {imagePreview.lawyerLicense && (
//                       <div className={styles.previewIcon}>
//                         <img
//                           src={imagePreview.lawyerLicense}
//                           alt="License preview"
//                         />
//                       </div>
//                     )}
//                   </label>
//                   <input
//                     type="file"
//                     id="lawyerLicense"
//                     name="lawyerLicense"
//                     accept="image/*"
//                     {...register("lawyerLicense")}
//                     onChange={(e) => handleImageChange(e, "lawyerLicense")}
//                   />
//                 </div>
//               )}
//             </div>
//             <label htmlFor="terms" className={styles.checkLabel}>
//               <input type="checkbox" name="terms" id="terms" required />
//               <span onClick={handleTermsConditions}>
//                 I agree to the <Link to="/terms">terms & conditions</Link>
//               </span>
//             </label>

//             <button
//               type="submit"
//               className={styles.submitButton}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Create Account"}
//             </button>
//           </div>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EnhancedSignUp;
// import { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginsignupactions } from "../../Store/LoginSignUpSlice";
// import Modal from "../Wrappers/Modal";
// import CancelButton from "./CancelButton";
// import { useForm } from "react-hook-form";

// import styles from "./Sign_Up.module.css";
// import { toast } from "react-toastify";
// const EnhancedSignUp = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const [userType, setUserType] = useState("client");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [imagePreview, setImagePreview] = useState({
//     photo: null,
//     idFront: null,
//     idBack: null,
//     lawyerLicense: null,
//   });
//   console.log(imagePreview, "dddd");

//   const handleUserTypeChange = (type) => {
//     setUserType(type);
//     setErrorMessage("");
//   };

//   const handleTermsConditions = () => {
//     dispatch(loginsignupactions.termsAndConditions());
//   };

//   const showLogInForm = () => {
//     dispatch(loginsignupactions.showloginform());
//   };

//   const handleImageChange = (e, type) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];

//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setImagePreview((prev) => ({
//           ...prev,
//           [type]: event.target.result,
//         }));
//       };
//       reader.readAsDataURL(file);

//       setValue(type, e.target.files);
//     }
//   };

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("firstName", data.name);
//     formData.append("lastName", data.lastName);
//     formData.append("email", data.email);
//     formData.append("mobile", data.mobile);
//     formData.append("password", data.password);
//     formData.append("userType", userType);

//     if (data.photo && data.photo.length > 0) {
//       formData.append("photo", data.photo[0]);
//     }
//     if (data.idFront && data.idFront.length > 0) {
//       formData.append("idFront", data.idFront[0]);
//     }
//     if (data.idBack && data.idBack.length > 0) {
//       formData.append("idBack", data.idBack[0]);
//     }
//     if (userType === "lawyer" && data.lawyerLicense) {
//       formData.append("lawyerLicense", data.lawyerLicense[0]);
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json();

//       if (response.ok) {
//         toast.success("Signup Successful!", { position: "top-right" });
//         reset();
//         setImagePreview({
//           photo: null,
//           idFront: null,
//           idBack: null,
//           lawyerLicense: null,
//         });
//       } else {
//         if (result.message) {
//           toast.error(`${result.message}, { position: "top-right" }`);
//         } else {
//           toast.error("Signup Failed! Please try again.", {
//             position: "top-right",
//           });
//         }
//       }
//     } catch (error) {
//       toast.error("Error submitting form!", { position: "top-right" });
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <Modal>
//       <form
//         className={styles.signUpContainer}
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <CancelButton />

//         {/* Left side - Image */}
//         <div className={styles.imageContainer}>
//           <p className={styles.logo}>LPH</p>
//           <p className={styles.tagline}>Justice Made Simple</p>
//         </div>

//         {/* Right side - Form */}
//         <div className={styles.credentialsContainer}>
//           <h2>Create an account</h2>
//           <span>
//             Already have an account?{" "}
//             <Link to="" onClick={showLogInForm}>
//               Log in
//             </Link>
//           </span>

//           {/* User Type Selection */}
//           <div className={styles.userTypeSelector}>
//             <button
//               type="button"
//               className={`${styles.userTypeButton} ${
//                 userType === "client" ? styles.activeType : ""
//               }`}
//               onClick={() => handleUserTypeChange("client")}
//             >
//               Sign up as Client
//             </button>
//             <button
//               type="button"
//               className={`${styles.userTypeButton} ${
//                 userType === "lawyer" ? styles.activeType : ""
//               }`}
//               onClick={() => handleUserTypeChange("lawyer")}
//             >
//               Sign up as Lawyer
//             </button>
//           </div>

//           <div className={styles.inputCredentials}>
//             {/* Name Fields */}
//             <div className={styles.nameContainer}>
//               <input
//                 type="text"
//                 placeholder="First name"
//                 {...register("name", { required: true })}
//               />
//               {errors.name && <p>Name is required</p>}
//               <input
//                 type="text"
//                 {...register("lastName", { required: true })}
//                 placeholder="Last name"
//               />
//               {errors.name && <p>Last Name is required</p>}
//             </div>

//             {/* Email */}
//             <input
//               type="email"
//               {...register("email", { required: true })}
//               placeholder="Email"
//             />
//             {errors.email && <p>Email is required</p>}

//             {/* Mobile Number */}
//             <div className={styles.mobileInputContainer}>
//               <span className={styles.countryCode}>+92</span>
//               <input
//                 type="tel"
//                 {...register("mobile", { required: true })}
//                 placeholder="Mobile number"
//               />
//               {errors.mobile && <p>Mobile number is required</p>}
//             </div>

//             {/* Password */}
//             <input
//               type="password"
//               {...register("password", { required: true })}
//               placeholder="Password"
//             />
//             {errors.password && <p>Password is required</p>}

//             {/* Document Uploads */}
//             <div className={styles.documentUploads}>
//               <div className={styles.uploadField}>
//                 <label htmlFor="photo">
//                   Profile Photo
//                   {imagePreview.photo && (
//                     <div className={styles.previewIcon}>
//                       <img src={imagePreview.photo} alt="Profile preview" />
//                     </div>
//                   )}
//                 </label>

//                 <input
//                   type="file"
//                   id="photo"
//                   name="photo"
//                   accept="image/*"
//                   {...register("photo")}
//                   onChange={(e) => handleImageChange(e, "photo")}
//                 />
//               </div>

//               <div className={styles.uploadField}>
//                 <label htmlFor="idFront">
//                   ID Card (Front)
//                   {imagePreview.idFront && (
//                     <div className={styles.previewIcon}>
//                       <img src={imagePreview.idFront} alt="ID front preview" />
//                     </div>
//                   )}
//                 </label>
//                 <input
//                   type="file"
//                   id="idFront"
//                   name="idFront"
//                   accept="image/*"
//                   {...register("idFront")}
//                   onChange={(e) => handleImageChange(e, "idFront")}
//                 />
//               </div>

//               <div className={styles.uploadField}>
//                 <label htmlFor="idBack">
//                   ID Card (Back)
//                   {imagePreview.idBack && (
//                     <div className={styles.previewIcon}>
//                       <img src={imagePreview.idBack} alt="ID back preview" />
//                     </div>
//                   )}
//                 </label>
//                 <input
//                   type="file"
//                   id="idBack"
//                   name="idBack"
//                   accept="image/*"
//                   {...register("idBack")}
//                   onChange={(e) => handleImageChange(e, "idBack")}
//                 />
//               </div>

//               {/* Lawyer License Upload (only for lawyers) */}
//               {userType === "lawyer" && (
//                 <div className={styles.uploadField}>
//                   <label htmlFor="lawyerLicense">
//                     Lawyer License
//                     {imagePreview.lawyerLicense && (
//                       <div className={styles.previewIcon}>
//                         <img
//                           src={imagePreview.lawyerLicense}
//                           alt="License preview"
//                         />
//                       </div>
//                     )}
//                   </label>
//                   <input
//                     type="file"
//                     id="lawyerLicense"
//                     name="lawyerLicense"
//                     accept="image/*"
//                     {...register("lawyerLicense")}
//                     onChange={(e) => handleImageChange(e, "lawyerLicense")}
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Terms & Conditions */}
//             <label htmlFor="terms" className={styles.checkLabel}>
//               <input type="checkbox" name="terms" id="terms" required />
//               <span onClick={handleTermsConditions}>
//                 I agree to the <Link to="/terms">terms & conditions</Link>
//               </span>
//             </label>

//             {/* Submit Button */}
//             <button type="submit" className={styles.submitButton}>
//               Create Account
//             </button>
//           </div>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EnhancedSignUp;

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginsignupactions } from "../../Store/LoginSignUpSlice";
import Modal from "../Wrappers/Modal";
import CancelButton from "./CancelButton";
import { useForm } from "react-hook-form";
import styles from "./Sign_Up.module.css";
import { toast, ToastContainer } from "react-toastify";

const EnhancedSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [userType, setUserType] = useState("client");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState({
    photo: null,
    idFront: null,
    idBack: null,
    lawyerLicense: null,
  });

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleTermsConditions = () => {
    dispatch(loginsignupactions.termsAndConditions());
  };

  const showLogInForm = () => {
    dispatch(loginsignupactions.showloginform());
  };

  const handleImageChange = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview((prev) => ({
          ...prev,
          [type]: event.target.result,
        }));
      };
      reader.readAsDataURL(file);

      setValue(type, e.target.files);
    }
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("firstName", data.name);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("password", data.password);
      formData.append("userType", userType);

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }
      if (data.idFront && data.idFront.length > 0) {
        formData.append("idFront", data.idFront[0]);
      }
      if (data.idBack && data.idBack.length > 0) {
        formData.append("idBack", data.idBack[0]);
      }
      if (userType === "lawyer" && data.lawyerLicense) {
        formData.append("lawyerLicense", data.lawyerLicense[0]);
      }

      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Signup Successful!", { position: "top-right" });
        setTimeout(() => {
          showLogInForm();
          reset();
        }, 3000);

        setImagePreview({
          photo: null,
          idFront: null,
          idBack: null,
          lawyerLicense: null,
        });
      } else {
        if (result.message) {
          toast.error(result.message, { position: "top-right" });
        } else {
          toast.error("Signup Failed! Please try again.", {
            position: "top-right",
          });
        }
      }
    } catch (error) {
      toast.error("Error submitting form!", { position: "top-right" });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onError = (errors) => {
    if (errors.name) {
      toast.error("First name is required", { position: "top-right" });
    } else if (errors.lastName) {
      toast.error("Last name is required", { position: "top-right" });
    } else if (errors.email) {
      toast.error("Valid email is required", { position: "top-right" });
    } else if (errors.mobile) {
      toast.error("Mobile number is required", { position: "top-right" });
    } else if (errors.password) {
      toast.error("Password is required", { position: "top-right" });
    } else if (
      (userType === "lawyer" || userType === "client") &&
      errors.photo
    ) {
      toast.error("Profile pic required", { position: "top-right" });
    } else if (
      (userType === "lawyer" || userType === "client") &&
      errors.idFront
    ) {
      toast.error("ID card  required", { position: "top-right" });
    } else if (
      (userType === "lawyer" || userType === "client") &&
      errors.idBack
    ) {
      toast.error("ID card  required", { position: "top-right" });
    } else if (userType === "lawyer" && errors.lawyerLicense) {
      toast.error("Lawyer license is required", { position: "top-right" });
    }
  };

  return (
    <Modal>
      <ToastContainer />
      <form
        className={styles.signUpContainer}
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        <CancelButton />

        <div className={styles.imageContainer}>
          <p className={styles.logo}>LPH</p>
          <p className={styles.tagline}>Justice Made Simple</p>
        </div>

        <div className={styles.credentialsContainer}>
          <h2>Create an account</h2>
          <span>
            Already have an account?{" "}
            <Link to="" onClick={showLogInForm}>
              Log in
            </Link>
          </span>

          <div className={styles.userTypeSelector}>
            <button
              type="button"
              className={`${styles.userTypeButton} ${
                userType === "client" ? styles.activeType : ""
              }`}
              onClick={() => handleUserTypeChange("client")}
            >
              Sign up as Client
            </button>
            <button
              type="button"
              className={`${styles.userTypeButton} ${
                userType === "lawyer" ? styles.activeType : ""
              }`}
              onClick={() => handleUserTypeChange("lawyer")}
            >
              Sign up as Lawyer
            </button>
          </div>

          <div className={styles.inputCredentials}>
            {/* Name Fields */}
            <div className={styles.nameContainer}>
              <input
                type="text"
                placeholder="First name *"
                {...register("name", { required: true })}
                className={errors.name ? styles.errorInput : ""}
              />
              <input
                type="text"
                placeholder="Last name *"
                {...register("lastName", { required: true })}
                className={errors.lastName ? styles.errorInput : ""}
              />
            </div>

            <input
              type="email"
              placeholder="Email *"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
              className={errors.email ? styles.errorInput : ""}
            />

            <div className={styles.mobileInputContainer}>
              <input
                type="tel"
                placeholder="Mobile number *"
                {...register("mobile", { required: true })}
                className={errors.mobile ? styles.errorInput : ""}
              />
            </div>

            <input
              type="password"
              placeholder="Password *"
              {...register("password", { required: true, minLength: 6 })}
              className={errors.password ? styles.errorInput : ""}
            />

            <div className={styles.documentUploads}>
              <div className={styles.uploadField}>
                <label htmlFor="photo">
                  Profile Photo
                  {imagePreview.photo && (
                    <div className={styles.previewIcon}>
                      <img src={imagePreview.photo} alt="Profile preview" />
                    </div>
                  )}
                </label>

                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  {...register("photo", { required: true })}
                  onChange={(e) => handleImageChange(e, "photo")}
                />
              </div>

              <div className={styles.uploadField}>
                <label htmlFor="idFront">
                  ID Card (Front)
                  {imagePreview.idFront && (
                    <div className={styles.previewIcon}>
                      <img src={imagePreview.idFront} alt="ID front preview" />
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="idFront"
                  name="idFront"
                  accept="image/*"
                  {...register("idFront", { required: true })}
                  onChange={(e) => handleImageChange(e, "idFront")}
                />
              </div>

              <div className={styles.uploadField}>
                <label htmlFor="idBack">
                  ID Card (Back)
                  {imagePreview.idBack && (
                    <div className={styles.previewIcon}>
                      <img src={imagePreview.idBack} alt="ID back preview" />
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="idBack"
                  name="idBack"
                  accept="image/*"
                  {...register("idBack", { required: true })}
                  onChange={(e) => handleImageChange(e, "idBack")}
                />
              </div>

              {/* Lawyer License Upload (only for lawyers) */}
              {userType === "lawyer" && (
                <div className={styles.uploadField}>
                  <label htmlFor="lawyerLicense">
                    Lawyer License *
                    {imagePreview.lawyerLicense && (
                      <div className={styles.previewIcon}>
                        <img
                          src={imagePreview.lawyerLicense}
                          alt="License preview"
                        />
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    id="lawyerLicense"
                    name="lawyerLicense"
                    accept="image/*"
                    {...register(
                      "lawyerLicense",
                      {
                        required: userType === "lawyer",
                      },
                      { required: true }
                    )}
                    onChange={(e) => handleImageChange(e, "lawyerLicense")}
                  />
                </div>
              )}
            </div>
            <label htmlFor="terms" className={styles.checkLabel}>
              <input
                type="checkbox"
                id="terms"
                defaultChecked
                {...register("terms", { required: true })}
              />
              <span onClick={handleTermsConditions}>
                I agree to the <Link to="/terms">terms & conditions</Link>
              </span>
            </label>
            {errors.terms &&
              toast.error("You must agree to the terms and conditions")}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Create Account"}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EnhancedSignUp;
