import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const ContentSearchBar = styled.div`
  width: 100%;
  border-bottom: 1px solid #5a5b5e;
`;
export const Grid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 80px;
  padding: 16px 20px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
`;
