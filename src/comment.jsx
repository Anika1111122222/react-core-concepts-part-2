export default function Comment ({comment}){

    const {name, email, body} = comment;
    return (

        
        <div className="card">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Comments: {body}</p>
        </div>
    )
}