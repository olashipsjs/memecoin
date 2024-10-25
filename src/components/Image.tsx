import { m } from 'framer-motion';
import React from 'react';

const Component = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<'img'>
>(({ loading = 'lazy', ...rest }, ref) => {
  return (
    <img
      loading={loading}
      ref={ref}
      {...rest}
    />
  );
});

const Image = m.create(Component);
export default Image;
