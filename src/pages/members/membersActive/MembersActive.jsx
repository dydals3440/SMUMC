import { useNavigate } from 'react-router-dom';
import * as S from './MembersActive.style';
import { MEMBERS } from '../../../constants/members';
import MemberCard from '../../../components/membercard/MemberCard';
import DEFAULT_FEMALE_IMAGE from '../../../assets/img/DEFAULT_FEMALE.webp';
import DEFAULT_MALE_IMAGE from '../../../assets/img/DEFAULT_MALE.webp';
import { BROWSER_PATH } from '../../../constants/path';
import { useSelector } from 'react-redux';

const MembersActive = () => {
  const navigate = useNavigate();
  const darkMode = useSelector(state => state.darkMode);
  return (
    <S.Container>
      <S.MemberContainer>
        {MEMBERS.map(
          ({ id, name, position, year, part, sex }) =>
            position !== '챌린저' &&
            year === 5 && (
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
      <S.Line darkMode={darkMode} />
      <S.ChallengerContainer>
        {MEMBERS.map(
          ({ position, name, year, part, sex, id }) =>
            position === '챌린저' &&
            year === 5 && (
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
      </S.ChallengerContainer>
    </S.Container>
  );
};

export default MembersActive;
