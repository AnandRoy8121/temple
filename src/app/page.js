import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import About from "@/components/About";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main>
      <Slider />
      <div className="scrolling-text mt-4 text-xl text-[#f15c1d] font-semibold">
        <span>Next Event is at 22nd February 2024 </span>
      </div>
      <About />
      <Location />
    </main>
  );
}
