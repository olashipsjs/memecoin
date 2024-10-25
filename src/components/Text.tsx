import { m } from 'framer-motion';
import React from 'react';

const Component = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'span'> & {
    as?: 'span' | 'p';
  }
>(({ as, ...rest }, ref) => {
  const TagName = as || 'span';

  return (
    <TagName
      ref={ref}
      {...rest}
    />
  );
});

const Text = m.create(Component);
export default Text;
