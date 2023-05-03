import React from 'react';

interface PictureProps {
  onClick?: () => void;
}

export const Dimmed = ({
  ...props
}: PictureProps) => {
  return (
    <>
      <div className='Dimmed' {...props}/>
      <style jsx>{`
        .Dimmed {
          top: 0;
          left: 0;
          position: fixed;
          width: 100%;
          height: 100%;
          background: var(--colorless-5-tp);
          z-index: 1;
        }
      `}</style>
    </>
  );
};

export default Dimmed;