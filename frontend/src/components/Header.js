import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ label, linkTo }) => (
  <Link to={linkTo} className="item">
    {label}
  </Link>
)
