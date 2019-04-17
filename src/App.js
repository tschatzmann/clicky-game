import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import gameImages from "./GameImages.json";

  


class App extends Component {
  state = {
    gameImages
  };

clickGame = id => {

 alert('click game')
};

render() {
  return (
    <Wrapper>
      <h1 className="title">Dexter And Friends2</h1>
      {this.state.gameImages.map(
        gameImages => (
          <GameCard
          clickGame={this.clickGame}
          id={gameImages.id}
          image={gameImages.image}
          />
        )
      )}

    </Wrapper>
  );
}
}

export default App;
