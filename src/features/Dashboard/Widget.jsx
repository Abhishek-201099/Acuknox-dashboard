export default function Widget({ widget }) {
  return (
    <div className="flex min-h-[200px] flex-col gap-6 rounded-xl bg-gray-50 p-4">
      <h3>{widget.title}</h3>
      <p>{widget.content}</p>
    </div>
  );
}
