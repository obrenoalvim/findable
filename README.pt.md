# Findable

[🇺🇸 Read in English](README.md)

Uma skill para Claude Code que pesquisa SEO e GEO na internet. Aponte para um projeto e ela busca o que precisa de ajuste, aplica as mudanças seguras e fila o resto para você revisar.

---

## O que faz

Cada ciclo: pesquisa no GitHub, Google, fóruns e docs as boas práticas atuais de SEO, GEO e llms.txt. Lê o projeto para entender a stack. Aplica o que pode, documenta o que não pode.

**Mudanças seguras vão direto:** `robots.txt`, `sitemap.xml`, `llms.txt`, meta tags, blocos JSON-LD, links canônicos, alt text faltando.

**Mudanças sensíveis vão para `TODO SEO.md`** com a URL da fonte, o arquivo exato a tocar e o motivo. Você decide quando aplicar.

A skill para quando você pedir, quando não houver mais nada a fazer, ou quando o contexto acabar. Se o contexto encher no meio do ciclo, ela atualiza o `TODO SEO.md` para uma nova sessão continuar de onde parou.

---

## Cobertura

- **SEO:** sitemaps, robots.txt, dados estruturados, Core Web Vitals, URLs canônicas
- **GEO:** como LLMs descobrem e recomendam seu conteúdo (Generative Engine Optimization)
- **llms.txt:** arquivos de contexto legíveis por IA seguindo o padrão [llmstxt.org](https://llmstxt.org)
- **Rich results:** Open Graph, Twitter Cards, JSON-LD, schema.org

---

## Como usar

**Sem instalar:**
> "Leia https://github.com/obrenoalvim/findable e siga a skill Findable."

**Como plugin (disponível em todas as sessões):**
```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

Depois invoque: "Rode a skill Findable neste projeto."

**Copie o arquivo da skill:**
Copie `skills/findable/SKILL.md` para o diretório de skills do seu projeto e invoque pelo seu sistema de skills.

---

## Funciona com

Sites estáticos, Next.js, Nuxt, SvelteKit, Remix, Rails, Django, Laravel, Express, Docusaurus, VitePress, ou qualquer projeto com presença na web.
