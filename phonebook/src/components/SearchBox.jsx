
import { useState } from 'react';
import {Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    let dispatch = useDispatch();
    let {contactList} = useSelector(state=>state);

    const searchByName =(e)=> {
        e.preventDefault();
        dispatch({type : "SEARCH_BY_USERNAME", 
                payload : {keyword}
            })
    }

    return (  
        <Form onSubmit={searchByName}>
            <Row>
                <Col lg={10}>
                <Form.Control type="text" onChange={(e)=>setKeyword(e.target.value)} placeholder="이름을 입력하세요" />
                </Col>
                <Col lg={2}>
                    <Button>찾기</Button>
                </Col>
            </Row>

        </Form>
        
    );
}

export default SearchBox;