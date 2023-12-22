import { useSelector } from 'react-redux';
import * as S from '../CardMember/CardMember.style';

const CardMember = ({ id, img, year, description, name, member }) => {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <S.CardWrapper darkMode={darkMode} key={id}>
      <S.CardTop>
        <img src={img} alt={name} />
        <S.Wrapper>
          <h3>{name}</h3>
          <span>({year}기)</span>
        </S.Wrapper>
      </S.CardTop>
      <S.CardBottom>
        <S.CardCategory>
          <h3>{description}</h3>
          <span>참가자</span>
          <S.MemberWrapper>
            {member.map(data => (
              <S.Member darkMode={darkMode} key={id}>
                {data}
              </S.Member>
            ))}
          </S.MemberWrapper>
        </S.CardCategory>
      </S.CardBottom>
    </S.CardWrapper>
  );
};

export default CardMember;
