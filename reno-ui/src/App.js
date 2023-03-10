import { Card, Col, Container, Row, Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { configCode, workflowCode } from './codeSample'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg={3}>
            <Card>
              <Card.Header>
                Provide Your Configuration
              </Card.Header>
              <Card.Body>

                <FormGroup className='mb-3'>
                  <FormLabel>Repository<br /><i>i.e. renovate-test</i></FormLabel>
                  <FormControl type='text' placeholder='Repository' />
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormLabel>Github Username</FormLabel>
                  <FormControl type='text' placeholder='Github Username' />
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormLabel>Github Email</FormLabel>
                  <FormControl type='text' placeholder='Github Email' />
                </FormGroup>

                <Button variant='primary'>
                  Test
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={9}>

            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    ./.github/config.js
                  </Card.Header>
                  <Card.Body>
                    <SyntaxHighlighter language="javascript" style={docco}>
                      {configCode}
                    </SyntaxHighlighter>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    ./.github/workflows/renovate.yml
                  </Card.Header>
                  <Card.Body>
                    <SyntaxHighlighter language="javascript" style={docco}>
                      {workflowCode}
                    </SyntaxHighlighter>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
