import React from "react"
import usePomo from "./PomoContext";

const NavContainer = (props) => {

  const {} = usePomo()

  const handleClick = () => {}
  
  return (
    <div>
      <button onClick={e => handleClick()}>Log Out</button>
    </div>
  )
};

export default NavContainer
