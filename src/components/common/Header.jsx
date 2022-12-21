import React from 'react'
import styles from "./Header.module.css"
import PropTypes from "prop-types";


function Header({text = "Default", textColor= "white", bgColor = "red"}) {

   const headerStyles = {
      backgroundColor: bgColor,
      // height: "600px",
   }

  return (
    <header style={headerStyles}>
      <div className={styles.container}>{text}</div>
    </header>
  )
}

//console.log(<Header/>)

Header.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header