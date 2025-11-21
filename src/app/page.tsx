import { Metadata } from "next";
import { Home } from "../components/home";
export const metadata: Metadata = {
  title: "Dairy Website | Home Page",
  description: "Dairy website built with Next.js",
};
export default function Page() {
  return <Home />;
}
