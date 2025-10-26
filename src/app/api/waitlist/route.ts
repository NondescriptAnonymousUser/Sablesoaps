import { NextResponse } from "next/server"; import { z } from "zod"; import { prisma } from "@/lib/prisma";
const schema = z.object({ email: z.string().email(), name: z.string().max(120).optional(), source: z.string().max(120).optional() });
export async function POST(req: Request) {
  try {
    const body = await req.json(); const parsed = schema.parse(body);
    const created = await prisma.waitlistSignup.create({ data: { email: parsed.email.toLowerCase(), name: parsed.name, source: parsed.source } });
    return NextResponse.json({ ok: true, id: created.id });
  } catch (e: any) {
    if (e.code === "P2002") return NextResponse.json({ error: "Already on the list." }, { status: 409 });
    return NextResponse.json({ error: "Invalid data." }, { status: 400 });
  }
}
