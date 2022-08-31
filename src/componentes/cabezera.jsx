import React from 'react'
import logoEnDonde from "../imagnes/logoEnDonde.png"
import "../estilos/logo.css"

export default function Cabezera() {
    return (
        <div className='conteinerCabezera'>
            <img className='logo img-fluid' src={logoEnDonde} alt="nose ve" />
        </div>
    )
}
