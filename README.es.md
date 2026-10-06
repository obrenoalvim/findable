<div align="center">

<img src=".github/logo.svg" alt="Logo de Findable" width="120" height="120">

# Findable

**SEO y GEO para tu proyecto, investigados y aplicados por Claude Code.**<br>
Busca las buenas prácticas actuales, aplica las correcciones seguras y deja el resto en `TODO SEO.md` para que lo revises.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/obrenoalvim/findable?style=flat&logo=github&color=ffb020)](https://github.com/obrenoalvim/findable/stargazers)
[![Claude Code plugin](https://img.shields.io/badge/Claude_Code-plugin-5B5BD6)](#inicio-rápido)

[English](README.md) · [Português](README.pt.md) · **Español**

[Qué hace](#qué-hace) · [Inicio rápido](#inicio-rápido) · [Ejemplo](#ejemplo) · [Cobertura](#cobertura) · [Instalación](#instalación) · [Preguntas frecuentes](#preguntas-frecuentes)

</div>

---

Findable es una skill para Claude Code enfocada en SEO, GEO (generative engine optimization) y `llms.txt`. Apúntala a un proyecto y busca en la web lo que necesita ajustes, aplica los cambios seguros y deja el resto en cola para que lo revises.

## Qué hace

En cada ciclo: busca en GitHub, Google, foros y documentación las buenas prácticas actuales de SEO, GEO y llms.txt. Lee tu proyecto para entender el stack. Aplica lo que puede y documenta lo que no.

**Los cambios seguros se aplican de inmediato:** `robots.txt`, `sitemap.xml` y `llms.txt` (se crean solo cuando todavía no existen), meta tags, bloques JSON-LD, enlaces canónicos, texto alternativo faltante.

**Los cambios sensibles van a `TODO SEO.md`** con la URL de la fuente, el archivo exacto que se tocaría y el motivo. Tú decides cuándo aplicarlos.

La skill se detiene cuando se lo pides, cuando ya no queda nada por hacer o cuando se acaba el contexto. Si el contexto se llena a mitad de un ciclo, actualiza `TODO SEO.md` para que una sesión nueva retome desde ahí.

## Inicio rápido

```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

Luego dile a Claude: "Ejecuta la skill Findable en este proyecto."

## Ejemplo

Un cambio sensible llega a `TODO SEO.md` con este formato:

```markdown
### Redirect www to the apex domain
- **Source:** https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- **What:** Add a 301 redirect from `www.example.com` to `example.com`.
- **Where:** `nginx.conf`, server block on line 12.
- **Why:** Both hosts serve the same pages, so search engines split ranking signals between them.
- **Risk:** Confirm your TLS certificate covers both hosts before deploying.
- **Effort:** Low
```

Al terminar cada ciclo, la skill informa qué buscó, qué encontró (con URLs), qué aplicó, qué dejó en cola y qué cubrirá el siguiente ciclo.

---

## Cobertura

- **SEO:** sitemaps, robots.txt, datos estructurados, Core Web Vitals, URLs canónicas
- **GEO:** cómo los LLM descubren y recomiendan tu contenido (Generative Engine Optimization)
- **llms.txt:** archivos de contexto legibles por IA que siguen el estándar [llmstxt.org](https://llmstxt.org)
- **Rich results:** Open Graph, Twitter Cards, JSON-LD, schema.org

## Funciona mejor con last30days

Findable depende de [last30days](https://github.com/mvanhorn/last30days-skill) para el ángulo de comunidad y opinión de la investigación: lo que la gente dice de verdad en Reddit, Hacker News, X, etc. La búsqueda web común no llega a eso. Al instalar findable como plugin, se instala automáticamente. Sin él, findable sigue funcionando, pero salta directo a la búsqueda web en esa parte.

## Instalación

**Como plugin (disponible en todas las sesiones):**
```
/plugin marketplace add obrenoalvim/findable
/plugin install findable@findable
```

Luego invócalo: "Ejecuta la skill Findable en este proyecto."

**Sin instalar:**
> "Lee https://github.com/obrenoalvim/findable y sigue la skill Findable."

**Copia el archivo de la skill:**
Copia `skills/findable/SKILL.md` a tu directorio de skills e invócalo desde tu sistema de skills.

## Funciona con

Sitios estáticos, Next.js, Nuxt, SvelteKit, Remix, Rails, Django, Laravel, Express, Docusaurus, VitePress, o cualquier proyecto con presencia en la web.

---

## Preguntas frecuentes

**¿Findable modifica mis archivos sin preguntar?**
Solo con cambios aditivos: archivos que todavía no existen, meta tags nuevas, bloques JSON-LD, enlaces canónicos y texto alternativo faltante. Todo lo que edite la estructura existente, las rutas, la navegación o la configuración del servidor queda en `TODO SEO.md` hasta que lo apliques.

**¿Necesita una clave de API?**
No. Findable usa la búsqueda web de Claude Code y, si están instaladas, las skills `last30days` y `web`.

**¿Sirve solo para sitios web?**
Sirve para proyectos con presencia en la web, desde sitios estáticos hasta apps Rails, Django y Next.js. Consulta [Funciona con](#funciona-con).

## Más skills para Claude Code del mismo autor

- [**zero-drift**](https://github.com/obrenoalvim/zero-drift): mantiene ancladas las sesiones largas con respuestas con nombre y un `TASK.md` vivo.
- [**keep-improving**](https://github.com/obrenoalvim/keep-improving): un bucle autónomo de mejora con un panel de revisión de diez roles.
- [**unblock**](https://github.com/obrenoalvim/unblock): una cadena gratuita de 13 herramientas para investigación web que sigue intentando.
- [**no-watermark**](https://github.com/obrenoalvim/no-watermark): detecta y elimina marcas de agua Unicode invisibles en el texto.

## Contribuir

¿Encontraste un hueco en el alcance de la investigación o un tipo de cambio que la clasificación resuelve mal? Abre un issue o un PR. Consulta el [CONTRIBUTING.md](CONTRIBUTING.md) y el [changelog](CHANGELOG.md).

## Licencia

[MIT](LICENSE)

---

<div align="center">

Si Findable ayuda a tu proyecto a aparecer en las búsquedas y en las respuestas de IA, una ⭐ ayuda a que otras personas lo encuentren también.

<sub>**Temas:** seo · geo · llms-txt · ai-visibility · claude-code · claude-skill · claude-code-plugin · generative-engine-optimization · technical-seo · json-ld · structured-data</sub>

</div>
