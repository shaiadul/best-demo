import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export default function Dashboard() {

  return (
    <div className="">
      <div className="container mx-auto md:px-6">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-800 mb-3"
        >
          <Breadcrumb.Item href="#" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {" "}
            <Link href="/dashboard">Dashboard</Link>{" "}
          </Breadcrumb.Item>
        </Breadcrumb>
        <section className="mb-32">
          <h1 className="mb-4 text-3xl font-bold">
            An intriguing title for an interesting article
          </h1>

          <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="mr-2 h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Hot news
          </p>

          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            sapiente molestias consectetur. Fuga nulla officia error placeat
            veniam, officiis rerum laboriosam ullam molestiae magni velit
            laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Optio sapiente molestias
            consectetur. Fuga nulla officia error placeat veniam, officiis rerum
            laboriosam ullam molestiae magni velit laborum itaque minima
            doloribus eligendi!
          </p>

          <p className="mb-6">
            <strong>Optio sapiente molestias consectetur?</strong>
          </p>

          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            architecto ex ab aut tempora officia libero praesentium, sint id
            magnam eius natus unde blanditiis. Autem adipisci totam sit
            consequuntur eligendi.
          </p>

          <p className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
            <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Optio odit consequatur porro sequi ab distinctio
            modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
            illum saepe mollitia ut voluptatum.
          </p>

          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero repellat molestiae aperiam laborum aliquid atque magni
            nostrum, inventore perspiciatis possimus quia incidunt maiores
            molestias eaque nam commodi! Magnam, labore.
          </p>

          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/194.jpg"
            className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            temporibus nulla voluptatibus accusantium sapiente doloremque.
            Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
            nostrum in accusantium dolore veritatis eius est?
          </p>
        </section>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32">
            <div className="mb-16 flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-2xl font-bold">That is the news!</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                  Travels
                </div>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                  Published <u>14.01.2022</u> by
                  <a href="#!">Lisa McCartney</a>
                </p>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quae nulla saepe rerum aspernatur odio amet perferendis
                  tempora mollitia? Ratione unde magni omnis quaerat blanditiis
                  cumque dolore placeat rem dignissimos?
                </p>
              </div>
            </div>

            <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
                <h3 className="mb-4 text-2xl font-bold">Exhibition in Paris</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                  Art
                </div>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                  Published <u>12.01.2022</u> by
                  <a href="#!">Anna Doe</a>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                  porta dui, sit amet rutrum enim massa in ante. Curabitur in
                  justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                  eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                  ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                  faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                  Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                  Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                  tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                  aliquam lectus. Vestibulum mattis felis quis ex pharetra
                  luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                  ut.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-2xl font-bold">Stock market boom</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-yellow-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  Business
                </div>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                  Published <u>10.01.2022</u> by
                  <a href="#!">Joe Svan</a>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
                  tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
                  Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
                  augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                  lobortis risus. Nullam in commodo sapien. Curabitur ut erat
                  congue sem finibus eleifend egestas eu metus. Sed ut dolor id
                  magna rutrum ultrices ut eget libero. Duis vel porttitor odio.
                  Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi
                  euismod dignissim malesuada, lacus lorem commodo leo,
                  tristique blandit ante mi id metus. Integer et vehicula leo,
                  vitae interdum lectus. Praesent nulla purus, commodo at
                  euismod nec, blandit ultrices erat. Aliquam eros ipsum,
                  interdum et mattis vitae, faucibus vitae justo. Nulla
                  condimentum hendrerit leo, in feugiat ipsum condimentum ac.
                  Maecenas sed blandit dolor.
                </p>
              </div>
            </div>
          </section>
        </div>
        
      </div>
    </div>
  );
}
