// ContasAPagar.js

import React, { useEffect } from "react";
import ContasAPagarForm from "../Components/ContasAPagarForm.jsx";
import TabelaContasAPagar from "../Components/TabelaContasAPagar.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const ContasAPagar = () => {

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
            <ContasAPagarForm />
          </div>
        </div>
      </div>
      <TabelaContasAPagar />
    </>
  );
};

export default ContasAPagar;
