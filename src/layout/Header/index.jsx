import logo from '../../assets/logo.svg'

function Header() {

    return (
    <div className="header"> 
        <img src={logo} alt="Kasa" className="header__logo"/>
        <div className="header__link">
            <a href="/" className="header__link__active">Accueil</a>
            <a href="/about">A Propos</a>
        </div>
        
    </div>
    )
}

export default Header