import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 210px 1fr;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.div`
  color: #cfd3dc;
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 12px;
  text-transform: none;
  text-align: right;
`;

export const Value = styled.span`
  color: #ffffff;
`;

export const Bar = styled.div`
  max-width: 350px;
  padding: 4px 0;
`;
