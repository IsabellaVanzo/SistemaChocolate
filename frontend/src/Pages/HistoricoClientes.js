// HistoricoClientes.js

import React, { useEffect } from "react";
import HistoricoClientesForm from "../Components/HistoricoClientesForm.jsx";
import TabelaHistoricoClientes from "../Components/TabelaHistoricoClientes.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const HistoricoClientes = () => {

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
       
        {/* <!-- Trigger/Open The Modal --> */}
        <button id="myBtn"><FaCirclePlus /></button>
        {/* <!-- The Modal --> */}
        <div id="myModal" className="modal">
          {/* <!-- Modal content --> */}
          <div className="modal-content">
            <span className="close">&times;</span>
            <HistoricoClientesForm />
          </div>
        </div>
      </div>
      <TabelaHistoricoClientes />
    </>
  );
};

export default HistoricoClientes;
