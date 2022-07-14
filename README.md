# React Hooks!

### Getting started

```
git clone (the url of the repo)
cd (into the directory of the repo)
yarn OR npm install (to install the dependencies)
yarn start OR npm run start (to start the HackJam)

```

### Explanations before starting

When you run the exercises, you have each exercise with it's solution.

You can always look at the rendered solution to see if your's match.

To find the right files that you need to work on, you can open the `src/` folder, and each exercise is in it's directory

To switch between exercises, simply click on the sidebar the exercise that you want to work on

The goal is to code all the exercises without using classes

Happy Hacking!

#### 1. useState

This exercise is a simple counter. Implement the counter using React Hooks.

`hint: useState is a hook that allows you to have a state in a functional component`

#### 2. useReducer

Now let's spice up a bit the things, what if you need to have multiple states? You could do it with multiple `useState`
But there is another reducer that handles more effectively complex object states

#### 3. useReducer-more

Create a list of words from the text provided in the input

#### 4. useEffect 1

There is a hook that is used when you need to perform side effects, such as modifying the title of the tab

Try to modify the title of the tab when you type in the input field

`hint: to change the title of the tab you can do: document.title = "Hackages coaching"`

#### 5. useRef

If you don't know what are refs in react: https://reactjs.org/docs/refs-and-the-dom.html

Basically refs provides a way to access dom nodes from your React code (not only dom nodes)

Find a way to have a ref in a function component!

The goal is that when you click on the button, you need to put the focus on the input field

#### 6. United Reducer

Create a reducer without type

#### 7. useContext

The hook useContext is used to be able to access the context from a function component without having to play with render props

Look at the solution and try to implement it yourself!

#### 8. useLayoutEffect

Use the useLayoutEffect Hook to lock the scroll when a modal is opened!

#### 9. useCallback

When you click on the button, the Button component rerenders. Try to avoid that unecessary rerender by using useCallback and React.memo!

But: Never use those 2 by default to fix a React app. Always try to refactor, and in last resort use those 2. Here it is used only to show you that they exists, but perf optimization always comes with a cost.
