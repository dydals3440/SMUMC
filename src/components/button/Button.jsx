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
  width,
  height,
  radius,
  border
}) => {
  const sizeHandler = size => {
    switch (size) {
      case 'l':
        return {
          fixwidth: '290px',
          fixheight: '70px',
          fixpadding: '24px 32px',
          fontsize: `${FONT_SIZE.XL}`,
          fontweight: `${FONT_WEIGHT.BOLD}`
        };
      case 'm':
        return {
          fixwidth: '180px',
          fixheight: '50px',
          fixpadding: '24px 25px',
          fontsize: `${FONT_SIZE.BASE}`,
          fontweight: `${FONT_WEIGHT.BOLD}`
        };
      case 's':
        return {
          fixwidth: '70px',
          fixheight: '40px',
          fixpadding: '10px 22px',
          fontsize: `${FONT_SIZE.XS}`,
          fontweight: `${FONT_WEIGHT.NORMAL}`
        };
    }
  };

  const { fixwidth, fixheight, fixpadding, fontsize, fontweight } =
    sizeHandler(size);

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
      fixwidth={fixwidth}
      fixheight={fixheight}
      fixpadding={fixpadding}
    >
      <p>{children}</p>
    </S.StyledButton>
  );
};

export default Button;
