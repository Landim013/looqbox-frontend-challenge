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
  display: flex;
  margin: 80px 0;
  flex-direction: column;
  align-items: center;
  background: rgba(6, 11, 40, 0.15);
  border: 1px solid #24293f;
  border-bottom: none;
  border-radius: 22px;
  padding-top: 120px;
  position: relative;
  animation: ${fadeDown} 0.8s;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const CardOverlay = styled.div<{ $color?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  &::after {
    content: '';
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${({ $color }) => `${$color}90`}; /* ~20% */
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
  gap: 20px;
`;
export const TypeDescription = styled.span`
  color: #fff;
  font-size: 16px;
  text-transform: capitalize;
`;

export const TypesButton = styled.button<{ $color: string }>`
  background-color: ${({ $color }) => $color ?? '#777'};
  padding: 12px;
  border-radius: 8px;
`;
export const Features = styled.div`
  display: flex;
  gap: 32px;
  margin: 16px 0;
`;

export const Specification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
export const Metrics = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  display: flex;
  justify-content: center;
  align-items: baseline;
  white-space: nowrap;
`;

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
