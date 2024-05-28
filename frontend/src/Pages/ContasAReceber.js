// ContasAReceber.js

import React, { useEffect } from "react";
import ContasAReceberForm from "../Components/ContasAReceberForm.jsx";
import TabelaContasAReceber from "../Components/TabelaContasAReceber.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const ContasAReceber = () => {

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
            <ContasAReceberForm />
          </div>
        </div>
      </div>
      <TabelaContasAReceber />
    </>
  );
};

export default ContasAReceber;
