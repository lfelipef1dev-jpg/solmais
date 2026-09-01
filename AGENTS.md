# SolMais — Projeto de Portfolio

## O que e

Demonstracao estatica de energia solar fotovoltaica. Sem backend, sem banco, sem coleta de dados. Projeto do ecossistema ExpoStacker.

## Stack

- HTML/CSS/vanilla JS (sem framework)
- Fontes self-hosted: Inter (body) + Sora (display)
- Build: `node build.js` gera arquivos em `out/`
- Deploy: Cloudflare Pages via GitHub Actions

## Comandos

```bash
npm run build    # gera arquivos em out/
```

Nao ha dev server. Para preview local, servir `out/` com qualquer servidor estatico.

## Deploy — Regra Padrao (SEMPRE seguir esta ordem)

### Credenciais (NUNCA commitar)

As credenciais estao em `C:\PROJETOS\EXPOSTACKER\EXPOSTACKER - SITE PRINCIPAL\.deploy.env` (arquivo local, nao commitado).

### Fluxo completo de deploy (ja configurado — nao refazer)

1. **Git commit** nas mudancas locais
2. **Git push** para `origin/main`
3. **GitHub Actions** dispara automaticamente: `npm ci` -> `npm run build` -> deploy para Cloudflare Pages
4. **Cloudflare Pages** publica em `solmais.pages.dev`
5. **CNAME** `solmais.expostacker.com.br` -> `solmais.pages.dev` (ja criado no Cloudflare DNS)
6. Site no ar em ~1 minuto

### Secrets no GitHub (ja configurados)

```
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

### Verificar status do deploy

```bash
gh run list --limit 3
gh run view <run-id>
```

## Git

- Repo: https://github.com/lfelipef1dev-jpg/solmais
- Branch principal: `main`
- Identidade local: `lfelipef1dev-jpg <lfelipef1dev-jpg@users.noreply.github.com>`

## Regras do projeto

- **NUNCA** pushar sem validacao visual do usuario
- **NUNCA** commitar `.deploy.env` ou credenciais
- **NUNCA** adicionar backend, banco, formulario de coleta, ou CRM
- Manter como demo de portfolio — sem atendimento comercial
- Fontes self-hosted (sem Google Fonts CDN)
- Respeitar `prefers-reduced-motion`
- WCAG AA em contraste de cores
- Imagens otimizadas (WebP/JPEG com srcset)

## Dominio

- Producao: `https://solmais.expostacker.com.br`
- Cloudflare Pages: `solmais.pages.dev`

## Build 2.0

- Build: `node build.js` -> `out/`
- Deploy: GitHub Actions -> Cloudflare Pages (directory: `out`)
- 54 paginas geradas estaticamente
- Dados JSON em `src/data/`
- Templates em `src/templates/templates.js`
- Paginas em `src/pages/`
- Styles em `src/styles/` (base, components, pages)
- Scripts em `src/scripts/app.js`
