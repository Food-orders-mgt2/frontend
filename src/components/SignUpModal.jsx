import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
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

    if (inputs.current[1].value.length < 6 || inputs.current[2].value.length < 6) {
      setValidation("mots de passe invalide ");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("mots de passe non confirmé");
      return;
    }

    try {
      const cred = await signUp(inputs.current[0].value, inputs.current[1].value);
      formRef.current.reset();
      setValidation("");
      console.log(cred);
      toggleModals("close");
      navigate("/private/private-home");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setValidation("Email invalide");
      }

      if (err.code === "auth/email-already-in-use") {
        setValidation("Email deja prise");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordFieldType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100" style={{ zIndex: 1000 }}>
          <div onClick={closeModal} className="w-100 h-100 bg-dark bg-opacity-75"></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">S'inscrire</h5>
                  <button onClick={closeModal} className="btn-close"></button>
                </div>

                <div className="modal-body">
                  <form ref={formRef} onSubmit={handleForm} className="sign-up-form">
                  <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Nom d'utilisateur
                      </label>
                      <input
                        name="name"
                        required
                        type="name"
                        className="form-name"
                        id="nameModal"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        adresse e-mail
                      </label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">
                        Mots de passe
                      </label>
                      <div className="input-group">
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type={passwordFieldType}
                          className="form-control"
                          id="signUpPwd"
                        />
                        <button
                          type="button"
                          className="btn btn btn-primary"
                          onClick={togglePasswordVisibility}
                        >
                          👁️
                        </button>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="repeatPwd" className="form-label">
                        Confirmer le mots de passe
                      </label>
                      <div className="input-group">
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type={passwordFieldType}
                          className="form-control"
                          id="repeatPwd"
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

                    <button className="btn btn-primary">Envoyer</button>
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
