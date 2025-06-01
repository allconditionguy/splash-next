import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/darkmode";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
    <div className="flex justify-center mt-80">
      <Button>Click me</Button>
      <ModeToggle/>
    </div>
   </div>
  )
}
