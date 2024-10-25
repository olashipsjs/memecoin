import React from 'react';
import Container from './Container';
import { twMerge } from 'tailwind-merge';

const Card = ({
  children,
  className,
}: React.PropsWithChildren & { className?: string }) => {
  return (
    <Container
      className={twMerge(
        'bg-white rounded-[24px] h-[607px] lg:h-[820px] w-full max-w-[1140px] mx-auto shadow-[0px_0px_16px_12px] shadow-black/[0.03] overflow-clip',
        className
      )}
    >
      {children}
    </Container>
  );
};

export default Card;
