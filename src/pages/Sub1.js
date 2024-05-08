import React, {useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav, Link } from 'react-bootstrap';
import tabImg01 from './img/img_review01.jpg';
import tabImg02 from './img/img_review02.jpg';
import tabImg03 from './img/img_review03.jpg';

//sub1 component
const Sub1 = ({ pic }) => {
  let { id } = useParams(); //window.location에 있는 주소값에서 유저가 선언한 파라메터만 추출하는 함수(예: /sub1/:id);
  let [tabs, setTabs] = useState(0); //tab 메뉴의 기본상태가 0

  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="container picture">
        <div className="title-area">
          <h2>STAY MIND</h2>
          <p className="small-title">
            <span>스테이 마인드가 제안하는 작품을 감상하고 렌탈해보세요</span>
          </p>
        </div>
        <div className="col-md-6 img">
          <img
            src={`${process.env.PUBLIC_URL}/img/img${parseInt(id) + 1}.jpg`}
            alt={pic[id].title}
          />
        </div>

        <div className="col-md-6 picture-info">
          <p className="pt-4 title">{pic[id].title}</p>
          <p className="author">{pic[id].author}</p>
          <p className="content">{pic[id].content}</p>
          <p className="price">￦{parseInt(pic[id].price, 10).toLocaleString()}</p>
          <button className="btn btn-danger" onClick={()=>{navigate('/cart'); 
          }}>렌탈하기</button>
        </div>


      <div className="tab-menu">
        <h2>구독 후기</h2>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => setTabs(0)}>아이있는 집</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => setTabs(1)}>신혼의 취향</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => setTabs(2)}>실패없는 작품구매</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* 삼항연산자 조건식?true:false */}
        {/* {
            tabs === 0 ? <div> 내용 0 </div>:null
          }
          {
            tabs === 1 ? <div> 내용 1 </div>:null
          }
          {
            tabs === 2 ? <div> 내용 2 </div>:null
          }
        */}
        <TabContent tabs={tabs} />
      </div>
    </div>
  )
};

//tab-content를 component로 선언
function TabContent({ tabs }) {
  let [fade, setFade] = useState(''); //기본 fade 상태를 선언

  useEffect(()=>{
    setTimeout(() => { setFade('end')}, 300)
    //setFade('end')

    //clean up function -> useEffect 실행 전에 먼저 실행하는 구문
    return () => {
      setFade('')
    }
  }, [tabs])

  if (tabs == 0) {
    return (
      <div className="tab-content">
        <figure><img src={tabImg01} alt="" /></figure>
        <p className="review_title">최*나님, 경기 김포시 <br />그림구독 34개월째 이용 중</p>
        <p className="review_text">매일 영상에만 푹 빠진 아이가 걱정이 돼서 티비를 치우고 그림을 걸었어요. 다행스럽게도 환경을 만들어주니 아이가 적응하더라고요. 이제 우리 집 거실은 완전 북카페가 됐네요!</p>
      </div>
    )  //component 이므로 반드시  return문     
  } else if (tabs == 1) {
    return (
      <div className="tab-content">
        <figure><img src={tabImg02} alt="" /></figure>
        <p className="review_title">이*진님, 서울 용산구 <br />그림구독 19개월째 이용 중</p>
        <p className="review_text">연애시절부터 카페 다니는 걸 참 좋아했어요. 그래서 신혼집에 홈카페를 차리기로 결심했죠. 단 하나뿐인 원화로 공간을 꾸미니 마치 프라이빗 카페에 온 것 같아요!</p>
      </div>
    )
  } else if (tabs == 2) {
    return (
      <div className="tab-content">
        <figure><img src={tabImg03} alt="" /></figure>
        <p className="review_title">한*석님, 인천 연수구 <br />그림구독 9개월 이용, 1점 구매</p>
        <p className="review_text">작품 구매는 하고 싶은데 내 취향을 몰라서 오픈갤러리 그림구독을 추천받았습니다. 처음엔 목돈 나가는 것 아닌가 싶었는데, 구매가에서 구독료를 할인해주어 경제적이었던 것 같아요.</p>
      </div>
    )
  }
  //return [<div>내용1</div>,<div>내용2</div>,<div>내용2</div> ][tabs]
}



export default Sub1