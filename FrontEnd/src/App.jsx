import { Button } from "@chakra-ui/react"
import { Switch } from "@chakra-ui/react"

function App() {

  return (
    <>
    <Button>
      Click me
    </Button>
    <Stack align='center' direction='row'>
  <Switch size='sm' />
  <Switch size='md' />
  <Switch size='lg' />
</Stack>
    </>
  )
}

export default App
