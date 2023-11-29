import { dbConnect } from "@/services/mongo"
import { Tour } from "@/data/tourModel"
import { Box, Card, Container, Stack, ThemeProvider, Typography } from "@mui/material"
import ToursList from "./components/ToursList"

export default async function Home() {
  // Get a MongoDB connection
  await dbConnect()

  // Get all courses from the db using model
  const allTours = await Tour.find()

  // This gets printed on the server console
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
