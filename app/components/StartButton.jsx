import Link from "next/link";

export default function StartButton() {
	return (
		<Link
			href="/dashboard"
			className="
        inline-block
        px-8 
        py-4
        text-xl
        font-bold
        text-white
        bg-gradient-to-r 
        from-indigo-500 
        to-purple-600
        rounded-lg
        shadow-lg
        transform
        transition-all
        duration-300
        ease-in-out
        hover:scale-105
        hover:shadow-xl
        hover:from-indigo-600
        hover:to-purple-700
        focus:outline-none
        focus:ring-2
        focus:ring-purple-500
        focus:ring-opacity-50
      ">
			Lets Get Started!
		</Link>
	);
}
