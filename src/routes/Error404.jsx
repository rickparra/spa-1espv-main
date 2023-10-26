import { Link } from "react-router-dom";

export default function Error404() {
  document.title = "404";
  return (
    <div>
      <h1>Error404</h1>
      <p>Voltar para HOME <Link to="/">Voltar</Link> </p>
    </div>
  )
}
