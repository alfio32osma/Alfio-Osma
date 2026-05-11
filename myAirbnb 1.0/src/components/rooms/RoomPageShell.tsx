import type { ReactNode } from "react";
import TopNavbar from "@/components/layout/TopNavbar";

interface RoomPageShellProps {
  children: ReactNode;
}

const RoomPageShell = ({ children }: RoomPageShellProps) => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <TopNavbar />
      {children}
    </main>
  );
};

export default RoomPageShell;
