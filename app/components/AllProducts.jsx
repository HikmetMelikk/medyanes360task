"use client";
import Link from "next/link";
import { useState } from "react";

export default function AllProducts() {
	const products = [
		{ id: 1, name: "Product 1", price: "$10", description: "Description 1" },
		{ id: 2, name: "Product 2", price: "$20", description: "Description 2" },
		{ id: 3, name: "Product 3", price: "$30", description: "Description 3" },
	];

	const [deleteProductId, setDeleteProductId] = useState(null);

	const handleEdit = (productId) => {
		// Edit işlemi burada yapılacak
		console.log(`Edit product with id: ${productId}`);
	};

	const handleDelete = (productId) => {
		// Delete işlemi burada yapılacak
		console.log(`Delete product with id: ${productId}`);
		setDeleteProductId(null); // Modalı kapat
	};

	const confirmDelete = (productId) => {
		setDeleteProductId(productId);
	};

	return (
		<div className="flex flex-col items-center justify-start h-full p-5 bg-gray-100">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">Product List</h1>
			<div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
				<table className="min-w-full bg-white">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
								ID
							</th>
							<th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
								Name
							</th>
							<th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
								Price
							</th>
							<th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
								Description
							</th>
							<th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product.id}>
								<td className="py-2 px-4 border-b border-gray-200 text-black">
									{product.id}
								</td>
								<td className="py-2 px-4 border-b border-gray-200 text-black">
									{product.name}
								</td>
								<td className="py-2 px-4 border-b border-gray-200 text-black">
									{product.price}
								</td>
								<td className="py-2 px-4 border-b border-gray-200 text-black">
									{product.description}
								</td>
								<td className="py-2 px-4 border-b border-gray-200 text-black">
									<Link href="/dashboard/update-product">
										<button
											onClick={() => handleEdit(product.id)}
											className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2 border border-blue-500 rounded px-2 py-1">
											Edit
										</button>
									</Link>

									<button
										onClick={() => confirmDelete(product.id)}
										className="text-red-500 hover:text-red-700 focus:outline-none border border-red-500 rounded px-2 py-1">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{deleteProductId && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h2 className="text-black text-xl font-bold mb-4">
							Are you sure you want to delete this product?
						</h2>
						<div className="flex justify-end">
							<button
								onClick={() => setDeleteProductId(null)}
								className="text-gray-500 hover:text-gray-700 focus:outline-none mr-4">
								Cancel
							</button>
							<button
								onClick={() => handleDelete(deleteProductId)}
								className="text-red-500 hover:text-red-700 focus:outline-none border border-red-500 rounded px-4 py-2">
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
