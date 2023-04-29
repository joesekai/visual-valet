export async function fetchData(type, endpoint, sendResponse) {
  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const icons = await res.json();
    sendResponse({ type, data: icons });
  } catch (err) {
    return err.message;
  }
}
