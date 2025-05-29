export default function Overlay({ onClick }) {
  return (
    <div
      className="absolute inset-0 z-40 backdrop-blur-xs"
      onClick={onClick}
    ></div>
  );
}
