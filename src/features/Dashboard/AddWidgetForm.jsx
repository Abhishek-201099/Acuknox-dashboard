import { useState } from "react";

export default function AddWidgetForm({ onCloseModal }) {
  const [widgetTitle, setWidgetTitle] = useState("");
  const [widgetContent, setWidgetContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onCloseModal?.();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Widget title</label>
        <input
          type="text"
          id="title"
          value={widgetTitle}
          onChange={(e) => setWidgetTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="content">Widget content</label>
        <input
          type="text"
          id="content"
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
        />
      </div>
    </form>
  );
}
