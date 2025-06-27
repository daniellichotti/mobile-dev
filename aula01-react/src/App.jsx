import "./App.css";
import { Hello } from "./components/HelloWorld";

export function App() {
  const name = ["João", "Glauco", "Moisés", "Leo", "Souza", "Lucas", "Caio"];

  return (
    <>
      <h1>Minha turma de Programador Mobile:</h1>
      <ul>
        {name.map((name) => (
          <Hello name={name} />
        ))}
      </ul>
      <p>Teste</p>
    </>
  );
}
