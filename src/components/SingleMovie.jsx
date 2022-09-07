import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom'

const SingleMovie = (props) => {

 
  return (
    <Col className="mb-2">
      <img
        width="40px"
        className={props.class}
        src={props.film.Poster}
        alt="movie"
        key={props.film.imdbID}
      />
      <Link to={"/detail/" + props.film.imdbID}> <Button variant="outline-light ">INFO</Button></Link>
    </Col>
  );
};

export default SingleMovie;