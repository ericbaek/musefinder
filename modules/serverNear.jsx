import React, { useState } from "react";
import ContentTitle from '@/stories/ContentTitle';

export default function serverNear({latitude, longitude}) {
    console.log("서버니어 실행됐음!");
    return (
        <div>
            <ContentTitle Title="테스트중입니다." Paragraph="필터"/>
        </div>
    );
}