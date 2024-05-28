// CadastroFuncionarios.js

import React, { useEffect } from "react";
import CadastroFuncionariosForm from "../Components/CadastroFuncionariosForm.jsx";
import TabelaCadastroFuncionarios from "../Components/TabelaCadastroFuncionarios.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const CadastroFuncionarios = () => {

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
            <CadastroFuncionariosForm />
          </div>
        </div>
      </div>
      <TabelaCadastroFuncionarios />
    </>
  );
};

export default CadastroFuncionarios;