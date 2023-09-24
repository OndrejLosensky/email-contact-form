import React from "react";


/* Automatická změna roku v copyrightu ve footeru*/ 

// z data odebere všechno kromě roku, po změně roku se rok změní
function getYear() {
    return new Date().getFullYear();
}

const CurrentYear = () => {
    
        return (
            <section className="w-[100%]  flex spb-0 text-textColor text-center ">
                <span className="mx-auto text-center text-white">
                     © {getYear()} Losenský Ondřej
                </span>
            </section>
        )
    
}

export default CurrentYear