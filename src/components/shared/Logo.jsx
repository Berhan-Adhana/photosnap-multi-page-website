import React from 'react'
import { Link } from 'react-router-dom';

const Logo = ({logo}) => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
}

export default Logo