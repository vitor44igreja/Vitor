import { BrowserRouter, Routes, Route } from "react-router-dom";


//importação das paginas
import App from "./pages/inicio";
import Sobre from "./pages/sobre";
import Exercicio2 from "./pages/exercicio-02";
import Exercicio4 from "./pages/exercicio-04";
import Exercicio5 from "./pages/exercicio-05";
import Exercicio10 from "./pages/exercicio-10";
import Exercicio11 from "./pages/exercicio-11";


export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element = {<App /> }/> 
                <Route path="/sobre" element = {<Sobre/>}/>
                <Route path="/ex2" element = {<Exercicio2/>}/>
                <Route path="/ex4" element = {<Exercicio4/>}/>
                <Route path="/ex5" element = {<Exercicio5/>}/>
                <Route path="/ex10" element = {<Exercicio10/>}/>
                <Route path="/ex11" element = {<Exercicio11/>}/>
            </Routes>
        </BrowserRouter>


    )
}