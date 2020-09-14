import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "../components/PublicLayoutHeader";

const PublicPageLayout = ({ children, match }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
const PublicPageLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={matchProps => (
                <PublicPageLayout {...matchProps}>
                    <Component {...matchProps} />
                </PublicPageLayout>
            )}
        />
    );
}

export default PublicPageLayoutRoute;
