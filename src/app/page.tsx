import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MusicTestimonialCard } from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import { OurExpert } from "@/components/OurExpert";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonialCard />
      <UpcomingWebinar />
      <OurExpert />
    </main>
  );
}
