import { Link } from "react-router-dom";
import logo from "@/assets/genist-logo.png";
import "./Logo.css";

type Props = { variant?: "light" | "dark" };

export default function Logo({ variant = "dark" }: Props) {
  return (
    <Link
      to="/"
      className={`g-logo g-logo--${variant}`}
      aria-label="GENIST — Accueil"
    >
      <img
        src={logo}
        alt="GENIST CRM Solutions"
        className="g-logo__img"
        width={160}
        height={48}
      />
    </Link>
  );
}
