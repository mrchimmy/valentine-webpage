import { PrismaClient } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

const prisma = new PrismaClient();

// ใช้ unstable_cache() เพื่อแคชผลลัพธ์
export const getMessages = unstable_cache(async () => {
  return await prisma.message.findMany({ orderBy: { createdAt: "desc" } });
}, ["messages"], { revalidate: 300 }); // รีเฟรชทุก 5 นาที

// เพิ่มข้อความใหม่ และเคลียร์แคช
export async function addMessage(message: string, author: string) {
  const newMessage = await prisma.message.create({
    data: { message, author: author ? author : "" },
  });

  // รีเซ็ตแคช
  revalidateTag("messages");

  return newMessage;
}
