import { useState } from 'react'
import Cabecalho from '../../components/cabecalho'
import Linha from '../../components/linha'
import Txt from '../../components/texto'
import './index.scss'

export default function Exercicio5() {
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [res, setRes] = useState(0)
    function CalcularMedia() {
        let n1 = Number(nota1)
        let n2 = Number(nota2)
        let n3 = Number(nota3)

        let soma = n1 + n2 + n3
        let res = soma / 3
        setRes(res)
    }

    function teclaApertada(e) {
        if (e.key === "Enter") {
            CalcularMedia()
        }
    }
    return (
        <div className='pagina-05'>
            <Cabecalho />

            <Linha
                titulo='Média de notas'
                ex='Exercicio 05'
                cor='#CB37FF'
            />
            <div className='secao'>
                <div className='txt'>
                    <Txt
                        titulo='Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.'
                    />
                </div>
                <div className='exercicio-media' onKeyUp={teclaApertada}>
                    <h1>Nota 1</h1>
                    <input type="text" placeholder='0' value={nota1} onChange={e => setNota1(e.target.value)} />
                    <h1>Nota 2</h1>
                    <input type="text" placeholder='0' value={nota2} onChange={e => setNota2(e.target.value)} />
                    <h1>Nota 3</h1>
                    <input type="text" placeholder='0' value={nota3} onChange={e => setNota3(e.target.value)} />
                    <button onClick={e => CalcularMedia(e.target.value)}>Executar</button>
                </div>
                <div className='res'>A média do aluno é {res.toFixed(2)} O aluno passou?{res >= 5 ? 'true' : 'false'}</div>
            </div>
        </div>
    )
}