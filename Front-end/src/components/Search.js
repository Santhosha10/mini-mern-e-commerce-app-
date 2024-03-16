import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function Search() {

  const [keyword , setKwyword] = useState("");
  const navigate = useNavigate ();


  const searchHandler = () =>{
    navigate('/search?keyword='+keyword)
  }
  

  return (
    <div className="input-group">
    <input
        type="text"
        onChange={(e)=> setKwyword(e.target.value)}
       
        id="search_field"
        className="form-control"
        placeholder="Enter Product Name..."
    />
    <div className="input-group-append">
        <button onClick={searchHandler} id="search_btn" className="btn">
        <i className="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
    </div>
  )
}

export default Search