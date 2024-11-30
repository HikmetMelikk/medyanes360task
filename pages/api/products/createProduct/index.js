import { createNewData } from "@/app/services/serviceOperations";

const handler = async (req, res) => {
	if (!req) {
		return res.status(500).json({ error: "İstek bulunamadı." });
	}

	if (req.method === "POST") {
		try {
			const data = req.body;
			console.log("Gönderilen veri:", data);

			if (!data || !data.name || !data.price || !data.description) {
				throw new Error(
					"Girdiğiniz bilgilerde hata var. Lütfen kontrol ediniz."
				);
			}

			const product = await createNewData("Product", data);

			return res.status(200).json({
				success: true,
				message: "Ürün başarıyla oluşturuldu.",
				product: product,
			});
		} catch (error) {
			console.error("Hata:", error);
			return res.status(500).json({
				status: error.status || 500,
				error: error.message || "Bilinmeyen bir hata oluştu.",
			});
		}
	} else {
		return res.status(500).json({ error: "Yanlış istek." });
	}
};

export default handler;
