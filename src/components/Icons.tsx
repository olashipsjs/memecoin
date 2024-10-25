const LightningIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z'></path>
    </svg>
  );
};

const AlarmIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,20.68-32-32a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32-11.32ZM224,136a96,96,0,1,1-96-96A96.11,96.11,0,0,1,224,136Zm-32,0a8,8,0,0,0-8-8H136V80a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h56A8,8,0,0,0,192,136Z'></path>
    </svg>
  );
};

const BriefcaseIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z'></path>
    </svg>
  );
};

const ChartUpFillIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,192H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v76.69l34.34-34.35a8,8,0,0,1,11.32,0L128,132.69,172.69,88H144a8,8,0,0,1,0-16h48a8,8,0,0,1,8,8v48a8,8,0,0,1-16,0V99.31l-50.34,50.35a8,8,0,0,1-11.32,0L104,131.31l-40,40V176H200a8,8,0,0,1,0,16Z'></path>
    </svg>
  );
};

const CalenderHeartFillIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,64V56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm82.56,103.07a143.52,143.52,0,0,1-24.77,16.51,4,4,0,0,1-3.58,0,143.52,143.52,0,0,1-24.77-16.51C84.56,153,76,138.51,76,124a28,28,0,0,1,52-14.41A28,28,0,0,1,180,124C180,138.51,171.44,153,154.56,167.07ZM184,64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z'></path>
    </svg>
  );
};

export {
  AlarmIcon,
  BriefcaseIcon,
  LightningIcon,
  ChartUpFillIcon,
  CalenderHeartFillIcon,
};
