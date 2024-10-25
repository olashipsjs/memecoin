import { m } from 'framer-motion';
import React from 'react';

const Component = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & {
    as?: 'header' | 'main' | 'footer' | 'section' | 'article' | 'div';
  }
>(({ as, ...rest }, ref) => {
  const TagName = as || 'section';

  return (
    <TagName
      ref={ref}
      {...rest}
    />
  );
});

const Container = m.create(Component);
export default Container;
