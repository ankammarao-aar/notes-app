// Write your code here
import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  Form,
  Input,
  Textarea,
  Button,
  ListContainer,
  ItemContainer,
  Image,
  Text,
  Para,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeNote = event => setNote(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {
      id: uuidV4(),
      title,
      note,
    }
    setNoteList(prev => [...prev, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>

      <Form onSubmit={onSubmitForm}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <Textarea
          rows="3"
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeNote}
        />
        <Button type="submit">Add</Button>
      </Form>

      {noteList.length > 0 ? (
        <ListContainer>
          {noteList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </ListContainer>
      ) : (
        <ItemContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Text>No Notes Yet</Text>
          <Para>Notes you add will appear here</Para>
        </ItemContainer>
      )}
    </MainContainer>
  )
}

export default Notes
