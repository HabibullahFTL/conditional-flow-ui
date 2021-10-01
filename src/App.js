import { useState } from 'react';
import './App.css';
import AbandomModal from './components/AbandomModal/AbandomModal';
import CustomModal from './components/CustomModal/CustomModal';
import SendMessage from './components/SendMessageModal/SendMessage';

function App() {
  const [showWhenOrders, setShowWhenOrders] = useState(false);
  const [showUserOrders, setShowUserOrders] = useState(false);
  const [showTagUser, setShowTagUser] = useState(false);
  const [showAbandon, setShowAbandon] = useState(false);
  const [showSendMessageModal, setShowSendMessageModal] = useState(false)
  const [showAbandonModal, setshowAbandonModal] = useState(false)

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
      setShowWhenOrders(false)
      setShowUserOrders(false)
      setShowTagUser(false)
      setShowAbandon(false)
      setShowSendMessageModal(false)
      setshowAbandonModal(true)
    }
  }

  return (
    <div className="w-full">
      <div className="w-1/2 my-16 mx-auto p-10 border shadow rounded-lg ">
        <CustomModal isOpen={true} > fff</CustomModal>
        <select
          onChange={handleSubscribers}
          className="block shadow border rounded mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="" className="hidden">Select one</option>
          <option value="USER_SUBSCRIBES">USER SUBSCRIBERS</option>
          <option value="USER_ORDERS">USER ORDERS</option>
        </select>

        {
          showWhenOrders &&
          <select
            onChange={handleWhenOrders}
            className="block shadow border rounded mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="" className="hidden">When Orders</option>
            <option value="USER_ORDERS">USER ORDERS</option>
            <option value="USER_ABANDONS_CX">USER ABANDONS CX</option>
            <option value="ORDER_COMPLETED">ORDER COMPLETED</option>
          </select>
        }

        {
          showUserOrders &&
          <select
            onChange={handleUserOrders}
            className="block shadow border rounded mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="" className="hidden">User Orders</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        }

        {
          showTagUser &&
          <select
            onChange={handleSendMessage}
            className="block shadow border rounded mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-green-500">
            <option value="" className="hidden">Tag User</option>
            <option value="send_message">Send Message</option>
          </select>
        }

        {
          showAbandon &&
          <select
            onChange={handleRunAbandon}
            className="block shadow border rounded mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-green-500">
            <option value="" className="hidden">Run Abandon Checkol</option>
            <option value="yes">Yes, Abandon</option>
          </select>
        }

        <SendMessage isOpen={showSendMessageModal} />
        <AbandomModal isOpen={showAbandonModal} />

      </div>
    </div>
  );
}

export default App;
