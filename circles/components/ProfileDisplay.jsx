export default function ProfileDisplay() {
  return (
    <div className="flex flex-1 flex-col p-8 mt-[15vh] dark:bg-gray-700 bg-blue-50 min-w-96 min-h-[90vh] rounded-lg min-w-fit w-fit">
      <img
        className="inline-block h-[120px] w-[120px] rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <h1>Sadako Takashi</h1>
      <h3>Your Circles</h3>
      <br></br>
      <button className="w-64 inline-flex items-center drop-shadow-xl rounded-md border border-transparent transition ease-in-out delay-150 bg-[#FFD862] hover:-translate-y-1 hover:scale-110 hover:bg-[#80BEAF] duration-300 bg-[#FFD862] px-4 py-2 text-base font-light text-black shadow-sm hover:bg-[#80BEAF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Book Club{" "}
      </button>
      <br></br>
      <button className="w-64 inline-flex items-center drop-shadow-xl rounded-md border border-transparent transition ease-in-out delay-150 bg-[#FFD862] hover:-translate-y-1 hover:scale-110 hover:bg-[#80BEAF] duration-300 bg-[#FFD862] px-4 py-2 text-base font-light text-black shadow-sm hover:bg-[#80BEAF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Mindfulness yoga{" "}
      </button>
      <br></br>
      <button className="w-64 inline-flex items-center drop-shadow-xl rounded-md border border-transparent transition ease-in-out delay-150 bg-[#FFD862] hover:-translate-y-1 hover:scale-110 hover:bg-[#80BEAF] duration-300 bg-[#FFD862] px-4 py-2 text-base font-light text-black shadow-sm hover:bg-[#80BEAF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Singing for the soul{" "}
      </button>
      <br></br>
      <button className="w-64 inline-flex items-center drop-shadow-xl rounded-md border border-transparent transition ease-in-out delay-150 bg-[#FFD862] hover:-translate-y-1 hover:scale-110 hover:bg-[#80BEAF] duration-300 bg-[#FFD862] px-4 py-2 text-base font-light text-black shadow-sm hover:bg-[#80BEAF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Gardening club{" "}
      </button>
      <br></br>
    </div>
  );
}
