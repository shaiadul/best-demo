import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto md:px-6">
      <section className="mt-2">
        <div className="rounded-md relative overflow-hidden bg-cover bg-no-repeat bg-[100%] bg-[url('https://i.ibb.co/dD7dgc4/1920x600.jpg')] h-[400px]"></div>
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center">
            <div className="mt-[-170px] block rounded-lg bg-[hsla(0,0%,100%,0.55)] bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
              <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer on the market <br />
                <span className="text-danger dark:text-danger-400">
                  for your business
                </span>
              </h1>
              <Link
                className="mb-2 inline-block rounded bg-danger px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white bg-[#f36523] hover:bg-opacity-80 duration-500 md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/dashboard"
                role="button"
              >
                Go To Dashboard
              </Link>
              <a
                className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:text-danger-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

