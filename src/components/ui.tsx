import Link from "next/link";

/* Shared button styles — keep all CTAs consistent across the site. */
export const primaryBtn =
  "inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5";

export const ghostBtn =
  "inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent";

/* Small monospace section kicker, e.g. <Kicker>02 / Capabilities</Kicker> */
export function Kicker({ children }: { children: React.ReactNode }) {
  return <div className="kicker">{children}</div>;
}

/* Placeholder media slot — designed to be swapped for real footage later
   with zero layout change. Pass `src` once a clip exists. */
export function MediaSlot({
  label,
  className = "",
  src,
  poster,
}: {
  label: string;
  className?: string;
  src?: string;
  poster?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-sm border border-line bg-surface ${className}`}
      >
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    );
  }
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-line bg-surface ${className}`}
    >
      <div className="absolute inset-0 grid-hint" />
      <div className="absolute inset-0 bg-gradient-to-br from-surface-2/50 to-bg/80" />
      <div className="absolute left-3 top-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
          Footage pending
        </span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}

export { Link };
