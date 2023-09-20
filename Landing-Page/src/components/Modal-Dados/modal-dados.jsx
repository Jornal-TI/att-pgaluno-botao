import React from 'react'
import './modal-dados.css'

const ModalDados = () => {

    const nomeUsuario = "Samuel Costa"
    const emailUsuario = "samuelcosta@gmail.com"
    const cpfUsuario = "527.721.410-04"
    const enderecoUsuario = "Rua Tchurubengos"
    const telefoneUsuario = "(11)94358-5819"


    return (

        <div>
            <div className='dados-form'>


                <div className='parte-alta'>

                    <label>Nome:</label>
                    <textarea rows="2" cols="100" value={nomeUsuario} className='txt-area-dados' readOnly />

                    <label>Nascimento:</label>
                    <textarea value={emailUsuario} className='txt-area-dados' readOnly />

                    <label>Turma:</label>
                    <textarea value={cpfUsuario} className='txt-area-dados' readOnly />

                    <label>CPF:</label>
                    <textarea value={enderecoUsuario} className='txt-area-dados' readOnly />

                    <label>Telefone:</label>
                    <textarea value={telefoneUsuario} className='txt-area-dados' readOnly />
             
                    <label>Email:</label>
                    <textarea value={telefoneUsuario} className='txt-area-dados' readOnly />
                    
                    <label>Endereço:</label>
                    <textarea value={telefoneUsuario} className='txt-area-dados' readOnly />

                </div>

                <div className='parte-baixa'>

                    <label>Numero:</label>
                    <textarea rows="2" cols="100" value={nomeUsuario} className='txt-area-dados' readOnly />

                    <label>Bairro:</label>
                    <textarea value={emailUsuario} className='txt-area-dados' readOnly />

                    <label>Cidade:</label>
                    <textarea value={cpfUsuario} className='txt-area-dados' readOnly />

                    <label>Estado:</label>
                    <textarea value={enderecoUsuario} className='txt-area-dados' readOnly />

                    <label>Cep:</label>
                    <textarea value={telefoneUsuario} className='txt-area-dados' readOnly />
                   
                    <label>Responsavel:</label>
                    <textarea value={telefoneUsuario} className='txt-area-dados' readOnly />
                    
                </div>

            </div>


        </div>

    )

}
export default ModalDados;