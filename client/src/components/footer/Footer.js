import React from "react";
import CurrentYear from "./CurrentYear";


/* FOOTER sekce*/

const Footer = () => {

    return (
        <section>       
            <footer className="bg-gray-900 text-bodyColor p-4 mt-12" style={{borderTopLeftRadius: '35px', borderTopRightRadius: '35px'}}>
                <div className="container mx-auto flex justify-center items-center"> 
                    <div className="text-center font-semibold">
                         <CurrentYear/>
                    </div>    
                </div>
            </footer>
        </section>
    )
}

export default Footer