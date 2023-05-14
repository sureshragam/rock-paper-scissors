import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'

import {
  GameContainer,
  GamePlay,
  CustomGameButton,
  GameImage,
  ScoreCard,
  User,
  Heading,
  Opponent,
  Result,
  CustomButton,
  Rules,
  GameRulesImage,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    showScoreCard: false,
    userChoice: '',
    computerChoice: '',
    winner: '',
  }

  onClickChoice = id => {
    const {choicesList} = this.props
    const computerChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    const userChoice = id
    if (userChoice === computerChoice) {
      console.log(
        `user choice: ${userChoice}, computer choice: ${computerChoice}`,
      )
      console.log('draw')
      this.setState({
        showScoreCard: true,
        userChoice,
        computerChoice,
        winner: 'draw',
      })
    } else if (
      (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
      (userChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
      (userChoice === 'PAPER' && computerChoice === 'ROCK')
    ) {
      console.log(
        `user choice: ${userChoice}, computer choice: ${computerChoice}`,
      )
      console.log('user win')
      this.setState(prevState => ({
        score: prevState.score + 1,
        showScoreCard: true,
        userChoice,
        computerChoice,
        winner: 'user',
      }))
    } else {
      console.log(
        `user choice: ${userChoice}, computer choice: ${computerChoice}`,
      )
      console.log('computer win')
      this.setState(prevState => ({
        score: prevState.score - 1,
        showScoreCard: true,
        userChoice,
        computerChoice,
        winner: 'opponent',
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({showScoreCard: false})
  }

  getWinnerDetails = winner => {
    switch (winner) {
      case 'user':
        return 'YOU WON'
      case 'opponent':
        return 'YOU LOSE'
      default:
        return 'IT IS DRAW'
    }
  }

  render() {
    const {
      score,
      userChoice,
      computerChoice,
      showScoreCard,
      winner,
    } = this.state
    const {choicesList} = this.props

    const userImage =
      choicesList[
        choicesList.findIndex(eachChoice => eachChoice.id === userChoice)
      ]
    const computerImage =
      choicesList[
        choicesList.findIndex(eachChoice => eachChoice.id === computerChoice)
      ]
    return (
      <GameContainer>
        <Header score={score} />
        {showScoreCard ? (
          <ScoreCard>
            <User>
              <Heading>YOU</Heading>
              <GameImage src={userImage.imageUrl} alt="your choice" />
            </User>
            <Result>
              <Heading as="p">{this.getWinnerDetails(winner)}</Heading>
              <CustomButton onClick={this.onPlayAgain}>PLAY AGAIN</CustomButton>
            </Result>
            <Opponent>
              <Heading>OPPONENT</Heading>
              <GameImage src={computerImage.imageUrl} alt="opponent choice" />
            </Opponent>
          </ScoreCard>
        ) : (
          <GamePlay>
            {choicesList.map(eachChoice => {
              const {id} = eachChoice
              const onClickButton = () => {
                this.onClickChoice(id)
              }
              console.log(`${id.toLowerCase()}Button`)

              return (
                <CustomGameButton
                  key={id}
                  onClick={onClickButton}
                  data-testid={`${id.toLowerCase()}Button`}
                >
                  <GameImage src={eachChoice.imageUrl} alt={id} />
                </CustomGameButton>
              )
            })}
          </GamePlay>
        )}
        <Popup trigger={<CustomButton rule>Rules</CustomButton>} modal>
          {close => (
            <Rules>
              <CustomButton popup type="button" onClick={close}>
                <RiCloseLine />
              </CustomButton>
              <GameRulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </Rules>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default Game
