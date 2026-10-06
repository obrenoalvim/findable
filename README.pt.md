<div align="center">

<img src=".github/logo.svg" alt="Logo do Findable" width="120" height="120">

# Findable

**SEO e GEO para o seu projeto, pesquisados e aplicados pelo Claude Code.**<br>
Ele pesquisa as boas práticas atuais, aplica as correções seguras e fila o resto no `TODO SEO.md` para você revisar.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/obrenoalvim/findable?style=flat&logo=github&color=ffb020)](https://github.com/obrenoalvim/findable/stargazers)
[![Claude Code plugin](https://img.shields.io/badge/Claude_Code-plugin-5B5BD6)](#início-rápido)

[English](README.md) · **Português** · [Español](README.es.md)

[O que faz](#o-que-faz) · [Início rápido](#início-rápido) · [Exemplo](#exemplo) · [Cobertura](#cobertura) · [Instalação](#instalação) · [Perguntas frequentes](#perguntas-frequentes)

</div>

---

O Findable é uma skill para Claude Code voltada a SEO, GEO (generative engine optimization) e `llms.txt`. Aponte para um projeto e ela busca na internet o que precisa de ajuste, aplica as mudanças seguras e fila o resto para você revisar.

## O que faz

Cada ciclo: pesquisa no GitHub, Google, fóruns e docs as boas práticas atuais de SEO, GEO e llms.txt. Lê o projeto para entender a stack. Aplica o que pode, documenta o que não pode.

**Mudanças seguras vão direto:** `robots.txt`, `sitemap.xml` e `llms.txt` (criados só quando ainda não existem), meta tags, blocos JSON-LD, links canônicos, alt text faltando.

**Mudanças sensíveis vão para `TODO SEO.md`** com a URL da fonte, o arquivo exato a tocar e o motivo. Você decide quando aplicar.

A skill para quando você pedir, quando não houver mais nada a fazer, ou quando o contexto acabar. Se o contexto encher no meio do ciclo, ela atualiza o `TODO SEO.md` para uma nova sessão continuar de onde parou.

## Início rápido

```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

Depois diga ao Claude: "Rode a skill Findable neste projeto."

## Exemplo

Uma mudança sensível cai no `TODO SEO.md` neste formato:

```markdown
### Redirect www to the apex domain
- **Source:** https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- **What:** Add a 301 redirect from `www.example.com` to `example.com`.
- **Where:** `nginx.conf`, server block on line 12.
- **Why:** Both hosts serve the same pages, so search engines split ranking signals between them.
- **Risk:** Confirm your TLS certificate covers both hosts before deploying.
- **Effort:** Low
```

A cada ciclo a skill relata o que pesquisou, o que encontrou (com URLs), o que aplicou, o que enfileirou e o que o próximo ciclo vai cobrir.

---

## Cobertura

- **SEO:** sitemaps, robots.txt, dados estruturados, Core Web Vitals, URLs canônicas
- **GEO:** como LLMs descobrem e recomendam seu conteúdo (Generative Engine Optimization)
- **llms.txt:** arquivos de contexto legíveis por IA seguindo o padrão [llmstxt.org](https://llmstxt.org)
- **Rich results:** Open Graph, Twitter Cards, JSON-LD, schema.org

## Funciona melhor com last30days

O Findable depende do [last30days](https://github.com/mvanhorn/last30days-skill) pro ângulo de comunidade e sentimento da pesquisa: o que as pessoas estão falando de verdade no Reddit, Hacker News, X, etc. Busca web comum não pega isso. Instalar o findable como plugin já instala ele automaticamente. Sem ele, o findable ainda funciona, mas pula direto pra busca web nessa parte.

## Instalação

**Como plugin (disponível em todas as sessões):**
```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

Depois invoque: "Rode a skill Findable neste projeto."

**Sem instalar:**
> "Leia https://github.com/obrenoalvim/findable e siga a skill Findable."

**Copie o arquivo da skill:**
Copie `skills/findable/SKILL.md` para o diretório de skills do seu projeto e invoque pelo seu sistema de skills.

## Funciona com

Sites estáticos, Next.js, Nuxt, SvelteKit, Remix, Rails, Django, Laravel, Express, Docusaurus, VitePress, ou qualquer projeto com presença na web.

---

## Perguntas frequentes

**O Findable altera meus arquivos sem perguntar?**
Só com mudanças aditivas: arquivos que ainda não existem, meta tags novas, blocos JSON-LD, links canônicos e alt text faltando. Qualquer coisa que edite estrutura existente, rotas, navegação ou configuração de servidor fica no `TODO SEO.md` até você aplicar.

**Precisa de chave de API?**
Não. O Findable usa a busca web do Claude Code e, quando instaladas, as skills `last30days` e `web`.

**Serve só para sites?**
Serve para projetos com presença na web, de sites estáticos a apps Rails, Django e Next.js. Veja [Funciona com](#funciona-com).

## Mais skills para Claude Code do mesmo autor

- [**zero-drift**](https://github.com/obrenoalvim/zero-drift): mantém sessões longas ancoradas com respostas com nome e um `TASK.md` vivo.
- [**keep-improving**](https://github.com/obrenoalvim/keep-improving): loop autônomo de melhoria com um painel de revisão de dez papéis.
- [**unblock**](https://github.com/obrenoalvim/unblock): cadeia gratuita de 13 ferramentas para pesquisa web que continua tentando.
- [**no-watermark**](https://github.com/obrenoalvim/no-watermark): detecta e remove marcas d'água Unicode invisíveis de textos.

## Contribuindo

Achou uma lacuna no escopo da pesquisa ou um tipo de mudança que a triagem classifica errado? Abra uma issue ou um PR. Veja o [CONTRIBUTING.md](CONTRIBUTING.md) e o [changelog](CHANGELOG.md).

## Licença

[MIT](LICENSE)

---

<div align="center">

Se o Findable ajuda seu projeto a aparecer nas buscas e nas respostas de IA, uma ⭐ ajuda outras pessoas a encontrá-lo também.

<sub>**Tópicos:** seo · geo · llms-txt · ai-visibility · claude-code · claude-skill · claude-code-plugin · generative-engine-optimization · technical-seo · json-ld · structured-data</sub>

</div>
