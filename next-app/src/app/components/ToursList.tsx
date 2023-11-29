import { Box, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"

interface ToursListProps {
  allTours: any[]
}

const ToursList: FC<ToursListProps> = ({ allTours }) => {
  return (
    <Stack spacing={3}>
      {allTours.map((tour: any) => {
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
