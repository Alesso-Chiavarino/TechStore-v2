import './WhatsAppIcon.css'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppIcon = () => {
  return (
    <div className="icono_whastapp">
      <a href="https://wa.me/3513079987" rel="noreferrer" target="_blank"><FaWhatsapp className='whatsAppIcon' /></a>
    </div>
  )
}

export default WhatsAppIcon