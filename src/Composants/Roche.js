import { useEffect, useState } from 'react'
import { Button, Container, Divider, Message } from 'semantic-ui-react'

const Roche = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['roche', 'papier', 'ciseau']

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case 'ciseaupapier':
        case 'rocheciseau':
        case 'papierroche':
          setResult('Vous avez Gagner!')
          break
        case 'papierciseau':
        case 'ciseauroche':
        case 'rochepapier':
          setResult('Vous avez perdu...')
          break
        case 'rocheroche':
        case 'papierpapier':
        case 'ciseauciseau':
          setResult('- Match nul -')
          break
      }
    }
  }, [computerChoice, userChoice])

  return (
    <>
      <h1 style={{ color: "antiquewhite", textAlign: "center" }}>Roche Papier Ciseau</h1>
      <h3 style={{ color: "antiquewhite" }}>Votre choix : {userChoice}</h3>
      {choices.map((choice, index) =>
        <Button primary key={index} onClick={() => handleClick(choice)}>
          {choice}
        </Button>
      )}
      <h3 style={{ color: "antiquewhite" }} >L'ordi : {computerChoice}</h3>

      <Divider horizontal></Divider>

      {result == "Vous avez Gagner!" ? <Message color='yellow'>Résultat : {result}</Message> : <Message color='red'>Résultat : {result}</Message>}
    </>
  )
}

export default Roche;
