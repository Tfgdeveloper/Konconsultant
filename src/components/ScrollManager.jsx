import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        // Section exists on current page
        const yOffset = -80; // adjust if you have fixed navbar
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        // Section does NOT exist → go to home with that hash
        navigate(`/${hash}`, { replace: true });
      }
    } else {
      // Normal page change → scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, navigate]);

  return null;
}