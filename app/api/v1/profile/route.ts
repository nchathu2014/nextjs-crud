import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  // Read Request Headers
  // option1
  // const headerList = await headers();
  // const authorization = headerList.get("Authorization");

  //option2
  const authorization = request.headers.get("Authorization");

  console.log("Auth Header", authorization);

  const response = NextResponse.json({
    status: "success",
    data: {
      message: "Hello from Profile",
    },
  });

  // Set Response Headers
  response.headers.set("X-CUSTOM-STUDENT", "Nuwan T");
  response.headers.set("X-POWERED-BY", "NextJS-15");

  return response;
}
