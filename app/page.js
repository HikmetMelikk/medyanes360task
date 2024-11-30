import HomeBanner from "./components/HomeBanner";
import StartButton from "./components/StartButton";

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<HomeBanner />
			<StartButton />
		</div>
	);
}
