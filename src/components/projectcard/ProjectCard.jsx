import * as S from '../projectcard/ProjectCard.style';

const ProjectCard = ({ size, background, radius, onClick, props }) => {
  const {
    name,
    description,
    theme,
    github,
    year,
    member,
    stack,
    img,
    release
  } = props;

  const sizeHandler = size => {
    switch (size) {
      case 'l':
        return {
          width: '370px',
          height: '400px'
        };
      case 'm':
        return {
          width: '400px',
          height: '400px'
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
        <img src={img} alt={`${name} 프로젝트의 이미지입니다.`} />
      </S.ImageWrapper>
      <S.Introduce width={width} height={height}>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <div>
          {stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div></div>
      </S.Introduce>
    </S.Container>
  );
};

export default ProjectCard;
