import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((r) => setTimeout(r, 5000));
  return NextResponse.json({ name: "Jason" });
}
