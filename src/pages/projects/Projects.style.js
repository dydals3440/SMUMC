import styled from 'styled-components';

const Banner = styled.div`
  width: 100%;

  img {
    object-fit: cover;
    height: 250px;
    width: 100%;
  }

  h1 {
    display: flex;
    margin-top: 30px;
    justify-content: center;
    color: gray;
    font-size: 50px;
    margin-bottom: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const ContentBox = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    //   justify-content: space-around;
    gap: 30px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.4);
    width: 80%;
    height: 180px;
    position: relative;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: 350px;
    justify-content: space-around;
    align-items: center;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  padding: 20px 50px 80px 50px;
  //   background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
  width: 550px;
  height: 100px;
`;

const Additional = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-width: 200px;
`;

const Stacks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
`;

const Participants = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
`;

const Img = styled.img`
  border-radius: 30px 30px 30px 30px;
  width: 500px;
  height: 150px;
  object-fit: cover;
  z-index: 0;
  // position: absolute;
  // right: 150px;
  // top: 0;
  // right: 0;
`;

const Pagination = styled.div`
  margin-bottom: 300px;
`;

export {
  Banner,
  Container,
  ContentBox,
  Team,
  Contents,
  Participants,
  Additional,
  Stacks,
  Img,
  Pagination
};
