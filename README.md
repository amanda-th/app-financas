# Gestão Financeira Pessoal

<p align="left">
  <img src="https://img.shields.io/badge/Status-Em_Andamento-yellow?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/Propósito-Uso_Pessoal-purple?style=flat-square" alt="Propósito" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="Licença" />
</p>

Aplicação PWA (Progressive Web App) criada sob medida para substituir planilhas manuais no controle financeiro e no uso consciente do cartão de crédito. 

O app foca em agilidade para registrar despesas do dia a dia, mantendo os gastos dentro de um teto pré-definido por meio de um cálculo inteligente de ritmo diário (**Pacing**) e recompensando a consistência com ofensivas sem compras.

---

## Funcionalidades


<table>
  <tr>
    <td width="55%" valign="center">
      <h3>Ritmo Diário & Ofensiva (Pacing)</h3>
      <p>Calcula dinamicamente o valor disponível para gastar por dia até o fechamento da fatura, evitando estouros no orçamento no final do mês.</p>
      <p>Inclui contador de <em>streak</em> (dias sem passar o cartão) para incentivar o consumo consciente.</p>
      <p>Histórico completo de faturas para consultas retroativas e exportação dos dados do ciclo em <code>.csv</code> com um clique.</p>
    </td>
    <td width="45%" align="center">
      <img src="https://github.com/user-attachments/assets/92402cc9-0577-49a9-b418-65d45b93c4e0" height="360" />
    </td>
  </tr>
  <tr>
    <td width="55%" align="center">
      <img src="https://github.com/user-attachments/assets/edee3aa6-27b7-4284-b004-94760972f543" height="360" />
    </td>
    <td width="45%" valign="center">
      <h3>Registro Rápido & Parcelas</h3>
      <p>Botões de <em>Quick Add</em> pensados para comércios de rotina (supermercado, farmácia, etc.) para registrar despesas em menos de 5 segundos.</p>
      <p>Suporte completo a parcelamentos futuros com distribuição correta nas faturas.</p>
    </td>
  </tr>
  <tr>
    <td width="55%" valign="center">
      <h3>Dashboard & Análise Visual</h3>
      <p>Gráficos interativos em rosca que mostram a distribuição de gastos por categoria em tempo real.</p>
      <p>Visualização clara das maiores fatias do orçamento do ciclo atual.</p>
    </td>
    <td width="45%" align="center">
      <img src="https://github.com/user-attachments/assets/f77b5137-a2f1-4158-9e0d-87bacb3e3411" height="360" />
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <img width="300" src="https://github.com/user-attachments/assets/ebe5ad26-ecb6-4dfa-9167-9b25cd84309c" />
    </td>
    <td width="50%" valign="center">
      <h3>Temas</h3>
      <p>Interface personalizável com 6 paletas de cores prontas que modificam componentes, contrastes e os gráficos em tempo real:</p>
      <em>Sorvete, Peachy Glow, Summer, Ocean Pearl, Fresh e Cozy Earth.</em>
    </td>
  </tr>
    <td width="55%" valign="center">
      <h3> Regras do Orçamento & Customização</h3>
      <p>Controle total sobre as variáveis do seu mês: defina tetos de gastos, dia de fechamento do cartão, botões rápidos de despesa e temas visuais.</p>
      <p>Uma central pensada para que a ferramenta se adapte ao seu fluxo, e não o contrário.</p>
    </td>
    <td width="45%" align="center">
      <img src="https://github.com/user-attachments/assets/d824826d-e5cd-4191-b59c-e96bd3355589" height="360" />
    </td>
  </tr>
</table>


---

## Tecnologias

| Área | Tecnologias / Bibliotecas |
| :--- | :--- |
| **Interface** | HTML5, CSS3, JavaScript Vanilla (ES6 Modules) |
| **Design & UI** | Google Fonts ([Fredoka](https://fonts.google.com/specimen/Fredoka)), Paletas via [Coolors](https://coolors.co/) |
| **Visualização** | Chart.js |
| **Nuvem & Auth** | Firebase Realtime Database, Firebase Authentication |
| **Versão** | Git & GitHub |

---

## Design

O layout foi pensado para ser leve e visualmente confortável, fugindo do visual cinza e denso de planilhas tradicionais. As combinações cromáticas foram estruturadas para manter legibilidade e contraste mesmo na alternância dos 6 temas nativos.
