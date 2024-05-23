
import { Col, Row } from 'reactstrap';
import ValidationField from '../../../Components/ValidationField/ValidationField';

function Form() {

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <ValidationField name="title" />


      </Col>
      <Col>
      <ValidationField name="description" />

      </Col>



    </Row>
  )
}

export default Form




