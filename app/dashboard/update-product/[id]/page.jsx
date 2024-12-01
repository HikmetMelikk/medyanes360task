"use client";
import { getAPI, putAPI } from "@/app/services/fetchApi";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function UpdateProductPage({ params }) {
	const router = useRouter();
	const resolvedParams = use(params);
	const id = resolvedParams.id;

	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				const product = await getAPI(`/products/${id}`);
				setProductName(product.name);
				setProductDescription(product.description);
			} catch (error) {
				console.error("Error fetching product details:", error);
			}
		};

		if (id) {
			fetchProductDetails();
		}
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const updatedProduct = {
				name: productName,
				description: productDescription,
			};
			await putAPI(`/products/${id}`, updatedProduct);
			console.log("Product updated successfully");
			router.push("/dashboard");
		} catch (error) {
			console.error("Error updating product:", error);
		}
	};

	return (
		<div className="flex flex-col items-center justify-start h-full p-5 bg-gray-100">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">
				Update Product Details
			</h1>
			<div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
				<form onSubmit={handleSubmit}>
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
							required
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
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
						Update Product
					</button>
				</form>
			</div>
		</div>
	);
}
