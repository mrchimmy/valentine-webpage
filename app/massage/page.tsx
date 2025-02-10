'use client'

import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Massage() {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !author) return;

    if (message.length > 500) {
      return Swal.fire({ icon: 'error', title: 'เฮ้! คุณพิมพ์เยอะไปแล้วนะ'});
    }

    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, author }),
    });
    const json = await res.json();
    if (!res.ok) {
      return Swal.fire({ icon: 'error', title: 'ไม่สามารถส่งข้อความได้', text: json.error});
    }
    Swal.fire({ icon: 'success', title: 'เราได้บันทึกข้อความของคุณใว้แล้ว', timer: 2000, showConfirmButton: false});
    setMessage("");
  };
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center gap-8 max-sm:p-4 max-sm:mb-6">
      <div className="text-center">
        <h1 className="text-4xl ">สุขสันต์วันวาเลนไทน์</h1>
        <h3 className="text-xl">วันวาเลนไทน์ไม่ใช่แค่วันแห่งความรักต่อคู่รัก แต่ยังเป็นวันแห่งความรักต่อเพื่อนมนุษย์ทุกคน
          <br />ดังนั้นเรามาให้กำลังใจเป็นของขวัญแก่ทุกๆคนในวันวาเลนไทน์
          <br />เพื่อสร้างขวัญและกำลังใจให้แกคนโสดอย่างผม
        </h3>
        <p>(สามารถพิมพ์ข้อความให้กำลังใจแบบไหนก็ได้ และขอความเห็นใจกรุณาพิมพ์ข้อความด้วยถ้อยคำสุภาพ)</p>
      </div>
      <div className="bg-white/20 backdrop-blur-4xl border-2 border-white/60 p-6 rounded-2xl max-sm:w-[90cqw]">
        <div className="flex flex-col mb-3">
          <label htmlFor="nickname" className="text-lg">ชื่อเล่น (ไม่จำเป็นต้องกรอก)</label>
          <input type="text" id="nickname" className="_input" placeholder="กรอกชื่อเล่น (ไม่จำเป็นก็ได้)" value={author} onChange={e => setAuthor(e.target.value)} />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="nickname" className="text-lg">ข้อความ</label>
          <textarea id="nickname" className="_input" placeholder="กรอกข้อความ พลังบวก" cols={30} rows={4} onChange={e => setMessage(e.target.value)} value={message}></textarea>
        </div>
        <div className="mb-2">
          <button onClick={handleSubmit} className="bg-valentine w-full py-2 rounded-md hover:shadow-md duration-200 active:bg-valentine/60">บันทึกข้อความ</button>
        </div>
        <div>
          <Link href={'/'} className="block text-center border-2 border-solid border-valentine w-full py-2 rounded-md hover:shadow-md duration-200 active:bg-valentine/60">ดูข้อความ</Link>
        </div>
      </div>
    </div>
  );
}
