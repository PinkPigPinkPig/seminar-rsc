import { Box, Button, Modal, Stack } from "@mui/material"
import React, { FC, useState } from "react"
import AddTourForm from "./AddTourForm"

const AddTour = ({ addTourToDB }) => {
  const [showModal, setShowModal] = useState(false)

  const handleClickAddTour = () => {
    setShowModal(true)
  }

  const add = async (data) => {
    await addTourToDB(data)
    setShowModal(false)
  }
  return (
    <Stack spacing={3}>
      <Box>
        <Button onClick={handleClickAddTour}>Add Tour</Button>
      </Box>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box sx={style}>
          <AddTourForm saveAction={add} />
        </Box>
      </Modal>
    </Stack>
  )
}

export default AddTour

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}
