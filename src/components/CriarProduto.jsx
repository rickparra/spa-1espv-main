import React, { useState } from 'react';

import './criar-produto.scss';

const CriarProduto = () => {
    const [produto, setProduto] = useState({
        nome: '',
        desc: '',
        valor: 0,
        imagemLink: '', // Adicione um campo para o link da imagens
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });

            if (response.ok) {
                // Produto inserido com sucesso
                console.log('Produto inserido com sucesso!');
                // Você pode redirecionar para a página de produtos ou fazer outras ações necessárias.
            } else {
                console.error('Erro ao inserir o produto.');
            }
        } catch (error) {
            console.error('Erro na solicitação:', error);
        }
    };

    return (
        <div className="criar-produto-container">
            <h1 className="criar-produto-title">Criar Produto</h1>
            <form className="criar-produto-form" onSubmit={handleSubmit}>
                <label htmlFor="nome" className="criar-produto-label">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={produto.nome}
                    onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
                    className="criar-produto-input"
                />
                <label htmlFor="desc" className="criar-produto-label">Descrição:</label>
                <input
                    type="text"
                    id="desc"
                    value={produto.desc}
                    onChange={(e) => setProduto({ ...produto, desc: e.target.value })}
                    className="criar-produto-input"
                />
                <label htmlFor="valor" className="criar-produto-label">Valor:</label>
                <input
                    type="number"
                    id="valor"
                    value={produto.valor}
                    onChange={(e) => setProduto({ ...produto, valor: e.target.value })}
                    className="criar-produto-input"
                />
                <label htmlFor="imagemLink" className="criar-produto-label">Link da Imagem:</label>
                <input
                    type="text"
                    id="imagemLink"
                    value={produto.imagemLink}
                    onChange={(e) => setProduto({ ...produto, imagemLink: e.target.value })}
                    className="criar-produto-input"
                />

                <button type="submit" className="criar-produto-button">Inserir Produto</button>
            </form>
        </div>
    );
};

export default CriarProduto;
