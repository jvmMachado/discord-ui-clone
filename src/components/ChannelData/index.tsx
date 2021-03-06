import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="JV Machado"
          date="05/03/2021"
          content="Baixa o lolzinho, Léo!"
        />

        <ChannelMessage
          author="Xerife Bill"
          date="05/03/2021"
          content={
            <>
              Boa, <Mention>@JV Machado</Mention>! Passou da hora já"
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="Átila Scar"
          date="05/03/2021"
          content="Já baixou o Space Engineers?"
        />

        <ChannelMessage
          author="JV Machado"
          date="05/03/2021"
          content="Se eu baixar, você baixa o lolzinho?"
        />

        <ChannelMessage
          author="Átila Scar"
          date="05/03/2021"
          content="Baixar eu baixo..."
        />

        <ChannelMessage
          author="Xerife Bill"
          date="05/03/2021"
          content="Lá vamos nós de novo..."
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />

        <ChannelMessage
          author="Smile Ronaldo"
          date="05/03/2021"
          content="Eu sou um robô 🤖"
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
