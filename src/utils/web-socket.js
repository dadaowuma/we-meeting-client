import {ws_url} from '../config'

export const createWSClient = () => {
  const ws = new WebSocket(ws_url + '?room_id=23421423');

  ws.addEventListener('error', console.error);

  ws.addEventListener('open', function open() {
    ws.send('something');

    let index = 5;
    setInterval(() => {
      index = index + 3;
      ws.send(index);
    }, 8000);
  });

  ws.addEventListener('message', function message(data) {
    const dt = data.data;

    console.log("收到服务器消息", dt);
    console.log("格式化服务器消息", JSON.parse(dt));
  });

  return ws;
}
