
import { Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Box minH={"100vh"}>
        {Navbar}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
