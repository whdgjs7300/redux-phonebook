import { Row, Col } from "react-bootstrap"

// 반복되는 아이템 컴포넌트 !
const ContactItem = () => {
    
    return ( 
        <Row>
            <Col lg={2}>
                <img width={50}
                src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" />
            </Col>

            <Col lg={8}>
                <div>
                    박종헌
                </div>

                <div>
                    01041331692
                </div>
            </Col>
        </Row>
    );
}

export default ContactItem;