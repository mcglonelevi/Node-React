# README

This repo is a learning repo where I wanted to implement a React-esque framework and app for teaching/learning purposes.  This is a long way from a true React implementation.

The following shortcuts were made:

1. There is no DOM tree or tweening.  Every rerender forces the whole app to reload.
2. useContext does not support default value, contexts cannot be nested, and a provider is necessary.  I chose not to implement Context.Consumer, but it could easily be added.
3. The "components" just render strings.
4. Any component that contains a hook cannot be conditionally rendered.  This is partially due to the shortcut of not having a tree.
5. There are no class-based components.
6. componentWillUnmount and useEffect cleanup when a component unmounts are not implemented.

If you want a better "how to implement React tutorial", go here: https://pomb.us/build-your-own-react/
