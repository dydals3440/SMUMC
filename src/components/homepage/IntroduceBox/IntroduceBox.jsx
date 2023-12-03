import * as S from '../IntroduceBox/IntroduceBox.style';

const IntroduceBox = ({ title, text, children }) => {
  return (
    <S.IntroduceBox>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </S.IntroduceBox>
  );
};

export default IntroduceBox;
