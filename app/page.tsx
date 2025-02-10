"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  const items = [
    "ความรักไม่ใช่แค่คำพูด แต่คือการกระทำที่สม่ำเสมอ",
    "รักที่ดีที่สุดคือรักที่ทำให้คุณเป็นตัวเองได้อย่างเต็มที่",
    "หัวใจที่เต็มไปด้วยรัก จะไม่มีที่ว่างให้กับความกลัว",
    "รักคือการเดินทาง ไม่ใช่จุดหมายปลายทาง",
    "ความรักไม่ต้องสมบูรณ์แบบ แค่เป็นรักที่แท้จริงก็เพียงพอแล้ว",
    "รักตัวเองก่อน แล้วคุณจะรู้ว่าความรักที่แท้จริงคืออะไร",
    "การรักใครสักคน คือการให้โดยไม่หวังสิ่งตอบแทน",
    
  ];

  const handleRead = (message: string) => {
    setSelectedMessage(message);
  };

  useEffect(() => {
    if (selectedMessage) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'visible';
    }
  }, [selectedMessage]);

  return (
    <div className="grid grid-cols-5 p-4 gap-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-valentine/80 dark:bg-valentine/60 backdrop-blur-lg p-4 rounded-2xl cursor-pointer shadow-md hover:bg-valentine/50 duration-200"
          onClick={() => handleRead(item)}
        >
          <h3 className="text-lg">{item}</h3>
        </div>
      ))}

      {/* แสดงโมดัลเมื่อเลือกข้อความ */}
      <AnimatePresence>
        {selectedMessage && <ModalMassage message={selectedMessage} author="test" onClose={() => setSelectedMessage(null)} />}
      </AnimatePresence>
    </div>
  );
}

type PropsModal = {
  message: string;
  author: string;
  onClose: () => void;
};

function ModalMassage({ message, author, onClose }: PropsModal) {
  return (
    <motion.div className="fixed bg-black/40 w-full top-0 left-0 h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="bg-light-valentine dark:bg-light-valentine/80 backdrop-blur-lg p-6 rounded-xl shadow-lg max-w-md w-full text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white text-xl mb-4 py-2">{message}</p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <p className="text-white/90">เขียนโดย:</p>
            <h2 className="text-2xl" style={{ lineHeight: '18px' }}>{author.length > 0 ? author : 'เขียนโดยไม่ระบุ'}</h2>
          </div>
          <button onClick={onClose} className="px-8 py-2 bg-valentine text-white rounded-lg">ปิด</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
