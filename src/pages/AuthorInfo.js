import React from 'react'
import AuthorCard from '../component/AuthorCard'

const AuthorInfo = ({ pic, showButton, btnDataClick }) => {
  // /console.log(pic);
  console.log(showButton)
  return (
    <>
    <div className='container authorList'>
      {
        pic.map((item, i) => (
          <AuthorCard key={i} item={item} id={i} />
        ))
      }      
    </div>

    {/* 상품더보기 버튼 - showButton 상태에 따라 조건부 렌더링 */}
    {showButton && (
        <div>
          <button className="btn-data" onClick={btnDataClick}>상품더보기</button>
        </div>
      )}
    
     </>
  )
}

export default AuthorInfo