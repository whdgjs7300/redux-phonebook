import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';


const ContactForm = () => {
    const Dispatch = useDispatch();

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);

    //위에 상태값 
    const addContact = (e) => {
        e.preventDefault();
        Dispatch({type : "ADD_CONTACT" , payload :{ name : name, phoneNumber : phoneNumber } })
    }
    

    return ( 
        <div>
            <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
            <Form.Label>전화번호</Form.Label>
            <Form.Control type="number" placeholder="전화번호를 입력하세요" onChange={(e)=>setPhoneNumber(e.target.value)} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
            추가
        </Button>
    </Form>
        </div>
    );
}

export default ContactForm;