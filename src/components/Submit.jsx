import React from "react";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submiting..." : "Submit"}
      </button>
    </p>
  );
}

export default Submit;
