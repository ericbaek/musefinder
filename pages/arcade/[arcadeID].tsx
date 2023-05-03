import React from 'react';
import ActiveActivity from '@/modules/Activity/ActiveActivity';
import InterfaceIcon from '@/stories/InterfaceIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Arcade() {
  const router = useRouter();
  const { arcadeID } = router.query;
  const arcadeIdNonNull = arcadeID as string;

  return (
    <>
      <ActiveActivity arcadeID={arcadeIdNonNull}/>

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
            z-index: 1000;
          }
      `}</style>
    </>
  );
}
