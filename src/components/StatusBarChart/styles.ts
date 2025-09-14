import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  display: grid;
  gap: 10px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 210px 1fr;
  align-items: center;
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 40% 1fr;
  }
`;

export const Label = styled.div`
  color: #cfd3dc;
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 12px;
  text-transform: none;
  text-align: right;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    font-size: 10px;
  }
`;

export const Value = styled.span``;

export const Bar = styled.div`
  max-width: 350px;
  padding: 4px 0;
`;
