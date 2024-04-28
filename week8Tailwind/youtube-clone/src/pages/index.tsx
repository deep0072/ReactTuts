import Image from "next/image";
import { Inter } from "next/font/google";
import YoutubeCard from "@/components/pages/YoutubeCard";
import VideoGrid from "@/components/pages/VideoGrid";
import AppBar from "@/components/pages/AppBar";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <div>
      <AppBar />
      <VideoGrid />
    </div>
  );
}
