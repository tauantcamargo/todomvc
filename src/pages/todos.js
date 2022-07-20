import styled from "styled-components";
import Title from "../components/title";

const TodosContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
`

const TodosContent = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  align-items: start;
  justify-content: center;
`

const Todos = () => {
  return (
    <TodosContainer>
      <TodosContent>
        <Title color={"#af2f2f26"} size="90px" style={{ fontWeight: '100', margin: '20px 0'}}>todos</Title>
      </TodosContent>
    </TodosContainer>
  )
}

export default Todos
