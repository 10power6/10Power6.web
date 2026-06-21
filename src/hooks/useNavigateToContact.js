import { useNavigate } from "react-router-dom";

export function useNavigateToContact() {
  const navigate = useNavigate();

  return () => {
    navigate("/");
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };
}
