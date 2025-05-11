import React from "react";

export const Progressbar = ({progress, color}: { progress: number, color: string }) => {
    return <div className="mt-1 w-full h-2 rounded-xl relative bg-gray-300">
        <div style={{backgroundColor: color, width: `${progress}%`}} className="top-0 h-2 rounded-xl absolute">
        </div>
    </div>
}