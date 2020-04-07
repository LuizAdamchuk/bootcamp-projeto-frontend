import React from 'react'

import Headers from './components/Headers';

function App() {
    return (
        <>
            <Headers title="HomePage" >
                <ul>
                    <li>Teste1</li>
                    <li>Teste2</li>
                </ul>
            </Headers>
            <Headers title="ReactJS" >
                <ul>
                    <li>Teste3</li>
                    <li>Teste4</li>
                    <li>Teste5</li>
                </ul>
            </Headers>
        </>
    )
}
export default App