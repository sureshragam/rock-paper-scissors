import {HeaderBoard, ScoreCard, Title, Score} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderBoard>
      <div>
        <Title>
          Rock
          <br />
          Paper
          <br />
          Scissors
        </Title>
      </div>
      <ScoreCard>
        <Score>score</Score>
        <Score>{score}</Score>
      </ScoreCard>
    </HeaderBoard>
  )
}

export default Header
