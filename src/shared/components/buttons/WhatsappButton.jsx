import './whatsappButton.css';

export default function WhatsappButton() {

    const handleClick = () => {
        window.open('https://wa.me/+56981337483', '_blank'); // Reemplaza '1234567890' con tu número de WhatsApp
    };
  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img src="assets/img/whatsapp-icon.png" alt="WhatsApp" />
    </div>
  )
}
