import { useState } from 'react'

import './index.scss';
import Cabecalho from "../../components/cabecalho";
import Linha from "../../components/linha";
import Txt from '../../components/texto';

export default function Exercicio2(){


    const [valorKGrama, setValorKGrama] = useState(0)
    const [res, setRes] = useState(0)


    function teclaApertada(e) {
        if (e.key === "Enter") {
            calcularTransicao()
        }
    }

    function calcularTransicao() {

        let Kgrama = valorKGrama

        let res = Kgrama * 1000


        setRes(res)
    }


    return (
        <div className="pagina-ex2">
            <Cabecalho />

            <Linha
                titulo='Converter Kg/Gramas'
                ex='Exercicio 02'
                cor='#B3FF37'
            />

            <section className="secao">
                <div className="txt">
                    <Txt titulo='Implementar um programa em Javascript para converter kilos em gramas'/>
                </div>
                <div className="valor-gramas" onKeyUp={teclaApertada}>
                    <h1>Valor em Kilogramas</h1>
                    <input type="number" placeholder="0" value={valorKGrama} onChange={e => setValorKGrama(e.target.value)} />

                    <button onClick={calcularTransicao}> Executar </button>
                </div>

                <div className="res">
                    <h2>{res} gramas</h2>
                </div>

            </section>
        </div>
    )
}