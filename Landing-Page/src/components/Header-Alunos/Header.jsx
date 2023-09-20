import React, { useEffect, useState } from 'react';
import Logo from '../../icons/logo.png'
import Clock from './Relogio'
import { AiOutlineHome } from 'react-icons/ai';

export default function HeaderAluno() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">

            <div className='bk-turma-nome'>
                <h1 className='turma-nome'> TURMA CURSO</h1>
            </div>

            <div className="data-aluno">
                <img id='logo' src={Logo}></img>
                <h1 className='titulo-aluno'> Área do aluno </h1>

                <button className='home-aluno' type='submit' a=""><AiOutlineHome /> </button>
            </div>


        </div>
    )
}