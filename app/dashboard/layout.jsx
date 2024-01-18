import SideBar from "@/components/header/sidebar";

export const metadata = {
  title: "Flowbite Admin | Dashboard",
  description: "Admin Dashboard Template built with Tailwind CSS",
};

export default function Layout({ children }) {
  return (
    <div>
      <div className="container mx-auto flex ">
        <SideBar />
        <div className="mx-5 w-full">{children}</div>
      </div>
    </div>
  );
}
