import Peer from "peerjs";
import ClientService from "./ClientService";
class PeerService {
  peer: Peer;
  client: ClientService = new ClientService();
  connection: any;
  constructor() {
    this.peer = new Peer(this.client.getClientId(), {
      port: 9000,
      path: "/messenger",
      host: "/",
    });
  }

  connect(clientId: string) {
    this.connection = this.peer.connect(clientId);
  }
}

export default PeerService;
