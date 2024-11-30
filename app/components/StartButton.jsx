import Link from "next/link";

export default function StartButton() {
	return (
		<div>
			<Link href="/dashboard" className="h-20 rounded-md p-4 ring-1">
				Lets Get Started!
			</Link>
		</div>
	);
}
