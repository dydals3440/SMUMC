import * as S from './Footer.style';

import { Link } from 'react-router-dom';

import { FOOTER_INFOS } from '../../../constants/info';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      <S.FooterWrapper>
        <S.InfoBox>
          {FOOTER_INFOS.map(({ icon, text }, i) => {
            return (
              <S.DetailInfo key={i}>
                <S.Icon component={icon} inheritViewBox />
                <p>{text}</p>
              </S.DetailInfo>
            );
          })}
        </S.InfoBox>
        <Link
          to='https://github.com/SMUTAXI/SMU-TAXI'
          target='_blank'
          rel='noopener noreferrer'
        >
          <S.Icon component={GitHubIcon} inheritViewBox />
        </Link>
      </S.FooterWrapper>
    </>
  );
};

export default Footer;
