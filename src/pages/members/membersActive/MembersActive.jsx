import * as S from './MembersActive.style';
import { MEMBERS } from '../../../constants/members';
import MemberCard from '../../../components/membercard/MemberCard';
import DEFAULT_FEMALE_IMAGE from '../../../assets/img/DEFAULT_FEMALE.webp';
import DEFAULT_MALE_IMAGE from '../../../assets/img/DEFAULT_MALE.webp';
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
                imgurl={sex === 'w' ? DEFAULT_FEMALE_IMAGE : DEFAULT_MALE_IMAGE}
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
                imgurl={sex === 'w' ? DEFAULT_FEMALE_IMAGE : DEFAULT_MALE_IMAGE}
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
