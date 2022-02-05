import { useEffect } from "react";

export default function useTitle({ title }) {
  useEffect(() => {
    document.title = `${title} | Portfolio | Contacto | Blog de desarrollo web | Mauricio Alejandro Campusano Villarroel`;
  }, [title]);
}
