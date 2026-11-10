# Projeto-em-Dupla
Site em andamento com dois colaboradores
# Relatório de Auditoria e Uso de Inteligência Artificial

**Projeto:** Expatriados de Sofá  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplinas / Contexto:** Desenvolvimento Web Front-End (HTML5, CSS3, JavaScript, Bootstrap 5)  

---

## 1. Resumo Executivo
Este documento descreve detalhadamente o processo de utilização de ferramentas de Inteligência Artificial Generativa no apoio ao planejamento, refatoração de código, validação semântica e implementação de recursos avançados para a plataforma web *Expatriados de Sofá*.

---

## 2. Prompts e Interações Realizadas

### 2.1. Estruturação Semântica e Acessibilidade (HTML5)
* **Objetivo:** Garantir a estrutura semântica conforme as normas WCAG (atributos `aria`, tags semânticas `<header>`, `<main>`, `<section>`, `<article>`).
* **Prompt Utilizado:** *"Revise a estrutura do meu index.html garantindo boas práticas de acessibilidade, uso correto de tags semânticas do HTML5 e integração limpa do Bootstrap 5."*
* **Resultado / Aplicação:** Ajuste das rotulagens dos formulários, navegação acessível e correção da hierarquia de cabeçalhos (`<h1>` a `<h3>`).

### 2.2. Design System e Estilização (CSS3 & Variáveis)
* **Objetivo:** Organizar a paleta de cores e o layout responsivo através de variáveis CSS no `:root`.
* **Prompt Utilizado:** *"Crie e otimize as variáveis CSS no :root com a nossa paleta de cores e corrija os seletores para suportar responsividade e Dark Mode."*
* **Resultado / Aplicação:** Implementação de variáveis como `--azul-petroleo`, `--caramelo`, `--off-white` e criação das regras do `body.dark-mode`.

### 2.3. Lógica Interativa e Visualização (JavaScript, Chart.js, LocalStorage)
* **Objetivo:** Criar um simulador interativo, um gráfico dinâmico de barras com Chart.js e alternância de tema persistente.
* **Prompt Utilizado:** *"Escreva o script app.js combinando o quiz interativo, a biblioteca Chart.js via CDN e a persistência do tema no localStorage."*
* **Resultado / Aplicação:** Geração da lógica dinâmica em `js/app.js` manipulando o DOM de forma modular.

---

## 3. Validação Humana e Aprendizado
Todas as sugestões geradas pela IA foram testadas, validadas e ajustadas manualmente no ambiente de desenvolvimento (VS Code) e auditadas no navegador. O uso da ferramenta serviu como um tutor interativo, auxiliando na fixação de conceitos de manipulação de DOM, versionamento com Git e regras de estilização CSS.