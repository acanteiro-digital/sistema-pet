# PetClubinho – Sistema de controle administrativo

Protótipo **clicável** do sistema para a empresa de adestramento, day care, creche, hotel e banho e tosa.
Todos os dados são **fictícios** e **não ficam salvos**: ao recarregar a página, volta ao início.

## O que dá para testar

| Tela | O que faz |
|---|---|
| **Hoje** | Agenda do dia: cada cão agendado já aparece com Presente / Faltou e o detalhe da aula. Aula extra, extras (ração, guia, banho) e navegação entre os dias. |
| **Hotel** | Calendário de baias, check-in (cão do cadastro, dia de entrada, dias de estadia) e check-out. |
| **Fechamento** | Extrato por tutor, envio da cobrança pelo WhatsApp (abre a conversa com a mensagem pronta, no computador e no celular) e baixa do pagamento (Pix). |
| **Dashboard** | Totais, faturamento por serviço e por mês e detalhes, com filtro de datas. |
| **Cães e tutores** | Cadastro único, com serviços (mais de um por cão) e dias/horários fixos do adestramento. |
| **Serviços e preços** | Cadastro de serviços, forma de cobrança e valores. |
| **Dúvidas** | Decisões que dependem do administrador, com as respostas. |

## Como abrir

Abra `public/index.html` no navegador. Não precisa instalar nada.

Para alterar o código:

```bash
npm install     # instala o esbuild (só para gerar o arquivo public/app.js)
npm run build   # gera public/app.js a partir de src/
npm run dev     # abre em http://localhost:8080 e recompila ao salvar
```

## Estrutura

```
public/
  index.html    página
  styles.css    estilos globais
  app.js        código gerado (npm run build) – já incluído para abrir direto
src/
  template.html telas (HTML com {{valores}}, <sc-if> e <sc-for>)
  logic.js      dados de exemplo e regras de cada tela
  runtime.js    lê o template e liga os botões
  vdom.js       desenha a tela sem perder o cursor ao digitar
  main.js       ponto de entrada
firebase.json   configuração do Firebase Hosting (pasta public)
```

## Próximos passos (sistema real)

- Publicar no **Firebase Hosting** (`firebase deploy --only hosting`).
- **Login com Google** (Firebase Authentication), com lista de e-mails autorizados e perfis (administração e equipe).
- **Dados compartilhados** entre todos os usuários (Cloud Firestore), no lugar dos dados fictícios.
- Importar a planilha atual de cães e tutores.
- Exportar o fechamento para Excel / Google Sheets, com as abas Detalhes, Fechamento e Dashboard.
- Responder as dúvidas em aberto (tela **Dúvidas**) antes de fechar as regras de cobrança.
