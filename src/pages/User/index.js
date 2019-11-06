import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaSpinner,
  FaChevronCircleLeft,
  FaInbox,
  FaMapMarkerAlt,
  FaExternalLinkAlt
} from "react-icons/fa";
import Container from "../../components/Container";
import { Loading, Profile, Card, Github } from "./styles";

export default function User({ match }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/users/${match.params.name}`)
      .then(({ data }) => {
        setUser(data);
        setLoading(false);
      });
  }, [match.params.name]);
  return (
    <>
      {loading ? (
        <Loading>
          <FaSpinner color="#fff" size={30} />
        </Loading>
      ) : (
        <Container>
          <Profile>
            <Link to="/">
              <FaChevronCircleLeft size={25} />
              Voltar
            </Link>
            <img src={user.avatar_url} alt={user.login} />
            <h1>{user.name}</h1>
            <Card>
              <p>
                <FaInbox size={14} />
                {user.email || "Não Existe"}
              </p>
              <p>
                <FaMapMarkerAlt size={14} />
                {user.location || "Não Existe"}
              </p>
            </Card>
            <p>{user.bio}</p>
            <Github href={user.link}>
              Acesse <FaExternalLinkAlt size={14} />{" "}
            </Github>
          </Profile>
        </Container>
      )}
    </>
  );
}
