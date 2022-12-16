import Peer from "peerjs";
import ClientService from "./ClientService";
class MessageSerivce {
  peer: Peer;
  client: ClientService = new ClientService();
  connection: any;
  constructor() {
    this.peer = new Peer(this.client.getClientId());
  }

  connect(clientId: string) {
    this.connection = this.peer.connect(clientId);
  }
}

export default MessageSerivce;
