import React, { useState, useMemo } from "react"
import { Provider } from "react-redux"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthStack from "./src/navigation/stacks/Auth";
import AppNavigator from "./src/navigation/AppNavigator";

import store from "./src/store/store"

import { AuthContext } from "./src/Context"

import Loading from "./src/screens/Loading";

const { Navigator, Screen } = createStackNavigator()

const App = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [auth, setAuth] = useState({})

    const providerAuth = useMemo(() => ({ auth, setAuth }), [auth, setAuth])

    if (isLoading) {
        return <Loading setIsLoading={setIsLoading} setAuth={setAuth} />
    }

    else {
        return (
            <Provider store={store}>
                <AuthContext.Provider value={providerAuth}>
                    <NavigationContainer>
                        <Navigator screenOptions={_screenOptions} mode="modal">
                            {!auth.token ?
                                <>
                                    <Screen name="Auth" component={AuthStack} />
                                </> :
                                <>
                                    <Screen name="App" component={AppNavigator} />
                                </>
                            }
                        </Navigator>
                    </NavigationContainer>
                </AuthContext.Provider>
            </Provider>
        )
    }
}

const _screenOptions = {
    headerShown: false
}


export default App;