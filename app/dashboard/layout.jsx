import PanelLinks from "../components/PanelLinks";

export default function DashboardLayout({ children }) {
	return (
		<div className="h-screen flex">
			{/* LEFT */}
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
				<p className="flex items-center justify-center lg:justify-start gap-2">
					<span className="hidden text-2xl lg:block font-bold">Panel</span>
				</p>
				<PanelLinks />
			</div>
			{/* RIGHT */}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
				{children}
			</div>
		</div>
	);
}
