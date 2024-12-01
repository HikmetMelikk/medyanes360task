"use client";
import { postAPI } from "@/app/services/fetchApi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function CreateProductPage() {
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Prevent multiple submissions
		if (isSubmitting) return;

		setIsSubmitting(true);

		try {
			const result = await postAPI("/products/createProduct", {
				name: productName,
				description: productDescription,
			});

			if (result.success) {
				// Success toast
				toast.success("Ürün başarıyla eklendi!", {
					duration: 4000,
					style: {
						background: "#4CAF50",
						color: "white",
						fontWeight: "bold",
					},
					iconTheme: {
						primary: "white",
						secondary: "#4CAF50",
					},
				});

				// Reset form fields
				setProductName("");
				setProductDescription("");
			} else {
				// Error toast
				toast.error(
					`Ürün eklenemedi: ${result.error || "Bilinmeyen bir hata oluştu"}`,
					{
						duration: 4000,
						style: {
							background: "#FF5252",
							color: "white",
							fontWeight: "bold",
						},
					}
				);
			}
		} catch (error) {
			// Catch and log any unexpected errors
			toast.error("Ürün eklenirken bir hata oluştu", {
				duration: 4000,
				style: {
					background: "#FF5252",
					color: "white",
					fontWeight: "bold",
				},
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="flex flex-col items-center justify-start h-full p-5 bg-gray-100">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">Create Product</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
				<div className="mb-6">
					<label
						htmlFor="productName"
						className="block text-gray-700 text-sm font-bold mb-2">
						Product Name:
					</label>
					<input
						id="productName"
						type="text"
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
						className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
						placeholder="Enter product name"
						required
					/>
				</div>

				<div className="mb-6">
					<label
						htmlFor="productDescription"
						className="block text-gray-700 text-sm font-bold mb-2">
						Product Description:
					</label>
					<textarea
						id="productDescription"
						value={productDescription}
						onChange={(e) => setProductDescription(e.target.value)}
						className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
						placeholder="Enter product description"
						required
					/>
				</div>
				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
					{isSubmitting ? "Adding..." : "Add Product"}
				</button>
			</form>

			{/* Add Toaster to render toast messages */}
			<Toaster position="top-right" reverseOrder={false} />
		</div>
	);
}
