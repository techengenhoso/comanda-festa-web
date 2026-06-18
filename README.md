# Controle de Festa

Aplicação web em React, TypeScript e Vite para controlar festas, comandas, cardápio, consumos e saldos mínimos. O projeto é uma conversão definitiva para site web e não depende de Expo ou React Native.

## O que o projeto faz

- Cria e gerencia festas com data no formato `dd/mm/aaaa`.
- Mantém uma única festa ativa por vez.
- Cadastra comandas e itens do cardápio por festa.
- Registra consumos somente quando há festa, comanda e item ativos.
- Calcula total consumido e valor restante para atingir o consumo mínimo.
- Atualiza consumos antigos quando um item do cardápio é editado.
- Remove consumos relacionados ao excluir uma comanda ou item.
- Arquiva automaticamente festas com mais de 15 dias.
- Persiste os dados no navegador para sobreviver a recarregamentos da página.

## Como instalar

```bash
npm install
```

## Como rodar em desenvolvimento

```bash
npm run dev
```

Depois abra a URL exibida pelo Vite no terminal, normalmente `http://localhost:5173`.

## Como gerar build de produção

```bash
npm run build
```

Os arquivos finais são gerados em `dist/`.

## Onde os dados ficam salvos

Os dados são salvos no `localStorage` do navegador, usando a chave `party-control:v2`. Como o armazenamento é local ao navegador/dispositivo, limpar os dados do site ou trocar de navegador remove o histórico salvo naquele ambiente.
