import * as S from './styles';
// import imgSrc from "../../../assets/img-pikachu-sad-min.png";

export const ErrorMessage = () => {
  return (
    <S.Container>
      <S.ErrorMessage>
        {/* <img src={imgSrc} width="32" height="32" alt="Pikachu" /> */}
        <span>Ops, pokémon não encontrado!</span>
      </S.ErrorMessage>
    </S.Container>
  );
};
