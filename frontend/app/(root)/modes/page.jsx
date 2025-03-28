// import PracticeMode from "@/components/practice-mode"
// import DailyChallenge from "@/components/daily-challenge"
import HowToPlay from "@/components/How-to-play";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-amber-100 p-4">
      <Tabs defaultValue="how-to-play" className="w-full max-w-3xl">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="how-to-play">How To Play</TabsTrigger>
          <TabsTrigger value="practice">Practice Mode</TabsTrigger>
          <TabsTrigger value="daily">Daily Challenge</TabsTrigger>
        </TabsList>
        <TabsContent value="how-to-play">
          <HowToPlay />
        </TabsContent>
      </Tabs>
    </main>
  );
}
