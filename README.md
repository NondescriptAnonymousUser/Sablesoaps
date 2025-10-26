# Soap Site with Evidence (Next.js + Tailwind + Prisma/SQLite)

A minimalist landing site with two forms (consumer waitlist, manufacturer interest) **plus an Evidence page**
that summarizes peer‑reviewed and official sources with plain‑English takeaways.

## Tech
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Prisma ORM with SQLite (dev)
- Zod validation

## Run locally
```bash
npm i   # or pnpm i / yarn
cp .env.example .env
npm run db:push
npm run dev
# open http://localhost:3000
```

## Deploy
Use Vercel. For production, switch `DATABASE_URL` to Postgres and run `npm run db:push`.

## Edit the Evidence
- Update `src/data/studies.ts` to add/remove papers and summaries.
- Keep summaries short and link to PubMed/PMC/journal pages.
