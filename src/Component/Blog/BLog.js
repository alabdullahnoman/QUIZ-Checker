import React from 'react';
import './Blog.css'

const BLog = () => {
    return (
        <div>
            <div className='blog-body'>
                <div className='blog-title'>
                    <h4>What is purpose of React Router?</h4>
                </div>
                <div className='blog-content'>
                    <p>
                        React Router is a powerful routing library for React applications. It enables developers to handle client-side routing in a declarative way and provides a unified approach to handling navigation between different pages of a single-page application. <br /> <br />

                        The main purpose of React Router is to provide a way to define different routes for different components and render them based on the URL in the browser. This allows developers to create applications with multiple views or pages, where the user can navigate between them without the need for a full-page refresh. <br /> <br />

                        React Router also provides a number of other features that make it useful for building complex applications. For example, it allows developers to handle dynamic routing, where the URL can be used to pass parameters to components, and it provides mechanisms for handling authentication and authorization. <br /> <br />

                        Overall, the purpose of React Router is to make it easier to build complex, multi-page applications in React, and to provide a consistent and intuitive way of handling client-side routing.
                    </p>
                </div>
            </div>
            <div className='blog-body'>
                <div className='blog-title'>
                    <h4>How does Context API works?</h4>
                </div>
                <div className='blog-content'>
                    <p>
                    The Context API is a feature in React that allows for the sharing of data between components without having to pass the data through each component individually via props. It provides a way to pass data through the component tree without the need to pass props down manually at every level. <br /> <br />

                        Here's how the Context API works: <br /> <br />
                            1.Create a Context: To use the Context API, we first need to create a Context object using the createContext() function. This Context object can hold a value that will be passed down to all the components that are children of the Context. <br /> <br />

                            2.Provide the Context: We then use the Provider component that is part of the Context object to provide the data that we want to pass down to the children components. We wrap the components that need access to this data with the Provider component and pass the data as a prop to the Provider component. <br /> <br />

                            3.Consume the Context: Components that need access to the data can then use the useContext() hook to consume the data. The useContext() hook takes the Context object as an argument and returns the value that was passed down through the Provider component.
                    </p>
                </div>
            </div>
            <div className='blog-body'>
                <div className='blog-title'>
                    <h4>What is the purpose of useRef(Hook)?</h4>
                </div>
                <div className='blog-content'>
                    <p>
                    The useRef() hook in React provides a way to create a mutable object that persists throughout the lifetime of a component. It allows you to access and modify the current value of the object without triggering a re-render of the component. <br /> <br />

                    Here are some common use cases for useRef(): <br /> <br />

                        1.Accessing DOM elements: useRef() can be used to access the underlying DOM element of a component. For example, if you need to programmatically focus an input field, you can create a ref using useRef() and attach it to the input element. Then, you can call the focus() method on the ref to give focus to the input. <br /><br />

                        2.Storing mutable values: You can also use useRef() to store mutable values that persist across re-renders of a component. For example, you might use a ref to keep track of a counter or a previous value of a prop or state variable. <br /><br />

                        3.Storing previous state or props: useRef() can also be used to store previous values of state or props. This can be useful for comparing previous and current values to determine if an action needs to be taken. <br /><br />

                        4.Overall, the purpose of the useRef() hook is to provide a way to create a mutable object that persists throughout the lifetime of a component, without causing unnecessary re-renders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BLog;