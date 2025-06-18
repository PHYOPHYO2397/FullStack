import { Link } from "react-router";

function Home() {
  return (
    <section className="flex grow items-center justify-center">
      <div className="container mx-auto text-center md:text-left">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          Welcome to Our Fashion Shop
        </h1>
        <p className="mb-8 text-lg text-gray-700 md:text-xl">
          This is simple landing page built with React,Typescript and Tailwind
          CSS
        </p>
        <Link
          to={"/shop"}
          className="rounded-4xl bg-sky-500 px-6 py-3 text-white shadow hover:bg-sky-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Home;
