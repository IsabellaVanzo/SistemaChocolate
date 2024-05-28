// ControleEstoque.js

import React, { useEffect } from "react";
import ControleEstoqueForm from "../Components/ControleEstoqueForm.jsx";
import TabelaControleEstoque from "../Components/TabelaControleEstoque.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const ControleEstoque = () => {

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
            <ControleEstoqueForm />
          </div>
        </div>
      </div>
      <TabelaControleEstoque />
    </>
  );
};

export default ControleEstoque;
