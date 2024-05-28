// CadastroLogin.js

import React, { useEffect } from "react";
import CadastroLoginForm from "../Components/CadastroLoginForm.jsx";
import TabelaCadastroLogin from "../Components/TabelaCadastroLogin.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const CadastroLogin = () => {

  useEffect(() => {
    const loadModalScript = async () => {
      try {
        const module = await import('../data/jsModal.js');
        module.default();
      } catch (error) {
        console.error("Failed to load modal script:", error);
      }
    };
    loadModalScript();
  }, []);

  return (
    <>
      <div>
        <button id="myBtn"><FaCirclePlus /></button>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <CadastroLoginForm />
          </div>
        </div>
      </div>
      <TabelaCadastroLogin />
    </>
  );
};

export default CadastroLogin;

