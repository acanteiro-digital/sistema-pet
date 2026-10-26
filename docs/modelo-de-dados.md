# PetClubinho – Modelo de dados (Firestore)

Versão 1 · baseada nas respostas da tela Dúvidas e no protótipo.

## 1. Decisões que moldam o modelo

| # | Decisão do administrador | Consequência no modelo |
|---|---|---|
| 1 | Presença **uma vez só por dia** por cão | `presencas` tem 1 documento por cão e dia (id `AAAA-MM-DD_caoId`); os serviços do dia ficam dentro dele |
| 2 | Day care é **diária avulsa** | serviço com `cobranca = "diaria"`, sem saldo |
| 3 | Banho e tosa tem **agenda própria** (dia, hora, profissional) | coleção `agendamentos` |
| 4 | Aula extra cobra o **mesmo valor** da fixa | extra usa o `valor` do serviço, sem preço separado |
| 5 | Creche: falta **não desconta** se o tutor avisou | `presencas.faltaAvisada`; só falta sem aviso consome o pacote |
| 6 | Hotel: **desconto por pacotes** de diárias | `servicos.faixas` (pacotes de N diárias com valor) |
| 7 | Vacina vencida **bloqueia entrada** (creche, day care, hotel) | `caes.vacinaValidaAte`, checado no check-in e na presença |
| 8 | Pagamento **Pix, baixa manual** | `fechamentos.status` e `pagoEm`, sem integração bancária |
| 9 | Cobrança **pelo WhatsApp do tutor** | `tutores.whatsapp` (só dígitos, com 55) e `fechamentos.enviadoEm` |

## 2. Coleções

Datas são `Timestamp`, exceto `data` e `competencia`, que são texto (`"2026-10-26"`, `"2026-10"`) para facilitar filtros e exportação. Valores em **centavos** (inteiro).

### `usuarios/{uid}`
`email`, `nome`, `papel` (`admin` | `operador` | `adestrador`), `ativo`. Só e-mails cadastrados aqui entram (login Google).

### `tutores/{id}`
`nome`, `whatsapp`, `email?`, `obs?`, `ativo`, `criadoEm`.

### `caes/{id}`
`nome`, `tutorId`, `raca?`, `nascimento?`, `vacinaValidaAte` (data), `obs?`, `ativo`,
`servicos`: lista de ids de serviço contratados (um cão pode ter vários).
Sem campo de porte: o preço não varia por porte.

### `servicos/{id}` (tela Serviços e preços)
`nome`, `cobranca`: `"aula"` | `"diaria"` | `"pacote"` | `"extra"` (valor informado) | `"sessao"` (banho e tosa),
`valor` (centavos, vazio quando `extra`), `diasPacote?`,
`faixas?`: `[{ dias, valorTotal }]` (pacotes do hotel com desconto), `ativo`.

### `agendaFixa/{id}` (adestramento)
`caoId`, `servicoId`, `diaSemana` (0–6), `hora` ("08:00" a "18:00", passo de 30 min), `ativo`.
Um cão com dois dias na semana tem dois documentos.

### `agendamentos/{id}` (banho e tosa e aulas extras)
`data`, `hora`, `caoId`, `servicoId`, `profissional?`, `extra` (bool), `status` (`agendado` | `feito` | `cancelado`), `obs?`.

### `presencas/{data_caoId}`
`data`, `caoId`, `status` (`presente` | `faltou`), `faltaAvisada` (bool),
`itens`: `[{ servicoId, origem: "agendaFixa"|"agendamento"|"avulso", origemId?, obs? }]`,
`obs?` (texto da aula, substitui a mensagem do adestrador), `marcadoPor`, `marcadoEm`.
Ao salvar, o sistema cria ou atualiza os `lancamentos` do dia.

### `pacotes/{id}` (pacotes de creche contratados)
`caoId`, `servicoId`, `diasTotal`, `diasUsados`, `validoAte?`, `status` (`ativo` | `encerrado`).
Presença consome 1 dia. Falta avisada não consome.

### `hotelReservas/{id}`
`caoId`, `tutorId`, `baia`, `entradaPrevista`, `diasPrevistos`, `saidaPrevista`,
`checkInEm?`, `checkOutEm?`, `status` (`reservado` | `hospedado` | `saiu`),
`itensTrazidos?`, `pacoteFaixa?` (faixa aplicada), `diarias?` (calculado no check-out), `obs?`.

### `lancamentos/{id}` (fonte única do que é cobrado)
`competencia`, `data`, `tutorId`, `caoId`, `servicoId`, `descricao`, `quantidade`, `valorUnit`, `valor`,
`origem` (`presenca` | `hotel` | `pacote` | `extra`), `origemId`, `fechamentoId?`.
Extras (ração, guia, banho) entram aqui com valor digitado pelo administrador.

### `fechamentos/{competencia_tutorId}`
`competencia`, `tutorId`, `total`, `vencimento` (dia 10), `status` (`aberto` | `enviado` | `pago` | `atrasado`),
`enviadoEm?`, `pagoEm?`, `formaPagamento: "pix"`, `baixaPor?`.
Os lançamentos do mês apontam para ele por `fechamentoId`.

### `config/app`
`diaVencimento` (10), `horaInicio` ("08:00"), `horaFim` ("18:00"), `passoMinutos` (30), `modeloMensagemWhatsapp`.

### `duvidas/{id}`
`pergunta`, `resposta`, `respondidaPor`, `respondidaEm`. Guarda o histórico das decisões da seção 1.

## 3. Regras de negócio na gravação

1. **Vacina**: ao registrar presença de creche/day care ou check-in do hotel, se `vacinaValidaAte` < data, bloquear e avisar.
2. **Presença**: gera um lançamento por item (aula, diária de day care, banho). Item de creche consome o pacote; se não há pacote ativo, avisar.
3. **Falta**: aula faltada segue a regra do administrador (confirmar se cobra); creche só consome o pacote se `faltaAvisada = false`.
4. **Hotel**: no check-out, `diarias` = dias entre `checkInEm` e `checkOutEm`; aplica a melhor `faixa` do serviço e cria o lançamento.
5. **Fechamento (dia 1 a 3)**: soma os lançamentos da competência por tutor, cria o documento, gera o link `https://wa.me/55…?text=…`.
6. **Baixa**: botão Marcar como pago grava `status = pago`, `pagoEm` e `baixaPor`.

## 4. Índices e exportação

Consultas principais: `presencas` por `data`; `lancamentos` por `competencia` + `tutorId`; `lancamentos` por `data` (Dashboard com filtro de datas); `hotelReservas` por `status`.
A exportação Excel/Sheets usa: aba **Detalhes** = `lancamentos`; **Fechamento** = `fechamentos`; **Dashboard** = totais calculados sobre `lancamentos`.

## 5. Segurança

Ver `firestore.rules`: só quem está em `usuarios` e ativo lê e grava; só `admin` altera `servicos`, `usuarios`, `config` e dá baixa em `fechamentos`.

## 6. Pontos ainda abertos

- Falta de aula de adestramento: cobra ou não?
- Preço e faixas do hotel (quantos pacotes e valores).
- Banho e tosa: lista de profissionais.
- Quem tem papel `adestrador` pode só marcar presença e escrever a aula?
