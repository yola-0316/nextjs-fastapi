"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [audio, setAudio] = useState<File>();

  useEffect(() => {
    (async () => {
      if (audio) {
        const formData = new FormData();
        formData.append("audio", audio);
        const response = await fetch("/api/audio", {
          method: "POST",
          body: formData,
        });

        const { text } = await response.json();
        console.log("response", text);
      }
    })();
  }, [audio]);

  return (
    <main className="flex min-h-screen flex justify-between p-24">
      <div className="w-full items-start flex-col font-mono text-sm lg:flex">
        <p className="flex w-auto justify-center rounded-md border border-gray-300 bg-gradient-to-b from-zinc-200 px-6 py-4 my-2 backdrop-blur-2xl">
          <Link href="/api/python">
            <code className="font-mono font-bold">api/python</code>
          </Link>
        </p>
        <p className="flex w-auto justify-center rounded-md border border-gray-300 bg-gradient-to-b from-zinc-200 px-6 py-4 my-2 backdrop-blur-2xl">
          <Link href="/api/audio">
            <code className="font-mono font-bold">api/audio</code>
          </Link>
        </p>
      </div>

      <div className="w-full">
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => {
            console.log(e.target.files?.[0]);
            setAudio(e.target.files?.[0]);
          }}
        />
      </div>
    </main>
  );
}
