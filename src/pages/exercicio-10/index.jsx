import './index.scss';

import Cabecalho from "../../components/cabecalho";
import Linha from "../../components/linha";
import Txt from '../../components/texto';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exercicio10() {
    const [novaMeta, setNovaMeta] = useState(0)
    const [novaMeta1, setNovaMeta1] = useState(0)
    const [res, setRes] = useState(0)
    const [listaMetas, setListaMetas] = useState([])

    function teclaApertada(e) {
        if (e.key === "Enter") {
            AdicionarMeta()
        }
    }
    function AdicionarMeta(){
        setListaMetas([...listaMetas, novaMeta, novaMeta1])
    }
    function CalcularIMC(){
        let altura = Number(novaMeta)
        let peso = Number(novaMeta1)

        

        let res = (peso / altura)**2

        setRes(res)
    }

    return (
        <div className='pagina-10'>

            <Cabecalho />

            <Linha
                titulo='Calculo de IMC com histórico'
                ex='Exercicio 10'
                cor='#B75333'
            />
            <div className='secao'>
                <div className='txt'>
                    <Txt
                        titulo='Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação'
                    />
                </div>
                <div className='exercicio-imc' onKeyUp={teclaApertada}>
                    <div className='registrando'>
                    <div className='input'>
                        <div className='barra'>
                        <h1>Altura</h1>
                        <input type="text" placeholder='0' value={novaMeta} onChange={e => setNovaMeta(e.target.value)}/>
                        </div>

                        <div className='barra'>
                        <h1>Peso</h1>
                        <input type="text" placeholder='0'value={novaMeta1} onChange={e => setNovaMeta1(e.target.value)}  />
                        </div>
                    </div>
                    <button onClick={AdicionarMeta}>Executar</button>
                    </div>
                    <div className='registros'>



                        <ul>
                            {listaMetas.map(item =>
                                <li className='reg'>
                                    <div className='info'>Altura: {novaMeta} | Peso: {novaMeta1} | Situação: Peso {res > 18 && res < 24 && res <= 18.5 ?'abaixo do ideal' : 'acima do ideal'} </div><Link className='regi'><img className='lixo' src="assets/image/lixeira.png" alt="" /></Link>
                                </li>
                            )}
                        </ul>

{/* 
                        <div className='reg'>
                            <div className='info'>Altura: 1.80 | Peso: 80.5 | Situação: Peso Normal</div> <Link className='regi'><img className='lixo' src="assets/image/lixeira.png" alt="" /></Link>
                        </div>

                        <div className='reg'>
                            <div className='info'>Altura: 1.80 | Peso: 80.5 | Situação: Peso Normal</div> <Link className='regi'><img className='lixo' src="assets/image/lixeira.png" alt="" /></Link>
                        </div>

                        <div className='reg'>
                            <div className='info'>Altura: 1.80 | Peso: 80.5 | Situação: Peso Normal</div> <Link className='regi'><img className='lixo' src="assets/image/lixeira.png" alt="" /></Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}