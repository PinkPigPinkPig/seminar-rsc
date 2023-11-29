import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Box, Card, Container, Stack, Typography } from "@mui/material"
import ToursList from "./components/ToursList"

const BASE_URL = "https://4-natours.vercel.app/api/v1"

function App() {
  const [allTours, setAllTours] = useState([])
  useEffect(() => {
    const url = "http://localhost:8000/api/v1/tours"
    axios({
      url: url,
      method: "get",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTU4ODAzMmU5NDVjMzRhY2RjOTRiYyIsImlhdCI6MTcwMTIyNjYwOSwiZXhwIjoxNzA5MDAyNjA5fQ.uC6vCmCs1VlrWB73kDdQeZV9K-8Ubd0cMw7KkL_2VEo",
      },
    }).then((res) => {
      const tours = res?.data?.data?.tours
      setAllTours(tours)
    })
  }, [])

  console.log({ allTours })

  return (
    <main>
      <Container>
        <Stack spacing={3}>
          <Typography variant='h3'>Tours</Typography>
          <ToursList allTours={allTours} />
        </Stack>
      </Container>
    </main>
  )
}

export default App
