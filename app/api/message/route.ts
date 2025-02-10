import { NextResponse } from "next/server";
import { getMessages, addMessage } from "@/lib/messages";
import { revalidateTag } from "next/cache";

export async function GET() {
  const messages = await getMessages();
  return NextResponse.json(messages);
}

export async function POST(req: Request) {
  const { message, author } = await req.json();
  if (!message || !author) {
    return NextResponse.json({ error: "Missing text or author" }, { status: 400 });
  }
  if (message.length > 500) {
    
    return NextResponse.json({ error: "เฮ้! คุณพิมพ์เยอะไปแล้วนะ" }, { status: 400 });
  }

  const newMessage = await addMessage(message, author);

  // รีเฟรชแคช API
  revalidateTag("messages");

  return NextResponse.json(newMessage);
}
