import React from 'react';
import { useState, useEffect } from 'react';

const Sub3 = () => {

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  /* useEffect(()=> {
    setTimeout(() => {setAlert(false)}, 3000)
  }) */

  //브라우저는 이 코드가 모두 실행된다음(에러없이) html코드를 실행
  /* for (let i=1; i<10000; i++) {
    console.log('i:', i)
  } */

  useEffect(() => {
    //html코드가 모두 렌더링 된 후에 이 코드가 실행
    /* for (let i=1; i<10000; i++) {
      console.log('i:', i);
      console.log('useEffect')
    } */

    let a = setTimeout(() => { setAlert(false) }, 5000);
    console.log(2);

    return () => {
      //기존 타이머 제거 -> useEffect 동작 전에 실행 구문 return () => {}
      clearTimeout(a);
      //기존 데이터 요청은 제거해주세요
    }
  }, [count])
  return (
    <div className='event_wrap'>
      <div className='event_bg'>
        <strong>내 인생 <br />첫 그림 구독</strong>
        <p>신규 체험가 33,000원</p>
      </div>
      {
        alert === true
          ? <div className='alert alert-danger'>5초 이내 구매시 20% 할인</div>
          : null
      }
      <div className="contents">
        <p className="title">오늘이 지나면 <br />사라지는 할인 혜택</p>

        <div className="event_cont event_cont01">
          <p>천 만원대 작품도, <br />대형 작품도<span>전부 33,000원/<em>월</em></span></p>
        </div>

        <div className="event_cont event_cont02">
          <p>설치비, 운송비도<br />신규 고객이면<span>전액 면제!</span></p>
        </div>

        <div className='event_bottom_text'>
          <p className="title">당신의 공간<br />그림구독으로 완전히 새롭게</p>
          <p className="desc">우리는 취향 분석을 통한 작품 큐레이팅부터 안전하고 완벽한 설치로 당신의 공간을 3개월마다 다시 태어나게 합니다.</p>
          <button>그림구독경험하기</button>
        </div>
      </div>
    </div>
  )
}

export default Sub3