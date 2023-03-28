// Active JS

import React, { useState } from 'react';
import '../DesignSystem/Import.js';

import '../DesignSystem/CSS/Selected.css';
import Alert from '../DesignSystem/Component/In-Content/Alert';
import Button from '../DesignSystem/Component/In-Content/Button';
import Card from '../DesignSystem/Component/In-Content/Card';
import Picture from '../DesignSystem/Component/In-Content/Picture';

import { useRef, useEffect } from "react";
import ContentTitle from '../DesignSystem/Component/In-Content/ContentTitle.js';

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
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

/* Card */
/* Right Accent 미사용 시 { NoAccent } 처리 */
var NoAccent = { display : 'none' }
var PreferGame = { background : 'var(--color-dynamic-muse)', color : 'white' };
var DynamicWater = { background : 'var(--color-dynamic-water)', color : 'white', width: '54px'}

function Active() {
    const scrollRef = useHorizontalScroll();
		return (
            <div className="Active MainActivity"> { /* 메인 액티비티 */ }
                <div className="Drag">
                    <div className="DragPill"/>
                </div>
                <div className="ActivityDetails">
                    <div className="Group-Picture" ref={scrollRef}>
                        {/* 최소 3장 이상이 보장되어야 함, Focus 상태에서는 로드하지 않음 */}
                        <Picture/>
                        <Picture/>
                        <Picture/>
                    </div>
                    <div className="Selected Column Gap-12">
                        <div className="Row Space-Between Align-Items-Center">
                            <div className="Title">펀시티 건대점</div>
                            <div className="Row Gap-4 IconMargin-Right">
                                <div className="Icon"></div> {/* 전화번호 */}
                                <div className="Icon"></div> {/* 저장한 장소 */}
                                <div className="Icon"></div> {/* 공유 (Web은 별도 팝업, Native는 Native) */}
                            </div>
                        </div>
                        <div className="Row Space-Between">
                            <div className="Group-FocusParagraph">
                                <div className="Paragraph Bold">영업중</div> {/* 영업일, 시간 쪽은 리디자인 필요 */}
                                <div className="Paragraph">·</div>
                                <div className="Paragraph">서울 광진구 화양동</div> {/* Active, Focus 별로 다르게 설정 */}
                            </div>
                            <div className="Group-FocusParagraph">
                                <div className="Paragraph">여기서</div>
                                <div className="Paragraph Bold">4.7km</div> {/* Geo */}
                            </div>
                        </div>
                    </div>
                    <div className="Column Gap-16">
                        <div className="OnlyFocus Row Gap-8"> {/* Active 상태에서는 로드하지 않음 */}
                            <Card Class="Card CardSimple" Title="IIDX" Paragraph="2대 (T1)" AccentText="" Accent={ NoAccent } Background={ PreferGame }/>
                            <Card Class="Card CardSimple" Title="SDVX" Paragraph="8대 (L3)" AccentText="" Accent={ NoAccent } Background={ PreferGame }/>
                            <Card Class="Card CardSimple" Title="마이마이" Paragraph="4대" AccentText="" Accent={ NoAccent } Background={ PreferGame }/>
                        </div>
                        <div className="Row Gap-8">
                            <Button Icon="" Title="제보하기"/>
                            <Button Icon="" Title="길찾기"/> {/* 처음 모달창을 띄워서 네이버 지도, 카카오맵 선택 요구, 기억 버튼 존재 (설정에서 변경 가능) */}
                        </div>
                    </div>
                    {/* Focus 상태에서는 여기까지만 보여야 함 */}
                    <div className="Column Gap-16">
                        <ContentTitle Title="알림" Paragraph=""/>
                        <div className="Column Gap-8">
                            <Alert Icon="" Title="투덱에 누가 껌 붙이고 감" Paragraph="오늘 새벽"/>
                            <Alert Icon="" Title="투덱에 누가 껌 붙이고 감" Paragraph="오늘 새벽"/>
                        </div>
                    </div>
                    <div className="Column Gap-16">
                        <ContentTitle Title="보유 중인 기체" Paragraph=""/>
                        <div className="Column Group-Card">
                            <Card Class="Card" Title="IIDX" Paragraph="라이트 1000원, 프리미엄 2000원" Paragraph2="3,5번 기체 방송 가능" AccentText="1대" Accent={ DynamicWater }/>
                            <hr/>
                            <Card Class="Card" Title="IIDX" Paragraph="Fuck" AccentText="88대" Accent={ DynamicWater }/>
                            <hr/>
                            <Card Class="Card" Title="IIDX" Paragraph="Fuck" AccentText="14대" Accent={ DynamicWater }/>
                            <hr/>
                            <Card Class="Card" Title="IIDX" Paragraph="Fuck" AccentText="1대" Accent={ DynamicWater }/>
                            <hr/>
                            <Card Class="Card" Title="IIDX" Paragraph="Fuck" AccentText="1대" Accent={ DynamicWater }/>
                            <hr/>
                            <Card Class="Card" Title="IIDX" Paragraph="Fuck" AccentText="1대" Accent={ DynamicWater }/>
                            <hr/>
                            <Card Class="Card" Title="IIDX" Paragraph="Fuck" AccentText="1대" Accent={ DynamicWater }/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Active;