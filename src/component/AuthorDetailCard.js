import React from 'react'

const AuthorDetailCard = ({ pic, id }) => {

  return (
    <div className='pic_detail'>
      <figure>
      <img src={`/img/img${id + 1}.jpg`} alt={pic[id].title} />
      </figure>

      <div className="author_text">
        <p className="title">{pic[id].title}</p>
        <p className="text">{pic[id].artInfo}</p>
        <p className="text">{pic[id].artNum}</p>
        <p className="text">￦{parseInt(pic[id].price, 10).toLocaleString()}</p>
        <p className="text">{pic[id].condition}</p>
      </div>
      
    </div>
  )
}

export default AuthorDetailCard