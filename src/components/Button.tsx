import { m } from 'framer-motion';
import React from 'react';

const Component = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ ...rest }, ref) => {
  return (
    <button
      ref={ref}
      {...rest}
    />
  );
});

const Button = m.create(Component);
export default Button;
