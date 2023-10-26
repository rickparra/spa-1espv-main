import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './editar-produtos.scss';

export default function EditarProdutos() {
  const { id } = useParams();

  const [produto, setProduto] = useState({
    id: id,
    nome: '',
    desc: '',
    valor: '',
  });

  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${id}`)
      .then((response) => response.json())
      .then((response) => setProduto(response))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="editar-produtos-container">
      <h1 className="editar-produtos-title">Editar Produtos</h1>

      <div className="editar-produtos-form">
        <form>
          <fieldset className="editar-produtos-fieldset">
            <legend className="editar-produtos-legend">Produto Selecionado</legend>
            <div>
              <label htmlFor="nome" className="editar-produtos-label">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={produto.nome}
                onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
                className="editar-produtos-input"
              />
            </div>
            <div>
              <label htmlFor="desc" className="editar-produtos-label">
                Desc
              </label>
              <input
                type="text"
                id="desc"
                name="desc"
                value={produto.desc}
                onChange={(e) => setProduto({ ...produto, desc: e.target.value })}
                className="editar-produtos-input"
              />
            </div>
            <div>
              <label htmlFor="valor" className="editar-produtos-label">
                Valor
              </label>
              <input
                type="number"
                id="valor"
                name="valor"
                value={produto.valor}
                onChange={(e) => setProduto({ ...produto, valor: e.target.value })}
                className="editar-produtos-input"
              />
            </div>
            <div>
              <button className="editar-produtos-button">EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
