import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  try {
    // Revalidate the "featured" tag
    revalidateTag("featured");
    revalidatePath("/[code]", "layout");

    // Return a JSON response indicating success
    return NextResponse.json(
      { revalidated: true, now: Date.now() },
      { status: 200 }
    );
  } catch (error) {
    // If an error occurs, return an error response
    return NextResponse.json(
      { revalidated: false, message: "Error revalidating", now: Date.now() },
      { status: 500 }
    );
  }
}
