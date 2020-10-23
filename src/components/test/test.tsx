import React, {useState} from 'react';

const roles = ["admin", "moderator", "user"]

const Test = () => {
    const [role, setRole] = useState("set role")
    const roleButtons = []
    for (var i=0; i< roles.length; i++) {
        console.log(roles[i])
        roleButtons.push((
            <button key={i}
                    title={roles[i]}
                    onClick={()=>setRole(roles[i])}>
                Set {roles[i]}
            </button>
        ))
    }

    return (
        <div>
            <p>{role}</p>
            <div>
                {roleButtons}
                {role}
            </div>
        </div>
    );
};

export default Test;
