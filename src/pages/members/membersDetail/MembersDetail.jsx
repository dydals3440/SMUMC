import * as S from './MembersDetail.style';
import { useParams } from 'react-router-dom';
import Button from '../../../components/button/Button';
import defaultWomanUrl from '../../../assets/img/defaultWoman.webp';
import defaultManUrl from '../../../assets/img/defaultMan.webp';
import { useEffect, useState } from 'react';
import { members } from '../../../utils/members';

const MembersDetail = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const user = members.find(members => members.id === parseInt(id));
    setUserData(user || {});
  }, []);

  return (
    <S.Container>
      <S.RowContainer>
        <p>구성원</p>
        <p>{'>'}</p>
        <h3>{userData.name}</h3>
      </S.RowContainer>
      <S.ColumnContainer>
        <S.RowContainer>
          <h3>{userData.name}</h3>
          <h5>{userData.year}기</h5>
        </S.RowContainer>
        <h5>{userData.part}</h5>
        <S.RowContainer>
          <Button size='s' disabled={true}>
            Express
          </Button>
          <Button size='s' disabled={true}>
            Next.js
          </Button>
          <Button size='s' disabled={true}>
            typeorm
          </Button>
          <Button size='s' disabled={true}>
            MySql
          </Button>
        </S.RowContainer>
      </S.ColumnContainer>
      <S.ColumnCenterContainer>
        <S.MemberImg
          src={userData.sex === 'w' ? defaultWomanUrl : defaultManUrl}
        />
        {userData.github && (
          <S.GitChartImg src={`https://ghchart.rshah.org/${userData.github}`} />
        )}
      </S.ColumnCenterContainer>
      {/* <S.ColumnContainer>
        <h3>참여한 프로젝트</h3>
      </S.ColumnContainer> */}
    </S.Container>
  );
};

export default MembersDetail;
