import { updateDataByAny } from "@/services/serviceOperations";

const handler = async (req, res) => {
	if (!req) {
		return res.status(500).json({ error: "İstek bulunamadı." });
	}
	if (req.method === "PUT") {
		try {
			const data = req.body;
			if (!data || !data.id || !data.name || !data.price || !data.description) {
				throw new Error(
					"Incomplete data. Please provide the necessary information."
				);
			}
			const todo = await updateDataByAny(
				"Product",
				{ id: data.id },
				{ name: data.name, price: data.price, description: data.description }
			);

			return res.status(200).json({
				success: true,
				message: "Product updated successfully.",
				todo: todo,
			});
		} catch (error) {
			return res.status(500).json({
				status: error.status,
				error: error.message,
			});
		}
	} else {
		return res.status(500).json({ error: "Yanlış istek." });
	}
};
export default handler;
