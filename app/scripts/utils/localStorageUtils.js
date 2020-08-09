export function removeToken() {
  localStorage.removeItem("token");
}

export function getBearerString() {
  return `Bearer ${getToken()}`;
}

export function getToken() {
  return localStorage.getItem("token");
}
