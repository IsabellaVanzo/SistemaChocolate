// CadastroFornecedores.js

import React, { useEffect } from "react";
import CadastroFornecedoresForm from "../Components/CadastroFornecedoresForm.jsx";
import TabelaCadastroFornecedores from "../Components/TabelaCadastroFornecedores.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const CadastroFornecedores = () => {

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
            <CadastroFornecedoresForm />
          </div>
        </div>
      </div>
      <TabelaCadastroFornecedores />
    </>
  );
};

export default CadastroFornecedores;
