import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../services/api';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUserData();
                setUser(response.data);
            } catch (error) {
                alert('Session expired, please log in again.');
                localStorage.removeItem('token');
                navigate('/login');
            }
        };

        fetchUser();
    }, [navigate]);

    return (
        <div>
            <h2>Welcome to Your Dashboard</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/login');
                    }}>
                        Logout
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
