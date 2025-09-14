import styled from 'styled-components';

export const Button = styled.button<{
  $width?: string;
  $height?: string;
  $color?: string;
  $borderRadius?: string;
  $active?: boolean;
  $borderColor?: string;
  $position?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ $active, $color, theme }) =>
    $active ? theme.colors.buttonActive : $color || theme.colors.button};

  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '40px'};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ $borderColor }) => ($borderColor ? `1px solid ${$borderColor}` : 'none')};
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: 0.2s ease;
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
export const Icon = styled.img`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  display: block;
`;
