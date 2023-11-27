// import { Card, PageHeader } from 'react-bootstrap';
import { PageHeader } from "react-bootstrap"

export default function Header({userData}) {
    return (
        // <>
        // </>
        <PageHeader>
            <p>Good Morning {userData.name}!</p>
            <h1>{new Date().toDateString() }</h1>
        </PageHeader>
    )    
}