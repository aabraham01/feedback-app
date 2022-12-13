import React from 'react'
import styles from "./Header.module.css"
import PropTypes from "prop-types";


function Header({text = "Default", textColor, headerCount}) {
  return (
    <header>
      <div className={styles.container}>{text}</div>
    </header>
  )
}

//console.log(<Header/>)

Header.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default Header