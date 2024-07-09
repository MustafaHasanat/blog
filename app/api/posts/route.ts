import { supabase } from "@/supabase/utils/client";
import { type NextRequest } from "next/server";

// get all posts
export async function GET() {
    try {
        const { data, error } = await supabase.from("post").select("*");

        return Response.json({ data, error });
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}

// create a new post
export async function POST(request: NextRequest) {
    try {
        const { error } = await supabase.from("post").insert({
            title: "Denmark",
            content: "gggggggggg",
        });
        return Response.json({
            message: error?.message,
            // message: `Post '${error}' has been created!`,
        });
    } catch (error) {
        return Response.json({ message: `Server error: ${error}` });
    }
}
