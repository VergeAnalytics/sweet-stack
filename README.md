[comment]: <> (SWEET STACK: https://www.youtube.com/watch?v=SgrHhiQ27WQ)
[comment]: <> (Component Library: https://www.youtube.com/watch?v=AOnAl592CJc)
[comment]: <> (Component Library: https://www.youtube.com/watch?v=5QV9wVc8c7g)
[comment]: <> (Reading Ref: https://codetea.com/svelte-is-sexy-deno-is-dynamite-graphql-is-grand-sweetness/)

### Create a dev repo using degit
```bash
npx degit hyper63/sweet-stack myproject
npx degit sveltejs/template app
```

### Running client server
- install foreman
- define procfile
```bash
nf start
```

### Production Procfile
```bash 
Procfile
server: make
app: cd app && yarn && yarn dev
```
