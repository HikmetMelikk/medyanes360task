// Öğrenci (kayıt) işlemleri için kullanılan servis
const postAPI = async (
	URL,
	body,
	method = "POST",
	headers = { "Content-Type": "application/json" }
) => {
	try {
		if (!process.env.NEXT_PUBLIC_API_URL || !URL) {
			throw new Error("URL bulunamadı!");
		}
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
			method: method,
			headers: headers,
			body: JSON.stringify(body),
			cache: "no-store",
		});
		if (response.url.includes("/notification") && response.redirected) {
			window.location.href = response.url;
			return { success: false, redirected: true };
		}
		const data = await response.json();
		if (!response.ok) {
			return {
				success: false,
				error: data.message || "Bir hata oluştu",
				status: response.status,
			};
		}

		return {
			success: true,
			data: data,
		};
	} catch (err) {
		console.error("API request failed:", err);
		return {
			success: false,
			error: err.message || "Beklenmeyen bir hata oluştu",
		};
	}
};

const getAPI = async (
	URL,
	headers = { "Content-Type": "application/json" }
) => {
	const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
		method: "GET",
		headers: headers,
		cache: "no-store",
	})
		.then((res) => {
			if (res.redirected) {
			} else {
				return res.json();
			}
		})
		.catch((err) => console.log(err));

	return data;
};

const putAPI = async (
	URL,
	body,
	headers = { "Content-Type": "application/json" }
) => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
			method: "PUT",
			headers: headers,
			body: JSON.stringify(body),
			cache: "no-store",
		});
		if (!response.ok) {
			const errorBody = await response.text();
			throw new Error(
				`HTTP error! status: ${response.status}, message: ${errorBody}`
			);
		}
		if (response.redirected) {
			console.warn("Request was redirected");
			return null;
		}

		return await response.json();
	} catch (err) {
		console.error("PUT API Error:", err);
		throw err;
	}
};

const deleteAPI = async (
	URL,
	headers = { "Content-Type": "application/json" }
) => {
	const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
		method: "DELETE",
		headers: headers,
		cache: "no-store",
	})
		.then((res) => {
			if (res.redirected) {
			} else {
				return res.json();
			}
		})
		.catch((err) => console.log(err));

	return data;
};

export { deleteAPI, getAPI, postAPI, putAPI };
