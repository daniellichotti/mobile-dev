import { useEffect, useState } from "react";
import { Button } from "./components/Button";

export function App() {
  const [listUsers, setListUsers] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta", response.status);
        }
        return response.json();
      })
      .then((user) => {
        setListUsers(user);
      })
      .catch((error) => {
        console.log("Erro ao buscar dados: ", error.message);
      });
  }, []);

  return (
    <>
      <h1>Usuários: </h1>
      <ul>
        {listUsers.map((user) => (
          <div>
            <li key={user.id}>{user.name}</li>
            <li key={user.id}>{user.email}</li>
            <li key={user.id}>{user.address.city}</li>
            <Button label={"user " + user.username} />
          </div>
        ))}
      </ul>
    </>
  );
}
