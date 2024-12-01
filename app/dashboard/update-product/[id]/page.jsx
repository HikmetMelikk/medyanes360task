"use client";
import { getAPI, putAPI } from "@/app/services/fetchApi";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateProduct() {
	const router = useRouter();
	const params = useParams();
	const productId = params.id;

	const [product, setProduct] = useState({
		name: "",
		description: "",
	});

	// Ürün verilerini getir
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const data = await getAPI(`/products/${productId}`);
				setProduct(data);
			} catch (error) {
				console.error("Error fetching product:", error);
			}
		};

		if (productId) {
			fetchProduct();
		}
	}, [productId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await putAPI(`/products/${productId}`, product);
			router.push("/dashboard");
		} catch (error) {
			console.error("Error updating product:", error);
		}
	};

	return (
		<div className="flex flex-col items-center justify-start h-full p-5 bg-gray-100">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">Update Product</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Product Name
					</label>
					<input
						type="text"
						name="name"
						value={product.name}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Description
					</label>
					<textarea
						name="description"
						value={product.description}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Update Product
					</button>
					<button
						type="button"
						onClick={() => router.push("/dashboard/all-products")}
						className="text-gray-500 hover:text-gray-700">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}
