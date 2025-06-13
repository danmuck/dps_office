import React from "react";

const AddUser: React.FC = () => {
    return (
        <div>
            <button onClick={() => console.log('User Added')} className="p-2 m-2 rounded-sm border-2">Make me a button that turns into UserCard</button>
        </div>
    );
}
export default AddUser;