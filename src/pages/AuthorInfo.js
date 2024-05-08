import React, { navigate } from 'react'
import AuthorCard from '../component/AuthorCard';

const AuthorInfo = ({ pic, showButton, btnDataClick }) => {

  // sub2/:id 경로가 클릭되면 첫번째 페이지를 보여주는 navigate 함수 선언
  const goToSub2 = (id) => {
    navigate(`/sub2-1/${id}`)
  }
  //console.log(id);
  //console.log(showButton)
  return (
    <>
      <div className='container authorList'>
      <h2 className='mb30'>작가 소개</h2>
        <p className="desc mb30">우리의 일상에 색을 더하는 것은 예술의 힘입니다. <br />[스테이 마인드]에서는 이 힘을 믿으며, 우리의 삶 속에 예술을 더 가까이 할 수 있도록 다양한 작가들의 그림을 렌탈해 드립니다. 오늘 소개할 작가들은 단순한 미의 전달자가 아닌, 각자의 독특한 세계관과 이야기를 가진 예술의 창조자들입니다.</p> 
        
        <div className='authcard_wrap'>
          {
            pic.map((item, i) => (
              <AuthorCard key={i} item={item} id={i} onClick={goToSub2} index={i}/>
            ))
          }
       </div>
      </div>

      {/* 상품더보기 버튼 */}
      {
        //버튼이 활성화되었을 때만 클릭 가능하도록 설정
        showButton && (
          <button className="btn-data" onClick={btnDataClick} disabled={!showButton}>상품 더보기 </button>
        )
      }
    </>


  )
}

export default AuthorInfo