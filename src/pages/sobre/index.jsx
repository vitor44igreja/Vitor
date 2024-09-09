import { Link } from "react-router-dom";
import './index.scss';


export default function App() {
    return (

        <div className="pagina-sobre">

            <header className="cabecalho">

                <div className="logo">
                    <img src="/assets/images/logo.png" alt="" width={51.52} height={60} />
                    <h2>React FreiS</h2>
                </div>

                <div className="links">
                    <Link to='/'>Inicio</Link>
                </div>
            </header>

            <h1>Sobre</h1>

            <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades.</p>
            <p>
                Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades. <br />
                Estamos ansiosos para ver seu progresso e sucesso!
            </p>

            <div className="logoF">
            <img src="/assets/images/logo.png" alt=""height={85} />
            </div>
        </div>
    )
}