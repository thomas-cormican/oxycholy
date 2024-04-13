import { NextResponse } from "next/server";
import mailer from "@/utils/mailer";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();
  console.log(name, email, phone, message);
  try {
    const response = await mailer({ name, email, phone, message });
    return NextResponse.json({ message: "Hello from API!" });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
