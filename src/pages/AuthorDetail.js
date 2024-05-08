import AuthorDetailCard from "../component/AuthorDetailCard";
import { useParams, useNavigate } from "react-router-dom";

function AuthorDetail({ pic }) {
  let { id } = useParams();
  console.log(id)

  const navigate = useNavigate();
  const goToSub2 = () => {
    navigate('/sub2/sub2-2')
  }
  return (
    <div className='container authorList'>
      <h2 className='mb30'>작가 소개</h2>
      <p className="desc mb30">{pic[id].authorInfo}</p>
      <AuthorDetailCard pic={pic} id={parseInt(id, 10)} />

      <div className="event">
        <p>오픈갤러리는 더 나은 미술 생태계를 함께 이끌어 나갈 <br />작가님을 기다리고 있습니다.</p>
        <button type='button' onClick={goToSub2}>작가공모 바로가기</button>
      </div>
      <div className='container author'>
        <div className="artRental">
          <h4>당신의 공간, <span>그림렌탈로 완전히 새롭게</span></h4>
          {/* <p className="desc">우리는 취향 분석을 통한 작품 큐레이팅부터 안전하고 완벽한 설치로 당신의 공간을 3개월마다 다시 태어나게 합니다.</p> */}
          <ul className="artRental_diff">
            <li>
              <img src={process.env.PUBLIC_URL + '/img/service_box1_item1.png'} />
              <strong>큰 돈 쓰지 않아도 <span>쉽게 바뀌는 분위기</span></strong>
              {/* <p className="desc">매번 바뀌는 유행이 전혀 두렵지 않아요. 비용 부담과 실패 위험 없이 빠르고 확실한 공간 변화를 약속합니다.</p> */}
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/img/service_box1_item2.png'} />
              <strong>복제품은 따라올 수 없는 <span>오리지널 원화의 감동</span></strong>
              {/* <p className="desc">원작은 어떤 방식으로도 재현될 수 없습니다. 붓 터치와 생생한 질료의 느낌, 친필 서명으로 원화의 감동을 느껴보세요.</p> */}
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/img/service_box1_item3.png'} />
              <strong>실패 없는 구매를 위한 <span>사전 취향 탐색</span></strong>
              {/* <p className="desc">소장하고 싶은 작품이 있나요? 렌탈로 걸어본 뒤, 구매를 결정하시면 작품가에서 기지불한 렌탈료를 할인해드립니다.</p> */}
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/img/service_box1_item4.png'} />
              <strong>보관 걱정 없는 <span>편리한 교체 서비스</span></strong>
              {/* <p className="desc">원하시는 날짜에 맞춰 작품을 설치 및 교체해드립니다. 작품 보관 및 처리 걱정은 덜고 공간은 넓게 활용하세요.</p> */}
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetail