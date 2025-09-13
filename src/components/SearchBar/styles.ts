// src/components/SearchBar/styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 720px;

  margin: 16px auto 24px;
  padding: 0 16px;

  .ant-input-affix-wrapper {
    background: transparent !important;
    border: 2px solid #3f3e3eff !important;
    border-radius: 6px;
    color: white;
    height: 40px;

    input {
      background: transparent !important;
      color: white;
    }

    input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .ant-input-search-button {
    background: #3f3e3eff !important;
    border: none !important;
    color: white !important;
    font-weight: bold;
    height: 40px;

    &:hover {
      background: #202020ff !important;
    }
  }
`;
