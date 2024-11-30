import { deleteDataByAny } from "@/app/services/serviceOperations";

export default async function handler(req, res) {
	if (!req) {
		return res.status(500).json({ error: "İstek bulunamadı." });
	}
	if (req.method === "DELETE") {
		try {
			const { id } = req.query;
			await deleteDataByAny("Product", { id: id });
			return res.status(200).json({ message: "Product successfully deleted" });
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	} else {
		return res.status(500).json({ error: "Yanlış İstek" });
	}
}
