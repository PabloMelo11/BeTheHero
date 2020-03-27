import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Profile() {
  const ongName = localStorage.getItem("ongName");

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadatrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descricao teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descricao teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descricao teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descricao teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}