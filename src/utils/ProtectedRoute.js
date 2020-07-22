import React from 'react'
import {Route, Redirect } from "react-router-dom"


export default function ProtectedRoute({component: Component, ...props}) {
    let token = localStorage.getItem('token')
    
    return token ? <Route {...props} render={() => <Component {...props}/>} /> : <Redirect to ="/login" />
}


