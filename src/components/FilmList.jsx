import { Component } from "react";
import SingleMovie from "./SingleMovie";

class FilmList extends Component {
  render() {
    return (
      <div className="mt-5">
        <h3 className="mb-2"> {this.props.titolo}</h3>
        <div className="d-flex flex-wrap">
          {this.props.film.map((film) => (
            <SingleMovie film={film} class="box-image" />
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default FilmList;
