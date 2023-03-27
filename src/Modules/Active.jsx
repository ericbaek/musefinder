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
var DynamicWater = { background : 'var(--color-dynamic-water)', color : 'white' }

function Active() {
    const scrollRef = useHorizontalScroll();
		return (
            <div className="Active MainActivity"> { /* 메인 액티비티 */ }
                <div className="Group-Picture" ref={scrollRef}>
                    <Picture/>
                    <Picture/>
                    <Picture/>
                </div>
                <div className="Selected Column Gap-12">
                    <div className="Row Space-Between Align-Items-Center">
                        <div className="Title">펀시티 건대점</div>
                        <div className="Row Gap-4 IconMargin-Right">
                            <div className="Icon"></div>
                            <div className="Icon"></div>
                            <div className="Icon"></div>
                        </div>
                    </div>
                    <div className="Row Space-Between">
                        <div className="Group-FocusParagraph">
                            <div className="Paragraph Bold">영업중</div>
                            <div className="Paragraph">·</div>
                            <div className="Paragraph">서울 광진구 화양동</div>
                        </div>
                        <div className="Group-FocusParagraph">
                            <div className="Paragraph">여기서</div>
                            <div className="Paragraph Bold">4.7km</div>
                        </div>
                    </div>
                </div>
                <div className="Column Gap-16">
                    <div className="Row Gap-8">
                        <Card Title="펀시티 건대점" Paragraph="123" AccentText="" Accent={ NoAccent }/>
                        <Card Title="펀시티 건대점" Paragraph="123" AccentText="" Accent={ NoAccent }/>
                        <Card Title="펀시티 건대점" Paragraph="123" AccentText="" Accent={ NoAccent }/>
                    </div>
                    <div className="Row Gap-8">
                        <Button Icon="" Title="제보하기"/>
                        <Button Icon="" Title="길찾기"/>
                    </div>
                </div>
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
                        <Card Title="IIDX" Paragraph="Fuck" AccentText="1대" Accent={ DynamicWater }/>
                        <hr/>
                        <Card Title="IIDX" Paragraph="Fuck" AccentText="1대" Accent={ DynamicWater }/>
                        <hr/>
                        <Card Title="IIDX" Paragraph="Fuck" AccentText="1대" Accent={ DynamicWater }/>
                        <hr/>
                        <Card Title="IIDX" Paragraph="Fuck" AccentText="1대" Accent={ DynamicWater }/>
                    </div>
                </div>
            </div>
    );
}

export default Active;