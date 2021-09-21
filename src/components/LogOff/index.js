import React from 'react';
import history from '../../services/history';

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
