# Findable

[🇺🇸 Read in English](README.md)

Uma skill para Claude Code que pesquisa boas práticas de SEO e GEO na internet de forma autônoma e aplica melhorias no seu projeto — automaticamente para mudanças seguras, com um plano documentado para mudanças sensíveis.

---

## O Problema

A maioria dos projetos é invisível. Código bom, descoberta ruim. Sem sitemap. Sem dados estruturados. Sem `llms.txt`. Mecanismos de busca e IAs não recomendam o que não conseguem entender.

O Findable resolve isso rodando um loop contínuo de pesquisa: busca no GitHub, Google, fóruns e docs as boas práticas mais atuais, aplica o que é seguro e documenta o que precisa da sua revisão.

---

## O que faz

1. **Pesquisa** na internet boas práticas de SEO, GEO, llms.txt e visibilidade para IAs
2. **Lê** seu projeto para entender a stack e o estado atual
3. **Aplica mudanças seguras** automaticamente — novos arquivos, meta tags, dados estruturados, llms.txt
4. **Documenta mudanças sensíveis** em `TODO SEO.md` — mudanças de URL, edições estruturais, toques em configs
5. **Continua rodando** — faz loop até você mandar parar

---

## Mudanças seguras (aplicadas automaticamente)

- `robots.txt`, `sitemap.xml`, `llms.txt`, `humans.txt`
- Tags `<meta>`: title, description, `og:*`, `twitter:*`
- Blocos de dados estruturados JSON-LD
- Tags `<link rel="canonical">`
- Texto `alt` para imagens que não têm

## Mudanças sensíveis (documentadas em TODO SEO.md)

- Mudanças na estrutura de URLs ou rotas
- Modificações na estrutura HTML existente
- Configs de build, configs de servidor, `.htaccess`
- Mudanças na hierarquia de navegação ou links

Cada entrada no `TODO SEO.md` inclui a URL da fonte, o que será feito, onde toca e por quê.

---

## Cobertura

| Área | Exemplos |
|------|---------|
| **SEO** | sitemaps, robots.txt, dados estruturados, Core Web Vitals, URLs canônicas |
| **GEO** | generative engine optimization, rastreabilidade por IAs, sinais de conteúdo |
| **llms.txt** | arquivos de contexto legíveis por IAs seguindo o padrão llmstxt.org |
| **Visibilidade para IA** | aparecer nas recomendações do ChatGPT, Perplexity, Claude, Gemini |
| **Rich results** | Open Graph, Twitter Cards, JSON-LD, rich snippets |

---

## Instalação

### Recomendado — instale como plugin (global, automático)

```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

### Manual — invoque por sessão

Aponte o Claude para este repositório:
> "Leia https://github.com/obrenoalvim/findable e siga a skill Findable."

Ou copie `skills/findable/SKILL.md` para o seu diretório de skills.

---

## Uso

Uma vez ativo, o Findable roda de forma autônoma. Ele vai:

- Reportar o que pesquisou e encontrou (com URLs das fontes)
- Mostrar o que foi aplicado (com caminhos dos arquivos)
- Mostrar o que foi enfileirado em `TODO SEO.md`
- Informar o foco do próximo ciclo

Diga **"stop"** ou **"pare"** para encerrar o loop.

---

## Compatibilidade

Funciona com qualquer projeto que tenha presença na web:

- Sites estáticos (HTML, Jekyll, Hugo, Eleventy, Astro)
- Next.js, Nuxt, SvelteKit, Remix
- Apps backend com saída HTML (Rails, Django, Laravel, Express)
- Sites de documentação (Docusaurus, VitePress, GitBook)
- Qualquer projeto que precise ser encontrado
