# App Finanças — Gestão Financeira Pessoal

![Status](https://img.shields.io/badge/Status-Em_Andamento-yellow)
![Uso](https://img.shields.io/badge/Propósito-Uso_Pessoal-purple)
![Licença](https://img.shields.io/badge/License-MIT-green)

Aplicação desenvolvida para controle financeiro e orçamentário pessoal, com foco em simplicidade, agilidade no registro de despesas e visibilidade clara dos hábitos de consumo no cartão de crédito. 

O objetivo do projeto foi criar uma ferramenta PWA (Progressive Web App) sob medida para substituir planilhas manuais. A aplicação ajuda a manter os gastos dentro de um limite pré-estabelecido, calculando o ritmo diário de compras (Pacing) até o fechamento da fatura e recompensando dias sem gastos.

---

## Funcionalidades

- **Inteligência de Orçamento Diário (Pacing):** Calcula automaticamente quanto você pode gastar por dia até o fechamento da fatura para não estourar o limite, além de contar a "ofensiva" (streak) de dias sem passar o cartão.
- **Registro Rápido e Parcelamento:** Botões de *Quick Add* para locais frequentes (ex: Mercado, Farmácia) e suporte nativo ao registro de compras parceladas.
- **Dashboard Visual:** Gráfico de rosca dinâmico para analisar imediatamente para onde o dinheiro está indo, separando tudo por categorias.
- **Múltiplos Temas (Color Palettes):** Interface 100% customizável com 6 temas integrados (Sorvete, Peachy Glow, Summer, Ocean Pearl, Fresh e Cozy Earth) que alteram toda a UI e as cores do gráfico em tempo real.
- **Filtros e Exportação:** Navegue facilmente por faturas de meses anteriores e exporte o histórico completo do ciclo atual para um arquivo `.csv` com apenas um clique.
- **Armazenamento em Nuvem e Segurança:** Autenticação de usuário e sincronização de dados em tempo real protegida por regras de segurança.

---

## Tecnologias Utilizadas

- **Frontend / Interface:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules).
- **Tipografia:** Google Fonts ([Fredoka](https://fonts.google.com/specimen/Fredoka) - para um visual mais arredondado, amigável e moderno).
- **Backend / Armazenamento:** Firebase Realtime Database (Nuvem).
- **Autenticação:** Firebase Auth (E-mail e Senha).
- **Visualização de Dados:** Chart.js.
- **Controle de Versão:** Git & GitHub.

---

## Créditos de Design

A estética do aplicativo foi focada em um estilo minimalista, moderno e leve. 

As paletas de cores maravilhosas utilizadas nos temas dinâmicos (como o *Cozy Earth* e o *Peachy Glow*) foram cuidadosamente selecionadas utilizando a ferramenta **[coolors.co](https://coolors.co/)**.
