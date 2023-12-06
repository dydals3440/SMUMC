import GitHub from '@mui/icons-material/GitHub';
import * as S from '../projectcard/ProjectCard.style';
import { SvgIcon } from '@mui/material';
import UMC from '../../assets/img/umcIcon.svg';
import { useState } from 'react';

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
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

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
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <S.ImageWrapper
        width={width}
        height={height}
        radius={radius}
        animate={{
          scale: [0.3, 1.03, 0.95],
          borderRadius: ['20%', '30%', '40%', '30%', '20%']
        }}
      >
        <img src={img} alt={`${name} 프로젝트의 이미지입니다.`} />
      </S.ImageWrapper>
      {isHovering && (
        <S.Introduce
          width={width}
          height={height}
          animate={{
            scale: [0.3, 1.03, 0.95],
            borderRadius: ['20%', '30%', '40%', '30%', '20%']
          }}
        >
          <h1>{name}</h1>
          <h2>{description}</h2>
          <div>
            {stack.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <S.MemberWrapper>
            {member.map(m => {
              return <S.Member>{m}</S.Member>;
            })}
          </S.MemberWrapper>

          <S.LinkWrapper>
            {github && (
              <S.LinkSite to={github}>
                <SvgIcon component={GitHub} />
              </S.LinkSite>
            )}
            {release && (
              <S.LinkSite to={release}>
                <S.Image src={UMC} alt={name} />
              </S.LinkSite>
            )}
          </S.LinkWrapper>
        </S.Introduce>
      )}
    </S.Container>
  );
};

export default ProjectCard;
