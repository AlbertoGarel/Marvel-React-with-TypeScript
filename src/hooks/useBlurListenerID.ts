import { useEffect } from "react";

export default function useBlurListenerID(typeEvent: string, id: string) {
  useEffect(() => {
    const buttonSelected = () => {
      document.getElementById(id)?.blur();
    };

    window.addEventListener(typeEvent, buttonSelected);

    return () => window.removeEventListener(typeEvent, buttonSelected);
  }, [typeEvent, id]);
}
