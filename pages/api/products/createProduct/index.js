import { createNewData } from "@/app/services/serviceOperations";

const handler = async (req, res) => {
	if (!req) {
		return res.status(500).json({ error: "İstek bulunamadı." });
	}

	if (req.method === "POST") {
		try {
			const body = await req.body;
			if (!body) {
				throw new Error("Bir hata oluştu!");
			}
			const data = await createNewData("Product", body);

			if (!data || data.error) {
				throw new Error(data.error);
			}
			return res
				.status(200)
				.json({ status: "success", message: "api isteği başarılı" });
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
