import React, { useEffect, useState } from 'react';
import './produtos.scss';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Realize uma solicitação GET para buscar a lista de produtos da API JSON
    fetch('http://localhost:5000/produtos')
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error('Erro na solicitação:', error));
  }, []);

  const handleExcluirProduto = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/produtos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Produto excluído com sucesso
        console.log('Produto excluído com sucesso!');
        // Atualize a lista de produtos após a exclusão.
        setProdutos(produtos.filter((produto) => produto.id !== id));
      } else {
        console.error('Erro ao excluir o produto.');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <div className="produtos-container">
      <h1 className="produtos-title">Produtos</h1>
      <ul className="produtos-list">
        {produtos.map((produto) => (
          <li key={produto.id} className="produtos-item">
            <img src={produto.imagemLink} alt={produto.nome} width="50" height="50" className="produtos-image" />
            <div className="produtos-info">
              {produto.nome} - {produto.desc} - R$ {produto.valor}
            </div>
            <button onClick={() => handleExcluirProduto(produto.id)} className="produtos-button">
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


