import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {buyCake} from '../redux/cake/www'

function Hooks() {
    const numberofcakes  = useSelector(state => state.numberofcakes);
    const dispatch = useDispatch();
  return (
    <div>
         <h2>Number of cakes - {numberofcakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default Hooks