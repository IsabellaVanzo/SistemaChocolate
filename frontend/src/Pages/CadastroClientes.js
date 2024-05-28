// CadastroClientes.js

import React, { useEffect } from "react";
import CadastroClientesForm from "../Components/CadastroClientesForm.jsx";
import TabelaCadastroClientes from "../Components/TabelaCadastroClientes.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const CadastroClientes = () => {

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
            <CadastroClientesForm />
          </div>
        </div>
      </div>
      <TabelaCadastroClientes />
    </>
  );
};

export default CadastroClientes;
