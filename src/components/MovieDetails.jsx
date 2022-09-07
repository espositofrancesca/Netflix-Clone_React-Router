import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);

  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fDetaild = async () => {
      try {
        let response = await fetch(
          "https://www.omdbapi.com/?apikey=f0c48b76&i=" + params.filmId
        );
        if (response.ok) {
          let data = await response.json();
          setDetails(data);
          console.log(data);
        } else {
          console.log("error details");
        }
      } catch (error) {
        console.log(error.value);
      }
    };
    const fComment = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            params.filmId,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4YWQ0MGEyM2M4MzAwMTUzNjhmMWEiLCJpYXQiOjE2NjI1NjE2MDEsImV4cCI6MTY2Mzc3MTIwMX0.7w6dvcl2VrcE9l_4SlJv_Nk7Q6gK4edP3Dtom0KRq_o",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          setComments(data);
          console.log(data);
        } else {
          console.log("error comment");
        }
      } catch (error) {
        console.log(error.value);
      }
    };
    fDetaild();
    fComment();
  }, [params.filmId]);

  return (
    <Container>
      {details && (
        <>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center">{details.Title}</h1>
            </Col>
          </Row>
          <Row >
            <Col xs={12} md={6}>
              <img src={details.Poster} alt=""  />
            </Col>
            <Col>
              <h2>Details</h2>
              <p>
                Year:<span>{details.Year}</span>
              </p>
              <p>
                Released:<span>{details.Released}</span>
              </p>
              <p>
                Runtime:<span>{details.Runtime}</span>
              </p>
              <p>
                Genre:<span>{details.Genre}</span>
              </p>
              <p>
                Awards:<span>{details.Awards}</span>
              </p>
            </Col>
            <Row className="mt-5 text-center">
                <Col className="mt-5">
              <h2>Comments</h2>
              <ListGroup variant="flush" className="mt-5">
                {comments.map((com) => (
                  <ListGroup.Item>{com.comment}</ListGroup.Item>
                ))}{" "}
              </ListGroup>
            </Col>
            </Row>
            
          </Row>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
