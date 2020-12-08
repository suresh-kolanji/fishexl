import './App.css';
import {
  Container,
  Navbar, Nav, Form, FormControl, Button, Card, CardColumns, blockquote
} from 'react-bootstrap';
import img5 from './5.jpg'

import logo from './logo.png'

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: .5
    }}
  />
);

function App() {
  return (
    <div className="App" >
      <Navbar bg="light" variant="light" className="bg-light justify-content-between">
        <Navbar.Brand href="#home" >
          <img src={logo} width={100}></img>
        </Navbar.Brand>
        <Nav className="bg-light justify-content-between" >
          <Nav.Link href="#home" > <h1> Fish Exclusive</h1></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

      <CardColumns>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 4</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 5</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 6</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 7</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 8</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 9</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 10</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card sm="auto">
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Fish Name 11</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <small className="text-muted">
                kg <cite title="Source Title">250 &#x20B9;</cite>
              </small>
            </blockquote>
            <Button variant="warning">Add to Cart</Button>
          </Card.Body>
        </Card>

      </CardColumns>

      <Container fluid >
      </Container>
      <footer >
        <ColoredLine color=" #e6f2ff" />
        2020-2021 Jones Seafood. All Rights Reserved </footer>
    </div>
  );
}
export default App;