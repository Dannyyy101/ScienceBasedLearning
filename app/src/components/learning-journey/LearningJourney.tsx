'use client'

import React from "react";

export const LearningJourneyView = () => {

    return (<section className={"relative  w-96 h-96"}>
        <LearningNode name={"test"} xPosition={0} yPosition={0} nextNodePosition={{x: 200, y: 200}} learned={true}/>
        <LearningNode name={"test"} xPosition={200} yPosition={200} nextNodePosition={{x: 0, y: 400}} learned={true}/>
        <LearningNode name={"test"} xPosition={0} yPosition={400}/>
    </section>)
}

interface LearningNodeProps {
    name: string;
    xPosition: number;
    yPosition: number;
    learned?: boolean;
    nextNodePosition?: { x: number, y: number }
}

const LearningNode: React.FC<LearningNodeProps> = ({name, yPosition, xPosition, nextNodePosition, learned}) => {
    let width = 0;
    let rotation = 0;
    if (nextNodePosition) {
        width = Math.sqrt(Math.pow(Math.abs(yPosition - nextNodePosition.y), 2) + Math.pow(Math.abs(xPosition - nextNodePosition.x), 2));
        rotation = Math.atan((Math.abs(yPosition - nextNodePosition.y) - 40) / (Math.abs(xPosition - nextNodePosition.x) - 40)) * (180 / Math.PI);
    }

    if (xPosition !== 0) {
        rotation = 180 - rotation;
    }

    return (<>
        <div style={{left: `${xPosition}px`, top: `${yPosition}px`}}
             className={"absolute flex items-center -translate-y-1/2 -translate-x-1/2 z-10"}>
            <h2></h2>
            <button className={"rounded-full bg-fg w-20 h-20 shadow-2xl"}
                    onClick={() => alert("clicked")}>
            </button>
        </div>
        {learned &&
            <div className={"absolute h-1 bg-black -translate-y-1/2 z-0"}
                 style={{
                     transformOrigin: "top left",
                     rotate: `${rotation}deg`,
                     top: `${yPosition}px`,
                     left: `${xPosition}px`,
                     width: `${width}px`
                 }}>
            </div>}
    </>)
}