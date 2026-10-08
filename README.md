# Desafio Técnico Avanti — Landing Page E-commerce

Projeto desenvolvido como parte do **Avanti Innovation Challenge — Innovation Class 19**.

A aplicação consiste na construção de uma landing page responsiva para um e-commerce, baseada no layout disponibilizado no desafio. O foco do projeto é reproduzir a estrutura visual proposta, implementar a navegação principal, o menu de categorias, carrosséis de produtos e a funcionalidade de busca solicitada.

---

## Objetivo do projeto

O objetivo é desenvolver uma página inicial de e-commerce utilizando tecnologias web fundamentais, priorizando:

- Fidelidade ao layout de referência fornecido no desafio.
- Organização e semântica da estrutura HTML.
- Responsividade para versões desktop e mobile.
- Interações com JavaScript puro.
- Uso de carrosséis de produtos.
- Implementação da funcionalidade de busca.
- Estrutura preparada para inserção de imagens e conteúdos reais.

O projeto não possui backend, banco de dados, autenticação real, checkout ou integração com APIs. Portanto, ações como compra, cadastro na newsletter e links de navegação possuem comportamento demonstrativo.

---

## Funcionalidades implementadas

- Barra promocional com cupom de desconto.
- Cabeçalho com logo, campo de busca, área do cliente e carrinho.
- Campo de busca funcional.
- Exibição da mensagem:

  ```text
  Você buscou por: 'assunto buscado'
  ```

- Navegação horizontal com departamentos.
- Menu expansível em **“Todas as Categorias”**.
- Mega menu com departamentos, categorias e área promocional.
- Banner principal da campanha Supersale.
- Dois carrosséis de produtos na seção de lançamentos.
- Botões de compra com feedback demonstrativo.
- Seções institucionais com imagem e conteúdo textual.
- Banner de disponibilidade por região.
- Formulário de newsletter com validação nativa do navegador.
- Rodapé com links institucionais, atendimento e redes sociais.
- Layout responsivo para desktop, tablet e mobile.

---

## Tecnologias utilizadas

| Tecnologia     | Uso no projeto                                                  |
| -------------- | --------------------------------------------------------------- |
| HTML5          | Estrutura semântica de toda a página                            |
| CSS3           | Estilização, layout responsivo, grids, flexbox e media queries  |
| JavaScript     | Busca, menu de categorias, menu mobile, newsletter e interações |
| Swiper.js      | Criação e controle dos carrosséis de produtos                   |
| Phosphor Icons | Ícones de busca, carrinho, usuário e redes sociais              |
| Google Fonts   | Tipografia utilizada no layout                                  |

O projeto foi desenvolvido com **HTML, CSS e JavaScript puros**, sem framework frontend como React, Vue ou Angular.

---

> As imagens presentes em `assets/img/` podem ser substituídas ou ajustadas conforme os assets disponibilizados no desafio. As tags `<img>` já estão estruturadas para receber os caminhos corretos.

---

## Como executar o projeto

Como este é um projeto estático, não é necessário instalar dependências ou rodar comandos de build.

### Opção 1 — Abrir diretamente no navegador

1. Faça o download ou clone do repositório.
2. Abra a pasta do projeto.
3. Dê duplo clique no arquivo `index.html`.
4. O navegador abrirá a página.

### Opção 2 — Usar o Live Server no VS Code

Recomendado para desenvolvimento, pois atualiza a página automaticamente após alterações.

1. Abra a pasta do projeto no **Visual Studio Code**.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html`.
4. Selecione a opção **Open with Live Server**.

### Opção 3 — Usar a extensão Live Preview

1. Abra o projeto no Visual Studio Code.
2. Instale a extensão **Live Preview**, da Microsoft.
3. Abra o arquivo `index.html`.
4. Clique em **Show Preview**.

---

## Como testar as interações

### Busca

1. Digite um termo no campo de busca.
2. Clique no ícone de lupa ou pressione `Enter`.
3. A página exibirá abaixo do campo a mensagem:

```text
Você buscou por: 'termo digitado'
```

### Home Menu

1. Clique em **Todas as Categorias** no menu principal.
2. O mega menu será exibido com departamentos, categorias e área promocional.
3. Clique novamente no botão ou fora do menu para fechá-lo.

### Carrosséis

- Utilize as setas laterais para navegar entre os produtos.
- Em telas menores, a quantidade de produtos visíveis se adapta automaticamente.
- O comportamento é realizado pela biblioteca Swiper.js.

### Newsletter

1. Preencha nome e e-mail.
2. Marque a confirmação da Política de Privacidade.
3. Clique em **Cadastrar**.
4. Um alerta de confirmação será exibido e o formulário será limpo.

---

## Responsividade

O projeto possui media queries para adequação do layout em diferentes tamanhos de tela.

| Dispositivo | Comportamento esperado                                                                    |
| ----------- | ----------------------------------------------------------------------------------------- |
| Desktop     | Menu completo, múltiplos produtos por carrossel e seções lado a lado                      |
| Tablet      | Redução de espaçamentos e adaptação da quantidade de cards                                |
| Mobile      | Menu por botão, busca em linha própria, carrosséis com menos produtos e seções empilhadas |

---

## Bibliotecas externas

As bibliotecas são carregadas via CDN, portanto é necessário ter conexão com a internet para que ícones, fontes e carrosséis sejam exibidos corretamente.

- [Swiper.js](https://swiperjs.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Google Fonts](https://fonts.google.com/)

---

## Uso de Inteligência Artificial

Ferramentas de Inteligência Artificial foram utilizadas como **apoio ao processo de desenvolvimento**, principalmente para:

- Organização inicial da estrutura de HTML, CSS e JavaScript.
- Sugestões de responsividade e estruturação de componentes visuais.
- Revisão de trechos de código.
- Apoio na documentação técnica do projeto.

Entretanto, houve envolvimento humano direto em todas as etapas relevantes do desenvolvimento, incluindo:

- Interpretação dos requisitos do desafio.
- Análise do PDF e do layout de referência.
- Decisão sobre a estrutura da página.
- Seleção e adaptação dos componentes necessários.
- Revisão do código gerado.
- Ajustes de estilo, responsividade e comportamento.
- Validação das funcionalidades de busca, menu, carrossel e newsletter.

A ferramenta de IA foi utilizada como suporte de produtividade, não como substituição da análise, tomada de decisão e validação técnica humana.

---

## Melhorias futuras

Caso o projeto fosse evoluído para um ambiente de produção, algumas melhorias possíveis seriam:

- Integração com uma API de produtos.
- Busca real com filtragem de catálogo.
- Carrinho de compras persistente com `localStorage`.
- Página individual de produto.
- Página de categorias e listagem de produtos.
- Integração com backend para newsletter.
- Validação de formulário com mensagens visuais em tela.
- Menu mobile com animações e acessibilidade expandida.
- Testes automatizados de interface e comportamento.
- Otimização das imagens para melhor desempenho.

---

## Autor

Desenvolvido por **Caio** para o desafio técnico do **Avanti Innovation Challenge — Innovation Class 19**.
