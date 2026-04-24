import { NextRequest, NextResponse } from "next/server";
import { students } from "../../users/route";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ studentId: string }> },
) {
  try {
    const { studentId } = await params;

    const existingUser = students?.find((std) => std?.id === Number(studentId));

    //Validation
    if (!existingUser) {
      return NextResponse.json(
        {
          status: "fail",
          data: {
            error: "User is not in our records",
          },
        },
        { status: 404 },
      );
    }

    const { name, subject, email, score } = await request.json();
    const requiredFields = name && subject && email && score;

    //Validation
    if (!requiredFields) {
      return NextResponse.json(
        {
          status: "fail",
          data: {
            error: "All fields are required",
          },
        },
        { status: 400 },
      );
    }

    //Validation
    if (!existingUser) {
      return NextResponse.json(
        {
          status: "fail",
          data: {
            error: "User is not in our records",
          },
        },
        { status: 404 },
      );
    }

    existingUser.name = name;
    existingUser.email = email;
    existingUser.subject = subject;
    existingUser.score = Number(score);

    return NextResponse.json(
      {
        data: {
          user: existingUser,
          message: "Student record updated successfully",
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "fail",
        data: {
          error: "Somthing went wrong",
          errorStackTrace: error,
        },
      },
      { status: 500 },
    );
  }
}
