import { Link } from "react-router";

function Home() {
  return (
    <section className="flex grow items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          Welcome to our Fashion Shop
        </h1>
        <p className="mb-8 text-lg text-gray-700 md:text-xl">
          This is simple landing page built with React,Typescript and Tailwind
          CSS
        </p>
        <Link to={"/shop"}>Get Started</Link>
      </div>
    </section>
  );
}

export default Home;
