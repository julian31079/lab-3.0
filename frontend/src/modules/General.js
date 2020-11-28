import React from 'react';
import { Link } from 'react-router-dom';
import { CreateUser } from './CreateUser';
export const General = () => {
    return <div>
        <div className='container p-4'>
            <h1 className='text-center'>Bienvenido</h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-lg-7 text-center text-lg-left pb-5'>
                    <div className="card border-secondary mb-3" style={{ maxWidth: '25rem' }}>
                        <div className='card-header'>
                            <h2 className="card-title">El lugar perfecto para experimentación</h2>
                        </div>
                        <div className="card-body">

                            <h4 className="card-text">Si deseas obtener más información pulsa aquí</h4>
                            <Link className='btn btn-info' to='/about'>Más información</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col-lg-5'>
                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                        <div className="card-body">
                            <h4 className="card-title">Para comenzar, crea un usuario</h4>
                            <CreateUser />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}