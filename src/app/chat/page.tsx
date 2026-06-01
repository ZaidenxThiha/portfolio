import { Suspense } from "react";
import { ChatClient } from "@/components/chat/ChatClient";

export default function ChatPage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={null}>
        <ChatClient />
      </Suspense>
    </main>
  );
}
