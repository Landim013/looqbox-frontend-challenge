# 📦 Looqbox Frontend Challenge

Aplicação desenvolvida como desafio técnico para exibir uma Pokédex interativa, com listagem, busca e detalhes de Pokémon utilizando a **PokeAPI**.

---

## 🚀 Como executar

Clone o repositório:

```bash
git clone https://github.com/Landim013/looqbox-frontend-challenge.git
cd looqbox-frontend-challenge
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse no navegador:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧪 Testes

### Testes unitários

Rodar todos os testes unitários:

```bash
npm run test
```

Rodar em modo "watch":

```bash
npm run test:watch
```

Rodar em CI (com reporter junit):

```bash
npm run test:ci
```

### Testes end-to-end (Cypress)

Suba a aplicação:

```bash
npm run dev
```

Em outro terminal, execute o Cypress:

```bash
npx cypress open
```

Ou para rodar em modo headless:

```bash
npx cypress run
```

---

## ✅ Funcionalidades

- Listagem inicial de Pokémon paginados
- Busca por nome com resultado imediato
- Exibição de detalhes do Pokémon (peso, altura, tipos e estatísticas)
- Gráficos interativos (barras e radar) das estatísticas
- Navegação entre **próximo/anterior Pokémon**
- Responsividade para mobile e desktop
- Componentes reutilizáveis com Styled Components
- Tratamento de **loading** e mensagens de erro personalizadas
- Testes unitários (Jest + Testing Library)
- Testes end-to-end (Cypress)

---

## 📊 Dados consumidos da API

A aplicação consome dados da **PokeAPI**:

- `/pokemon` → lista de Pokémon
- `/pokemon/:id` → detalhes de um Pokémon
- `/pokemon-species/:id` → descrição em diferentes idiomas

---

## 📷 Visualização da aplicação

💻 **Página inicial (listagem + busca)**  
(Imagem aqui)

📄 **Página de detalhes do Pokémon**  
(Imagem aqui)

📊 **Gráfico de estatísticas**  
(Imagem aqui)

📱 **Versão mobile**  
(Imagem aqui)

---

## 🛠️ Tecnologias utilizadas

- [React.js](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Ant Design](https://ant.design/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/)
- [Cypress](https://www.cypress.io/)

---

## 💡 Arquitetura

- **Modularidade**: componentes e hooks reutilizáveis
- **Escalabilidade**: Redux para gerenciar estado global
- **Responsividade**: design adaptado para telas pequenas e grandes
- **Testabilidade**: cobertura com testes unitários e E2E
- **Boas práticas**: ESLint, Prettier, Husky e lint-staged

---

## ✨ Autor

**Douglas Landim**  
[LinkedIn](https://www.linkedin.com/in/douglas-landim/) | [GitHub](https://github.com/Landim013)
