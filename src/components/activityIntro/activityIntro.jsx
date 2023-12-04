import { ACTIVITY_INFOS } from '../../constants/info';
import * as S from './activityIntro.style';

function ActivityIntro() {
  return (
    <S.Container>
      <S.ContentBox>
        {ACTIVITY_INFOS.map(({ id, title, description, image }) => (
          <S.Contents key={id}>
            <S.TextBox>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </S.TextBox>
            <S.Img src={image} alt={title} />
          </S.Contents>
        ))}
      </S.ContentBox>
    </S.Container>
  );
}

export default ActivityIntro;
