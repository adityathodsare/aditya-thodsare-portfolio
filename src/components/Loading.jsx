// components/Loading.jsx
export default function Loading({ darkMode }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  );
}
