import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        <Header />
      </div>
    </main>
  );
}
