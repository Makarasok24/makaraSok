import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, interactive = false, ...props }) => (
  <div
    className={cn(
      'rounded-card border border-rule bg-card shadow-card',
      interactive &&
        'transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-cobalt/35 hover:shadow-float',
      className,
    )}
    {...props}
  />
);

export default Card;
