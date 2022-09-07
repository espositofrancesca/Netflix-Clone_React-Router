import { Component } from "react";
import FilmList from "./FilmList";


class MyBody extends Component {
  state = {
    harrypotter: [],
    batman: [],
    potCaribbean: [],
  };

  componentDidMount = async () => {
    try {
      let firstResponse = await fetch(
        "https://www.omdbapi.com/?apikey=f0c48b76&s=harry%20potter"
      );
      if (firstResponse.ok) {
        let film = await firstResponse.json();
        this.setState({ harrypotter: film.Search });
        console.log(film);
      } else {
        console.log("error");
      }
      let secondResponse = await fetch(
        "https://www.omdbapi.com/?apikey=f0c48b76&s=batman"
      );
      if (secondResponse.ok) {
        let films = await secondResponse.json();
        this.setState({ batman: films.Search });
      } else {
        console.log("error");
      }
      let thirdresponse = await fetch(
        "https://www.omdbapi.com/?apikey=f0c48b76&s=Pirates%20of%20the%20Caribbean"
      );
      if (thirdresponse.ok) {
        let film = await thirdresponse.json();
        this.setState({ potCaribbean: film.Search });
        console.log(film);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error.value);
    }
  };

  render() {
    return (
     <div className="mycontainer" >
      {/* fatto lo slice per una questione prettamente grafica */}
     <FilmList
        titolo = "Harry Potter"
        film={this.state.harrypotter.slice(0, 6)}/>
         <FilmList
        titolo = "Batman"
        film={this.state.batman.slice(0, 6)}/>
         <FilmList
        titolo = "Pirates of the Caribbean"
        film={this.state.potCaribbean.slice(0, 6)}/>
     </div>
    );
  }
}

export default MyBody;
