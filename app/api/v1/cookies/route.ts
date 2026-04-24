import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  //Read cookies from Request header

  const theme = request.cookies.get("theme");
  const user = request.cookies.get("user");

  console.log(`Theme: ${theme} & User: ${user}`);

  const response = NextResponse.json({
    status: "success",
    data: {
      message: "Cookie Set!",
    },
  });

  //Set cookies to the Response header
  response.cookies.set("theme", "light");
  response.cookies.set("user", "Nuwan");

  return response;
}
