import { useEffect, useCallback, useState } from "react";

const useCopyToClipboard = (text: string, delay: number = 3000):[boolean,(v:string)=>void] => {
  const copyToClipboard = (str: string) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selected =
      document.getSelection()!.rangeCount > 0
        ? document.getSelection()!.getRangeAt(0)
        : false;
    el.select();
    const success = document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection()!.removeAllRanges();
      document.getSelection()!.addRange(selected);
    }
    return success;
  };

  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    (forwardLink: string) => {
      if (!copied) setCopied(copyToClipboard(forwardLink));
      let timer = setTimeout(() => {
        setCopied(false);

        return () => clearTimeout(timer);
      }, delay);
    },
    [text]
  );
  useEffect(() => {
    setCopied(false);
  }, [text]);

  return [copied, copy];
};

export default useCopyToClipboard;
