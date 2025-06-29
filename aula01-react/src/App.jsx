import "./App.css";
import { Img } from "./components/Img";

export function App() {
  const user1 = {
    nome: "Joao",
    idade: 35,
    imgurl: "https://randomuser.me/api/portraits/men/39.jpg",
  };

  return (
    <>
      <Img
        nome="Little Junior"
        idade="30"
        imgurl="https://randomuser.me/api/portraits/men/69.jpg"
      />
      <Img
        nome="Souza"
        idade="40"
        imgurl="https://randomuser.me/api/portraits/men/78.jpg"
      />
      <Img nome={user1.nome} idade={user1.idade} imgurl={user1.imgurl} />

      <iframe
        height="100"
        width="120"
        src="https://www.youtube.com/embed/BXnXHjtoDuI"
        title="Autópsia revela fraturas e hemorragia em brasileira que morreu em vulcão | Jornal da Band"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
}
