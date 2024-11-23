// utils/auth.js
export function isAuthenticated() {
    if (import.meta.server) return false; // Cegah eksekusi di sisi server
    const token = localStorage.getItem('token');
    return !!token; // Mengembalikan true jika token ada, false jika tidak ada
  }
  