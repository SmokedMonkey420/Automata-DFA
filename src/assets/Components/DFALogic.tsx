import React, { useState, useEffect } from "react";

class Node {
  a: Node | null;
  b: Node | null;
  nodeID: string;

  constructor(a: Node | null, b: Node | null, nodeID: string) {
    this.a = a;
    this.b = b;
    this.nodeID = nodeID;
  }
}

const DFALogic: React.FC<{
  activeDFAId: string;
  inputValue: string;
}> = ({ activeDFAId, inputValue }) => {
  // State variables
  const [currentDFA, setCurrentDFA] = useState<string>("DFA1");
  const [currentNode, setCurrentNode] = useState<Node | null>(null);
  const [traversedNodes, setTraversedNodes] = useState<string[]>([]);
  const validNodes = ["endNode1Let", "endNode2Let", "endNodeNum"];

  // Initialize DFA nodes
  useEffect(() => {
    setCurrentDFA(activeDFAId);
    //creation of node objects in DFA 1
    const trapNode = new Node(null, null, "trapNode");
    trapNode.a = trapNode;
    trapNode.b = trapNode;

    const endNode1Let = new Node(null, null, "endNode1Let");
    endNode1Let.b = endNode1Let;

    const endNode2Let = new Node(null, null, "endNode2Let");
    endNode2Let.a = endNode2Let;

    const node13Let = new Node(endNode2Let, null, "node13Let");
    endNode1Let.a = node13Let;

    const node12Let = new Node(node13Let, endNode1Let, "node12Let");
    endNode2Let.b = node12Let;
    node13Let.b = node12Let;

    const node11Let = new Node(node13Let, node12Let, "node11Let");
    const node10Let = new Node(node11Let, node11Let, "node10Let");

    const node9Let = new Node(node10Let, null, "node9Let");
    const node8Let = new Node(trapNode, node9Let, "node8Let");
    const node7Let = new Node(node8Let, null, "node7Let");
    node9Let.b = node7Let;

    const node6Let = new Node(node10Let, trapNode, "node6Let");
    const node5Let = new Node(trapNode, node6Let, "node5Let");
    const node4Let = new Node(trapNode, node10Let, "node4Let");
    const node3Let = new Node(node4Let, trapNode, "node3Let");
    node7Let.b = node3Let;

    const node2Let = new Node(node5Let, node3Let, "node2Let");
    const startNodeLet = new Node(node2Let, node7Let, "startNodeLet");

    //creation of all node objects in the DFA 2
    const endNodeNum = new Node(null, null, "endNodeNum");
    endNodeNum.a = endNodeNum;
    endNodeNum.b = endNodeNum;
    const node8Num = new Node(endNodeNum, null, "node8Num");
    const node7Num = new Node(endNodeNum, node8Num, "node7Num");
    const node6Num = new Node(node7Num, node8Num, "node6Num");
    const node5Num = new Node(node6Num, null, "node5Num");
    node5Num.b = node5Num;
    node8Num.b = node5Num;
    const node4Num = new Node(node5Num, node5Num, "node4Num");
    const node3Num = new Node(null, node4Num, "node3Num");
    const node2Num = new Node(node4Num, node3Num, "node2Num");
    node3Num.a = node2Num;

    const startNodeNum = new Node(node2Num, node3Num, "startNodeNum");
  }, [activeDFAId]);

  const simulateDFA = async () => {
    await changeColor();
  };

  const handleSubmit = () => {
    console.log("handleSubmit called");
    console.log({ activeDFAId });
    console.log({ inputValue });
    setTraversedNodes([]);

    let node: Node | null = currentNode;

    for (const character of inputValue) {
      if (currentDFA === "DFA1") {
        if (character === "a") {
          setTraversedNodes((prevTraversedNodes) => [
            ...prevTraversedNodes,
            node?.a?.nodeID || "",
          ]);
          node = node?.a || null;
        } else if (character === "b") {
          setTraversedNodes((prevTraversedNodes) => [
            ...prevTraversedNodes,
            node?.b?.nodeID || "",
          ]);
          node = node?.b || null;
        } else {
          // Invalid character
          return;
        }
      } else if (currentDFA === "DFA2") {
        if (character === "1") {
          setTraversedNodes((prevTraversedNodes) => [
            ...prevTraversedNodes,
            node?.a?.nodeID || "",
          ]);
          node = node?.a || null;
        } else if (character === "0") {
          setTraversedNodes((prevTraversedNodes) => [
            ...prevTraversedNodes,
            node?.b?.nodeID || "",
          ]);
          node = node?.b || null;
        } else {
          console.log("Unexpected error return either a or b only!");
          return;
        }
      }
    }

    setCurrentNode(node);

    if (node && validNodes.includes(node.nodeID)) {
      console.log("String is valid");
    } else {
      console.log("String is invalid");
    }
  };

  const timer = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

  async function changeColor() {
    for (let nodeID of traversedNodes) {
      const node = document.getElementById(nodeID);
      if (node instanceof SVGElement) {
        node.style.fill = "red";
        await timer(200);
        node.style.fill = "green";
        await timer(500);
      } else {
        console.error(`Node ${nodeID} not found`);
      }
    }
  }

  return (
    <>
      <li>
        <button onClick={handleSubmit}>Validate</button>
      </li>
      <li>
        <button onClick={simulateDFA}>Simulate</button>
      </li>
    </>
  );
};

export default DFALogic;
