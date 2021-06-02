import "./Navbar.scss";




function Navbar() {
    return(
            <nav className="navbar">
                <a className="navbar__logo" href="/"><img src="/logo.png" alt="" />Let me  __________ take your picture</a>
                <div className="navbar__link">
                    <a href="/">Photos</a>
                    <a href="/">Places</a>
                    <a href="/">Collection</a>
                    <a href="/">Store</a>
                    <a href="/">Contact</a>
                </div>
            </nav>
    )
}

export default Navbar;