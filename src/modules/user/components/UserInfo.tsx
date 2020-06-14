import * as React from 'react';
import { useHistory, Redirect } from 'react-router';
import { Card, Row, Container, Col, Table, Button } from 'react-bootstrap';

import { AuthGuardContext } from 'src/modules/auth';

import { PATH } from 'src/constants';

const UserInfo = () => {
  const { user, setUser } = React.useContext(AuthGuardContext);
  const history = useHistory();

  if (!user) {
    return <Redirect to={PATH.LOGIN} />;
  }

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    history.push(PATH.LOGIN);
  };

  return (
    <div className="animate__animated animate__fadeIn mainLayout">
      <Container>
        <Row>
          <Col md={12}>
            <Card body>
              <h2>
                Hello, { `${user.firstName} ${user.lastName}` }
              </h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(user).map((key: string, index: number) => (
                    <tr key={key}>
                      <td>{index}</td>
                      <td>{key}</td>
                      <td>{user[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button onClick={handleLogout}>
                Logout
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserInfo;
