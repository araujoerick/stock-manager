# Stockly - Gerenciador de Estoque
**`Next.js`**
**`TypeScript`**
**`Prisma`**
**`Tailwind CSS`**
**`PostgreSQL`**
**`ACID Transactions`**
**`Next-Safe-Action`**

## 📋 Sobre o Projeto

O **Stockly** é um sistema de gestão de estoque desenvolvido para facilitar o controle de produtos e vendas. Ele permite que os usuários adicionem, editem e removam produtos do estoque, além de registrar, editar e excluir vendas. Esse projeto foi construído utilizando **Next.js**, garantindo alta performance e escalabilidade, além de **ACID Transactions** para garantir integridade e segurança nas operações de banco de dados.

---

## 🚀 Funcionalidades

- **Gerenciamento de Estoque**: Adição, edição e remoção de produtos.
- **Registro de Vendas**: Criação, edição e exclusão de vendas.
- **Segurança e Integridade**: Implementação de **ACID Transactions** para garantir consistência nas operações.
- **Rotas Seguras**: Uso do **Next-Safe-Action** para manipulação segura de ações no servidor.
- **Interface Responsiva**: Estilização moderna com Tailwind CSS e ShadCN.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para otimização de performance e renderização eficiente.
- **TypeScript**: Para um código mais seguro e escalável.
- **Prisma**: ORM para manipulação de dados de forma simples e eficiente.
- **Neon DB & PostgreSQL**: Banco de dados escalável e otimizado para armazenar produtos e vendas.
- **ACID Transactions**: Garantia de consistência e segurança nos registros do banco de dados.
- **Next-Safe-Action**: Abordagem segura para manipulação de ações no backend.
- **DAL (Data Access Layer)**: Separação da camada de acesso aos dados para melhor organização do código.
- **Route Handlers**: Gerenciamento otimizado de requisições no Next.js.
- **Tailwind CSS & ShadCN**: Para estilização responsiva e moderna da interface.
- **Context API & Hooks Customizados**: Para um gerenciamento eficiente de estados globais.
- **React Hook Form & Zod**: Para validação e gerenciamento de formulários.

---

## 📦 Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/stockly.git
```

2. Acesse o diretório do projeto:
```bash
cd stockly
```

3. Instale as dependências:
```bash
npm install
```

4. Configure as variáveis de ambiente no arquivo `.env`:
```env
DATABASE_URL=your_postgres_database_url
NEXT_PUBLIC_API_URL=your_api_url
```

5. Execute as migrations do banco de dados:
```bash
npx prisma migrate dev
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

7. Acesse no navegador:
```
http://localhost:3000
```

---

## ✨ Demonstração

Acesse a aplicação em produção: [Stockly](https://seu-link-deploy.vercel.app)

Repositório do projeto: [GitHub](https://github.com/seu-usuario/stockly)

---
### 📸 Capturas do Projeto:

<div align="center">
  <img src="https://github.com/user-attachments/assets/example1.png" alt="Tela inicial do Stockly">
  <img src="https://github.com/user-attachments/assets/example2.png" alt="Página de gerenciamento de produtos">
  <img src="https://github.com/user-attachments/assets/example3.png" alt="Registro de vendas">
</div>

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

