import React from 'react'

export default function Searchbar() {
    return (
        <div className="searchBar">
        <form action="#">
          <input className="input_Search" type="text" placeholder="Search.." name="search" />
          <button className="input_btn" type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div> 
    )
}
