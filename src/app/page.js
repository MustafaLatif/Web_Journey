import Link from "next/link";
import Project from "./projects/page";
import { redirect } from "next/navigation";
export default function Home() {

  redirect("/login");     
  return (
    <main className="text-center mt-20">
         
    </main>
  );
}
