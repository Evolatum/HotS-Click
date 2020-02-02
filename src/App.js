import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import heroes from "./hots-heroes.json";

class App extends Component {
  state = {
    heroes
  };

  render() {
    return (
      <Wrapper>
        <Title>Heroes of the Storm!</Title>
        {this.state.heroes.map(hero => (
          <HeroCard
            removeHero={this.removeHero}
            id={hero.attribute_id}
            key={hero.attribute_id}
            name={hero.name}
            image={hero.icon_url["92x93"]}
            shortName={hero.short_name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;