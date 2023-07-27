import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const Swiperjsx = ({ slides }) => {
  const isLower = useMediaQuery({ maxWidth: 719 });
  const slidesPerResol = isLower ? 3 : 5;
  return (
    <>
      <div className="latest-releases">
        <h3>Últimos Lanzamientos</h3>
      </div>

      <div className="container-swiper">
        <Swiper
          slidesPerView={slidesPerResol}
          spaceBetween={0}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="mySwiper swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.img}>
              <img
                className="swiper-img-className"
                src={slide.img}
                alt="imagen"
              />
              <label className="name">{slide.name}</label>
              <label className="brand">{slide.brand}</label>
              <label className="price">${slide.price}</label>

              <div>
                <Link className="button1" to={`/detail/${slide.id}`}>
                  <button className="btndetalle">Comprar</button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="banner-gif">
        <img src="img/bannergif.gif" alt="imagen" />
      </div>

      <div className="container-swiper">
        <Swiper
          slidesPerView={slidesPerResol}
          spaceBetween={0}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="mySwiper swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.img}>
              <img
                className="swiper-img-className"
                src={slide.img}
                alt="imagen"
              />
              <label className="name">{slide.name}</label>
              <label className="brand">{slide.brand}</label>
              <label className="price">${slide.price}</label>

              <div>
                <Link className="button1" to={`/detail/${slide.id}`}>
                  <button className="btndetalle">Comprar</button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='bloque-contenedor'>
        <div className="video-container">
          <iframe src="/img/videopublicidad.mp4" style={{ width: 570, height: 405, frameborder: 0, allowFullScreen: "allowFullScreen" }} ></iframe>
        </div>

        <div className='container-swiper2'>
          <Swiper
            slidesPerView={2}
            spaceBetween={0}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              waitForTransition: false,
            }}

            modules={[Pagination, Autoplay]}
            loop={true}
            className="mySwiper swiper2">

            {slides.map((slide) => (

              <SwiperSlide className="swiperhover" key={slide.img} >
                <img className='swiper-img-className2' src={slide.img} alt="imagen" />
                <label className='name'>{slide.name}</label>
                <label className='brand'>{slide.brand}</label>
                <label className='price'>${slide.price}</label>

                <div className='buttondetalle'>
                  <Link className='button1' to={`/detail/${slide.id}`}>
                    <button className='btndetalle'>Detalle</button>
                  </Link>
                </div>
              </SwiperSlide>

            ))}

          </Swiper>
        </div>
      </div>



      <div className="more-recomend">
        <h4>Nuestros Más Recomendados</h4>
      </div>
    </>
  );
};

export default Swiperjsx;
