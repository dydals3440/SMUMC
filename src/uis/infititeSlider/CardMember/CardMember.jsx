import imgGirl from '../../../../public/images/homecoming.webp';
import * as S from '../CardMember/CardMember.style';

const CardMember = ({ id, img, year, description, name, member }) => {
  return (
    <S.CardWrapper key={id}>
      <S.CardTop>
        <img src={img} alt={name} />
        <S.Wrapper>
          <h2>{name}</h2>
          <h2>({year}기)</h2>
        </S.Wrapper>
      </S.CardTop>
      <S.CardBottom>
        <S.CardCategory>
          <h3>{description}</h3>
          <S.MemberWrapper>
            {member.map(data => (
              <S.Member key={id}>{data}</S.Member>
            ))}
          </S.MemberWrapper>
        </S.CardCategory>
      </S.CardBottom>
    </S.CardWrapper>
  );
};

export default CardMember;
