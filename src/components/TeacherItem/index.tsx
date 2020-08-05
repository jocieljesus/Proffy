import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem(){
    return(

        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/47466470?s=460&u=4a3407b984b119f383c521b9f71e54148c03a62b&v=4" alt="Jociel"/>
            <div>
                    <strong>Jociel Jesus</strong>
                    <span>Matemática</span>
            </div>
        </header>
        <p>
            Técnico em Desenvolvimento de Sistemas <br/>
            Amante de Motocilcetas <br/>
            Catolico Apostólico Romano <br/>
            De Olindina Vive em Feira de Santana <br/>
        </p>
        <footer>
            <p>Preço/ Hora
                <strong> RS 90 </strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Contato
            </button>
            
        </footer>
    </article>
    )
}

export default TeacherItem;