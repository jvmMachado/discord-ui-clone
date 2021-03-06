import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Xerife Bill" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Smile Ronaldo" isBot />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
      <UserRow nickname="Átila Scar" />
    </Container>
  );
};

export default UserList;
