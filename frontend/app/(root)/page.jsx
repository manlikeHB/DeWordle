"use client";
import { useState, useEffect } from "react";
import { HeroSlider } from "@/components/HeroSlider";
import MostPlayed from "@/components/MostPlayed";
import PlayOurGame from "@/components/playourgame";
import TrendingGames from "@/components/TrendingGames";
import WhatsNew from "@/components/WhatsNew";
import { LandingPageSkeletonLoader } from "@/components/ui/LandingPageSkeletonLoader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LandingPageSkeletonLoader />;
  }

  return (
    <div className="bg-[#ffffff]">
      <HeroSlider />
      <PlayOurGame />
      <TrendingGames />
      <WhatsNew />
      <MostPlayed />
    </div>
  );
}
