import { NextResponse } from "next/server";
import { createBlog, fetchBlogs } from "@/lib/blogApi";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limitParam = searchParams.get("limit");
    const offsetParam = searchParams.get("offset");
    const limit = limitParam ? Number(limitParam) : undefined;
    const offset = offsetParam ? Number(offsetParam) : undefined;
    const blogs = await fetchBlogs(
      Number.isNaN(limit) ? undefined : limit,
      Number.isNaN(offset) ? undefined : offset
    );
    return NextResponse.json({ blogs });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.title || !body?.description || !body?.coverImage) {
      return NextResponse.json(
        {
          message: "Required fields missing: title, description, coverImage",
        },
        { status: 400 }
      );
    }

    const blog = await createBlog({
      title: body.title,
      description: body.description,
      type: body.type,
      coverImage: body.coverImage,
      date: body.date,
    });

    return NextResponse.json({ blog }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Failed to create blog" },
      { status: 500 }
    );
  }
}
