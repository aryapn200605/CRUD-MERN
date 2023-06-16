import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar is-dark" role="navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src={require("../images/logo.png")} alt='logo' />
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href='/'>
                        Home
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar