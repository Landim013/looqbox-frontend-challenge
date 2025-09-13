import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px 48px;
`;

export const ContantLeft = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 100px;
  border-right: 2px solid #ddd;
`;
export const ContantRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Statistic = styled.div`
  /* padding-top: 24px; */
  margin-left: 80px;
`;

export const Name = styled.p`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const Information = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const Image = styled.img`
  width: 60%;
`;
export const Types = styled.div`
  display: flex;
  gap: 12px;
`;

export const ResumePokemon = styled.p`
  font-size: 36px;
  width: 50%;
  color: #ff9900;
`;
