import * as S from '../button/Button.style';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';

const Button = ({
  size,
  font,
  disabled,
  margin,
  padding,
  background,
  children,
  fontcolor,
  onclick,
  radius,
  border
}) => {
  const sizeHandler = size => {
    switch (size) {
      case 'm':
        return { width: 'auto', height: '40px' };
      case 's':
        return { width: 'auto', height: '38px' };
      case 'xs':
        return { width: 'auto', height: '37px' };
      default:
        throw new Error(`지원되지 않는 ${size}의 버튼입니다.`);
    }
  };
  const fontHandler = font => {
    switch (font) {
      case 'l':
        return {
          fontsize: `${FONT_SIZE.XL}`,
          fontweight: `${FONT_WEIGHT.BOLD}`
        };
      case 'm':
        return {
          fontsize: `${FONT_SIZE.BASE}`,
          fontweight: `${FONT_WEIGHT.BOLD}`
        };
      case 's':
        return {
          fontsize: `${FONT_SIZE.XS}`,
          fontweight: `${FONT_WEIGHT.NORMAL}`
        };
      default:
        throw new Error(`지원되지 않는 ${size}의 버튼입니다.`);
    }
  };

  const { width, height } = sizeHandler(size);
  const { fontsize, fontweight } = fontHandler(font);

  return (
    <S.StyledButton
      disabled={disabled}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      background={background}
      fontsize={fontsize}
      fontcolor={fontcolor}
      fontweight={fontweight}
      onClick={onclick}
      radius={radius}
      border={border}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
