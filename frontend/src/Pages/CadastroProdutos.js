// CadastroProdutos.js

import React, { useEffect } from "react";
import CadastroProdutosForm from "../Components/CadastroProdutosForm.jsx";
import TabelaCadastroProdutos from "../Components/TabelaCadastroProdutos.jsx";
import '../css/modal.css';

import { FaCirclePlus } from "react-icons/fa6";

const CadastroProdutos = () => {

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
            <CadastroProdutosForm />
          </div>
        </div>
      </div>
      <TabelaCadastroProdutos />
    </>
  );
};

export default CadastroProdutos;
