[![Netlify Status](https://api.netlify.com/api/v1/badges/2b7bb2c9-f6a9-4feb-9309-1177a4cfc4c8/deploy-status)](https://app.netlify.com/projects/portfolioluizsantos/deploys)

# Portfólio de Desenvolvedor Web

Este é um site de portfólio moderno e responsivo criado com React, Tailwind CSS e componentes shadcn/ui.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interface Moderna**: Design limpo e profissional com gradientes e animações suaves
- **Componentes Reutilizáveis**: Construído com componentes shadcn/ui para consistência
- **Navegação Suave**: Links de navegação que levam às seções correspondentes
- **Otimizado para SEO**: Meta tags e estrutura semântica para melhor indexação
- **Performance**: Código otimizado e imagens comprimidas

## 📋 Seções Incluídas

1. **Hero Section**: Apresentação principal com foto de perfil e call-to-actions
2. **Sobre Mim**: Descrição profissional e experiência de trabalho
3. **Projetos em Destaque**: Showcase de projetos com tecnologias utilizadas
4. **Habilidades Técnicas**: Categorização de skills por área (Frontend, Backend, Mobile, DevOps)
5. **Contato**: Informações de contato e links para redes sociais
6. **Footer**: Informações de copyright

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interface de usuário
- **Vite**: Build tool rápido e moderno
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Biblioteca de componentes React
- **Lucide React**: Ícones modernos e consistentes
- **Framer Motion**: Animações suaves (pré-configurado)

## 📦 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Instalação e Execução

1. **Instalar dependências:**
   ```bash
   npm install
   # ou
   pnpm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   pnpm run dev
   ```
   O site estará disponível em `http://localhost:5173`

3. **Construir para produção:**
   ```bash
   npm run build
   # ou
   pnpm run build
   ```
   Os arquivos otimizados estarão na pasta `dist/`

4. **Visualizar build de produção:**
   ```bash
   npm run preview
   # ou
   pnpm run preview
   ```

## 🎨 Personalização

### Alterando Informações Pessoais

Edite o arquivo `src/App.jsx` e modifique:

- **Nome e título**: Altere as variáveis no componente principal
- **Foto de perfil**: Substitua `src/assets/profile-photo.jpg`
- **Projetos**: Modifique o array `projetos` com seus próprios projetos
- **Habilidades**: Atualize o array `habilidades` com suas tecnologias
- **Experiência**: Edite a seção de experiência profissional
- **Contatos**: Atualize os links e informações de contato

### Alterando Cores e Estilos

O projeto usa Tailwind CSS com tema personalizado definido em `src/App.css`. Para alterar:

1. **Cores principais**: Modifique as variáveis CSS no `:root`
2. **Modo escuro**: Ajuste as variáveis na classe `.dark`
3. **Componentes**: Use as classes do Tailwind ou modifique os componentes shadcn/ui

### Adicionando Novas Seções

1. Crie um novo componente ou adicione JSX ao `App.jsx`
2. Adicione um link na navegação
3. Implemente scroll suave com IDs correspondentes

## 🌐 Deploy

### Opções de Hospedagem

1. **Vercel** (Recomendado):
   - Conecte seu repositório GitHub
   - Deploy automático a cada push

2. **Netlify**:
   - Arraste a pasta `dist/` após o build
   - Ou conecte via Git

3. **GitHub Pages**:
   - Use GitHub Actions para build e deploy automático

4. **Servidor próprio**:
   - Faça upload dos arquivos da pasta `dist/`
   - Configure servidor web (Apache/Nginx)

### Configuração de Build

O projeto já está configurado para produção com:
- Minificação de CSS e JavaScript
- Otimização de imagens
- Tree shaking para reduzir tamanho do bundle
- Compressão gzip

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Estrutura do Projeto

```
portfolio-desenvolvedor/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── profile-photo.jpg
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Suporte

Se precisar de ajuda ou tiver dúvidas:
- Abra uma issue no repositório
- Entre em contato através dos canais disponíveis no portfólio

---

**Desenvolvido com ❤️ usando React e Tailwind CSS**

