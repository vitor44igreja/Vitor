import './index.scss';
import { Link } from 'react-router-dom';

export default function Linha(props) {
    return (
        <div className='titulo-comp'>
            
            <div className='voltar'>
                <Link to='/'>
                    <img src="/assets/image/seta.png" alt="" width={40} />
                </Link>
                
                <h1>
                    {props.ex} - {props.titulo}
                </h1>
            </div>

            <div>
                <hr className="reta" style={{background:props.cor}}/>
            </div>

        </div>
    )
}