

import React from 'react';
import { TicketContext } from './context';


export const Ticket = () => {

    const [data, setData] = useState("");

    const {Tickes, setTickets} = useContext(TicketContext)

    const handleTicket = (e) => {
        const value = e.target.value;
        if(data.length <=5) setData(data+value)
        else alert("enter only 6 Numbers")
        console.log(data)
    }

    const handleClear =() => {
        setData("")
    }



    return (
        <div className="container">
            <div className="right">
                <div>
                    {data}
                </div>
                 <div>enter 6 digits</div>
                 <div className="left">
                    <button value="7" onClick={handleTicket}>7</button>
                    <button value="8" onClick={handleTicket}>8</button>
                    <button value="9" onClick={handleTicket}>9</button>
                    <button value="4" onClick={handleTicket}>4</button>
                    <button value="5" onClick={handleTicket}>5</button>
                    <button value="6" onClick={handleTicket}>6</button>
                    <button value="1" onClick={handleTicket}>1</button>
                    <button value="2" onClick={handleTicket}>2</button>
                    <button value="3" onClick={handleTicket}>3</button>
                    <button onClick={handleClear}>Clear</button>
                    <button value="0" onClick={handleTicket}>0</button>
                    <button onClick={handleClear}>Delete</button>
                 </div>
            </div>
        </div>
    );
}


