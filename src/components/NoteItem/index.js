// Write your code here

import {Title, Text, Card} from './styledComponents'

const NoteItem = props => {
  const {data} = props
  const {title, note} = data
  console.log(title, data)
  return (
    <Card>
      <Title>{title}</Title>
      <Text>{note}</Text>
    </Card>
  )
}

export default NoteItem
