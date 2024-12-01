import StartButton from "./StartButton";

export default function HomeBanner() {
	return (
		<section className="min-h-screen w-full bg-gradient-to-r from-blue-500 to-purple-600">
			<div className="container mx-auto px-4 py-16 h-screen flex flex-col items-center justify-center">
				<div className="max-w-3xl mx-auto text-center text-white space-y-8">
					<h1 className="text-5xl font-bold">Medyanes360 Taskı</h1>

					<p className="text-lg">
						Medyanes360 taskı için yapılan bu website, Next.js, Tailwind CSS,
						MongoDB, Prisma, React Hot Toast kullanılarak geliştirilmiştir.
					</p>

					<ul className="text-left list-disc list-inside space-y-3">
						<li>Products sayfasından ürünler görüntülenir.</li>
						<li>Delete butonu ile ürün silinebilir.</li>
						<li>
							Soldaki panelden Create Product sayfasına gidilir ve ürün
							oluşturulur.
						</li>
						<li>
							Edit butonuna tıklanarak ürün düzenlenebilir ve güncellenebilir.
						</li>
					</ul>

					<div className="mt-8">
						<StartButton />
					</div>
				</div>
			</div>
		</section>
	);
}
