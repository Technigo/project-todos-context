// pages/Home.jsx
import styled from 'styled-components'
import { useState } from 'react'
import { useTodoStore } from '../stores/TodoStore'
import { TodoInput } from '../components/TodoInput'
import { TodoList } from '../components/TodoList'
import Lottie from 'lottie-react'
import todoAnimation from '../assets/todo-animation.json'

const Animation = styled.div`
  width: 100%;
  max-width: 400px; 
  margin: 0 auto;
`

const Container = styled.div`
  min-height: 100vh;
  background: #251F30;
  padding: 32px 20px;
`

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: #fff;
  font-size: 28px;
  margin: 20px 0 40px 0;
  font-weight: 500;
  text-align: center;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: left;
  gap: 12px;
  margin-bottom: 32px;

  @media (min-width: 650px) {
    justify-content: center;
  }
`

const FilterButton = styled.button`
  padding: 12px 14px;
  background: ${props => props.active ? '#FFA5FC' : '#fff'};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
`

export const Home = () => {
  const todos = useTodoStore(state => state.todos)
  const [filter, setFilter] = useState('all')

  const completedTodos = todos.filter(todo => todo.completed).length
  const activeTodos = todos.length - completedTodos

  const getFilterLabel = (filterType) => {
    switch(filterType) {
      case 'all':
        return `All (${todos.length})`
      case 'active':
        return `Active (${activeTodos})`
      case 'completed':
        return `Completed (${completedTodos})`
      default:
        return filterType
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <Container>
      <Content>
        <Animation>
          <Lottie 
            animationData={todoAnimation}
            loop={true}
            autoplay={true}
          />
        </Animation>
        <Title>Here are today's tasks:</Title>
        <TodoInput />
        <FilterContainer>
          {['all', 'active', 'completed'].map((filterType) => (
            <FilterButton
              key={filterType}
              active={filter === filterType}
              onClick={() => setFilter(filterType)}
            >
              {getFilterLabel(filterType)}
            </FilterButton>
          ))}
        </FilterContainer>
        <TodoList todos={filteredTodos} />
      </Content>
    </Container>
  )
}
