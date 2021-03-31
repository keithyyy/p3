import React from "react";
import Image from '../../images/404.png'

function NoMatch() {
  return (
    <div>
      <h1 style={{marginTop: "30px", fontSize: "30px"}}>We got lost finding this for you but don't get lost finding yourself</h1>
      <img style={{marginTop: "-50px"}} src={Image} ></img>

    </div>
  )
}
export default NoMatch;