import { NextResponse } from "next/server"; import { z } from "zod"; import { prisma } from "@/lib/prisma";
const schema = z.object({
  name: z.string().min(2).max(120), email: z.string().email(), company: z.string().min(2).max(200),
  website: z.string().url().optional().or(z.literal("").transform(()=>undefined)), location: z.string().max(200).optional(),
  productTypes: z.string().max(200).optional(), capacityMonthly: z.number().int().positive().optional(),
  moqUnits: z.number().int().positive().optional(), leadTimeWeeks: z.number().int().positive().optional(), notes: z.string().max(2000).optional(),
});
export async function POST(req: Request) {
  try {
    const body = await req.json(); const parsed = schema.parse(body);
    const created = await prisma.partnerInquiry.create({ data: parsed });
    return NextResponse.json({ ok: true, id: created.id });
  } catch { return NextResponse.json({ error: "Invalid data." }, { status: 400 }); }
}
