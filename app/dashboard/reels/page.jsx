import From from "@/components/dashboard/from";
import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export default function Reels() {
  return (
    <div className="">
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {" "}
          <Link href="/dashboard">Dashboard</Link>{" "}
        </Breadcrumb.Item>
        <Breadcrumb.Item>Reels</Breadcrumb.Item>
      </Breadcrumb>

      <section className="container mx-auto">
        <From />
      </section>
    </div>
  );
}
