import React from 'react'

const ImageList = (props) => {
  const { images } = props;
  return (
    <div className="container my-5 justify-content-between">
      <div className="row g-4">
        {images.map(image => (
          <div key={image.id} className="col-sm-6 col-md-4 col-lg-3 text-center">
            <img src={image.previewURL} alt={image.tags} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageList;
