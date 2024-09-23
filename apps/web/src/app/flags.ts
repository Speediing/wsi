import { unstable_flag as flag } from "@vercel/flags/next";
import { get } from "@vercel/edge-config";

export const showSummerSale = flag({
  key: "summer-sale",
  async decide() {
    const value = await get("summer-sale");
    return value ?? false;
  },
});

export const showBanner = flag({
  key: "banner",
  async decide() {
    const value = await get("banner");
    return value ?? false;
  },
});

export const marketingFlags = [showSummerSale, showBanner] as const;
