import React from 'react';
import subBg from './img/sub_main02.jpg'

const WritersCall = () => {
  return (
    <div>
      <div className='subBg' style={{
        backgroundImage: `url(${subBg})`,
      }}>
        <div>
          <h2>작가공모지원</h2>
          <p>오픈갤러리는 더 나은 미술 생태계를 함께 이끌어나갈 작가님을 기다리고 있습니다.</p>
        </div>
      </div>

      <div className="detail_info">
        <h3>모집분야</h3>
        <h4>평면작품</h4>
        <p>* 오픈갤러리는 현재 에디션이 없는 작품만 다루고 있습니다.</p>
      </div>
      <div className="detail_info">
        <h3>지원대상</h3>
        <h4>국내에서 활발히 작품 활동 중인 작가</h4>
        <p>* 작품이 해외에 있는 경우, 작가 등록이 어려울 수 있습니다.</p>
      </div>
      <div className="detail_info">
        <h3>지원방법</h3>
        <h4>작가 신청서, 작품 포트폴리오를 이메일로 제출</h4>
        <ol>
          <li>이메일 : curator@opengallery.co.kr</li>
          <li>작가 신청서 : 아래 파일을 다운로드하여 작성 후 제출</li>
          <li>작품 포트폴리오 : 작가노트, 작품이미지, 작품명, 사이즈, 재료, 제작연도 등</li>
        </ol>
      </div>
      <div className="bottom_text">
        결과 안내는 보내주신 포트폴리오를 내부에서 검토 후 개별적으로 연락드리고 있습니다. <br />
        검토 후 결과 안내까지는 최대 1-2주 정도 소요됩니다.
      </div>

    </div>
  )
}

export default WritersCall