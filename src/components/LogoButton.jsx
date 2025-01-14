import PropTypes from 'prop-types'
import { useState } from 'react'

const LogoButton = ({logo, size, color}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const buttonStyle = {
    color: hover ? `${color}` : "#e5e7eb",
    textShadow: hover ? `${color} 0 0 5px` : "0 0 0"
  };
  return (
    <div className={`${size} m-3 cursor-pointer`}>
      <i className={`bx bxl-${logo} hover:scale-125 transition-all`} style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
    </div>
  )
}

LogoButton.propTypes = {
  logo: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
}

export default LogoButton