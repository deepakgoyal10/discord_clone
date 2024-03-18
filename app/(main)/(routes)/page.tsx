import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const state = true;
  return (
    <div className="flex flex-col">
      <p>This is protected route</p>
    </div>
  );
}
