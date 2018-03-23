import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
	state = {
		movie: {}
	};

	componentDidMount() {
		API.getMovie(this.props.match.params.id)
			.then(res => this.setState ({ movie: res.data }))
			.catch(err => console.log(err));
	}

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.movie.title} by {this.state.movie.director}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.movie.synopsis}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Directors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
