import { useState } from "react";
function Demo() {
  // let number = 0
  let [number, setNumber] = useState(1);
  function increment(){
    setNumber(number + 1)
  }
  return(
    <div>
      <h2 onClick={increment}>The count is: {number}</h2>
    </div>
  )
};

export default Demo;