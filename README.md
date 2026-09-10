# Brasa Casa de Carnes — Cardápio Digital

Projeto estático, mobile-first e pronto para Vercel.

## Estrutura
- `index.html` — página
- `styles.css` — design responsivo
- `script.js` — produtos, busca, filtros, carrinho e WhatsApp
- `vercel.json` — cabeçalhos de segurança/cache
- `assets/` — artes otimizadas em WebP e favicon

## Publicar
Extraia o ZIP e publique a pasta inteira na Vercel. Não existe build nem dependência.

## WhatsApp configurado

O projeto já está configurado com o WhatsApp oficial:

**(83) 98850-5050**

Internamente, para o link `wa.me`, o número é usado no formato internacional:

```js
whatsappNumber: "5583988505050"
```

## Quantidade por peso

Itens vendidos por KG:

- entram no pedido inicialmente com **1,0 KG**
- botão `+` aumenta **100 g por toque**
- botão `−` diminui **100 g por toque**
- exemplo: `1,0 KG → 1,1 KG → 1,2 KG → 1,3 KG`

## Alterar preços
Os produtos ficam no array `PRODUCTS` de `script.js`. Exemplo:

```js
{id:"alcatra",category:"bovinos",name:"ALCATRA",price:59.99,unit:"kg"}
```

Altere `price` e publique novamente.

## Importante
Itens que você informou sem `/kg` foram mantidos sem unidade para não inventar informação.
