import React from "react";

export default function Layout({children} : {children: React.ReactNode}) {
    return <div>
        <div className="border-b text-center">
        20% off for the next 30 days
    </div>
    {children}
    </div>
}