import * as S from '../membercard/MemberCard.style';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';

const MemberCard = ({ size, imgurl, name, th, department, badge, onClick }) => {
  const sizeHandler = size => {
    switch (size) {
      case 'l':
        return {
          width: '370px',
          height: '400px',
          namefontsize: `${FONT_SIZE.TWO_XL}`,
          namefontweight: `${FONT_SIZE.BOLD}`,
          generationfontsize: `${FONT_SIZE.BASE}`,
          introfontsize: `${FONT_SIZE.BASE}`,
          fontweight: `${FONT_WEIGHT.FONT_BLACK}`,
          imgwidth: '300px',
          imgheight: '300px'
        };
      case 'm':
        return {
          width: '260px',
          height: '278px',
          namefontsize: `${FONT_SIZE.TWO_XL}`,
          namefontweight: `${FONT_WEIGHT.BOLD}`,
          introfontsize: `${FONT_SIZE.BASE}`,
          fontweight: `${FONT_WEIGHT.NORMAL}`,
          imgwidth: '160px',
          imgheight: '168px'
        };
      default:
        throw new Error(`지원되지 않는 ${size}의 카드입니다.`);
    }
  };

  const {
    width,
    height,
    namefontsize,
    generationfontsize,
    introfontsize,
    imgwidth,
    imgheight,
    namefontweight,
    fontweight
  } = sizeHandler(size);

  return (
    <S.Container
      height={height}
      width={width}
      fontweight={fontweight}
      onClick={onClick}
      animate={{
        scale: [0.9, 1.05, 1]
      }}
      whileHover={{
        scale: 0.95
      }}
    >
      <S.ImageWrapper imgwidth={imgwidth} imgheight={imgheight}>
        <img src={imgurl} alt='umc 멤버들 사진입니다.' />
        {badge && <span>{badge}</span>}
      </S.ImageWrapper>
      <S.NameText namefontsize={namefontsize} namefontweight={namefontweight}>
        {name}
      </S.NameText>
      <S.TextContainer>
        <S.GenerationText generationfontsize={generationfontsize}>
          {th}기
        </S.GenerationText>
        <p>|</p>
        <S.IntroText introfontsize={introfontsize}>{department}</S.IntroText>
      </S.TextContainer>
    </S.Container>
  );
};

export default MemberCard;
