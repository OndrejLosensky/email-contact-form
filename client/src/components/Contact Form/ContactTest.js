import React, { Component } from 'react';

export default class ContactForm extends Component {
  
  state = {
    email: '',
    name: '',
    message: '',
    sent:false
  }


  // Ukládání vstupů do funkce Handle
  handleName = (e) => {
    this.setState({
      name:e.target.name
    })
  }

  handleEmail = (e) => {
    this.setState({
      email:e.target.email
    })
  }

  handleMessage = (e) => {
    this.setState({
      message:e.target.message
    })
  }

  render() {
    return (
    <section>

   
        <div>
            <h2 className="text-5xl text-slate-700 font-bold text-center mt-8 uppercase "> šablona pro kontaktní formulář</h2>

                <div className='flex items-center justify-center'>
                    <div className='bg-gray-100 p-6 rounded-[35px] shadow-2xl duration-300 w-[70%] h-[80%] mt-2'>
                        <h1 className="text-3xl text-blue-500 font-semibold mb-2"> Kontaktní formulář</h1>

                        <form >
                            <div>
                                <label htmlFor="name" className='block text-gray-700 font-medium'> Jméno:</label>
                                <input
                                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4 hover:border-black " 
                                    placeholder="Vaše jméno"
                                    type="text"
                                    id="name"
                                    name="name"
                                    
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium">E-mail:</label>
                                <input
                                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4 hover:border-black" 
                                    placeholder="Váš e-mail"
                                    type="email"
                                    id="email"
                                    name="email"
                                    
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium">Zpráva (nepovinná)</label>
                                <textarea
                                    className="w-full h-[200px] max-h-[250px] border border-gray-300 rounded px-3 py-2 hover:border-black" 
                                    placeholder="Vaše zpráva"
                                    id="message"
                                    name="message"
                                    
                                ></textarea>
                            </div>

                            <div className='text-right mt-2'>
                                <button 
                                    type="submit" 
                                    className="bg-blue-500 text-white px-6 py-2 rounded-full 
                                    hover:bg-blue-600 hover:-translate-y-1 duration-300" >
                                        Odeslat
                                </button>
                            </div>
        
                        </form>
                    </div>
                </div>
        </div>
    

    </section>
    );
  }
}
