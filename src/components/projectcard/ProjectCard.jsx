import * as S from '../projectcard/ProjectCard.style';

const ProjectCard = ({ size, background, radius, imgurl, onClick }) => {
  const sizeHandler = size => {
    switch (size) {
      case 'l':
        return {
          width: '370px',
          height: '400px'
        };
      case 'm':
        return {
          width: '260px',
          height: '278px'
        };
      default:
        throw new Error(`지원되지 않는 ${size}의 카드입니다.`);
    }
  };

  const { width, height } = sizeHandler(size);

  return (
    <S.Container
      height={height}
      background={background}
      width={width}
      radius={radius}
      onClick={onClick}
    >
      <S.ImageWrapper width={width} height={height} radius={radius}>
        <img src={imgurl} alt='umc 프로젝트 사진입니다.' />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default ProjectCard;
