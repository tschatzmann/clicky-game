import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/title";
import gameImage from "./GameImages.json";
import Instructions from "./components/Instructions"

class App extends Component {
    state = {
        gameImage,
        gameImageClicked: gameImage,
        score: 0,
    
    };





    clickGame = (id, click) => {
        //clicking on a gameImage 
        const gameImageClicked = this.state.gameImageClicked.filter(
            gameImageClicked => gameImageClicked.id !== id
        );

        this.setState({ gameImageClicked });
        console.log(gameImageClicked + "clicked");
        this.scoreCard(click);
        //shuffle
        this.shufflegameImages(gameImage)
    };

    scoreCard = click => {
        //let score = 0
        if(this.state.gameImageClicked.includes(click)){
            //logic to clear right  now
                this.setState({score: this.state.score +1 });
                alert("Yay you got a point!")



        }else{
            
            this.setState({ score: 0 }) 
            alert("You lose!")
            this.setState({ gameImageClicked: gameImage });
            this.setState({score: 0,});

        } 

    };

    shufflegameImages = (gameImageClicked) => {
        for (let i = gameImageClicked.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gameImageClicked[i], gameImageClicked[j]] = [gameImageClicked[j], gameImageClicked[i]];
        }
    };

    render() {
//console.log(this.state.gameImageClicked)
console.log(this.state.score);
        return (
            <Wrapper>
                {<Title> Clicky Game - Click on an Image to Begin - Score: {this.state.score}</Title>}
                {<Instructions> Click on an image to earn points, but don't click on the same one twice!  </Instructions>}
                {this.state.gameImage.map(gameImage => (
                    <GameCard
                        image={gameImage.image}
                        clickGame={this.clickGame}
                        id={gameImage.id}
                        key={gameImage.id}
                        click={gameImage}
                    />
                ))}
            </Wrapper>
        );
    }

}

export default App;