import { useState } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledTextarea = styled.input`
  width: 100%;
  height: auto; // 높이를 자동으로 조정
  min-height: 40px; // 최소 높이 설정
  margin-bottom: 10px;
  padding: 5px;
  border: 3px solid #ccc;
  border-radius: 5px;
  overflow: hidden; // 내용이 넘칠 경우 숨김
`;

function NumberList(){

    // 배열 변수 선언 [] state

    //1. 배열의 내용 출력 - <ul><li></li></ul>
    //2. 값 1개 입력 text타입 input
    //3. button 3개 - 추가, 수정, 삭제 Styled 형태 사용

    //값 입력하고 추가 버튼 클릭시 배열 마지막 요소 추가
    //값 입력하고 수정 버튼 클릭시 배열 마지막 요소 수정
    //삭제 버튼 클릭시 배열 마지막 요소 삭제
    // 버튼 클릭하여 해당 작업 수행결과 화면에 즉각 반영 

    const [listArray, setListArray] =  useState(["예시"]);
    const [userText, setUserText] = useState("");

    const HandleChange = (ev) => {
        setUserText(ev.target.value);
    };

    const AddText = () => {
        if (userText){
            setListArray([...listArray, userText]);
            setUserText("");
        }
    };

    const FixText = () => {
        if (listArray.length > 0 && userText){
            const newList = [...listArray];
            newList[newList.length-1] = userText;
            setListArray(newList);
            setUserText("");
        }
    };

    const DelText = () => {
        if (listArray.length >0){
            setListArray(listArray.slice(0,-1));
        }
    };

    return (
      <div>
        <input type="textarea" name="text" id="text" value={userText} onChange={HandleChange}></input>
        <StyledButton onClick={AddText}>추가</StyledButton>
        <StyledButton onClick={FixText}>수정</StyledButton>
        <StyledButton onClick={DelText}>삭제</StyledButton>
        <ul id="here">
          {listArray.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>

      </div>
    );
}

export default NumberList;