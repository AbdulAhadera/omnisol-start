import { cn } from "../lib/utils";
import React from "react";

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[90vh] flex-col items-center justify-center bg-body text-slate-950 dark:bg-zinc-900",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg, #1E3A8A 10%, #1E40AF 15%, #1D4ED8 20%, #2563EB 25%, #3B82F6 30%)", // Blue-only aurora gradient
            "--dark-gradient":
              "repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)",
            "--blue-300": "#080a39",
            "--blue-400": "#3B82F6",
            "--blue-500": "#2563EB",
            "--blue-600": "#080a39",
            "--blue-700": "#1E40AF",
            "--blue-800": "#080a39",
            "--black": "#000",
            "--transparent": "transparent",
          }}
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%] opacity-70 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-800)_10%,var(--blue-700)_15%,var(--blue-600)_20%,var(--blue-500)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] after:absolute after:inset-0 after:[background-image:var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-overlay after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;