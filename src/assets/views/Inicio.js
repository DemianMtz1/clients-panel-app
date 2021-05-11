import React from 'react'
import { useHistory } from 'react-router-dom'
import headerImg from '../img/home.svg'
export const Inicio = () => {
    
    const history = useHistory();

    return (
        <div>
            <header>
                <img src={headerImg} alt="header-img" />
                <h1>Bienvenido a ClientsApp</h1>
            </header>

            <section className="dashboard">
                <div className="first-row">
                    <div className="total-clientes">
                        <p>Total de clientes</p>
                        <h1>5</h1>
                    </div>
                    <div className="nuevos-clientes">
                        <p>Nuevos clientes de esta semana</p>
                        <h1>2</h1>
                    </div>
                </div>
                <div className="second-row">
                    <div>
                        <p>Contratos finalizados</p>
                        <h1>10</h1>
                    </div>
                </div>
            </section>

            <section className="card-clients-wrapper">
                <div className="header-section">
                    <button onClick={()=>history.push('/add-clients')}>+</button>
                    <p>Añadir Cliente</p>
                </div>

                <div className="card-content">
                    <h3>Mis clientes:</h3>
                    <ul>
                        <li>Cliente uno</li>
                        <li>Cliente dos</li>
                        <li>Cliente tres</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}