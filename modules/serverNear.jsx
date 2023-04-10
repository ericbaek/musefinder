import React, { useState } from "react";
import ContentTitle from '@/stories/ContentTitle';

export default function serverNear({latitude, longitude}) {
    console.log("서버니어 실행됐음!");
    return (
        <div>
           <ContentTitle Title='알림' Paragraph=''/>
        </div>
    );
}