import React, { useState } from 'react';
import { Link} from 'react-router-dom';


const api = process.env.REACT_APP_API;
export const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const create = async (e) => {
        e.preventDefault();
       await fetch(api + '/createUser', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                email,
                password
            })
        });

        window.confirm("Usuario creado");
        
        setEmail('');
        setPassword('');
    }
    return <div className='card mx-auto p-2' style={{ maxWidth: '20rem' }}>
        <div className='card-body'>
            <form onSubmit={create}>
                <div className='form-group'>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" placeholder="Ingresa tu correo" />
                </div>
                <div className='form-group'>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
                <div>
                    <Link to='/'><h6 className="text-muted">¿Tienes cuenta?, ingresa aquí</h6></Link>
                </div>


            </form>

        </div>
    </div>
}