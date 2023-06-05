// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Header,
  Input,
  Form,
  Button,
  ItemContainer,
  Text,
  Input1,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])
  const onTitle = event => {
    setTitle(event.target.value)
  }
  const onNote = event => {
    setNote(event.target.value)
  }

  const onNoteList = event => {
    event.preventDefault()
    const newItem = {
      id: uuidv4(),
      title,
      note,
    }
    setNoteList(prevList => [...prevList, newItem])
  }
  const len = noteList.length

  return (
    <MainContainer>
      <Header>Notes</Header>
      <Form onSubmit={onNoteList}>
        <Input
          type="text"
          placeholder="Title"
          onChange={onTitle}
          value={title}
        />
        <Input1 placeholder="Take a Note..." onChange={onNote} value={note} />
        <Button type="submit">add</Button>
      </Form>
      {len === 0 ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Header>No Notes Yet</Header>
          <Text>Notes you add will appear here</Text>
        </div>
      ) : (
        <ItemContainer>
          {noteList.map(each => (
            <NoteItem data={each} key={each.id} />
          ))}
        </ItemContainer>
      )}
    </MainContainer>
  )
}
export default Notes
