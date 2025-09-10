// import imageAsh from '../../../assets/image/ash.png';
import HeaderCarousel from '../Carousel';
import * as S from './styles';
export const Header = () => {
  return (
    <div className="main-container">
      <S.Container>
        {/* <S.CustomImage src={imageAsh} alt="Logo" /> */}
        <HeaderCarousel />
      </S.Container>
    </div>
  );
};
