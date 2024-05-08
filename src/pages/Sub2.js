import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthorInfo from './AuthorInfo';
import WritersCall from './WritersCall';
import AuthorDetail from './AuthorDetail';


const Sub2 = ({ pic, showButton, btnDataClick }) => {  
  return (
    <>
      <div className='container author_wrap'>        
        <Routes>
          <Route path='/*' element={<AuthorInfo pic={pic} showButton={showButton} btnDataClick={btnDataClick} />}></Route>
          <Route path='sub2-1/:id' element={<AuthorDetail pic={pic} showButton={false} btnDataClick={btnDataClick} />}></Route>
          <Route path='sub2-2' element={<WritersCall />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default Sub2