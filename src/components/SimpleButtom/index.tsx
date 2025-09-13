import * as S from './styles';

type Props = {
  width?: string;
  height?: string;
  text: string;
  color?: string;
  position?: string;
  borderRadius?: string;
  active?: boolean;
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
  active,
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
      $active={active}
      onClick={onClick}
    >
      {icon && <S.Icon src={icon} alt="Icon" />}
      {text}
    </S.Button>
  );
}

export default SimpleButton;
