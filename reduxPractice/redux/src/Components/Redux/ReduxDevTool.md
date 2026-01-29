For basic redux store add simply:

const store=createStore(
    reducer,                    /// preload state,
    + window._REDUX_DEVTOOLS_EXTENTION_&& window._REDUX_DEVTOOL_EXTENTION_()

)

///Preload argument is optional in  redux createStore       