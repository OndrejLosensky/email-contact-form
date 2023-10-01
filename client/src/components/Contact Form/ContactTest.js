import React, { Component } from 'react';
import axios from 'axios'

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
      name:e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email:e.target.value
    })
  }

  handleMessage = (e) => {
    this.setState({
      message:e.target.value
    })
  }

  // odesílání formuláře

  formSubmit = (e) => {
    e.preventDefault();

    let data = { 
      name:this.state.name, 
      email:this.state.email,
      message:this.state.message
    }
   
    axios.post('/api/forma', data)
    .then(res=>{
      this.setState({
        sent:true,
        
      },this.resetForm(), console.log('Zpráva úspěšně odeslána!'), alert('Úspěšně odesláno'))
    } )
    .catch(() => {
      console.log("Při odesílání se vyskytl error!!!")
    })

  }

  // Resetování dat ve formuláři

  resetForm = () => {
    this.setState({
      email: '',
      name: '',
      message: ''
    })

    setTimeout(() => {
      this.setState({
        sent:false,
      })
    }, 3000)
  }

  render() {
    return (
    <section>

        <div>
          <div>
            <h2 className="text-3xl text-slate-700 font-bold text-center mt-8 uppercase"> šablona pro kontaktní formulář</h2>
          </div>
              <div>

                <div className='flex items-center justify-center'>
                    <div className='bg-gray-100 p-6 rounded-[35px] shadow-2xl duration-300 w-[30%] h-[80%] mt-2'>
                        <h1 className="text-3xl text-blue-500 font-semibold mb-2 text-center uppercase"> Kontaktní formulář</h1>

                        <form onSubmit={this.formSubmit}>
                            <div>
                                <label htmlFor="name" className='block text-gray-700 font-medium uppercase'> Jméno:</label>
                                <input
                                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4 hover:border-black " 
                                    placeholder="Vaše jméno"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleName}
                                    
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium uppercase">E-mail:</label>
                                <input
                                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4 hover:border-black" 
                                    placeholder="Váš e-mail"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleEmail}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium uppercase">Zpráva (nepovinná)</label>
                                <textarea
                                    className="w-full h-[200px] max-h-[250px] border border-gray-300 rounded px-3 py-2 hover:border-black" 
                                    placeholder="Vaše zpráva"
                                    id="message"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleMessage}
                                ></textarea>
                            </div>

                              {/* Potřeba vytvořit proměnnou, která zobrazí že se zpráva úspěšně odeslala*/}
                            

                            <div className='text-center mt-2'>
                                <button 
                                    type="submit" 
                                    className="bg-blue-500 w-full text-white px-6 py-2 rounded-lg 
                                    hover:bg-blue-600 hover:-translate-y-1 duration-300" >
                                        Odeslat
                                </button>
                            </div>
        
                        </form>
                    </div>
                  </div>
                </div>
        </div>
    

    </section>
    );
  }
}
