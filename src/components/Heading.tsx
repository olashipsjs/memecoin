import { m } from 'framer-motion';
import React from 'react';

const Component = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'h1'> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
>(({ as, ...rest }, ref) => {
  const TagName = as || 'h3';

  return (
    <TagName
      ref={ref}
      {...rest}
    />
  );
});

const Heading = m.create(Component);
export default Heading;
