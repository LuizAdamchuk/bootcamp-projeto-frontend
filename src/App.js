import React, {useState} from 'react'

import Headers from './components/Headers';

function App() {
    const [projects, setProjects] = useState(["Desenvolvimento de app", "Front-end web"])
    
    function handleAddProject() {
        setProjects([... projects, `Novo projeto ${Date.now()}`])
        console.log(projects);
    }
    

    return (
        <>
            <Headers title="HomePage"/>

            <ul>
                {projects.map(project => (
                    <li key={project}>{project}</li>
                ))}
            </ul>

            <Headers title="ReactJS" >
                <ul>
                    <li>Teste3</li>
                    <li>Teste4</li>
                    <li>Teste5</li>
                </ul>
            </Headers>

            <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}
export default App