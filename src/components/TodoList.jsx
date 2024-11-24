// components/TodoList.jsx
import styled from 'styled-components'
import { TodoItem } from './TodoItem'
import { EmptyState } from './EmptyState'

const ListContainer = styled.div`
  background: white;
  border-radius: 32px;
  padding: 24px;
  margin-top: 24px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TodoList = ({ todos }) => {
  return (
    <ListContainer>
      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        <List>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      )}
    </ListContainer>
  )
}