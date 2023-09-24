import React from "react";
import CurrentYear from "./CurrentYear";
import VerticalSeparator from "./VerticalSeparator";
//import ScrollToTop2 from "./ScrollToTop";

/* FOOTER sekce*/

const Footer = () => {

    const clickHandlerDeveloped = () => {
        alert("Jak vznikal tento web...");
    }

    const clickHandlerCreateByMe = () => {
        alert("Tento web jsem vytvořil já...")
    }

    return (
        <section>       
            {/* Spodní část FOOTERu, zde se nachází copyright a GDPR*/}  
            <footer className="bg-gray-900 text-bodyColor p-4" style={{borderTopLeftRadius: '35px', borderTopRightRadius: '35px'}}>
                <div className="container mx-auto flex justify-center items-center"> 
                    <p className="text-center font-semibold">
                         <CurrentYear/> {/*Už ne. Stačilo smazat padding-bottom-4*/} {/*Zavola Funkci CurrentYear ve které se automaticky mění daný rok, a obsahuje copyright se jménem*/}
                    </p>    
                </div>
            </footer>

        </section>
    )
}

export default Footer