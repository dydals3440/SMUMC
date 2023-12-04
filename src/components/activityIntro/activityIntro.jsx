import { ACTIVITY_INFOS } from '../../constants/info';
import * as S from './ActivityIntro.style';

function ActivityIntro() {
  return (
    <S.Container>
      <S.ContentBox>
        {ACTIVITY_INFOS.map(({ id, title, description, image }) => (
          <S.Contents key={id}>
            <S.TextBox>
              <h1>{title}</h1>
              <p>{description}</p>
            </S.TextBox>
            <S.Img src={image} alt={title} />
          </S.Contents>
        ))}
      </S.ContentBox>
    </S.Container>
  );
}

export default ActivityIntro;
