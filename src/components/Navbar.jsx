import '../sass/navbar.scss';

const Navbar = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className="container_navbar">
            <p>CryptoApp</p>
            <button onClick={handleClick}>Cerrar sesion</button>
        </div>
    );
};

export default Navbar;
