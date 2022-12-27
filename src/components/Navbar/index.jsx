import React from 'react';
import Logo from '../../images/logo.svg'

function index(props) {
    return (
        <div className="py-4 flex">
            <div className="flex ">
                <img src={Logo} alt=""/>
            </div>
        </div>
    );
}

export default Index;