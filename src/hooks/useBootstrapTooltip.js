import { useEffect } from "react";
import { Tooltip } from "bootstrap";

export default function useBootstrapTooltip() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    tooltipTriggerList.forEach((el) => {
      new Tooltip(el);
    });
  }, []);
}
