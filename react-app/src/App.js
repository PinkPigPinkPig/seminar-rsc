import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Box, Card, Container, Stack, Typography } from "@mui/material"
import ToursList from "./components/ToursList"
import AddTour from "./components/AddTour"

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTU4ODAzMmU5NDVjMzRhY2RjOTRiYyIsImlhdCI6MTcwMTIyNjYwOSwiZXhwIjoxNzA5MDAyNjA5fQ.uC6vCmCs1VlrWB73kDdQeZV9K-8Ubd0cMw7KkL_2VEo"

function App() {
  const [allTours, setAllTours] = useState([])
  useEffect(() => {
    const url = "http://localhost:8000/api/v1/tours"
    axios({
      url: url,
      method: "get",
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      const tours = res?.data?.data?.tours
      setAllTours(tours)
    })
  }, [])

  const addTourToDB = (data) => {
    const url = "http://localhost:8000/api/v1/tours"
    axios({
      url: url,
      method: "post",
      data: data,
      headers: {
        Authorization: token,
      },
    })
  }

  console.log({ allTours })

  return (
    <main>
      <Container>
        <Stack spacing={3}>
          <Typography variant='h3'>Tours</Typography>
          <ToursList allTours={allTours} />
          <AddTour addTourToDB={addTourToDB} />
        </Stack>
      </Container>
    </main>
  )
}

export default App
