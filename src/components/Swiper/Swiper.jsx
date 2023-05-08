import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

  

const Swiperjsx = ({ slides }) => {
	return (
    <>	

	<div className="latest-releases">
			<h3>Últimos Lanzamientos</h3>
		</div> 

		<div className='container-swiper'>
<Swiper
        slidesPerView={5}
        spaceBetween={0}
        
		autoplay= {{
			delay: 1000,
			disableOnInteraction: false,
		  }}

        modules={[Pagination, Autoplay]}
        // autoplayHoverPause= {true}
        loop={true}    
      className="mySwiper swiper">

			{slides.map (( slide ) =>(
				
        <SwiperSlide key= {slide.img} >
          <img className='swiper-img-class' src={slide.img} alt="imagen" />
          <label className='name'>{slide.name}</label>
          <label className='brand'>{slide.brand}</label>
          <label className='price'>{slide.price}</label>

          <div>
          <Link className= 'button1' to= {`/detail/${slide.id}`}>
            <button className='btn btn-outline-dark'>Detalle</button>    
          </Link>
          </div>
        </SwiperSlide>

			))}

</Swiper>
		</div>

		<div className='banner-gif'>
			<img src="img/bannergif.gif" alt="imagen" />
		</div>

		
		<div className="more-recomend">
			  <h4>Nuestros Más Recomendados</h4>
		</div>
    </>
  )
}


export default Swiperjsx