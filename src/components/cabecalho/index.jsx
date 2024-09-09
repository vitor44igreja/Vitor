import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return (
        <header className="cabecalho">

            <div className="logo">
                <img src="/assets/image/logo.png" alt="" width={51.52} height={60} />
                <h2>React FreiS</h2>
            </div>

            <div className="links">
                <Link to='/'>Inicio</Link>
                <Link to='/sobre'> Sobre</Link>
            </div>
        </header>
    )
}