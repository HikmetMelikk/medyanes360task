import {
	deleteDataByAny,
	updateDataByAny,
} from "@/app/services/serviceOperations";

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
	} else if (req.method === "POST") {
		try {
			const updatedProduct = req.body;
			await updateDataByAny("Product", id, updatedProduct);
			res
				.status(200)
				.json({ success: true, message: "Product updated successfully" });
		} catch (error) {
			console.error("Error updating product:", error);
			res
				.status(500)
				.json({ message: "Error updating product", error: error.message });
		}
	}
}
