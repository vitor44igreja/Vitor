import './index.scss';
import { useState } from 'react'
import Cabecalho from "../../components/cabecalho";
import Linha from "../../components/linha";

export default function Exercicio11() {

    const [valor, setValor] = useState(0)
    const [res, setRes] = useState([])
    
    
    function teclaApertada(e) {
        if (e.key === "Enter") {
            calcularTabuada()
        }
    }
    
    function calcularTabuada() {
        
        let num = valor
        let res = []
        
        for (let i = 1; i <= 10; i++) {
            res[i] = `${num} X ${i} = ${num*i}`
            
        }
        
        
        setRes(res)
    }
    return (
        <div className="pagina-ex11">
            <Cabecalho/>

            <Linha
                titulo='Tabuada'
                ex='Exercicio 11'
                cor='#6533B7'
            />
            <section className="secao">
            <div className="txt">
                    <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
                </div>

                <div className="tabuada" onKeyUp={teclaApertada}>
                    <h1>Tabuada do:</h1>
                    <input type="text" placeholder="0" value={valor} onChange={e => setValor(e.target.value)} />
                    <button onClick={calcularTabuada}>Executar</button>
                </div>
                <div className="res">
                {res.map(r => <p>{r}</p>)}
                </div>
            </section>
        </div>
    )
}