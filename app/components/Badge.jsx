import { cva } from "class-variance-authority";
import { cn } from "../common/helpers/UtilsKit";

const DEFAULT_BADGE_STYLES =
  "h-fit inline-flex items-center font-semibold shadow-sm rounded-full px-8 py-3 text-xs w-fit";
const PRIMARY_BADGE_STYLES = "bg-primary";
const SECONDARY_BADGE_STYLES = "bg-secondary";
const TERTIARY_BADGE_STYLES = "bg-tertiary";
const ACCENT_BADGE_STYLES = "bg-accent";

const BADGE_VARIANTS = cva(DEFAULT_BADGE_STYLES, {
  variants: {
    variant: {
      primary: PRIMARY_BADGE_STYLES,
      secondary: SECONDARY_BADGE_STYLES,
      tertiary: TERTIARY_BADGE_STYLES,
      accent: ACCENT_BADGE_STYLES,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function Badge({ className, variant, ...props }) {
  const BADGE_STYLES = cn(BADGE_VARIANTS({ variant }), className);

  return <span className={BADGE_STYLES} {...props} />;
}
