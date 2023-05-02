import { Link, NavLink } from "react-router-dom";


export function Navbar(){
    return (
<nav className="navbar navbar-expand-lg bg-white navprops">
<div className="container-fluid">
    <NavLink className={({isActive})=> isActive ? 'btn btn-outline-dark' : 'btn btn-outline-white'} to='/'>
    <div className="navbar-brand" href="index.html">PERFUMERIA KARINA</div>
    </NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-class miclass">

            <li className="nav-item dropdown">
            
                <div className="nav-link dropdown text-dark" href="pages/fragancias.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Fragancias
                </div>
                
                <ul className="dropdown-menu">
                    <li>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-dark' : 'btn btn-outline-white'} to='/category/perfumesimportados'>
                        
                        <div className="dropdown-item" href="pages/fragancias.html">Hombres</div>
                    
                </NavLink>
                    </li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                <NavLink to='/category/perfumesnacionales'>
                        
                        <div className="dropdown-item" href="pages/fragancias.html">Mujeres</div>
                        
                </NavLink>
                        </li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                <NavLink to='/category/perfumesnacionales'>
                        
                        <div className="dropdown-item" href="pages/fragancias.html">Niños y Bebes</div>
                        
                </NavLink>
                        </li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/fragancias.html">Unisex</div></li>

                </ul>
            </li>
            <li className="nav-item dropdown">
                <div className="nav-link dropdown text-dark" href="pages/maquillaje.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Maquillaje
                </div>
                <ul className="dropdown-menu">
                    <li><div className="dropdown-item" href="pages/maquillaje.html">Labios</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/maquillaje.html">Rostro</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/maquillaje.html">Ojos</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/maquillaje.html">Manos y Uñas</div></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <div className="nav-link dropdown text-dark" href="pages/accesorios.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Accesorios
                </div>
                <ul className="dropdown-menu">
                    <li><div className="dropdown-item" href="pages/accesorios.html">Collares</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/accesorios.html">Anillos</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/accesorios.html">Aros</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/accesorios.html">Accesorios Exclusivos</div></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <div className="nav-link dropdown text-dark" href="pages/capilar.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Capilar
                </div>
                <ul className="dropdown-menu">
                    <li><div className="dropdown-item" href="pages/capilar.html">Shampoo</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/capilar.html">Acondicionador</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/capilar.html">Máscaras</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/capilar.html">Ampollas</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/capilar.html">Sets</div></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <div className="nav-link dropdown text-dark" href="pages/skincare.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Skin Care
                </div>
                <ul className="dropdown-menu">
                    <li><div className="dropdown-item" href="pages/skincare.html">Limpiadores</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/skincare.html">Exfoliantes</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/skincare.html">Cremas Hidratantes</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/skincare.html">Tratamiento Anti-Age</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/skincare.html">Tratamiento Anti-Ácne</div></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <div className="nav-link dropdown text-dark" href="pages/sets.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Sets
                </div>
                <ul className="dropdown-menu">
                    <li><div className="dropdown-item" href="pages/sets.html">Sets de Fragancias</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/sets.html">Sets de Baño</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/sets.html">Sets de Cremas</div></li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li><div className="dropdown-item" href="pages/sets.html">Sets de Maquillaje</div></li>
                </ul>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2 escribe-aqui" type="search" placeholder="Escribe Aquí"
                aria-label="Search"></input>
            <button className="btn btn-outline-ligth" type="submit">Buscar</button>
        </form>
        <Link to='/cart'>
        <div> 🛒 </div>
        </Link>
        

        <div></div>
    </div>
</div>
</nav>
    
    )
}