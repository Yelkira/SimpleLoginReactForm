import React from 'react';
import "./auth-page.css"
import {AuthForm} from "./AuthForm/AuthForm";

export const AuthPage: React.FC = () => {
    return (
        <div className={"auth-page"}>
            <AuthForm/>
        </div>
    );
};

