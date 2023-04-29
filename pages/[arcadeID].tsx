import React from 'react';
import ActiveActivity from '@/modules/Activity/ActiveActivity';
import InterfaceIcon from '@/stories/InterfaceIcon';
import Link from 'next/link';
export default function Arcade() {
  return (
    <>
      <ActiveActivity/>

      <div className='Back'>
        <Link href='/'>
            <InterfaceIcon Icon=''/>
        </Link>
      </div>

      <style jsx>{`
          .Back {
            position: fixed;
            left: var(--padding-activity);
            bottom: var(--padding-activity);
            width: min-content;
            z-index: 10000;
          }
      `}</style>
    </>
  );
}
