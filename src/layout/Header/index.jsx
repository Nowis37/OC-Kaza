import logo from '../../assets/logo.svg'

function Header() {

    return (
    <header className="header"> 
        <img src={logo} alt="Kasa" className="header__logo"/>
        <nav className="header__link">
            <a href="/" className="header__link__active">Accueil</a>
            <a href="/about">A Propos</a>
        </nav>
        
    </header>
    )
}

export default Header