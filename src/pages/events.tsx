import axios from "axios"
import { useEffect, useState } from "react"

interface Event {
    id: number;
    name: string;
    description: string;
    start_dateTime: string;
    end_dateTime: string;
    created_by: string;
}

function Events() {
    const [events, setEvents] = useState<Event[]>([])
    const [users, setUsers] = useState<any[]>([])
    
    console.log("users:", users);
    
    //function to convert epoch to human-readable date
    const convertEpochToDate = (epoch: number) => {
        const date = new Date(epoch * 1000);
        return date.toLocaleString();
    };

    useEffect(() => {
        const fetchEventsAndUsers = async () => {
            try {
                const [eventsResponse, usersResponse] = await Promise.all([
                    axios.get("http://localhost:3000/events", {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }),
                    axios.get("http://localhost:3000/users", {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }),
                ]);

                const events = eventsResponse.data;
                const users = usersResponse.data;

                events.forEach((event:any) => {
                    const user = users.find((user:any) => user.id === event.created_by);
                    if (user) {
                        event.created_by = user.username;
                    }

                    event.start_dateTime = convertEpochToDate(event.start_dateTime);
                    event.end_dateTime = convertEpochToDate(event.end_dateTime);
                });

                setEvents(events);
                setUsers(users);
            } catch (error) {
                console.error("Error fetching events and users:", error);
            }
        };
        fetchEventsAndUsers();
    }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
        {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">{event.name}</h2>
                        <p className="text-sm text-gray-500">Created by: {event.created_by}</p>
                        <p className="text-sm text-gray-500">Start: {event.start_dateTime}</p>
                        <p className="text-sm text-gray-500">End: {event.end_dateTime}</p>
                        <p className="mt-2">{event.description}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p>No events found.</p>
        )}
    </div>
  )
}

export default Events