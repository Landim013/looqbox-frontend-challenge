import * as S from './styles';

type Props = {
  width?: string;
  height?: string;
  text: string;
  color?: string;
  position?: string;
  borderRadius?: string;
  icon?: string;
  borderColor?: string;
  onClick?: () => void;
};

function SimpleButton({
  width,
  height,
  text,
  color,
  position,
  borderRadius,
  icon,
  borderColor,
  onClick,
}: Props) {
  return (
    <S.Button
      $width={width}
      $height={height}
      $color={color}
      $position={position}
      $borderRadius={borderRadius}
      $borderColor={borderColor}
      onClick={onClick}
    >
      {icon && <S.Icon src={icon} alt="Icon" />}
      {text}
    </S.Button>
  );
}

export default SimpleButton;
