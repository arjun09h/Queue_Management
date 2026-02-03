import "./App.css";
import QueueDisplay from "./components/QueueDisplay";
import QueueForm from "./components/QueueForm";

import { useState } from "react";
export default function App() {
  const[queue,setQueue] = useState([]);

  const addToQueue = (customer)=>{
    setQueue([...queue,{...customer,id:Date.now(), status:"waiting"}])
  };
  const updateStatus = (id,newStatus)=>{
    setQueue(queue.map(customer => 
      customer.id === id ? {...customer,status:newStatus}:customer
    ))
  }
  const removeFromQueue = (id)=>{
    setQueue(queue.filter(customer => customer.id !== id ))
  }

  return (
    <div>
      <header>
        <h1>Queue Management App</h1>
        <p>Manage Your Customers Efficiently</p>
      </header>
      <main>
        <QueueForm addTo={addToQueue} className="card"/>
        <QueueDisplay 
        queue = {queue}
        onUpdateStatus = {updateStatus}
        onRemove = {removeFromQueue}
        />
      </main>
    </div>
  )
}