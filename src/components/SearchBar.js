import React, { useState } from 'react'
import ImageList from './ImageList'



const SearchBar = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const key = process.env.REACT_APP_KEY;

  const handleSearch = () => {
    console.log(encodeURIComponent(query));
    fetch(`https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(query)}&image_type=photo`)
      .then(res => res.json())
      .then(images => setImages(images.hits))
      .catch(err => console.log(err))
  }

  const onSearchInputChange = (e) =>{
    setQuery(e.target.value);
  }
  return (

    <div className="overflow-auto">
      <div className="container p-5 bg-dark text-white">

        <h4 className="text-center mb-3">Buscador de imagenes</h4>

        <form className="row">

          <div className="col-sm-8">
            <input className="form-control p-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={onSearchInputChange}/>
          </div>
          <div className="col-sm-4">
            <div className="d-grid">
              <button className="btn btn-outline-primary p-2" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>

        </form>

      </div>
      <ImageList images={images} />
    </div>

  )
}

export default SearchBar;