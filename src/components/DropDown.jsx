import { Children, useState } from "react";
import styled from "styled-components";

const DropDown = ({ children, changeLimit }) => {
  // console.log("ss");
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 200);
  };
  const clickChangeLimit = (number) => {
    changeLimit(number);
    // console.log(number);
  };
  return (
    <DropDownWrap>
      <DropDownButton className="icon-button" onClick={onClick}>
        페이지당 영화 수
      </DropDownButton>
      {open &&
        children.map((item) => (
          <li key={item.id} onClick={() => clickChangeLimit(item.number)}>
            {item.number}
          </li>
        ))}
    </DropDownWrap>
  );
};

export default DropDown;

const DropDownWrap = styled.div`
  margin: 40px 40px auto auto;
  > li {
    width: 250px;
    height: 30px;
    border: 1px solid gray;
    padding: 10px 10px auto 10px;
    border-radius: 5px;
    background-color: #e7e7e7;
    text-align: center;
    list-style-type: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
const DropDownButton = styled.button`
  width: 250px;
  height: 30px;
  border: 1px solid gray;
  padding: 7px 10px auto 10px;
  border-radius: 5px;
  background-color: transparent;
  text-align: center;
`;
