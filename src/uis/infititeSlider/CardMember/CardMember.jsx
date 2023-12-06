import imgGirl from '../../../../public/images/homecoming.webp';
import * as S from '../CardMember/CardMember.style';

const CardMember = ({ id, img, year, description, name, member }) => {
  return (
    <S.CardWrapper key={id}>
      <S.CardTop>
        <img src={img} alt={name} />
        <S.Wrapper>
          <span>{name}</span>
          <span>({year}기)</span>
        </S.Wrapper>
      </S.CardTop>
      <S.CardBottom>
        <S.CardCategory>
          <h3>{description}</h3>
          <span>참가자</span>
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
