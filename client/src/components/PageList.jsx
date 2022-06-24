import{Pagination} from 'react-bootstrap'
import React, {useRef} from "react";

function PageList({ setPage }){
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);

  const handleonClick1 = () => {
    const buttonValue1 = buttonRef1.current.textContent;
    setPage(Number(buttonValue1));
  }

  const handleonClick2 = () => {
    const buttonValue2 = buttonRef2.current.textContent;
    setPage(Number(buttonValue2));
  }

  const handleonClick3 = () => {
    const buttonValue3 = buttonRef3.current.textContent;
    setPage(Number(buttonValue3));
  }
    return(   
    <Pagination>
      <Pagination.Item ref = {buttonRef1} onClick={handleonClick1} >{1}</Pagination.Item>
        <Pagination.Item ref = {buttonRef2} onClick={handleonClick2} >{2}</Pagination.Item>
        <Pagination.Item ref = {buttonRef3} onClick={handleonClick3} >{3}</Pagination.Item>
</Pagination>)
}

export default PageList;

