import React from 'react';
import Card from '../component/Card';

const Homepage = ({ pic, showButton, btnDataClick }) => {
    return (
        <div>
            <div className='main-bg'>
                <h1>STAY MIND</h1>
                <p>내 인생 첫 그림구독 <br />지금 시작해보세요</p>
            </div>

            <div className="container">
                <div className="row pic-area">
                    {
                        pic.map((item, i) => (
                            <Card
                                key={i}
                                item={item}
                                imgSrc={`/img/img${i + 1}.jpg`} //인덱스를 이용해서 이미지를 동적으로 생성
                                id={i}
                            />
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
        </div>
    )
}

export default Homepage;
