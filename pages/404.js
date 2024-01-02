import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex h-screen">
      <div className=" not-found m-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          These are{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            uncharted waters
          </span>
        </h1>

        <h2 className="text-2xl font-bold dark:text-white">
          Sorry, that page can&apos;t be found
        </h2>
        <h3 className=" text-2xl font-bold dark:text-white">
          Go back to the{" "}
          <Link href="/" aria-label="Home">
            {" "}
            Homepage
          </Link>
        </h3>
      </div>
    </div>
  );
}
