import { NextRequest, NextResponse } from "next/server";
import { students } from "../../users/route";
import { Student } from "@/app/page";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const studentId = parseInt(id);

    const existingStudentIndex = students?.findIndex(
      (student) => student.id === studentId,
    );
    if (existingStudentIndex === -1) {
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

    const updatedStudentsData = students?.splice(existingStudentIndex, 1);

    return NextResponse.json(
      {
        status: "success",
        data: {
          students: updatedStudentsData,
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
