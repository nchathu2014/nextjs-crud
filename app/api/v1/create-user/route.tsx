import { NextRequest, NextResponse } from "next/server";
import { students } from "../users/route";

export async function POST(request: NextRequest) {
  const {
    name = "",
    email = "",
    subject = "",
    score = "",
  } = await request.json();

  try {
    const areAllFieldsAvailable =
      name.trim() && email.trim() && subject.trim() && score.trim();

    if (!areAllFieldsAvailable) {
      return NextResponse.json(
        {
          status: "fail",
          data: {
            error: "Name, Email, Subject and Score are Mandatory Fields",
          },
        },
        { status: 400 },
      );
    }

    const isUserExist = students?.find((student) => student?.email === email);
    if (isUserExist) {
      return NextResponse.json(
        {
          status: "fail",
          data: {
            error: "This student is already exists",
          },
        },
        { status: 400 },
      );
    }

    //create user

    const newStudent = {
      id: Number(students?.length) + 1,
      name,
      subject,
      email,
      score,
    };

    students?.push(newStudent);
    return NextResponse.json(
      {
        status: "success",
        data: {
          students,
          message: "New user created successfully",
          total: students?.length,
        },
      },
      { status: 201 },
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
