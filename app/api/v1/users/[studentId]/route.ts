import { NextRequest, NextResponse } from "next/server";
import { students } from "../route";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ studentId: string }> },
) {
  try {
    const { studentId } = await params;
    const existingUser = students?.find(
      (student) => student?.id === Number(studentId),
    );

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
    return NextResponse.json({
      status: "success",
      data: {
        user: existingUser,
      },
    });
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
