import * as S from './MembersActive.style';
import { MEMBERS } from '../../../constants/members';
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
        {MEMBERS.map(
          ({ id, name, position, year, part, sex }) =>
            (position === '회장' || position === '부회장') && (
              <MemberCard
                size='m'
                name={name}
                badge={position}
                th={year}
                department={part}
                imgurl={sex === 'w' ? defaultWomanUrl : defaultManUrl}
                onClick={() => {
                  navigate(`${BROWSER_PATH.MEMBERS.BASE}/${id}`);
                }}
              />
            )
        )}
      </S.MemberContainer>
      <S.Line />
      <S.MemberContainer>
        {MEMBERS.map(
          ({ position, name, year, part, sex, id }) =>
            (position !== '회장' || position !== '부회장') && (
              <MemberCard
                size='m'
                name={name}
                th={year}
                department={part}
                imgurl={sex === 'w' ? defaultWomanUrl : defaultManUrl}
                onClick={() => {
                  navigate(`${BROWSER_PATH.MEMBERS.BASE}/${id}`);
                }}
              />
            )
        )}
      </S.MemberContainer>
    </S.Container>
  );
};

export default MembersActive;
