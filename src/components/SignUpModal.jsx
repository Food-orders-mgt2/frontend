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

    const username = inputs.current[0].value;
    const email = inputs.current[1].value;
    const password = inputs.current[2].value;

    if (username.trim() === "") {
      setValidation("Nom d'utilisateur requis");
      return;
    }

    if (password.length < 6 || inputs.current[3].value.length < 6) {
      setValidation("6 caractères minimum pour le mot de passe");
      return;
    } else if (password !== inputs.current[3].value) {
      setValidation("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const cred = await signUp( email, password);
      formRef.current.reset();
      setValidation("");
      console.log(cred);
      toggleModals("close");
      navigate("/private/private-home");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setValidation("Format d'e-mail invalide");
      }

      if (err.code === "auth/email-already-in-use") {
        setValidation("E-mail déjà utilisé");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordFieldType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signUpModal && (
        <div
          className="position-fixed top-0 vw-100 vh-100"
          style={{ zIndex: 1000 }}
        >
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
                  <h5 className="modal-title">S'inscrire</h5>
                  <button onClick={closeModal} className="btn-close"></button>
                </div>

                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Nom d'utilisateur
                      </label>
                      <input
                        ref={addInputs}
                        name="username"
                        required
                        type="text"
                        className="form-control"
                        id="username"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Adresse e-mail
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
                        Confirmer le mot de passe
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
