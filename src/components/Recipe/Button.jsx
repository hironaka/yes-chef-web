export default function Button({ icon, children, onClick, className }) {
  return (
    <button
      className={`font-medium text-lg py-4 px-8 rounded-full flex items-center gap-1 ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
