import React from 'react';

interface BackProps {
  onClick?: () => void;
}

export const Back = ({
  ...props
}: BackProps) => {
  return (
      <div className='Back' {...props}> {/* 백버튼 */}
          <div className='Icon'></div>
          <style jsx>{`
            .Back {
                width: 3.6rem;
                height: 3.6rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: var(--radius-box);
                background: var(--box-bg-color);
                cursor: pointer;
                transition: var(--transition-bg);
                box-shadow: var(--shadow-color);
                z-index: 1000;
            }

                .Back:hover {
                    background: var(--box-hover-color);
                }

                .Icon {
                  font-family: var(--font-icon) !important;
                  font-size: 2rem;
                  font-weight: 700;
                  cursor: pointer;
              }

            @media (max-width: 767.98px) {
                .Back {
                    display: none;
                }
            }
        `}</style>
      </div>
  );
};

export default Back;