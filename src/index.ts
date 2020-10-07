import Websocket from 'ws';
import { GatewayResponse } from './typings/gateway';

export default function main() {
  console.log('Hello world from Typescript template!');
}
main();

async function webs() {
  const websocket: Websocket = new Websocket('wss://gateway.discord.gg/?v=6&encoding=json');

  websocket.on('open', () => {
    console.log('Websocket connected.');
  });
  websocket.on('message', (data: Websocket.Data) => {
    const response: GatewayResponse = JSON.parse(data as string);
    console.log(response.d.heartbeat_interval);
  });
}
webs();