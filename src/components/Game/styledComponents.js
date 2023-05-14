import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  padding: 50px 30px;
  min-height: 100vh;
`
export const GamePlay = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
  flex-wrap: wrap;
  min-height: 500px;
`
export const CustomGameButton = styled.button`
  background-color: transparent;
  border-style: none;
  width: 275px;
  cursor: pointer;
`
export const GameImage = styled.img`
  width: 100%;
`
export const ScoreCard = styled(GamePlay)`
  width: 60%;
  padding: 10px 20px;
`
export const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  width: 200px;
`
export const Opponent = styled(User)``
export const Heading = styled.h1`
  text-align: center;
  font-size: 25px;
  margin-bottom: 5px;
  color: white;
`
export const Result = styled(User)`
  align-self: flex-end;
`
export const CustomButton = styled.button`
  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border-style: none;
  outline: none;
  margin-left: ${props => (props.rule || props.popup ? 'auto' : null)};
  display: block;
  cursor: pointer;
  font-size: ${props => (props.popup ? '20px' : null)};
`
export const Rules = styled.div`
  width:100%
  padding: 50px 50px;
  text-align: center;
 
`
export const GameRulesImage = styled.img`
  width: 80%;
`
