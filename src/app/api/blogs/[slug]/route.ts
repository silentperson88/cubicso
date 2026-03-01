import { NextResponse } from "next/server";
import { fetchBlogBySlug } from "@/lib/blogApi";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function GET(_: Request, { params }: Params) {
  try {
    const { slug } = await params;
    const blog = await fetchBlogBySlug(slug);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
