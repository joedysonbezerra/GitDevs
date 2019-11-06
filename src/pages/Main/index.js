import React, { useState, useEffect } from "react";
import { FaGithubAlt, FaPlus, FaSpinner, FaAddressCard } from "react-icons/fa";
import Container from "../../components/Container";
import { Form, SubmitButton, List } from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Main() {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then(({ data }) => setUsers(data));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then(({ data }) => setUsers(data));
  }, [users]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const newUser  = await axios.post(`http://localhost:3000/users/${user}`);
      console.log(newUser);
      setUser("");
      setLoading(false);
      setUsers([...users, newUser]);
    } catch (error) {
      alert("Não foi possivel adicionar o usuário !");
    }
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        User
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar usuário"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <SubmitButton loading={loading}>
          {loading ? (
            <>
              <h1>Carregando</h1>
              <FaSpinner color="#fff" size={14} />
            </>
          ) : (
            <>
              <h1>Adicionar</h1>
              <FaPlus color="#fff" size={14} />
            </>
          )}
        </SubmitButton>
      </Form>
      <List>
        <h1>
          <FaGithubAlt />
          Users
        </h1>
        {users.map(user => (
          <li
            key={user.login}
            onDoubleClick={async () => {
              setUsers([]);
              await axios.delete(`http://localhost:3000/users/${user.login}`);
            }}
          >
            <img src={user.avatar_url} alt={user.login} />
            <span>{user.name}</span>
            <Link to={`/user/${user.login}`}>
              <FaAddressCard color="#24292e" size={25} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
