import React from 'react';
import './Button.css';

export const Button = ({
  variant = 'primary',
  size = 'default',
  roundness = 'default',
  disabled = false,
  label = 'Label',
  showLeftIcon = false,
  showRightIcon = false,
  onClick,
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    `btn--round-${roundness}`,
    disabled ? 'btn--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {showLeftIcon && <span className="btn__icon btn__icon--left">←</span>}
      {label}
      {showRightIcon && <span className="btn__icon btn__icon--right">→</span>}
    </button>
  );
};

export default Button;
