import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as S from './MembersDetail.style';
import Button from '../../../components/button/Button';
import { MEMBERS } from '../../../constants/members';
import DEFAULT_FEMALE_IMAGE from '../../../assets/img/DEFAULT_FEMALE.webp';
import DEFAULT_MALE_IMAGE from '../../../assets/img/DEFAULT_MALE.webp';
import theme from '../../../theme';

const MembersDetail = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  const { name, year, part, github, sex, skill } = userData;
  const darkMode = useSelector(state => state.darkMode);

  useEffect(() => {
    const user = MEMBERS.find(members => members.id === parseInt(id));
    setUserData(user || {});
  }, []);

  const githubStyle = {
    color: darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK
  };

  return (
    <S.Container>
      <S.RowContainer darkMode={darkMode}>
        <S.PartText darkMode={darkMode}>구성원</S.PartText>
        <S.PartText darkMode={darkMode}>{'>'}</S.PartText>
        <h3>{name}</h3>
      </S.RowContainer>
      <S.ColumnContainer darkMode={darkMode}>
        <S.RowContainer darkMode={darkMode}>
          <h3>{name}</h3>
          <h3>|</h3>
          <h5>{year}기</h5>
        </S.RowContainer>
        <h5>{part}</h5>
        <S.RowContainer>
          {skill?.map(item => (
            <Button
              size='s'
              disabled={true}
              background={theme.COLOR.LIGHT.YELLOW}
              fontcolor={theme.COLOR.DARK.NAVY}
            >
              {item}
            </Button>
          ))}
        </S.RowContainer>
      </S.ColumnContainer>
      <S.ColumnCenterContainer>
        <S.MemberImg
          src={sex === 'w' ? DEFAULT_FEMALE_IMAGE : DEFAULT_MALE_IMAGE}
        />
        {github && (
          <S.GitChartImg
            username={github}
            colorScheme={darkMode ? 'light' : 'dark'}
            year='last'
            style={githubStyle}
          />
        )}
      </S.ColumnCenterContainer>
      {/* <S.ColumnContainer>
        <h3>참여한 프로젝트</h3>
      </S.ColumnContainer> */}
    </S.Container>
  );
};

export default MembersDetail;
