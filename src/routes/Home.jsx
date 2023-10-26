import React, { useEffect, useState } from 'react';

import './Home.scss'

export default function Home() {
  document.title = 'HOME';

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Busque os produtos da API JSON
    fetch('http://localhost:5000/produtos')
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error('Erro na solicitação:', error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div className="home-figure">
        <figcaption className="home-figcaption">PRODUTOS EM OFERTA</figcaption>
        <img src="produtos.png" alt="Prateleira de Produtos." className="home-image" />
      </div>

      <div>
        <h2 className="home-products-title">Produtos em Destaque</h2>
        <ul className="home-products-list">
          {produtos.map((produto) => (
            <li key={produto.id} className="home-product">
              <img src={produto.imagemLink} alt={produto.nome} width="50" height="50" className="home-product-image" />
              {produto.nome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
