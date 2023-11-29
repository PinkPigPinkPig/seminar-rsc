import { Button, Stack, TextField, Typography } from "@mui/material"
import React, { FC, useState } from "react"

const AddTourForm = ({ saveAction }) => {
  const [formValues, setFormValues] = useState({})
  const handleSubmit = (event) => {
    // event.preventDefault()
    const elements = event.target.elements
    console.log({elements})
    const data = {
        name: elements.name.value,
        duration: Number(elements.duration.value),
        maxGroupSize: Number(elements.maxGroupSize.value),
        difficulty: elements.difficulty.value,
        price: Number(elements.price.value),
        imageCover: elements.imageCover.value,
        summary: elements.summary.value,
        description: elements.description.value,
        ratingsAverage: 4.5,
      }
    console.log(data)
    saveAction(data)
  }
  return (
    <Stack spacing={3} component='form' onSubmit={handleSubmit}>
      <Typography variant='h4'>Add Tour Form</Typography>
      <TextField
        name='name'
        placeholder='Type name'
        label='Name of the tour'
        required
      />
      <TextField
        name='duration'
        placeholder='Type duration'
        label='Duration'
        required
      />
      <TextField
        name='maxGroupSize'
        placeholder='Type max group size'
        label='Max group size'
        required
      />
      <TextField
        name='difficulty'
        placeholder='Type difficulty'
        label='Difficulty'
        required
      />
      <TextField name='price' placeholder='Type price' label='Price' required />
      <TextField
        name='imageCover'
        placeholder='Type image url'
        label='Image'
        required
      />
      <TextField
        name='summary'
        placeholder='Type summary'
        label='Summary'
        required
        minRows={3}
      />
      <TextField
        name='description'
        placeholder='Type description'
        label='Description'
        required
      />
      <Button type='submit'>Add Tour</Button>
    </Stack>
  )
}

export default AddTourForm
