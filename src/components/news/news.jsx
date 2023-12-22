import { useSelector } from 'react-redux';
import { NEWS_INFOS } from '../../constants/info';
import * as S from './news.style';

function News() {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <S.Container>
      <S.ContentBox darkMode={darkMode}>
        {NEWS_INFOS.map(({ id, title, description, image }) => (
          <S.Contents darkMode={darkMode} key={id}>
            <S.Img src={image} alt={title} />
            <S.TextBox>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </S.TextBox>
          </S.Contents>
        ))}
      </S.ContentBox>
    </S.Container>
  );
}

export default News;
