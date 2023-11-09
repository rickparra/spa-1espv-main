import { useState } from 'react';
import './Login.scss';

const LoginForm = () => {
  // Estados para armazenar valores dos campos de entrada, mensagens de erro e sucesso
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // URL da API de usuários (substitua pela URL correta)
  const apiUrl = 'http://localhost:5000/usuarios'; // Altere a URL conforme necessário

  // Função para lidar com o envio do formulário de login
  const handleLogin = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

    try {
      // Realiza uma solicitação GET à API com os parâmetros de usuário e senha
      const response = await fetch(`${apiUrl}?username=${username}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Se a resposta da API for bem-sucedida, converte os dados para JSON
        const data = await response.json();

        if (data.length > 0) {
          // Se houver usuários correspondentes, exibe mensagem de sucesso
          setSuccess('Login bem sucedido');
          setError('');
        } else {
          // Se não houver correspondência, exibe mensagem de erro
          setError('Nome ou senha inválida');
          setSuccess('');
        }
      } else {
        // Se houver erro na resposta da API, exibe mensagem de erro
        setError('Erro durante o login');
        setSuccess('');
      }
    } catch (error) {
      // Em caso de erro na execução da solicitação, exibe mensagem de erro no console
      console.error('Erro:', error);
      setError('Erro durante o login');
      setSuccess('');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        {/* Campos de entrada para nome de usuário e senha */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Botão de submit para enviar o formulário */}
        <button type="submit">Login</button>
      </form>
      {/* Exibe mensagens de erro e sucesso */}
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default LoginForm;
