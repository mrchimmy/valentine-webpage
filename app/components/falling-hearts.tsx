"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ITEM_COUNT = 20; // จำนวนไอเท็มที่ตก (รวมทั้งหัวใจและช็อกโกแลต)
const ITEMS = ["❤️", "🍫"]; // ไอเท็มที่ตกลงมา (หัวใจ และ ช็อกโกแลต)

export default function FallingItems() {
  const [fallingItems, setFallingItems] = useState<{ id: number; left: string; delay: number; symbol: string }[]>([]);

  useEffect(() => {
    const newItems = Array.from({ length: ITEM_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`, // ตำแหน่งแบบสุ่ม
      delay: Math.random() * 5, // ดีเลย์การเริ่มต้น
      symbol: ITEMS[Math.floor(Math.random() * ITEMS.length)], // สุ่มเลือกหัวใจหรือช็อกโกแลต
    }));
    setFallingItems(newItems);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {fallingItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{ y: "100vh", opacity: 1 }}
          transition={{
            duration: Math.random() * 3 + 4, // เวลาที่ตก (4-7 วินาที)
            delay: item.delay,
            repeat: Infinity,
          }}
          className="absolute text-white text-2xl"
          style={{ left: item.left }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
}
