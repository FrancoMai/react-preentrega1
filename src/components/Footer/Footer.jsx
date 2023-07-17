import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-part-1'>
                <div className='placin'>
                    <h5 className='title-footer'>Sobre Perfumeria Karina</h5>
                    <a>Nos encontramos en Gdor. Iriondo 2321</a>
                    <a>San Justo, Santa Fe</a>
                </div>
                <div className='placin'>
                    <h5 className='title-footer'>No se que poner</h5>
                    <a></a>
                </div>
                <div className='placin contacto'>
                    <h5 className='title-footer'>Contacto</h5>
                    <a className='links' href='https://wa.me/+543498436701' target='_blank'>WhatsApp</a>
                    <a className='links' href='https://www.instagram.com/perfumeriakarina_/' target='_blank'>Instagram</a>
                    <a className='links' href='https://mail.google.com/mail/?view=cm&to=perfumeriakarina@gmail.com' target='_blank'>Correo Electronico</a>
                </div>
            </div>
            <div className='footer-part-2'>
                Perfumeria Karina
            </div>
        </footer>
    )
}

export default Footer