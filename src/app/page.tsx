"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
      <Button title="Click me" variant="primary" onClick={() => alert("Hello!")} />
      <p className="mt-4 text-lg">Welcome to your Next.js application.</p>
    </div>
  )
}
