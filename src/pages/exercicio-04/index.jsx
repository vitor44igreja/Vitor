import { useState } from 'react'
import Cabecalho from '../../components/cabecalho';
import Linha from '../../components/linha';
import Txt from '../../components/texto';
import './index.scss';

export default function Exercicio4() {
    const [nomeLivro, setNomeLivro] = useState('')
    const [qtdPaginas, setQtdpaginas] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [res, setRes] = useState(0)

    function CalcularTempo() {

        let paginas = qtdPaginas
        let seg = segundos

        let res = paginas * seg / 3600


        setRes(res)
    }

    function teclaApertada(e) {
        if (e.key === "Enter") {
            CalcularTempo()
        }
    }
    return (
        <div className='pagina-04'>
            <Cabecalho />

            <Linha
                titulo='Exercício 04 - Leitura de livro'
                ex='Exercicio 04'
                cor='#37B7FF'
            />
            <div className='secao'>
            <div className='txt'>            
                <Txt
                titulo='Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página'
                />
            </div>
            <div className='exercicio-leitura' onKeyUp={teclaApertada}>
            <h1>Nome do livro</h1>
            <input type="text" placeholder='Nome'value={nomeLivro}onChange={e => setNomeLivro(e.target.value)} />
            <h1>Total de páginas</h1>
            <input type="text" placeholder='0'value={qtdPaginas} onChange={e => setQtdpaginas(e.target.value)} />
            <h1>Tempo em segundos de leitura</h1>
            <input type="text" placeholder='0'value={segundos} onChange={e => setSegundos(e.target.value)} />
            <button onClick={e => CalcularTempo (e.target.value)}>Executar</button>
            </div>
        <h1 className='res'>Você lerá {nomeLivro} em {res} horas.</h1>
        </div>
        </div>


    )
}