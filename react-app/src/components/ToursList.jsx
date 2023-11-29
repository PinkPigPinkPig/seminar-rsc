import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'

const ToursList = ({allTours}) => {
  return (
    <Stack spacing={3}>
      {allTours.map((tour) => {
        return (
          <Link
            key={tour._id}
            href={`/tours/${tour._id}`}
            style={{ textDecoration: "none" }}
          >
            <Box>
              <img
                src={tour.imageCover}
                width={500}
                height={300}
                alt={tour.name}
              />
              <Typography variant='h4'>{tour.name}</Typography>
              <Typography>{tour.ratingsAverage}</Typography>
            </Box>
          </Link>
        )
      })}
    </Stack>
  )
}

export default ToursList