import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-around;
  gap: 30px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  width: 900px;
  height: 300px;
  position: relative;
`;

const Contents = styled.div`
  padding: 50px;
  //   background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
  width: 500px;
  height: 300px;
`;

const Img = styled.img`
  border-radius: 0px 30px 30px 0px;
  width: 400px;
  height: 300px;
  object-fit: cover;
  position: absolute;
  right: 150px;
  z-index: 0;
  top: 0;
  right: 0;
`;

export { Container, ContentBox, Contents, Img };
