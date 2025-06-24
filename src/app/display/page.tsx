"use client";

import React, { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic'
const Display = dynamic(
    () => import("@/section/Display/Display"),
    { ssr: false },
);

const DisplayOptions = () => {
    return (
        <div>
            <Display/>
        </div>
    )
}

export default DisplayOptions;