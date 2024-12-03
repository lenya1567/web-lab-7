import RequestCard from "./RequestCard"
import "./styles.scss"

export default function App() {
    return (
        <div className="requests">
            <RequestCard method="GET" url="localhost:8081/get" />
            <RequestCard method="POST" url="localhost:8081/post" body={["msg"]} json={true} />
            <RequestCard method="GET" url="localhost:8082/name/get" />
            <RequestCard method="POST" url="localhost:8082/name/set" body={["name"]} json={true} />
            <RequestCard method="GET" url="localhost:8083/count/get" />
            <RequestCard method="POST" url="localhost:8083/count/update" body={["count"]} json={true} />
        </div>
    )
}