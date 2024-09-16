import { type NextRequest, NextResponse } from "next/server";
import { unstable_precompute as precompute } from "@vercel/flags/next";
import { marketingFlags } from "./flags";

// Note that we're running this middleware for / only, but
// you could extend it to further pages you're experimenting on
// export const config = { matcher: ["/"] };

export async function middleware(request: NextRequest) {
  console.log("LLLLL");
  // precompute returns a string encoding each flag's returned value
  const code = await precompute(marketingFlags);

  // rewrites the request to include the precomputed code for this flag combination
  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url
  );

  console.log(nextUrl);
  return NextResponse.rewrite(nextUrl, { request });
}
