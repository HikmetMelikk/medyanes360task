"use client";
import { useState } from "react";

export default function CreateProductPage() {
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productDescription, setProductDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Form submit işlemleri burada yapılacak
		console.log({
			productName,
			productPrice,
			productDescription,
		});
	};

	return (
		<div className="flex flex-col items-center justify-start h-full p-5 bg-gray-100">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">
				Update Product Details
			</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
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
						Product Price:
					</label>
					<input
						type="number"
						value={productPrice}
						onChange={(e) => setProductPrice(e.target.value)}
						className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
						placeholder="Enter product price"
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
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
					Add Product
				</button>
			</form>
		</div>
	);
}
