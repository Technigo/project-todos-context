// components/EmptyState.tsx
import styled from 'styled-components'
import Lottie from 'lottie-react'
import tumbleweedAnimation from '../assets/tumbleweed.json'

const Container = styled.div`
  text-align: center;
  padding: 28px 20px;
  color: #3E0B9D;
  opacity: 0.7;
`

const AnimationContainer = styled.div`
  max-width: 250px; 
  max-height: 120px; 
  margin: 0 auto 16px;
  align-content: center;
`

const Text = styled.p`
  font-size: 18px;
  margin: 0;
`

export const EmptyState = () => (
  <Container>
    <AnimationContainer>
      <Lottie 
        animationData={tumbleweedAnimation}
        loop={true}
        autoplay={true}
      />
    </AnimationContainer>
    <Text>No tasks yet! Add your first task above.</Text>
  </Container>
)
