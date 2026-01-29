=> Dispatch(("Login Issue"))  
(Send action to reducer)

=> Action={type:"Add_Bug", payload:{ description :"login issue"}}
(Describe what happended)

=> Reducer receive(state, action)
(Handle how state change)

=> Create new State -> return it
Read the current state(getstate)

=> Store updates
(Hold the state)

=> Subscribed function run(like UI re-render)
(Run a function on a change)
