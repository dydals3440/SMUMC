import { useSelector } from 'react-redux';
import * as S from '../IntroduceBox/IntroduceBox.style';

const IntroduceBox = ({ children }) => {
  const darkMode = useSelector(state => state.darkMode);
  return <S.IntroduceBox darkMode={darkMode}>{children}</S.IntroduceBox>;
};

export default IntroduceBox;
