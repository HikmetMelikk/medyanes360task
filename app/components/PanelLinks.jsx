import Link from "next/link";

const PanelLinks = [
	{
		title: "Products",
		link: "/dashboard",
	},
	{
		title: "Create Products",
		link: "/dashboard/create-product",
	},
];

export default function PanelNav() {
	return (
		<div>
			{PanelLinks.map((link) => (
				<Link key={link.title} href={link.link}>
					<div className="flex items-start justify-center mt-5 p-2 lg:justify-start hover:text-gray-500 cursor-pointer">
						<p className="hidden lg:block font-bold">{link.title}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
