import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import backgroundimg from "./assets/background.jpg";

import Headers from "./components/Headers";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  function handleAddProject() {
    // setProjects([... projects, `Novo projeto ${Date.now()}`])
    // console.log(projects);

    // optei por usar o .then e deu certo. porem instalei o plugin no babel.config.js
    api
      .post("projects", {
        title: `Novo projeto ${Date.now()}`,
        owner: "Luiz",
      })
      .then((response) => {
        setProjects([...projects, response.data]);
      });
  }

  return (
    <>
      <Headers title="HomePage" />

      <img width={300} src={backgroundimg} />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <Headers title="ReactJS">
        <ul>
          <li>Teste3</li>
          <li>Teste4</li>
          <li>Teste5</li>
        </ul>
      </Headers>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}
export default App;
