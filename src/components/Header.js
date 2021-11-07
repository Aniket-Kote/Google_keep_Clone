import React from 'react';
import '../styling/style.css'

function Header() {
    const logo=(
        <img src="https://www.apkmirror.com/wp-content/uploads/2021/10/15/6168e17c3c834-384x384.png" className='keep_logo' alt="keep_logo"/>
    )
    return (
        <div className="navbar">
        {logo} <h2 className="keep_title">Keep</h2>
        </div>
    )
}

export default Header