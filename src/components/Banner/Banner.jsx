import './Banner.css'

const Banner = () => {
    return (
        <>
            
            <div id="carouselExampleInterval" className="carousel slide micarousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2500">
                        <img src="img/bh_ralph_1.png" className="d-block w-100 micarousel" alt="banner 1" ></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/bh_ysl_desk_4_banner.jpg" className="d-block w-100 micarousel" alt="banner 2"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/bh_armani_2_banner.png" className="d-block w-100 micarousel" alt="banner 2"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/bh_kenzo_13_banner.jpg" className="d-block w-100 micarousel" alt="banner 2"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/1_bh_lancome_2.jpg" className="d-block w-100 micarousel" alt="banner 2"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="img/1_bh_lancome_copia_1_.jpg" className="d-block w-100 micarousel" alt="banner 3s"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="textobanner">
                <h2 className="textobanner">ENVIOS GRATIS EN COMPRAS SUPERIORES A $20.000</h2>
            </div>
        </>

    )
}

export default Banner