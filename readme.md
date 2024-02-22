# Dev Paraná - Ingá.php

| Rumo à Performance Ideal - Testes e Ajustes

## Otimizando a Performance em Node.js: Estratégias e Melhores Práticas

[Apresentação](https://pitch.com/v/pedroentringer-devparana-nodejs-xgnwbp)

## Benchmark

```sh
drill --benchmark benchmark.yml --stats
```

## PM2

Basic `npx pm2 start basic/api.js`

PM2 Cluster `npx pm2 start basic/api.js -i max`

Monit `npx pm2 monit`

### PM2 Io

Link: `npx pm2 link ip43xm4cnhhyb61 6iiv3belnodk6qo`

Monitor: <https://app.pm2.io/bucket/65d7a20b2bce7fa4f10c8645/backend/overview/servers>
