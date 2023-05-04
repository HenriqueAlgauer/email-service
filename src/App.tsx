import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/PrimaryInput/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentityMutation } from './hooks/userIdentityMutation'

function App() {
  const { mutate } = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")

  const submit = () =>{
    mutate({
      email,
      firstName,
      lastName
    })
  }

  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            name='firstName'
            label='Nome'
            placeholder='João'
          />
          <PrimaryInput
            value={lastName}
            onChange={event => setlastName(event.target.value)}
            name='lastName'
            label='Sobrenome'
            placeholder='Silva'
          />
        </div>
        <Spacer height='4' />
        <PrimaryInput
          value={email}
          onChange={event => setEmail(event.target.value)} name='email'
          label='Digite seu e-mail'
          placeholder='joaosilva@gmail.com'
        />
        <Spacer height='4' />
        <Button colorScheme='green' width='100%' onClick={submit} >ENVIAR</Button>
      </form>
      <Spacer maxWidth='6'/>
      <div className="product-details">
        <h2>Assinatura mensal</h2>
        <Spacer height='4'/>
        <p>Você irá pagar </p>
        <span>R$ 250,00</span>
        <p>Regras: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia distinctio nostrum</p>
      </div>
    </div>
  )
}

export default App
