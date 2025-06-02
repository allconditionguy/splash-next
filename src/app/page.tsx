import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/darkmode";
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
    <div className="flex justify-center mt-80">
      <Button>Click me</Button>
      <ModeToggle/>
      <Textarea />
    </div>
   </div>
  )
}
