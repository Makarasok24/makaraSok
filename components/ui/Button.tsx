import React from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-[background-color,color,border-color,transform] duration-200 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-cobalt text-white hover:bg-cobalt-deep',
  outline: 'border border-rule bg-card text-ink hover:border-cobalt hover:text-cobalt',
  ghost: 'text-ink-soft hover:bg-paper-deep hover:text-ink',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[0.9375rem]',
  icon: 'h-10 w-10',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * Links that look like buttons stay anchors, so they keep their native
 * keyboard and middle-click behaviour.
 */
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => <a className={cn(base, variantClasses[variant], sizeClasses[size], className)} {...props} />;

export default Button;
