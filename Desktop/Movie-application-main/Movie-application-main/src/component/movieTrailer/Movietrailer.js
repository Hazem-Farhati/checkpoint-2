import React from 'react'
import { useParams } from 'react-router-dom'

const Movietrailer = ({movies}) => {
    // const { trailer } = useParams();
    const {id} = useParams();

return(
    <div >
        {/* {movies.filter((el) => el.trailer === trailer).map((movie,i)=> 
        <div key={i} className='trailer'>
            <p>{trailer}</p>
        </div>)} */}
         <h2 className='full-one' >  {id}  </h2>
      {movies.title}
    </div>
    )
}

export default Movietrailer