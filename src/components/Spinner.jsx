export default function Spinner() {
  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .simple-spinner {
          width: 30px;
          height: 30px;
          border: 4px solid #e5e7eb;
          border-top: 4px solid #2563eb;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
      `}</style>

      {/* w-full, justify-center aur py-12 horizontal aur vertical padding dekar center karega */}
      <div className="w-full py-12 flex items-center justify-center gap-3">
        <div className="simple-spinner"></div>
        <span className="text-gray-700 font-medium">Loading...</span>
      </div>
    </>
  );
}