import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase, addCount, removeItem } from '../store/store';

const Cart = () => {
    //store에서 생성된 state를 호출->state명만 주면 store에 저장된 모든 state를 호출
    let state = useSelector((state) => state); //user, cart
    //console.log('state', state.cart)
    
    //state 변경 dispatch -> store에 요청을 보내는 함수
    let dispatch = useDispatch();

  return (
    <div>
        <div className="util-area">
            <strong>{state.user.name}님의 장바구니</strong>
            <button onClick={()=>{dispatch(changeName())}}>이름확인</button>
             <span>❤ {state.user.likeCount}</span>
             <button onClick={() => dispatch(increase(100))}>좋아요</button>            
             <span>책제목: {state.bookInfo.title}</span>
        </div>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>작품명</th>
                    <th>재고량</th>
                    <th>변경</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>1</td>
                    <td>나의 길</td>
                    <td>3</td>
                    <td>변경</td>
                </tr>  */}    
                {
                    state.cart.map((item, i) => {
                        let index = i + 1;
                        return (
                        <tr key={i}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>
                                <button onClick={()=>{dispatch(addCount(state.cart[i].id))}}>+</button>
                                <button onClick={()=>{dispatch(removeItem(state.cart[i].id))}}>삭제</button>
                            </td>
                        </tr>
                    )}
                   )}       
            </tbody>
        </Table>
    </div>
  )
}

export default Cart