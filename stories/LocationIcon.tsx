import React from 'react';

interface LocationIconProps {
  onClick?: () => void;
}

export const LocationIcon = ({
  ...props
}: LocationIconProps) => {
  return (
      <div className='LocationIcon' {...props}> {/* 백버튼 */}
          <div className='Icon'></div>
          <style jsx>{`
            .LocationIcon {
                position: fixed;
                right: var(--padding-activity);
                top: var(--padding-activity);
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

                .LocationIcon:hover {
                  background: var(--box-hover-color);
                }

                .Icon {
                  font-family: var(--font-icon) !important;
                  font-size: 2rem;
                  font-weight: 700;
                  cursor: pointer;
              }

            @media (max-width: 767.98px) {
                .LocationIcon {
                    display: none;
                }
            }
        `}</style>
      </div>
  );
};

export default LocationIcon;