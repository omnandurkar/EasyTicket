import React, { useState } from 'react';

import Admin from './Admin';
import AdminLoginForm from './AdminLoginForm';

export default function AloginPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    const handleLogin = () => {
      
        setIsAdmin(true);
    };

    return (
        <div>
            {isAdmin ? (
                <Admin/>
            ) : (
                <AdminLoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}
