import { Link } from 'react-router-dom';

import * as S from './Footer.style';

import { FOOTER_INFOS, SOCIAL_INFOS } from '../../../constants/info';
import { NAME } from '../../../constants/developer';
import { useSelector } from 'react-redux';

const Footer = () => {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <S.FooterWrapper darkMode={darkMode}>
      <S.InfoBox darkMode={darkMode}>
        {FOOTER_INFOS.map(({ icon, text }, i) => {
          return (
            <S.DetailInfo key={i}>
              <S.Icon darkMode={darkMode} component={icon} inheritViewBox />
              <p>{text}</p>
            </S.DetailInfo>
          );
        })}
      </S.InfoBox>
      <S.LinkBox>
        {SOCIAL_INFOS.map(({ url, icon }) => {
          return (
            <Link to={url} target='_blank' rel='noopener noreferrer'>
              <S.Icon darkMode={darkMode} component={icon} inheritViewBox />
            </Link>
          );
        })}
      </S.LinkBox>
      <S.CreatorNameContainer darkMode={darkMode}>
        <S.CreatorName darkMode={darkMode}>Develop By</S.CreatorName>
        {NAME.map(({ name, id }) => (
          <p key={id}>{name}</p>
        ))}
      </S.CreatorNameContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
