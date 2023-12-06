import { Link } from 'react-router-dom';

import * as S from './Footer.style';

import { FOOTER_INFOS, SOCIAL_INFOS } from '../../../constants/info';
import { NAME } from '../../../constants/developer';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.InfoBox>
        <S.CreatorNameContainer>
          <S.CreatorName>Develop By</S.CreatorName>
          {NAME.map(({ name, id }) => (
            <p key={id}>{name}</p>
          ))}
        </S.CreatorNameContainer>
        {FOOTER_INFOS.map(({ icon, text }, i) => {
          return (
            <S.DetailInfo key={i}>
              <S.Icon component={icon} inheritViewBox />
              <p>{text}</p>
            </S.DetailInfo>
          );
        })}
      </S.InfoBox>
      <S.LinkBox>
        {SOCIAL_INFOS.map(({ url, icon }) => {
          return (
            <Link to={url} target='_blank' rel='noopener noreferrer'>
              <S.Icon component={icon} inheritViewBox />
            </Link>
          );
        })}
      </S.LinkBox>
    </S.FooterWrapper>
  );
};

export default Footer;
