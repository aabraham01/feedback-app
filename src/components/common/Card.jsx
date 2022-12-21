import React from 'react'
import styles from './Card.module.css'

function Card({children, bgColor = 'red'}) {
  return (
    <div style = {{backgroundColor: bgColor}}>{children}</div>
  )
}

export default Card