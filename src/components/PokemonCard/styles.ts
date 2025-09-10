// src/components/PokemonCard/styles.ts
import styled, { keyframes } from 'styled-components';

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 0 150px;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(6, 11, 40, 0.15);
  border: 1px solid #24293f;
  border-bottom: none;
  border-radius: 22px;
  padding-top: 120px;
  position: relative;
  animation: ${fadeDown} 0.8s;
`;

export const Overlay = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);

  &::after {
    content: '';
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${({ color }) => color};
    filter: blur(128px);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.8s;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -200px;
  @media (max-width: 768px) {
    top: -110px;
    width: 60%;
  }
`;

export const Number = styled.span`
  font-size: 1.25rem;
  line-height: 135%;
  font-weight: 700;
`;

export const Name = styled.span`
  font-size: 2rem;
  line-height: 135%;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  display: block;
  margin: 0.25rem 0.5rem 0.75rem;
`;

export const Types = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Features = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0 2rem;
`;

export const Weight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: 700;
    }
  }

  span {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;
  }
`;

export const Height = styled(Weight)``;

export const DetailsButton = styled.button<{ color: string }>`
  width: calc(100% + 2px);
  height: 3rem;
  background: ${({ color }) => color};
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #ffffff;
`;
