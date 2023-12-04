import imgGirl from '../../../../public/images/homecoming.webp';
import * as S from '../CardMember/CardMember.style';

const CardMember = ({ id, github, name, nickname }) => {
  return (
    <S.CardWrapper key={id}>
      <S.CardTop>
        <img src={imgGirl} alt={github} />
        <p>{name}</p>
      </S.CardTop>
      <S.CardBottom>
        <h3>{nickname}</h3>
        <S.CardCategory>{name}</S.CardCategory>
      </S.CardBottom>
    </S.CardWrapper>
  );
};

export default CardMember;
