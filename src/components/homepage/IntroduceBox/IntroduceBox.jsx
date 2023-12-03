import * as S from '../IntroduceBox/IntroduceBox.style';

const IntroduceBox = ({ title, text }) => {
  return (
    <S.IntroduceBox>
      <h1>{title}</h1>
      <p>{text}</p>
    </S.IntroduceBox>
  );
};

export default IntroduceBox;
