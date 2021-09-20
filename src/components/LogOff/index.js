import React from 'react';
import history from '../../services/history';

// import { Container } from './styles';

function LogOff() {
    return (
        <div>
            <button
                onClick={() => {
                    sessionStorage.removeItem('token');
                    history.push('/');
                }}
            >
                Sair
            </button>
        </div>
    );
}

export default LogOff;
