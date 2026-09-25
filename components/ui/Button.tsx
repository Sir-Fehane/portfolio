import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

export type ButtonProps =
  | (BaseButtonProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        asAnchor: true;
      })
  | (BaseButtonProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & {
        asAnchor?: false;
      });

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = "primary",
    size = "md",
    icon,
    className = "",
    style,
    children,
  } = props;

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg",
    md: "px-5 py-2.5 text-sm rounded-xl",
    lg: "px-7 py-3.5 text-base rounded-xl font-bold",
  };

  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
      boxShadow: "0 4px 20px var(--accent-glow)",
      color: "#FFFFFF",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    secondary: {
      backgroundColor: "var(--surface)",
      borderColor: "var(--border)",
      color: "var(--text-primary)",
      borderWidth: "1px",
      borderStyle: "solid",
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: "var(--border)",
      color: "var(--text-secondary)",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  };

  const combinedClasses = `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer active:scale-95 hover:opacity-95 ${sizeClasses[size]} ${className}`;

  if (props.asAnchor) {
    const {
      asAnchor: _asAnchor,
      variant: _variant,
      size: _size,
      icon: _icon,
      className: _className,
      style: _style,
      children: _children,
      ...anchorProps
    } = props;

    return (
      <a
        className={combinedClasses}
        style={{ ...variantStyles[variant], ...style }}
        {...anchorProps}
      >
        {children}
        {icon}
      </a>
    );
  }

  const {
    asAnchor: _asAnchor,
    variant: _variant,
    size: _size,
    icon: _icon,
    className: _className,
    style: _style,
    children: _children,
    ...buttonProps
  } = props;

  return (
    <button
      className={combinedClasses}
      style={{ ...variantStyles[variant], ...style }}
      {...buttonProps}
    >
      {children}
      {icon}
    </button>
  );
};
