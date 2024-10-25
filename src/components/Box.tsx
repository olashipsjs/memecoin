import { m } from 'framer-motion';
import React from 'react';

const Component = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & {
    as?: 'div' | 'span';
  }
>(({ as, ...rest }, ref) => {
  const TagName = as || 'div';

  return (
    <TagName
      ref={ref}
      {...rest}
    />
  );
});

const Box = m.create(Component);
export default Box;
