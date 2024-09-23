import type { ReactNode } from "react";
// import { unstable_generatePermutations as generatePermutations } from "@vercel/flags/next";
// import { marketingFlags } from "../flags";
// export async function generateStaticParams() {
//   const codes = await generatePermutations(marketingFlags);
//   return codes.map((code) => ({ code }));
// }
export const experimental_ppr = true;
export default function Component({ children }: { children: ReactNode }) {
  return children;
}
