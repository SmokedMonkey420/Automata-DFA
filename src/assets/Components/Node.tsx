// Node.ts
class Node {
  public a: Node | null;
  public b: Node | null;
  public nodeID: string;

  constructor(a: Node | null, b: Node | null, nodeID: string) {
    this.a = a;
    this.b = b;
    this.nodeID = nodeID;
  }
}

export default Node;
