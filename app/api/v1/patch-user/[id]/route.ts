import { NextRequest, NextResponse } from "next/server";
import { students } from "../../users/route";
import { Student } from "@/app/page";

export async function PATCH(
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

    const { name, subject, email, score }: Student = await request.json();
    students[existingStudentIndex] = {
      ...students[existingStudentIndex],
      name: name || students[existingStudentIndex]?.name,
      subject: subject || students[existingStudentIndex]?.subject,
      email: email || students[existingStudentIndex]?.email,
      score,
    };

    return NextResponse.json(
      {
        status: "success",
        data: {
          user: students[existingStudentIndex],
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
