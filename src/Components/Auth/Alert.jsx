export default function Alert({ message, type = "success", onClose }) {
  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className={`px-4 py-3 rounded-md shadow-md text-white flex items-center gap-3
        ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
      >
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 font-bold">×</button>
      </div>
    </div>
  );
}