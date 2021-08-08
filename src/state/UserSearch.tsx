import React, { useState } from 'react';

const users = [
    {name: 'Galaxy', age: 1.6},
    {name: 'Bharty', age: 33},
    {name: 'Saurabh', age: 36},
];

const UserSearch: React.FC = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | null>();


    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return(
        <div>User Search 
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}> Find User</button>
                <div>
                    {user && user.name}
                    {user && user.age}
                </div>
        </div>
    );

};

export default UserSearch;
