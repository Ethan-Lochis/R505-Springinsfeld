export default function IconUp({ className = "w-2 h-1", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="4"
      viewBox="0 0 8 4"
      className={className}
      fill="currentColor"
      {...props}
    >
      <path fillRule="evenodd" d="M0 4l4-4 4 4z" />
    </svg>
  );
}
