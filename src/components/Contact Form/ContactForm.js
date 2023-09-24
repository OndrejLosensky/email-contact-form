import React from "react";

const ContactForm = () => {
    return (
        <div>
            <h2 className="text-6xl text-slate-700 font-bold text-center mt-8 uppercase"> šablona pro kontaktní formulář</h2>
            
            
            <div className="flex items-center justify-center">
                <div className="bg-gray-100 p-8 rounded-[30px] shadow-2xl duration-300 w-[70%] h-[60%] mt-8 ">
                    <h1 className="text-3xl text-blue-500 font-semibold mb-4"> Kontaktní formulář</h1>
                    <form>
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">Jméno</label>
                            <input type="text" id="name" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" placeholder="Vaše jméno" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">E-mail</label>
                            <input type="email" id="email" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" placeholder="Váš e-mail"/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium">Zpráva (nepovinná)</label>
                            <textarea id="message" rows="4" className="w-full h-[200px] max-h-[250px] border border-gray-300 rounded px-3 py-2" placeholder="Vaše zpráva"></textarea>
                        </div>
                                
                        <div className="text-right mt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 hover:-translate-y-1 duration-300">
                                    Odeslat
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactForm