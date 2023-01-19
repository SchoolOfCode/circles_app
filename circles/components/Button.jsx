export default function Button({ buttonText, handleClick }) {
  return (
    <button
      className="w-64 inline-flex items-center justify-center drop-shadow-xl rounded-md border border-transparent transition ease-in-out delay-150 bg-[#FFD862] hover:-translate-y-1 hover:scale-110 hover:bg-[#80BEAF] duration-300 bg-[#FFD862] px-4 py-2 text-base font-light text-black shadow-sm hover:bg-[#80BEAF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}
