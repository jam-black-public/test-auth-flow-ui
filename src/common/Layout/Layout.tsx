import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import logoImg from 'src/assets/images/logo.png';
import titleImg from 'src/assets/images/title.png';

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [className, setClassName] = React.useState('App');
  const appRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (appRef.current && appRef.current.clientHeight > document.body.clientHeight) {
      setClassName('App_top');
    } else {
      setClassName('App');
    }
  });

  return (
    <div ref={appRef} className={`animate__animated animate__fadeIn ${className}`}>
      <Container fluid="sm">
        <Row>
          <Col md={12}>
            <img src={logoImg} alt="logo" />
          </Col>
          <Col md={12}>
            <h1 className="mb-4">
              <img src={titleImg} alt="title" />
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={2} />
          <Col className="align-self-center" md={8}>
            {children}
          </Col>
          <Col md={2} />
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
