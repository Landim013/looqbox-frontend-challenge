import * as S from './styles';

type Props = {
  color: string;
  icon?: string;
  label: string;
};

function TypePill({ color, icon, label }: Props) {
  return (
    <S.Wrapper $color={color}>
      {icon && <img src={icon} alt={label} width={16} height={16} />}
      <S.Text>{label}</S.Text>
    </S.Wrapper>
  );
}

export default TypePill;
