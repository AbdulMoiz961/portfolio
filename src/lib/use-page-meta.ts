import { useEffect } from "react";
import { siteMeta } from "@/lib/portfolio-data";

/** Sets document title + description per page (static SPA equivalent of route head()). */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, selector.replace(/^meta\[(name|property)="|"\]$/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
  }, [title, description]);
}

export const defaultMeta = {
  title: siteMeta.title,
  description: siteMeta.description,
};
