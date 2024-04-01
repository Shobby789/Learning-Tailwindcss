import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full lg:px-14 flex pt-8 md:py-24">
        <div className="w-full md:w-2/4">
          <img
            src="https://images.unsplash.com/photo-1703532764413-3f83302b8e36?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10/12 md:h-96 rounded-full mx-0"
          />
        </div>
        <div className="w-full md:w-2/4 flex flex-col gap-6 justify-center items-start">
          <div className="bg-slate-300 w-auto px-3 py-2 rounded-md">
            <span className="font-bold text-lime-800 text-sm">
              Why Monline.
            </span>
          </div>
          <h2 className="text-5xl font-semibold">
            Make Payment But Without The Hassle
          </h2>
          <p className="font-medium text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            illo officia praesentium at labore amet. Perspiciatis illo, nam
            eveniet nobis obcaecati adipisci eum rerum placeat assumenda
            officiis? Suscipit, tenetur tempora!
          </p>
        </div>
      </div>
      <div className="w-full py-8 md:py-14 flex justify-center items-center gap-6 lg:px-16">
        <div className="rounded-3xl h-56 w-1/3 flex flex-col justify-center items-start gap-3 px-5 border-2">
          <div className="w-14 h-14 rounded-full flex justify-center items-center p-4 bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-xl">End Late Payments</h3>
          <p className="text-slate-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            facere quibusdam mollitia quisquam voluptatem odit?
          </p>
        </div>
        <div className="rounded-3xl h-56 w-1/3 flex flex-col justify-center items-start gap-3 px-5 border-2">
          <div className="w-14 h-14 rounded-full flex justify-center items-center p-4 bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-xl">Admin Automation</h3>
          <p className="text-slate-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            facere quibusdam mollitia quisquam voluptatem odit?
          </p>
        </div>
        <div className="rounded-3xl h-56 w-1/3 flex flex-col justify-center items-start gap-3 px-5 border-2">
          <div className="w-14 h-14 rounded-full flex justify-center items-center p-4 bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-xl">Forget Expensive Fees</h3>
          <p className="text-slate-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            facere quibusdam mollitia quisquam voluptatem odit?
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
