# MD Locadora - Locação de Equipamentos

## Sobre o Projeto

Este é o website institucional da **MD Locadora**, uma empresa especializada em locação de equipamentos para construção civil. Com mais de 13 anos de experiência no mercado, oferecemos soluções ágeis e seguras para locação de equipamentos, priorizando qualidade, eficiência e atendimento personalizado.

O projeto consiste em uma aplicação web responsiva desenvolvida com tecnologias modernas, permitindo aos usuários explorar nossos serviços, visualizar equipamentos disponíveis, consultar localização, horário de funcionamento, avaliações de clientes e entrar em contato para solicitações de orçamento.

## Funcionalidades

- **Página Inicial (Hero)**: Apresentação da empresa
- **Recursos**: Destaque dos diferenciais da empresa
- **Sobre Nós**: Informações sobre a história e experiência da MD Locadora
- **Equipamentos**: Catálogo visual dos equipamentos disponíveis para locação
- **Localização**: Informações de endereço e como nos encontrar
- **Horário de Funcionamento**: Dias e horários de atendimento
- **Contato**: Formulário para solicitações de orçamento com envio automático por email e WhatsApp simultaneamente.
- **Avaliações**: Integração com Google Reviews para feedback de clientes
- **Botão WhatsApp**: Link direto para contato via WhatsApp
- **Rodapé**: Informações adicionais e links de contato

## Tecnologias Utilizadas

### Frontend

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **Framer Motion**: Biblioteca para animações e transições
- **Lucide React**: Ícones vetoriais

### Integrações

- **EmailJS**: Serviço para envio de emails diretamente do frontend
- **Google Reviews Widget**: Integração para exibir avaliações do Google

### Ferramentas de Desenvolvimento

- **ESLint**: Linter para manter qualidade do código
- **PostCSS**: Processador CSS com Autoprefixer
- **TypeScript Compiler**: Verificação de tipos

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes)
- Conta no **EmailJS** (opcional, para envio de emails)

Verifique as versões instaladas:

```bash
node --version
npm --version
```

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/iagorlrnc/mdlocadora.git
   cd mdlocadora
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```
   Isso instalará automaticamente todas as dependências, incluindo:
   - `@emailjs/browser` (para envio de emails)
   - `framer-motion` (para animações)
   - `lucide-react` (ícones)
   - `react` e `react-dom` (framework principal)
   - `google-reviews-widget` e `react-google-reviews` (para avaliações do Google)
   - E todas as devDependencies (TypeScript, ESLint, Tailwind, etc.).

3. **Instalar pacotes específicos individualmente** (se necessário):
   - Para EmailJS:
     ```bash
     npm install @emailjs/browser
     ```
   - Para Framer Motion:
     ```bash
     npm install framer-motion
     ```
   - Para outros essenciais:
     ```bash
     npm install lucide-react google-reviews-widget react-google-reviews
     ```

4. **Configure as variáveis de ambiente** (opcional):

   Crie um arquivo `.env.local` na raiz do projeto e adicione suas chaves de API:

   ```
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

5. **Verificar instalação**:
   ```bash
   npm list --depth=0
   ```

## Como Usar

### Desenvolvimento Local

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173` (porta padrão do Vite).

### Build para Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

### Verificação de Tipos

Para executar a verificação de tipos TypeScript:

```bash
npm run typecheck
```

### Linting

Para executar o linter ESLint:

```bash
npm run lint
```

## Deploy

O projeto está configurado para deploy no **Vercel**:
[https://mdlocadora.vercel.app/](https://mdlocadora.vercel.app/)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente no painel do Vercel
3. O deploy será automático a cada push na branch principal

O arquivo `vercel.json` garante o roteamento correto para uma Single Page Application (SPA).

## Estrutura do Projeto

```
mdlocadora/
├── public/
│   └── images/          # Imagens estáticas
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Equipment.tsx
│   │   ├── About.tsx
│   │   ├── Location.tsx
│   │   ├── BusinessHours.tsx
│   │   ├── Contact.tsx
│   │   ├── Reviews.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── Footer.tsx
│   │
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   └── index.css        # Estilos globais
│
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vercel.json
```

## Contato

**Iagor Lourenço**

- GitHub: [https://github.com/iagorlrnc/mdlocadora](hhttps://github.com/iagorlrnc/mdlocadora)
- Email: theiagorlourenco@gmail.com
- WhatsApp: (63) 99123-7836

---

Desenvolvido por Iagor Lourenço</content>
