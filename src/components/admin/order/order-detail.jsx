import React from 'react'
import { useParams } from 'react-router-dom';
import PersistentDrawerRight from "../../../theme/backend/sidebar/index";

function orderDetail(id) {
  let test = useParams(id);
  //console.log(test);
  return (
    <>
      <PersistentDrawerRight />
    <div>Order Detail</div>
    </>
  )
}

export default orderDetail