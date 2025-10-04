import {
  Headset,
  Heart,
  Clock,
  DollarSign,
  Zap,
  Shield,
  Truck,
  MapPin,
  Users,
  BarChart3,
  Tally5,
  type LucideIcon,
} from "lucide-react";
import { ReactElement } from "react";

/**
 * All supported Lucide icon names.
 */
export type IconName =
  | "Headset"
  | "Heart"
  | "Clock"
  | "DollarSign"
  | "Zap"
  | "Shield"
  | "Truck"
  | "MapPin"
  | "Users"
  | "BarChart3"
  | "Tally5";

/**
 * Maps icon names to Lucide icon components.
 */
export const iconMap: Record<IconName, LucideIcon> = {
  Headset,
  Heart,
  Clock,
  DollarSign,
  Zap,
  Shield,
  Truck,
  MapPin,
  Users,
  BarChart3,
  Tally5,
};

/**
 * Returns the Lucide icon component for a given name.
 */
export const getIconComponent = (iconName: string): LucideIcon | null => {
  const icon = iconName as IconName;
  return iconMap[icon] || null;
};

/**
 * Props for rendering an icon dynamically.
 */
interface RenderIconProps {
  iconName: string;
  className?: string;
}

/**
 * Renders a Lucide icon dynamically by name.
 */
export const renderIcon = ({
  iconName,
  className,
}: RenderIconProps): ReactElement | null => {
  const IconComponent = getIconComponent(iconName);
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};
