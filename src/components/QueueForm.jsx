import { useState } from "react";
import {FaUserPlus} from "react-icons/fa"
export default function QueueForm({ addTo }) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        // Validators
        if (!name.trim() || !service.trim()) return
        addTo({ name, service })
        setName('') 
        setService('') 
    }

    return (
        <>
            <form className="queue-form" onSubmit={handleSubmit}>
                <h2> Add To Queue </h2>
                <div className="form-group">
                    <input type="text"
                        placeholder="Customer Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <select 
                    value={service}
                    onChange={(e)=>setService(e.target.value)}
                    >
                        <option value=""> Select Service </option>
                        <option value="Consultation"> Consultation </option>
                        <option value="Payment"> Payment </option>
                        <option value="Support"> Support </option>
                    </select>
                </div>
                    <button type="submit"> <FaUserPlus /> Add Customer</button>
            </form>
        </>
    )
}