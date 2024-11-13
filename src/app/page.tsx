"use client";
import Education from "@/Component/Education/Education";
import Header from "@/Component/Header/Header";
import Profile from "@/Component/Profile/Profile";

export default function Home() {
  return (
    <div className="bg-slate-700">
      <Header />
      <div className="mt-5">
        <Profile />
      </div>
      <div className="mt-5">
        <Education />
      </div>
    </div>
  );
}
