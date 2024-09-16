import { unstable_flag as flag } from "@vercel/flags/next";

export const showSummerSale = flag({
  key: "summer-sale",
  decide: () => false,
});

export const showBanner = flag({
  key: "banner",
  decide: () => false,
});

export const marketingFlags = [showSummerSale, showBanner] as const;
