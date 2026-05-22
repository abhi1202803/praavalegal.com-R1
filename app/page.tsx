import type { CSSProperties, ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  ReceiptText,
  CheckSquare,
  FileText,
  Gavel,
  LucideIcon
} from "lucide-react";

type FloatingCardProps = {
  color: "blue" | "orange" | "dark" | "portal";
  className: string;
  icon?: LucideIcon;
  label: string;
  rotation: string;
  variant?: "pill" | "portal";
  children?: ReactNode;
};

type CardStyle = CSSProperties & {
  "--rotation": string;
};

function FloatingCard({
  color,
  className,
  icon: Icon,
  label,
  rotation,
  variant = "pill",
  children
}: FloatingCardProps) {
  if (variant === "portal") {
    return (
      <article
        className={`portal-card ${color} ${className}`}
        style={{ "--rotation": rotation } as CardStyle}
        aria-label={label}
      >
        {children}
      </article>
    );
  }

  return (
    <article
      className={`floating-card ${color} ${className}`}
      style={{ "--rotation": rotation } as CardStyle}
    >
      <span className="card-icon" aria-hidden="true">
        {Icon ? <Icon size={34} strokeWidth={2.6} /> : null}
      </span>
      <span>{label}</span>
    </article>
  );
}

function PortalCard() {
  return (
    <FloatingCard
      className="portal-position float-three"
      color="portal"
      label="John Doe portal message"
      rotation="4deg"
      variant="portal"
    >
      <span className="portal-accent" />
      <span className="avatar" aria-hidden="true">
        <span className="avatar-hair" />
        <span className="avatar-eyes" />
        <span className="avatar-smile" />
      </span>
      <span className="portal-copy">
        <strong>John Doe - Portal</strong>
        <span>Hey! Could you please review a document for me?</span>
        <small>MAT-2233 - 2h ago</small>
      </span>
    </FloatingCard>
  );
}

export default function Home() {
  return (
    <main className="hero-shell">
      <ThemeToggle />

      <div className="background-bars" aria-hidden="true">
        <span className="bar bar-left-one" />
        <span className="bar bar-left-two" />
        <span className="bar bar-left-three" />
        <span className="bar bar-right-one" />
        <span className="bar bar-right-two" />
        <span className="bar bar-right-three" />
      </div>

      <section className="hero">
        <div className="copy-panel">
          <h1>
            A single platform to <strong>manage</strong> every part of your{" "}
            <strong>legal work</strong>
          </h1>
          <p>
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication - all in one system.
          </p>
        </div>

        <div className="cards-stage" aria-label="Legal platform modules">
          <FloatingCard
            color="blue"
            className="billing float-one"
            icon={ReceiptText}
            label="Billing"
            rotation="12deg"
          />
          <FloatingCard
            color="orange"
            className="matters float-two"
            icon={Gavel}
            label="Matters"
            rotation="-12deg"
          />
          <PortalCard />
          <FloatingCard
            color="dark"
            className="tasks float-four"
            icon={CheckSquare}
            label="Tasks"
            rotation="0deg"
          />
          <FloatingCard
            color="dark"
            className="documents float-five"
            icon={FileText}
            label="Documents"
            rotation="-7deg"
          />
        </div>
      </section>
    </main>
  );
}
