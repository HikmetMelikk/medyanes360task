"use client";
import { postAPI } from "@/app/services/fetchApi";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateProductPage() {
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");

	const createNewProduct = async () => {
		const data = await postAPI("/products/createProduct", {
			name: productName,
			description: productDescription,
		});
		if (data.success) {
			toast({
				description: "Ürün başarıyla eklendi!",
			});
			setProductName("") && setProductDescription("");
		} else {
			toast({
				variant: "destructive",
				description: `Ürün eklenemedi! ${data.error}`,
			});
		}
	};
	return (
		<div className="flex flex-col items-center justify-start h-full p-5 bg-gray-100">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">Create Product</h1>
			<div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Product Name:
					</label>
					<input
						type="text"
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
						className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
						placeholder="Enter product name"
					/>
				</div>

				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Product Description:
					</label>
					<textarea
						value={productDescription}
						onChange={(e) => setProductDescription(e.target.value)}
						className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
						placeholder="Enter product description"
					/>
				</div>
				<button
					type="submit"
					onClick={createNewProduct}
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
					Add Product
				</button>
			</div>
		</div>
	);
}
