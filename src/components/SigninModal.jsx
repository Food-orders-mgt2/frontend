import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    const email = inputs.current[0].value;
    const password = inputs.current[1].value;
    const isAdmin = inputs.current[2].checked;

    try {
      let code = "";
      
      if (isAdmin) {
        code = inputs.current[3].value.toLowerCase();

        if (code !== import.meta.env.VITE_APP_FIREBASE_CODE) {
          throw new Error("Code administrateur incorrect");
        }
      }

      const cred = await signIn(email, password);

      formRef.current.reset();
      setValidation("");

      console.log(cred);

      toggleModals("close");

      if (isAdmin) {
        navigate("/private/admin-home");
      } else {
        navigate("/private/private-home");
      }
    } catch (error) {
      setValidation(error.message);
    }
  };

  const handleCheckboxChange = () => {
    setShowCodeInput(!showCodeInput);
  };

  const togglePasswordVisibility = () => {
    setPasswordFieldType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const closeModal = () => {
    setValidation("");
    setShowCodeInput(false);
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100" style={{ zIndex: 1000 }}>
          <div
            onClick={closeModal}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Se connecter</h5>
                  <button onClick={closeModal} className="btn-close"></button>
                </div>

                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-in-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="signInEmail" className="form-label">
                        Adresse e-mail
                      </label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signInEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signInPwd" className="form-label">
                        Mot de passe
                      </label>
                      <div className="input-group">
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type={passwordFieldType}
                          className="form-control"
                          id="signInPwd"
                        />
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={togglePasswordVisibility}
                        >
                          👁️
                        </button>
                      </div>
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <div className="mb-3 form-check">
                      <input
                        ref={addInputs}
                        type="checkbox"
                        className="form-check-input"
                        id="isAdmin"
                        name="isAdmin"
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="isAdmin">
                        Administrateur
                      </label>
                    </div>

                    {showCodeInput && (
                      <div className="mb-3">
                        <label htmlFor="adminCode" className="form-label">
                          Code administrateur
                        </label>
                        <div className="input-group">
                        <input
                          ref={addInputs}
                          name="adminCode"
                          className="form-control"
                          required
                          type={passwordFieldType}
                          id="adminCode"
                        />
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={togglePasswordVisibility}
                        >
                          👁️
                        </button>
                      
                        </div>
                        </div>
                    )}

                    <button className="btn btn-primary">Se connecter</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
