import React, { useState } from 'react';

const [showActiveActivity, setActiveActivity] = useState(false);
const [showMainActivity, setMainActivity] = useState(true);
export {showActiveActivity, showMainActivity}
export default function ActiveClick() {
    setActiveActivity(true);
}