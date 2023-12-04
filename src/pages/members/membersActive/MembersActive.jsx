import * as S from './MembersActive.style';
import { members } from '../../../utils/members';
import MemberCard from '../../../components/membercard/MemberCard';
import defaultWomanUrl from '../../../assets/img/defaultWoman.webp';
import defaultManUrl from '../../../assets/img/defaultMan.webp';
import { useNavigate } from 'react-router-dom';
import { BROWSER_PATH } from '../../../constants/path';

const MembersActive = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.MemberContainer>
        {members.map(
          (item, index) =>
            (item.position === '회장' || item.position === '부회장') && (
              <MemberCard
                size='m'
                name={item.name}
                badge={item.position}
                th={item.year}
                department={item.part}
                imgurl={item.sex === 'w' ? defaultWomanUrl : defaultManUrl}
                onClick={() => {
                  navigate(`${BROWSER_PATH.MEMBERS.BASE}/${item.id}`);
                }}
              />
            )
        )}
      </S.MemberContainer>
      <S.Line />
      <S.MemberContainer>
        {members.map(
          (item, index) =>
            (item.position !== '회장' || item.position !== '부회장') && (
              <MemberCard
                size='m'
                name={item.name}
                th={item.year}
                department={item.part}
                imgurl={item.sex === 'w' ? defaultWomanUrl : defaultManUrl}
                onClick={() => {
                  navigate(`${BROWSER_PATH.MEMBERS.BASE}/${item.id}`);
                }}
              />
            )
        )}
      </S.MemberContainer>
    </S.Container>
  );
};

export default MembersActive;
