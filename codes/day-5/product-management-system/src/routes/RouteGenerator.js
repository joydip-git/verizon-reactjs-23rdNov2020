import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { productRoutes } from './productRoutes'


const RouteGenerator = () => {
    return (
        <Switch>
            {
                productRoutes.map(r => {
                    return <Route path={r.url} component={r.componentName} key={r.id} exact />
                })
            }
        </Switch>
    )
}

export default RouteGenerator
