import { Student } from "@/app/page";
import { NextRequest, NextResponse } from "next/server";

export const students: Student[] = [
  {
    id: 1,
    name: "Alice Johnson",
    subject: "Mathematics",
    email: "alice.johnson@email.com",
    score: 92,
  },
  {
    id: 2,
    name: "Bob Smith",
    subject: "Physics",
    email: "bob.smith@email.com",
    score: 85,
  },
  {
    id: 3,
    name: "Carol White",
    subject: "Chemistry",
    email: "carol.white@email.com",
    score: 78,
  },
  {
    id: 4,
    name: "David Brown",
    subject: "Biology",
    email: "david.brown@email.com",
    score: 88,
  },
  {
    id: 5,
    name: "Emma Davis",
    subject: "History",
    email: "emma.davis@email.com",
    score: 95,
  },
  {
    id: 6,
    name: "Frank Miller",
    subject: "Geography",
    email: "frank.miller@email.com",
    score: 72,
  },
];

//JSend response format
/**
 *
 * {
 *   status:'success | failed',
 *   data:{...}
 * }
 *
 */

export async function GET(request: NextRequest) {
  try {
    //throw new Error("Cus Error By Me");//Testing purpose

    //Reading query params
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "3"); //limit = Page Size

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedStudents = students?.slice(startIndex, endIndex);
    const totalPages = students?.length / limit;

    return NextResponse.json(
      {
        status: "success",
        data: {
          students: paginatedStudents,
          total: students?.length,
          pagination: {
            totalStudents: students?.length,
            totalPages,
            currentPage: page,
            limit,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
          },
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        data: {
          error,
        },
      },
      { status: 500 },
    );
  }
}
