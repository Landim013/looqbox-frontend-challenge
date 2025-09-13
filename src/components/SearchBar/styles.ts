// src/components/SearchBar/styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 720px;
  margin: 16px auto 24px;
  padding: 0 16px;

  /* Input */
  .ant-input-affix-wrapper {
    background: transparent !important; /* fundo transparente */
    border: 2px solid #1890ff !important; /* azul padrão do Ant */
    border-radius: 6px;
    color: white; /* texto branco */

    input {
      background: transparent !important; /* campo também transparente */
      color: white; /* texto branco */
    }

    input::placeholder {
      color: rgba(255, 255, 255, 0.5); /* placeholder mais suave */
    }
  }
`;
