"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Message } from "@prisma/client";

export default function Home() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleRead = (message: Message) => {
    setSelectedMessage(message);
  };

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (selectedMessage) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'visible';
    }
  }, [selectedMessage]);

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-4 gap-6">
      <Link href="/massage"
        className="bg-valentine/40 dark:bg-valentine/60 backdrop-blur-lg p-4 rounded-2xl cursor-pointer shadow-md flex items-center justify-center hover:bg-valentine/50 duration-200"
      >
        <h3 className="text-lg">+ เพิ่มข้อความของคุณเอง</h3>
      </Link>
      {messages.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-valentine/80 dark:bg-valentine/60 backdrop-blur-lg p-4 rounded-2xl cursor-pointer shadow-md hover:bg-valentine/50 duration-200"
          onClick={() => handleRead(item)}
        >
          <h3 className="text-lg">{item.message}</h3>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedMessage && <ModalMassage message={selectedMessage} onClose={() => setSelectedMessage(null)} />}
      </AnimatePresence>
    </div>
  );
}

type PropsModal = {
  message: Message;
  onClose: () => void;
};

function ModalMassage({ message, onClose }: PropsModal) {
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
        <p className="text-white text-xl mb-4 py-2">{message.message}</p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <p className="text-white/90">เขียนโดย:</p>
            <h2 className="text-2xl" style={{ lineHeight: '18px' }}>{message.author.length > 0 ? message.author : 'เขียนโดยไม่ระบุ'}</h2>
          </div>
          <button onClick={onClose} className="px-8 py-2 bg-valentine text-white rounded-lg">ปิด</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
