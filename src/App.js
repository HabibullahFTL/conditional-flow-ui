import { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import './App.css';
import AbandomModal from './components/AbandomModal/AbandomModal';
import RunAbandon from './components/SelectBoxes/RunAbandon';
import Subscribers from './components/SelectBoxes/Subscribers';
import TagUser from './components/SelectBoxes/TagUser';
import UserOrders from './components/SelectBoxes/UserOrders';
import WhenOrders from './components/SelectBoxes/WhenOrders';
import SendMessage from './components/SendMessageModal/SendMessage';

const flowBoxStyle = {
  width: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #222"
}

function App() {
  const [showWhenOrders, setShowWhenOrders] = useState(false);
  const [showUserOrders, setShowUserOrders] = useState(false);
  const [showTagUser, setShowTagUser] = useState(false);
  const [showAbandon, setShowAbandon] = useState(false);
  const [showSendMessageModal, setShowSendMessageModal] = useState(false)
  const [showAbandonModal, setshowAbandonModal] = useState(false)
  const [elements, setElements] = useState([
    {
      id: 'subscribers',
      data: { label: <Subscribers handleChange={(e) => handleSubscribers(e)} /> },
      position: { x: 250, y: 25 },
      style: flowBoxStyle
    },
    {
      id: 'whenOrders',
      data: { label: <WhenOrders handleChange={(e) => handleWhenOrders(e)} /> },
      position: { x: 100, y: 125 },
      style: { ...flowBoxStyle },
      isHidden: true
    },
    {
      id: 'userOrders',
      data: { label: <UserOrders handleChange={(e) => handleUserOrders(e)} /> },
      position: { x: 100, y: 250 },
      style: { ...flowBoxStyle },
      isHidden: true
    },
    {
      id: 'tagUser',
      data: { label: <TagUser handleChange={(e) => handleSendMessage(e)} /> },
      position: { x: 100, y: 350 },
      style: { ...flowBoxStyle },
      isHidden: true
    },
    {
      id: 'runAbandon',
      data: { label: <RunAbandon handleChange={(e) => handleRunAbandon(e)} /> },
      position: { x: 100, y: 350 },
      style: { ...flowBoxStyle },
      isHidden: true
    },

    { id: 'e1-2', source: 'subscribers', target: 'whenOrders' },
    { id: 'e2-3', source: 'whenOrders', target: 'userOrders' },
    { id: 'e3-4', source: 'userOrders', target: 'tagUser' },
    { id: 'e3-5', source: 'userOrders', target: 'runAbandon' },
  ])


  useEffect(() => {
    setElements((els) => els.map((el) => {
      if (el.id === 'whenOrders') { el.isHidden = !showWhenOrders }
      if (el.id === 'userOrders') { el.isHidden = !showUserOrders }
      if (el.id === 'tagUser') { el.isHidden = !showTagUser }
      if (el.id === 'runAbandon') { el.isHidden = !showAbandon }
      return el
    }))
  }, [showWhenOrders, showUserOrders, showTagUser, showAbandon])

  const handleSubscribers = (e) => {
    if (e.target.value === 'USER_SUBSCRIBES' || e.target.value === 'USER_ORDERS') {
      setShowWhenOrders(true)
    } else {
      setShowWhenOrders(false)
    }
  }

  const handleWhenOrders = (e) => {
    if (e.target.value === 'USER_ORDERS' || e.target.value === 'USER_ABANDONS_CX' || e.target.value === 'ORDER_COMPLETED') {
      setShowUserOrders(true)
    } else {
      setShowUserOrders(false)
    }
  }

  const handleUserOrders = (e) => {
    if (e.target.value === 'yes') {
      setShowTagUser(true)
      setShowAbandon(false)
    } else {
      setShowTagUser(false)
      setShowAbandon(true)
    }
  }

  const handleSendMessage = (e) => {
    if (e.target.value === 'send_message') {
      setShowSendMessageModal(true)
    }
  }
  const handleRunAbandon = (e) => {
    if (e.target.value === 'yes') {
      setshowAbandonModal(true)
    }
  }


  return (
    <div className="w-full">

      <div className="h-screen block w-full">
        <ReactFlow elements={elements} />
      </div>

      <SendMessage isOpen={showSendMessageModal} />
      <AbandomModal isOpen={showAbandonModal} />

    </div>
  );
}

export default App;
