export function NavBar(){
    return (
<nav className="navbar navbar-expand-lg bg-white navprops">
<div className="container-fluid">
    <a className="navbar-brand" href="index.html">PERFUMERIA KARINA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-class miclass">

            <li className="nav-item dropdown">
                <a className="nav-link dropdown text-dark" href="pages/fragancias.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Fragancias
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/fragancias.html">Hombres</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/fragancias.html">Mujeres</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/fragancias.html">Niños y Bebes</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/fragancias.html">Unisex</a></li>

                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown text-dark" href="pages/maquillaje.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Maquillaje
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/maquillaje.html">Labios</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/maquillaje.html">Rostro</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/maquillaje.html">Ojos</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/maquillaje.html">Manos y Uñas</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown text-dark" href="pages/accesorios.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Accesorios
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/accesorios.html">Collares</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/accesorios.html">Anillos</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/accesorios.html">Aros</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/accesorios.html">Accesorios Exclusivos</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown text-dark" href="pages/capilar.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Capilar
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/capilar.html">Shampoo</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/capilar.html">Acondicionador</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/capilar.html">Máscaras</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/capilar.html">Ampollas</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/capilar.html">Sets</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown text-dark" href="pages/skincare.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Skin Care
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/skincare.html">Limpiadores</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/skincare.html">Exfoliantes</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/skincare.html">Cremas Hidratantes</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/skincare.html">Tratamiento Anti-Age</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/skincare.html">Tratamiento Anti-Ácne</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown text-dark" href="pages/sets.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Sets
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/sets.html">Sets de Fragancias</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/sets.html">Sets de Baño</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/sets.html">Sets de Cremas</a></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><a className="dropdown-item" href="pages/sets.html">Sets de Maquillaje</a></li>
                </ul>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2 escribe-aqui" type="search" placeholder="Escribe Aquí"
                aria-label="Search"></input>
            <button className="btn btn-outline-ligth" type="submit">Buscar</button>
        </form>
        <div></div>
    </div>
</div>
</nav>
    
    )
}