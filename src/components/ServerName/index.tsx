import React from 'react';

import { Container, Title, ExpandIcon } from './styles';


const ServerName: React.FC = () => {
  return (
    <Container>
      <Title>Servidor do JV</Title>
      <ExpandIcon><span></span></ExpandIcon>
    </Container>
  );
}

export default ServerName;