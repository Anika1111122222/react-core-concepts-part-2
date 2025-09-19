import { use } from "react";
export default function Users ({fetchUsers}){

    const user = use(fetchUsers)

    return(
        <div className="card">
            <h3>USers: {user.length}</h3>
        </div>
    )
}