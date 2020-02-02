import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import heroes from "./hots-heroes.json";

class App extends Component {
  state = {
    heroes:shuffle(heroes),
    score:0,
    bestScore:0
  };

  clickHero = id => {
    let score = this.state.score;
    let bestScore = this.state.bestScore;
    let heroes = shuffle(this.state.heroes);

    for(let hero of heroes){
      if(hero.attribute_id === id){
        if(hero.clicked){
          score = 0;
          heroes = resetHeroes(heroes)
        } else{
          hero.clicked=true;
          score++;
          if(score>bestScore)bestScore=score;
        }
      }
    };
    this.setState({ heroes,score,bestScore });
  };

  render() {
    return (
      <div>
        <Wrapper>
          {this.state.heroes.map(hero => (
            <HeroCard
              clickHero={this.clickHero}
              id={hero.attribute_id}
              key={hero.attribute_id}
              name={hero.name}
              image={hero.icon_url["92x93"]}
              shortName={hero.short_name}
            />
          ))}
        </Wrapper>
        <nav className="navbar fixed-bottom navbar-dark bg-dark text-light">
          <span className="navbar-brand nav-link">Instructions</span>
          <div className="nav-item">
            <span className="navbar-text">Score: {this.state.score}</span>
            <span className="navbar-text">&nbsp;&nbsp;Best Score: {this.state.bestScore}</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

// Function to reset heroes to unclicked
function resetHeroes(heroes){
  for(let hero of heroes){
    hero.clicked=false;
  }
  return heroes;
}

// Function to shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}