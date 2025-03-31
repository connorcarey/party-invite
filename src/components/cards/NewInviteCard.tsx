"use client"

import CardLayout from "./CardLayout";

export default function NewInviteCard() {
    return (
        <CardLayout>
            <button onClick={() => console.log("clicked!")} className="h-full w-full">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 58.921 90 H 31.079 c -1.155 0 -2.092 -0.936 -2.092 -2.092 V 2.092 C 28.988 0.936 29.924 0 31.079 0 h 27.841 c 1.155 0 2.092 0.936 2.092 2.092 v 85.817 C 61.012 89.064 60.076 90 58.921 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<path d="M 90 31.079 v 27.841 c 0 1.155 -0.936 2.092 -2.092 2.092 H 2.092 C 0.936 61.012 0 60.076 0 58.921 V 31.079 c 0 -1.155 0.936 -2.092 2.092 -2.092 h 85.817 C 89.064 28.988 90 29.924 90 31.079 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</svg>
            </button>
        </CardLayout>
    )
}