import LinearStepper from './LinearStepper'
import {CssBaseline, Container, Paper, Box} from '@mui/material'
import {} from '@mui/styles'

const EventForm = () => {
  return (
      <>
    <CssBaseline/>
    <Container component={Box}>
    <Paper component={Box} p={3}>
        <LinearStepper />
    </Paper>
    </Container>
      </>
  )
}

export default EventForm