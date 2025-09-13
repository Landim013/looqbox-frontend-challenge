import * as S from './styles';

type Props = {
  width?: string;
  height?: string;
  text: string;
  color?: string;
  position?: string;
  borderRadius?: string;
  onClick?: () => void;
};

function SimpleButton({ width, height, text, color, position, borderRadius, onClick }: Props) {
  return (
    <S.Button
      $width={width}
      $height={height}
      $color={color}
      $position={position}
      $borderRadius={borderRadius}
      onClick={onClick}
    >
      {text}
    </S.Button>
  );
}

export default SimpleButton;
