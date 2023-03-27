// Focus JS

import React, { useState } from 'react';
import '../DesignSystem/Import.js';

import '../DesignSystem/CSS/Selected.css';
import Button from '../DesignSystem/Component/In-Content/Button';
import Card from '../DesignSystem/Component/In-Content/Card';

/* Card */
/* Right Accent 미사용 시 { NoAccent } 처리 */
var NoAccent = { display : 'none' }

function Focus() {
		return (
            <div className="General">
                <div className="MainActivity"> { /* 메인 액티비티 */ }
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
                </div>
            </div>
    );
}

export default Focus;