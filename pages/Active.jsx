// Active JS

import React, { useRef, useEffect } from 'react';
import Alert from '@/stories/Alert';
import Button from '@/stories/Button';
import Card from '@/stories/Card';
import ContentTitle from '@/stories/ContentTitle';
import Picture from '@/stories/Picture';



/* 가로 스크롤 */
export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}

function Active() {
    const scrollRef = useHorizontalScroll();
		return (
            <div className='Active MainActivity'> { /* 메인 액티비티 */ }
                <div className='Drag'>
                    <div className='DragPill'/>
                </div>
                <div className='ActivityDetails'>
                    <div className='Group-Picture' ref={scrollRef}>
                        {/* 최소 3장 이상이 보장되어야 함, Focus 상태에서는 로드하지 않음 */}
                        <Picture Image='https://go.develoid.net/gate/ad/AD0-1.png'/>
                        <Picture Image='https://go.develoid.net/gate/ad/AD0-1.png'/>
                        <Picture Image='https://go.develoid.net/gate/ad/AD0-1.png'/>
                    </div>
                    <div className='Selected Column Gap-12'>
                        <div className='Row Space-Between Align-Items-Center'>
                            <div className='Title'>펀시티 건대점</div>
                            <div className='Row Gap-4 IconMargin-Right'>
                                <div className='Icon'></div> {/* 전화번호 */}
                                <div className='Icon'></div> {/* 저장한 장소 */}
                                <div className='Icon'></div> {/* 공유 (Web은 별도 팝업, Native는 Native) */}
                            </div>
                        </div>
                        <div className='Row Space-Between'>
                            <div className='Group-FocusParagraph'>
                                <div className='Paragraph Bold'>영업중</div> {/* 영업일, 시간 쪽은 리디자인 필요 */}
                                <div className='Paragraph'>·</div>
                                <div className='Paragraph'>서울 광진구 화양동</div> {/* Active, Focus 별로 다르게 설정 */}
                            </div>
                            <div className='Group-FocusParagraph'>
                                <div className='Paragraph'>여기서</div>
                                <div className='Paragraph Bold'>4.7km</div> {/* Geo */}
                            </div>
                        </div>
                    </div>
                    <div className='Column Gap-16'>
                        <div className='OnlyFocus Row Gap-8'> {/* Active 상태에서는 로드하지 않음 */}
                            <Card Secondary RadiusAll BG='var(--color-dynamic-muse)' Title='IIDX 라이트닝' Paragraph='2대'/>
                            <Card Secondary RadiusAll BG='var(--color-dynamic-muse)' Title='SDVX 발키리' Paragraph='2대'/>
                            <Card Secondary RadiusAll BG='var(--color-dynamic-muse)' Title='maimai DX' Paragraph='2대'/>
                        </div>
                        <div className='Row Gap-8'>
                            <Button Icon='' Title='제보하기'/>
                            <Button Icon='' Title='길찾기'/> {/* 처음 모달창을 띄워서 네이버 지도, 카카오맵 선택 요구, 기억 버튼 존재 (설정에서 변경 가능) */}
                        </div>
                    </div>
                    {/* Focus 상태에서는 여기까지만 보여야 함 */}
                    <div className='Column Gap-16'>
                        <ContentTitle Title='알림' Paragraph=''/>
                        <div className='Column Gap-8'>
                            <Alert Icon='' Title='투덱에 누가 껌 붙이고 감' Paragraph='오늘 새벽'/>
                            <Alert Icon='' Title='투덱에 누가 껌 붙이고 감' Paragraph='오늘 새벽'/>
                        </div>
                    </div>
                    <div className='Column Gap-16'>
                        <ContentTitle Title='보유 중인 기체' Paragraph=''/>
                        <div className='Column Group-Card'>
                            <Card Primary Title='maimai DX' Paragraph='라이트 500원' Paragraph2_True Paragraph2='3번 방송' Accent AccentBG='var(--color-dynamic-muse)' AccentText='2대'/>
                            <hr/>
                            <Card Primary Title='maimai DX' Paragraph='라이트 500원' Paragraph2_True Paragraph2='3번 방송' Accent AccentBG='var(--color-dynamic-muse)' AccentText='2대'/>
                            <hr/>
                            <Card Primary Title='maimai DX' Paragraph='라이트 500원' Paragraph2_True Paragraph2='3번 방송' Accent AccentBG='var(--color-dynamic-muse)' AccentText='2대'/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Active;