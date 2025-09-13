import styled from 'styled-components';

export const Button = styled.button<{
  $width?: string;
  $height?: string;
  $color?: string;
  $borderRadius?: string;
  $position?: string;
}>`
  background: ${({ $color }) => $color};
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '40px'};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: 0.2s ease;
  width: 100%;
  position: ${({ $position }) => $position || 'relative'};
  bottom: 0;
  border-radius: ${({ $borderRadius }) => $borderRadius || '0px'};
  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }
`;
