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
		const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
			method: method,
			headers: headers,
			body: JSON.stringify(body),
			cache: "no-store",
		})
			.then((res) => {
				if (res.url.includes("/notification") && res.redirected) {
					return (window.location.href = res.url);
				} else {
					return res.json();
				}
			})
			.catch((err) => console.log(err));

		return data;
	} catch (err) {
		throw new Error(`API request failed: ${err}`);
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
	const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
		method: "PUT",
		headers: headers,
		body: JSON.stringify(body),
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
