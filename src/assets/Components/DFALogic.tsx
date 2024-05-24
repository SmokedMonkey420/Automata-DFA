import React, { useState, useEffect, useRef } from "react";

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
  const [currentDFA, setCurrentDFA] = useState<string>(activeDFAId);
  const [currentNode, setCurrentNode] = useState<Node | null>(null);
  const [traversedNodes, setTraversedNodes] = useState<string[]>([]);
  const validNodes = ["endNode1Let", "endNode2Let", "endNodeNum"];

  // Refs to store node instances
  const nodesRef = useRef<{ [key: string]: Node }>({});

  useEffect(() => {
    // Create nodes for DFA 1
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

    // Create nodes for DFA 2
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

    // Store nodes in refs
    nodesRef.current = {
      trapNode,
      endNode1Let,
      endNode2Let,
      node13Let,
      node12Let,
      node11Let,
      node10Let,
      node9Let,
      node8Let,
      node7Let,
      node6Let,
      node5Let,
      node4Let,
      node3Let,
      node2Let,
      startNodeLet,
      endNodeNum,
      node8Num,
      node7Num,
      node6Num,
      node5Num,
      node4Num,
      node3Num,
      node2Num,
      startNodeNum,
    };

    // Set initial node based on DFA
    if (activeDFAId === "DFA1") {
      setCurrentNode(startNodeLet);
    } else {
      setCurrentNode(startNodeNum);
    }
  }, [activeDFAId]);

  const getTraversedNodes = () => {
    let nodes = [];
    let node =
      currentDFA === "DFA1"
        ? nodesRef.current["startNodeLet"]
        : nodesRef.current["startNodeNum"];

    nodes.push(node.nodeID);
    console.log(`Starting traversal for DFA: ${currentDFA}`);
    console.log(`Input string: ${inputValue}`);

    for (const character of inputValue) {
      console.log(`Current node: ${node?.nodeID}, Character: ${character}`);

      if (currentDFA === "DFA1") {
        if (character === "a") {
          nodes.push(node?.a?.nodeID || "null");
          node = node?.a || null;
        } else if (character === "b") {
          nodes.push(node?.b?.nodeID || "null");
          node = node?.b || null;
        } else {
          console.log("Invalid character:", character);
          return;
        }
      } else if (currentDFA === "DFA2") {
        if (character === "1") {
          nodes.push(node?.a?.nodeID || "null");
          node = node?.a || null;
        } else if (character === "0") {
          nodes.push(node?.b?.nodeID || "null");
          node = node?.b || null;
        } else {
          console.log("Invalid character:", character);
          return;
        }
      }

      if (node === null) {
        console.log("Transitioned to a null node, breaking.");
        break;
      }
    }

    setTraversedNodes(nodes);
    setCurrentNode(node);

    console.log(`Final node after traversal: ${node?.nodeID}`);
    console.log(`Traversed nodes: ${nodes}`);

    if (validNodes.includes(node?.nodeID || "")) {
      console.log("String is valid");
    } else {
      console.log("String is invalid");
      console.log("Final Node ID:", node?.nodeID);
      console.log("Valid Nodes:", validNodes);
    }
  };

  const handleSubmit = () => {
    resetNodeColors();
    getTraversedNodes();
  };

  const timer = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

  async function resetNodeColors() {
    for (let nodeID in nodesRef.current) {
      const node = document.getElementById(nodeID);
      if (node instanceof SVGElement) {
        node.style.fill = "none";
      }
    }
  }

  async function changeColor() {
    getTraversedNodes();
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
    resetNodeColors();
  }

  return (
    <>
      <li>
        <button onClick={handleSubmit}>Validate</button>
      </li>
      <li>
        <button onClick={changeColor}>Simulate</button>
      </li>
    </>
  );
};

export default DFALogic;
