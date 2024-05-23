import React, { useEffect, useState, useRef } from "react";
import { firestore } from "../firebase";

import styled from "styled-components";
import palette from "../styles/colorPalette";

import thumbnail from "../assets/img_landing.png";

const Home = () => {
  const [email, setEmail] = useState("");

  // 텍스트 입력창의 onChange 이벤트 핸들러
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  // 이메일을 firebase에 저장
  const saveFirebase = async () => {
    const today = new Date();
    try {
      await firestore.collection('user').add({
        email: email,
        date: today.toString()
      });
      setEmail('');
      alert('이메일이 전송되었습니다!');
    } catch (error) {
      console.error("Error adding data:", error);
      alert('Error adding data: ' + error.message);
    }
  }

  return(
    <Container>
      <Thumbnail
        src={thumbnail}/>
      {/*}
      <Text>다꾸템을 어디서 샀는지 궁금하신가요?</Text>
      <Text>위 사진처럼 다꾸 사진에 제품이 태그되어 있는 서비스 '마이꾸미'가 8월에 출시될 예정입니다 💜</Text>
      <Text>마이꾸미 서비스의 소식이 궁금하다면 아래에 이메일을 입력해주세요!</Text>
      */}
      
      <EmailContainer>
        <EmailInput
          type="text"
          value={email}
          onChange={handleInputChange}
          placeholder="이메일을 입력해주세요!"/>
        <EmailSubmit
          onClick={saveFirebase}>
          전송 💜
        </EmailSubmit>
      </EmailContainer>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  position: relative;
  height: max-content;å
  min-height: 100vh;
  background-color: ${palette.white};
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Text = styled.div`
  font-size: 13px;
  color: ${palette.black};
  margin: 10px 20px 10px 20px;
`;

const EmailContainer = styled.div`
  display: flex;
  margin: 5px auto 10px auto;
  justify-content: center;
  align-items: center;
`;

const EmailInput = styled.input`
  width: 60vw;
  margin-right: 5px;
  font-family: 'GmarketSansMedium';
  font-size: 12px;
  padding: 2px;
`;

const EmailSubmit = styled.div`
  font-size: 12px;
  height: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${palette.white};
  background: ${palette.black};
  cursor: pointer;
  font-family: 'GmarketSansMedium';
`;

export default Home;