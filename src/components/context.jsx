


import {createContext, useState} from "react";

export const TicketContext = createContext();

export const TicketContextProvider = ({children}) => {
    const [ Tickets, setTicket] = useState([])

    return
    <TicketContext.Provider value ={{ Tickets, setTicket}}>
        {children}
    </TicketContext.Provider>
}
