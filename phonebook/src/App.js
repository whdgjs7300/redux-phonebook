import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './components/ContactList';

// 1. 왼쪽에는 연락처 리스트와 , 오른쪽에는 연락처 리스트와 search 창이 있다
// 2. 유저가 이름과 폰넘버를 입력하면 전화번호를 추가할 수 있다.
// 3. 리스트의 아이템이 몇개 인지 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {

  return (
    <div className="App">
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
              <ContactForm/>
          </Col>
          <Col>
              <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
