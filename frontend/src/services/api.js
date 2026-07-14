const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);

  if (!response.ok) {
    throw new Error(`La API respondió con estado ${response.status}.`);
  }

  return response.json();
}

export function getCategories() {
  return request("/categories/");
}

export function getNews() {
  return request("/news/");
}

export function getResolutions(filters = {}) {
  const params = new URLSearchParams(filters);
  return request(`/resolutions/${params.toString() ? `?${params}` : ""}`);
}

export function getCalls(filters = {}) {
  const params = new URLSearchParams(filters);
  return request(`/calls/${params.toString() ? `?${params}` : ""}`);
}

export function getCallStages(callId) {
  return request(`/calls/${callId}/stages`);
}

export function sendContactMessage(data) {
  return request("/contact/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
}

export function getDocuments(filters = {}) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.set(key, value);
    }
  });

  const query = params.toString();
  return request(`/documents/${query ? `?${query}` : ""}`);
}

export async function uploadDocumentFile(file, folder = "documents") {
  const formData = new FormData();
  formData.append("file", file);
  return request(`/documents/upload?folder=${folder}`, { method: "POST", body: formData });
}

export function getFileUrl(fileUrl) {
  if (!fileUrl || /^https?:\/\//i.test(fileUrl)) {
    return fileUrl;
  }

  return `${API_BASE_URL}${fileUrl.startsWith("/") ? fileUrl : `/${fileUrl}`}`;
}
