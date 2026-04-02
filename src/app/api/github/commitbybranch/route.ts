import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const selectSha = request.nextUrl.searchParams.get("sha");
    
    if (!selectSha) {
        return NextResponse.json({ error: "Missing 'sha' query parameter" }, { status: 400 });
    }
    
    const response = await fetch(
        `https://api.github.com/repos/VerCeel/git-soutenance/commits?sha=${selectSha}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        },
    );
    const data = await response.json();
    return NextResponse.json(data);
}