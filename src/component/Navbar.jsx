import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const handleclick=(ele)=>{
console.log(ele)
props.xyz(ele)
    }
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News app</Link>
    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li  onClick={()=>handleclick('india')}className="nav-item">
          <Link className="nav-link" to="/">cricket</Link>
        </li>
       
        <li onClick={()=>handleclick('sports')} className="nav-item">
          <Link className="nav-link" to="/">sport</Link>
        </li>
        <li onClick={()=>handleclick('Enterainment')} className="nav-item">
          <Link className="nav-link" to="/">Eentertainment</Link>
        </li>
        <li onClick={()=>handleclick('Politics')} className="nav-item">
          <Link className="nav-link" to="/">Politics</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
