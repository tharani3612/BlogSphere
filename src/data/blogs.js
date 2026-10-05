const blogs = [
  // =========================================================
  // 1. REACT - BEGINNER
  // =========================================================

  {
    id: 1,
    title: "Mastering React.js: A Complete Beginner's Guide",
    category: "React",
    description:
      "Learn React.js from the ground up with components, JSX, props, state, events, hooks, lists, APIs, routing and real-world development practices.",
    author: "Arjun Kumar",
    date: "October 02, 2026",
    readTime: "20 min read",

    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1400&q=85",
        caption: "Modern React.js development workspace",
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
        caption: "Writing React and JavaScript code",
      },
      {
        url: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1400&q=85",
        caption: "Planning component-based application architecture",
      },
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=85",
        caption: "Frontend development with modern tools",
      },
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85",
        caption: "Developing interactive web applications",
      },
      {
        url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=85",
        caption: "Organizing a scalable development project",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "What is React.js?",
        text:
          "React is a JavaScript library for building user interfaces from reusable components. Instead of treating a complete webpage as one large piece of markup, React encourages developers to divide the interface into smaller pieces that can be combined into complete screens and applications. This component-oriented approach is one of the main reasons React is widely used for interactive web applications.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Why React Became Popular",
        text:
          "Modern applications contain menus, forms, cards, dashboards, filters, authentication screens and constantly changing data. Managing all of these interactions with manually updated DOM code can become difficult as an application grows. React provides a declarative approach where developers describe the interface based on the current data and state.",
      },
      {
        type: "paragraph",
        heading: "The Component-Based Approach",
        text:
          "A React application is built from components. A component can be a small button, an input field, a navigation bar, a product card or even a complete page. Reusable components reduce duplication and make large applications easier to maintain.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "React development commonly combines JavaScript logic with reusable UI components.",
      },
      {
        type: "paragraph",
        heading: "Understanding JSX",
        text:
          "JSX is a JavaScript syntax extension that allows developers to write HTML-like markup inside JavaScript. JSX makes the relationship between a component's logic and its rendered interface easier to understand.",
      },
      {
        type: "code",
        heading: "Simple JSX Component",
        code: `function Welcome() {
  return (
    <div>
      <h1>Welcome to BlogSphere</h1>
      <p>Learn React step by step.</p>
    </div>
  );
}

export default Welcome;`,
      },
      {
        type: "paragraph",
        heading: "Props and Data Flow",
        text:
          "Props allow a parent component to provide data to a child component. They make reusable components possible because the same component can display different information depending on the values it receives.",
      },
      {
        type: "code",
        heading: "Props Example",
        code: `function BlogCard({ title, author }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Written by {author}</p>
    </article>
  );
}`,
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Reusable React components can receive different data through props.",
      },
      {
        type: "paragraph",
        heading: "Understanding State",
        text:
          "State represents information that can change during the lifetime of a component. Examples include form values, counters, selected categories, menu visibility and API data. When state changes, React can update the interface accordingly.",
      },
      {
        type: "code",
        heading: "useState Example",
        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
      },
      {
        type: "paragraph",
        heading: "React Events",
        text:
          "React applications respond to user actions such as clicks, typing, form submission and mouse interactions. Event handlers connect these actions with JavaScript functions and state updates.",
      },
      {
        type: "paragraph",
        heading: "Rendering Lists",
        text:
          "The JavaScript map method is commonly used when an application needs to render a collection of products, blogs, users or categories. Each rendered item should have a stable key so React can identify it efficiently.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Lists and reusable cards are common patterns in React applications.",
      },
      {
        type: "paragraph",
        heading: "React Hooks",
        text:
          "Hooks provide access to React features from functional components. useState is commonly used for state, while useEffect is used for effects such as data fetching and browser interactions. Hooks allow application logic to remain close to the component that uses it.",
      },
      {
        type: "code",
        heading: "useEffect API Example",
        code: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://example.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return <div>{users.length} users</div>;
}`,
      },
      {
        type: "paragraph",
        heading: "React Router",
        text:
          "React Router can be used to create navigation between different views of an application. A blog platform can use routes for Home, Blogs, Blog Details, Categories and Login pages while keeping the application inside a single React project.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Routing allows React applications to provide multiple URL-based views.",
      },
      {
        type: "paragraph",
        heading: "Building Real Projects",
        text:
          "The best way to learn React is to build projects. Start with a counter and todo application, then move toward product listings, authentication, dashboards, blogs and e-commerce interfaces. Each project introduces practical problems that strengthen component design and state management skills.",
      },
      {
        type: "paragraph",
        heading: "React Best Practices",
        text:
          "Keep components focused on a clear responsibility, use meaningful names, avoid unnecessary state, create reusable components and separate application data from presentation where appropriate. Clean structure becomes increasingly important as an application grows.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "A well-structured React project can scale from a small interface to a complete application.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "React becomes easier when its concepts are learned progressively. Start with JavaScript fundamentals, then understand JSX, components, props and state. After that, learn hooks, APIs, routing and project architecture. Consistent project practice is more valuable than simply memorizing syntax.",
      },
    ],
  },

  // =========================================================
  // 2. REACT - REAL WORLD
  // =========================================================

  {
    id: 2,
    title: "Building Real-World React Applications",
    category: "React",
    description:
      "Move beyond React basics and learn how to structure, organize and build practical React applications using reusable components, APIs, authentication and routing.",
    author: "Priya Sharma",
    date: "October 01, 2026",
    readTime: "22 min read",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
        caption: "Planning a real-world frontend application",
      },
      {
        url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
        caption: "Designing reusable application interfaces",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        caption: "Building application dashboards and data views",
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
        caption: "Collaborative software development workflow",
      },
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85",
        caption: "Planning application features and architecture",
      },
      {
        url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
        caption: "Professional software project planning",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "From React Basics to Real Applications",
        text:
          "Learning individual React concepts is only the beginning. Real applications require developers to combine components, routing, forms, state, API requests, authentication, reusable layouts and error handling. The goal of this article is to explain how those concepts come together to form a maintainable frontend application.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Start With Application Planning",
        text:
          "Before writing components, identify the major screens and user actions. A blog application may require Home, Blogs, Blog Details, Categories, Login and Account pages. Planning these screens first makes it easier to determine which components should be reusable.",
      },
      {
        type: "paragraph",
        heading: "Design Reusable Components",
        text:
          "Headers, footers, buttons, cards, modals, form controls and navigation elements are often reused across multiple pages. Creating them as independent components avoids duplicated markup and keeps visual changes centralized.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "Reusable UI components help maintain consistency throughout an application.",
      },
      {
        type: "paragraph",
        heading: "Organize the Project",
        text:
          "A practical React project can separate pages, reusable components, data, assets and styles. There is no single mandatory folder structure, so teams usually create conventions that make navigation through the codebase easy.",
      },
      {
        type: "code",
        heading: "Example Project Structure",
        code: `src/
├── components/
│   ├── Common/
│   └── BlogCard/
│
├── pages/
│   ├── Home/
│   ├── Blogs/
│   └── BlogDetails/
│
├── data/
├── assets/
├── App.jsx
└── main.jsx`,
      },
      {
        type: "paragraph",
        heading: "Working With APIs",
        text:
          "Most real applications need external data. React components can request information from APIs and store the response in state. Loading, success and error states should be considered so users receive clear feedback while data is being retrieved.",
      },
      {
        type: "code",
        heading: "API Loading Pattern",
        code: `const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  fetch("/api/posts")
    .then((response) => response.json())
    .then((result) => {
      setData(result);
      setLoading(false);
    })
    .catch(() => {
      setError("Unable to load data");
      setLoading(false);
    });
}, []);`,
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Applications commonly display API-driven data through dashboards and cards.",
      },
      {
        type: "paragraph",
        heading: "Authentication Flow",
        text:
          "A frontend application may provide login and logout interfaces and maintain a representation of authentication state. In production systems, authentication should be handled using secure backend mechanisms rather than relying on client-side values as the source of truth.",
      },
      {
        type: "paragraph",
        heading: "Protected Routes",
        text:
          "Protected routes can prevent unauthenticated users from accessing certain frontend screens. A route guard can inspect the current authentication state and redirect users to the login page when necessary.",
      },
      {
        type: "code",
        heading: "Protected Route Pattern",
        code: `function ProtectedRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}`,
      },
      {
        type: "paragraph",
        heading: "Forms and Validation",
        text:
          "Forms are a major part of real applications. Login, registration, search, checkout and profile forms should validate user input and display useful error messages. Controlled inputs are commonly used when React needs to manage form values.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Professional applications combine forms, navigation and reusable UI patterns.",
      },
      {
        type: "paragraph",
        heading: "Search and Filtering",
        text:
          "Search and filters improve usability when an application contains many records. React state can store the search term and selected filters while JavaScript array methods can derive the visible results.",
      },
      {
        type: "paragraph",
        heading: "Handling Loading and Errors",
        text:
          "Users should never be left wondering whether an application is working. Loading indicators, empty states and error messages provide feedback during API operations and make the interface more reliable.",
      },
      {
        type: "paragraph",
        heading: "Performance Considerations",
        text:
          "As applications become larger, developers should avoid unnecessary rendering and overly complex component structures. Efficient data handling, sensible component boundaries and appropriate code organization help keep applications responsive.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Real-world applications require planning beyond individual components.",
      },
      {
        type: "paragraph",
        heading: "Deployment Preparation",
        text:
          "Before deployment, verify routing behavior, environment variables, API endpoints, asset paths and production builds. A local application may work correctly while deployment reveals configuration or path-related issues.",
      },
      {
        type: "paragraph",
        heading: "Professional Development Workflow",
        text:
          "A professional workflow generally includes planning, implementation, testing, version control, code review and deployment. Git branches and meaningful commits make it easier to track changes and collaborate with other developers.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "Software projects become easier to manage when development follows a structured workflow.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "Real-world React development is about combining many small concepts into one reliable application. Once components, state, APIs, forms and routing become familiar, the next step is learning how to organize those pieces into maintainable projects.",
      },
    ],
  },

  // =========================================================
  // 3. JAVASCRIPT FUNDAMENTALS
  // =========================================================

  {
    id: 3,
    title: "JavaScript Fundamentals: Complete Beginner Guide",
    category: "JavaScript",
    description:
      "A practical JavaScript guide covering variables, data types, operators, conditions, loops, functions, arrays, objects, DOM, events, forms and browser storage.",
    author: "Karthik Raj",
    date: "September 30, 2026",
    readTime: "21 min read",

    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1400&q=85",
        caption: "JavaScript development environment",
      },
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",
        caption: "Writing JavaScript code",
      },
      {
        url: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&w=1400&q=85",
        caption: "Learning programming fundamentals",
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
        caption: "Working with JavaScript logic",
      },
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85",
        caption: "Building interactive websites",
      },
      {
        url: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1400&q=85",
        caption: "Organizing programming projects",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "What is JavaScript?",
        text:
          "JavaScript is a programming language widely used to add behavior and interactivity to web applications. HTML provides structure, CSS controls presentation and JavaScript provides logic. Modern JavaScript is also used outside the browser for servers, automation, tooling and many other applications.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Variables",
        text:
          "Variables allow programs to store information for later use. Modern JavaScript commonly uses let and const. const is preferred when a variable should not be reassigned, while let is useful when its value needs to change.",
      },
      {
        type: "code",
        heading: "Variables Example",
        code: `const name = "Karthik";
let age = 20;

age = 21;

console.log(name);
console.log(age);`,
      },
      {
        type: "paragraph",
        heading: "Data Types",
        text:
          "JavaScript works with values such as strings, numbers, booleans, null, undefined, objects and arrays. Understanding the differences between these values is important because operations and comparisons can behave differently depending on the type.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "JavaScript code combines variables, values and programming logic.",
      },
      {
        type: "paragraph",
        heading: "Operators",
        text:
          "Operators allow developers to perform calculations, comparisons and logical operations. Arithmetic operators handle mathematical expressions, comparison operators evaluate relationships and logical operators combine conditions.",
      },
      {
        type: "paragraph",
        heading: "Conditional Statements",
        text:
          "Conditional statements allow a program to make decisions. The if, else if and else statements can execute different blocks of code depending on whether conditions are true or false.",
      },
      {
        type: "code",
        heading: "if else Example",
        code: `const marks = 75;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}`,
      },
      {
        type: "paragraph",
        heading: "Loops",
        text:
          "Loops are used when the same type of operation needs to be repeated. JavaScript provides traditional loops such as for and while, along with modern iteration patterns such as for...of and array methods.",
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Programming fundamentals help developers solve repetitive problems efficiently.",
      },
      {
        type: "paragraph",
        heading: "Functions",
        text:
          "Functions group reusable logic into a named or anonymous block. They can receive parameters and return values. Functions are one of the most important building blocks in JavaScript development.",
      },
      {
        type: "code",
        heading: "Function Example",
        code: `function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result);`,
      },
      {
        type: "paragraph",
        heading: "Arrays",
        text:
          "Arrays store collections of values. Developers frequently use arrays for products, users, blog posts, categories and other collections. Methods such as map, filter, find and reduce make array processing powerful.",
      },
      {
        type: "paragraph",
        heading: "Objects",
        text:
          "Objects represent related information using key-value pairs. For example, a product object can contain a name, price, category and image. Objects are fundamental to working with API responses and application data.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Arrays and objects are fundamental data structures in JavaScript applications.",
      },
      {
        type: "paragraph",
        heading: "DOM Manipulation",
        text:
          "The Document Object Model represents the webpage as a structure that JavaScript can interact with. Developers can select elements, change their content, update classes, create elements and respond to user events.",
      },
      {
        type: "code",
        heading: "DOM Example",
        code: `const title = document.querySelector("#title");

title.textContent = "Welcome to JavaScript";

title.classList.add("active");`,
      },
      {
        type: "paragraph",
        heading: "Events",
        text:
          "Events allow JavaScript to respond to user actions such as clicks, typing, form submissions and mouse movements. Event listeners connect browser events with JavaScript functions.",
      },
      {
        type: "paragraph",
        heading: "LocalStorage",
        text:
          "The browser's localStorage API allows websites to store small amounts of data that persist between browser sessions. It is useful for simple client-side preferences and demonstrations, although sensitive authentication data should not be treated as secure merely because it is stored in localStorage.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "JavaScript connects user interactions with dynamic webpage behavior.",
      },
      {
        type: "paragraph",
        heading: "Learning JavaScript Properly",
        text:
          "Beginners should practice concepts instead of only watching tutorials. Build small applications such as calculators, todo lists, form validation pages and product filters. These projects create opportunities to use variables, functions, arrays, objects, DOM manipulation and events together.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "Practical projects are an important part of learning JavaScript.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "JavaScript fundamentals form the foundation for frontend frameworks such as React. Strong knowledge of variables, functions, arrays, objects, DOM manipulation and asynchronous programming makes learning React significantly easier.",
      },
    ],
  },

  // =========================================================
  // 4. JAVASCRIPT ES6+
  // =========================================================

  {
    id: 4,
    title: "Modern JavaScript ES6+: Complete Guide",
    category: "JavaScript",
    description:
      "Master modern JavaScript features including let, const, arrow functions, template literals, destructuring, spread, rest, map, filter, reduce, promises and async/await.",
    author: "Ananya Rao",
    date: "September 29, 2026",
    readTime: "23 min read",

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",
        caption: "Modern JavaScript development",
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
        caption: "Writing modern JavaScript syntax",
      },
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=85",
        caption: "JavaScript development workflow",
      },
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85",
        caption: "Modern programming patterns",
      },
      {
        url: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&w=1400&q=85",
        caption: "Learning modern JavaScript",
      },
      {
        url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=85",
        caption: "Building applications with modern syntax",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "Why Modern JavaScript Matters",
        text:
          "Modern JavaScript introduced many language features that make everyday programming more expressive and maintainable. ES6 and later versions added improvements for variable declarations, functions, objects, arrays, asynchronous operations and modules. These features are heavily used in modern frontend development.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "let and const",
        text:
          "let and const provide block-scoped variables and are generally preferred over var in modern JavaScript. const is useful when reassignment is not required, while let is appropriate when a value needs to change.",
      },
      {
        type: "code",
        heading: "let and const",
        code: `const username = "Ananya";

let count = 0;

count++;

console.log(username);
console.log(count);`,
      },
      {
        type: "paragraph",
        heading: "Arrow Functions",
        text:
          "Arrow functions provide a shorter syntax for writing functions. They are particularly common with array methods such as map, filter and reduce and are used extensively in React applications.",
      },
      {
        type: "code",
        heading: "Arrow Function",
        code: `const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));`,
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "Modern JavaScript syntax can make common operations more concise.",
      },
      {
        type: "paragraph",
        heading: "Template Literals",
        text:
          "Template literals make it easier to construct strings containing variables and expressions. They use backticks and allow JavaScript expressions inside ${} syntax.",
      },
      {
        type: "code",
        heading: "Template Literal",
        code: `const name = "Ananya";
const role = "Frontend Developer";

const message =
  \`Hello \${name}, you are a \${role}.\`;

console.log(message);`,
      },
      {
        type: "paragraph",
        heading: "Destructuring",
        text:
          "Destructuring allows values to be extracted directly from arrays and objects. It is frequently used in React components when receiving props or values from hooks.",
      },
      {
        type: "code",
        heading: "Object Destructuring",
        code: `const user = {
  name: "Ananya",
  age: 20,
  role: "Developer"
};

const { name, age, role } = user;

console.log(name);
console.log(age);
console.log(role);`,
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Destructuring and other ES6 features are common in modern frontend projects.",
      },
      {
        type: "paragraph",
        heading: "Spread Operator",
        text:
          "The spread operator expands values from arrays or objects. It is commonly used to create copies, combine data and update objects without mutating the original value.",
      },
      {
        type: "code",
        heading: "Spread Example",
        code: `const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [
  ...first,
  ...second
];

console.log(combined);`,
      },
      {
        type: "paragraph",
        heading: "map Method",
        text:
          "map transforms every item in an array into a new value. React developers commonly use map to convert data arrays into lists of JSX elements.",
      },
      {
        type: "paragraph",
        heading: "filter Method",
        text:
          "filter creates a new array containing only the values that satisfy a condition. It is useful for search, category filtering and removing unwanted records.",
      },
      {
        type: "paragraph",
        heading: "reduce Method",
        text:
          "reduce processes an array and produces a single accumulated result. It can be used for totals, grouping, counting and other aggregation tasks.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Array methods make data processing easier in modern JavaScript.",
      },
      {
        type: "paragraph",
        heading: "Promises",
        text:
          "Promises represent the eventual result of asynchronous operations. They can be resolved successfully or rejected when an operation fails. Promises are commonly used for network requests.",
      },
      {
        type: "code",
        heading: "Promise Example",
        code: `fetch("/api/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });`,
      },
      {
        type: "paragraph",
        heading: "async and await",
        text:
          "async and await provide a readable way to work with promises. An async function can await a promise and continue after the operation completes. Error handling can be performed using try and catch.",
      },
      {
        type: "code",
        heading: "async await Example",
        code: `async function getUsers() {
  try {
    const response =
      await fetch("/api/users");

    const data =
      await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`,
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Asynchronous JavaScript is essential for modern API-driven applications.",
      },
      {
        type: "paragraph",
        heading: "Modules",
        text:
          "JavaScript modules allow code to be split across multiple files. export and import statements make it possible to share functions, objects and components while keeping the project organized.",
      },
      {
        type: "paragraph",
        heading: "Why ES6 Matters for React",
        text:
          "React development relies heavily on modern JavaScript. Arrow functions, destructuring, spread syntax, map, filter, promises, async/await and modules appear frequently in React applications. A strong ES6 foundation makes React code easier to understand.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "Modern JavaScript features form an important foundation for React development.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "Modern JavaScript is not simply about shorter syntax. These features provide useful patterns for handling data, functions, asynchronous operations and modular applications. Practice each feature through small projects before combining them in larger React applications.",
      },
    ],
  },

  // =========================================================
  // 5. AWS CLOUD
  // =========================================================

  {
    id: 5,
    title: "AWS Cloud Computing: Complete Beginner Guide",
    category: "Cloud & AWS",
    description:
      "Understand cloud computing and AWS fundamentals including regions, EC2, S3, IAM, VPC, RDS, CloudWatch, security and basic cloud architecture.",
    author: "Rahul Verma",
    date: "September 28, 2026",
    readTime: "24 min read",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
        caption: "Cloud computing and distributed infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
        caption: "Modern cloud server infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        caption: "Monitoring cloud application data",
      },
      {
        url: "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=1400&q=85",
        caption: "Cloud infrastructure and networking",
      },
      {
        url: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1400&q=85",
        caption: "Data center infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85",
        caption: "Cloud-connected systems",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "What is Cloud Computing?",
        text:
          "Cloud computing provides access to computing resources such as servers, storage, databases and networking through internet-based services. Instead of purchasing and maintaining every physical server directly, organizations can provision resources according to their requirements.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "What is AWS?",
        text:
          "Amazon Web Services is a cloud platform that provides many infrastructure and application services. Developers can combine these services to create websites, APIs, databases, storage systems, monitoring solutions and complete application architectures.",
      },
      {
        type: "paragraph",
        heading: "AWS Regions and Availability Zones",
        text:
          "AWS organizes infrastructure geographically into Regions and Availability Zones. Choosing an appropriate region can affect latency, service availability, compliance considerations and cost. Availability Zones provide separate infrastructure locations within a region.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "Cloud infrastructure consists of interconnected computing and networking resources.",
      },
      {
        type: "paragraph",
        heading: "Amazon EC2",
        text:
          "Amazon EC2 provides virtual servers that can run applications and services. Developers can select an instance type, operating system, storage configuration and network settings based on the workload.",
      },
      {
        type: "code",
        heading: "Typical EC2 Workflow",
        code: `1. Choose an AWS Region
2. Select an AMI
3. Choose an instance type
4. Configure networking
5. Configure security groups
6. Add storage
7. Launch the instance
8. Connect through SSH`,
      },
      {
        type: "paragraph",
        heading: "Amazon S3",
        text:
          "Amazon S3 provides object storage. It is commonly used for static assets, backups, documents, media files and static websites. Data is organized into buckets and objects.",
      },
      {
        type: "paragraph",
        heading: "IAM",
        text:
          "AWS Identity and Access Management controls authentication and authorization for AWS resources. Users, groups, roles and policies help determine who can perform which actions.",
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Cloud services can be monitored and managed through structured dashboards.",
      },
      {
        type: "paragraph",
        heading: "VPC Networking",
        text:
          "Amazon VPC provides networking capabilities for AWS resources. Developers can work with subnets, route tables, internet gateways and security controls to design application networks.",
      },
      {
        type: "paragraph",
        heading: "Amazon RDS",
        text:
          "Amazon RDS is a managed database service that supports several relational database engines. It handles many operational tasks associated with database infrastructure and can be integrated with application servers.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Cloud applications depend on networking and infrastructure design.",
      },
      {
        type: "paragraph",
        heading: "CloudWatch",
        text:
          "Amazon CloudWatch provides monitoring and observability capabilities for AWS resources and applications. Metrics, logs and alarms can help developers understand application behavior and identify operational problems.",
      },
      {
        type: "paragraph",
        heading: "AWS Security Basics",
        text:
          "Security should be considered from the beginning of cloud architecture. Strong identity controls, least-privilege permissions, secure network configurations, encryption and monitoring are important parts of responsible cloud operations.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Cloud infrastructure depends on secure and well-managed data center resources.",
      },
      {
        type: "paragraph",
        heading: "Simple AWS Architecture",
        text:
          "A simple web application might use S3 for static assets, EC2 for application logic, RDS for relational data and CloudWatch for monitoring. VPC networking and IAM policies provide infrastructure and access controls around those services.",
      },
      {
        type: "code",
        heading: "Example Architecture",
        code: `User
  |
  v
Web Application
  |
  +---- EC2
  |
  +---- RDS
  |
  +---- S3
  |
  +---- CloudWatch

IAM + VPC
Security Layer`,
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "Cloud services can be combined to create complete application architectures.",
      },
      {
        type: "paragraph",
        heading: "Learning AWS as a Beginner",
        text:
          "Start with cloud concepts before trying to learn dozens of AWS services. Learn IAM, EC2, S3, VPC, RDS and CloudWatch first. Build small projects such as hosting a static website and deploying a simple web application.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "AWS becomes easier when services are learned through practical architectures rather than isolated definitions. Understanding how compute, storage, databases, networking, identity and monitoring work together provides a strong foundation for cloud engineering.",
      },
    ],
  },

  // =========================================================
  // 6. AWS DEPLOYMENT
  // =========================================================

  {
    id: 6,
    title: "Deploying a Web Application on AWS Step by Step",
    category: "Cloud & AWS",
    description:
      "Learn a practical AWS deployment workflow using EC2, Linux, Apache, S3, IAM, security groups, RDS and monitoring.",
    author: "Meera Nair",
    date: "September 27, 2026",
    readTime: "25 min read",

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
        caption: "AWS server infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
        caption: "Cloud deployment infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1400&q=85",
        caption: "Servers and data center infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=1400&q=85",
        caption: "Cloud networking infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85",
        caption: "Connected cloud systems",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        caption: "Application monitoring dashboard concept",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "Understanding Cloud Deployment",
        text:
          "Deploying an application means making it available on infrastructure where users can access it. AWS provides several services that can be combined into a deployment architecture. A beginner-friendly setup can start with EC2 for the application server and S3 for static assets, then gradually introduce databases, monitoring and additional security controls.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Step 1: Choose a Region",
        text:
          "Before creating resources, choose an AWS region appropriate for the application. Consider user location, service availability, latency and cost when making the decision.",
      },
      {
        type: "paragraph",
        heading: "Step 2: Create an EC2 Instance",
        text:
          "EC2 provides the virtual machine that can host an application. Select an operating system image, instance type, storage and networking settings before launching the server.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "EC2 provides virtual servers for hosting applications.",
      },
      {
        type: "paragraph",
        heading: "Step 3: Configure Security Groups",
        text:
          "Security groups act as virtual firewalls for supported AWS resources. Only the ports required by the application should be exposed. SSH access should be restricted appropriately rather than opened broadly to the internet.",
      },
      {
        type: "paragraph",
        heading: "Step 4: Connect to Linux",
        text:
          "After launching the instance, developers can connect to the server using an appropriate remote access method. Linux commands can then be used to install packages, configure services and deploy application files.",
      },
      {
        type: "code",
        heading: "Basic Linux Deployment Commands",
        code: `sudo apt update

sudo apt install apache2

sudo systemctl status apache2

cd /var/www/html

ls`,
      },
      {
        type: "paragraph",
        heading: "Step 5: Install Apache",
        text:
          "Apache is a commonly used web server. Once installed and running, it can serve static files from the configured web directory. For other application types, a reverse proxy or application-specific server setup may be required.",
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Server infrastructure provides the environment where applications run.",
      },
      {
        type: "paragraph",
        heading: "Step 6: Deploy the Application",
        text:
          "Application files can be transferred to the server using an appropriate deployment method. For production systems, automated CI/CD pipelines are usually preferable to manually copying files.",
      },
      {
        type: "paragraph",
        heading: "Step 7: Use Amazon S3",
        text:
          "S3 can store static assets such as images, documents and frontend files. Separating static assets from compute resources can simplify architecture and provide scalable object storage.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Cloud networking connects application servers with other services.",
      },
      {
        type: "paragraph",
        heading: "Step 8: Add a Database",
        text:
          "Applications that need persistent relational data can use Amazon RDS. The application server should communicate with the database through appropriately configured network and access controls.",
      },
      {
        type: "paragraph",
        heading: "Step 9: Configure IAM",
        text:
          "IAM should be used to provide only the permissions required by users, services and applications. Avoid using highly privileged credentials for routine tasks.",
      },
      {
        type: "paragraph",
        heading: "Step 10: Monitoring",
        text:
          "CloudWatch can be used to observe metrics and logs for supported AWS resources. Monitoring helps identify performance issues and operational failures.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "A production deployment combines compute, storage, networking and monitoring.",
      },
      {
        type: "code",
        heading: "Deployment Flow",
        code: `Developer
    |
    v
Git Repository
    |
    v
Build / Test
    |
    v
EC2 Server
    |
    +---- Application
    |
    +---- Database
    |
    +---- S3 Assets
    |
    v
Monitoring`,
      },
      {
        type: "paragraph",
        heading: "Production Considerations",
        text:
          "A real production environment requires more than simply launching a server. Consider HTTPS, backups, monitoring, least-privilege access, secrets management, patching, scaling and recovery procedures.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "Monitoring provides visibility into application and infrastructure behavior.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "AWS deployment becomes easier when approached as a sequence of understandable steps. Start with EC2 and Linux, then learn S3, IAM, networking, databases and monitoring. Build small deployments repeatedly until the workflow becomes familiar.",
      },
    ],
  },

  // =========================================================
  // 7. DOCKER
  // =========================================================

  {
    id: 7,
    title: "Docker for Beginners: Complete Practical Guide",
    category: "Docker & DevOps",
    description:
      "Learn Docker from the fundamentals including images, containers, Dockerfiles, ports, volumes, networks, Docker Compose and Docker Hub.",
    author: "Daniel Thomas",
    date: "September 26, 2026",
    readTime: "23 min read",

    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1400&q=85",
        caption: "Containerized application infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1400&q=85",
        caption: "Software development and deployment workflow",
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
        caption: "Collaborative DevOps workflow",
      },
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
        caption: "Server infrastructure for container workloads",
      },
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
        caption: "Cloud infrastructure and containers",
      },
      {
        url: "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=1400&q=85",
        caption: "Networked application infrastructure",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "What is Docker?",
        text:
          "Docker is a platform for packaging and running applications in containers. A container packages an application with the dependencies it needs so that it can run consistently across supported environments. Containers are commonly used in development, testing and deployment workflows.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Why Containers Matter",
        text:
          "Without consistent environments, an application may behave differently on a developer's computer, a testing server and production infrastructure. Containers help reduce these differences by defining the application environment in a repeatable way.",
      },
      {
        type: "paragraph",
        heading: "Docker Images",
        text:
          "A Docker image is a packaged template used to create containers. Images contain application code and required dependencies. Developers can build their own images or use existing images from registries.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "Docker images provide repeatable application environments.",
      },
      {
        type: "paragraph",
        heading: "Docker Containers",
        text:
          "A container is a running instance created from an image. Containers can be started, stopped, inspected and removed independently from the image they were created from.",
      },
      {
        type: "code",
        heading: "Basic Docker Commands",
        code: `docker pull nginx

docker images

docker run -d -p 8080:80 nginx

docker ps

docker stop <container-id>`,
      },
      {
        type: "paragraph",
        heading: "Dockerfile",
        text:
          "A Dockerfile contains instructions for building an image. It can specify the base image, working directory, dependency installation, application files and startup command.",
      },
      {
        type: "code",
        heading: "Example Dockerfile",
        code: `FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]`,
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Docker fits naturally into collaborative development and DevOps workflows.",
      },
      {
        type: "paragraph",
        heading: "Port Mapping",
        text:
          "Containers can run services on internal ports while exposing selected ports to the host. Port mapping makes an application inside a container accessible from the host machine or an appropriate network.",
      },
      {
        type: "paragraph",
        heading: "Volumes",
        text:
          "Volumes provide a way to persist data beyond the lifecycle of an individual container. They are useful when applications such as databases need data to survive container recreation.",
      },
      {
        type: "paragraph",
        heading: "Docker Networks",
        text:
          "Docker networks allow containers to communicate with each other. Multi-container applications can use networks to connect services while keeping communication organized.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Container workloads can run on server infrastructure alongside other services.",
      },
      {
        type: "paragraph",
        heading: "Docker Compose",
        text:
          "Docker Compose allows developers to define and manage multiple related containers through a configuration file. A typical project may contain an application container, database container and supporting services.",
      },
      {
        type: "code",
        heading: "Simple Compose Example",
        code: `services:

  app:
    build: .
    ports:
      - "3000:3000"

  database:
    image: mongo:latest
    ports:
      - "27017:27017"`,
      },
      {
        type: "paragraph",
        heading: "Docker Hub",
        text:
          "Docker Hub is a container image registry that can be used to store and distribute images. Developers can build an image locally and push it to a registry so another environment can pull it.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Docker images can be distributed through container registries.",
      },
      {
        type: "paragraph",
        heading: "Docker in DevOps",
        text:
          "Docker is commonly integrated into CI/CD pipelines. A pipeline can build an image, run tests, push the image to a registry and deploy the image to an environment.",
      },
      {
        type: "paragraph",
        heading: "Common Beginner Mistakes",
        text:
          "Beginners often confuse images and containers, expose unnecessary ports, store important persistent data only inside containers or create very large images. Understanding the lifecycle of images, containers and volumes helps avoid these problems.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "Docker can connect development, testing and deployment environments.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "Docker becomes much easier once the relationship between images, containers, Dockerfiles, volumes, networks and registries is understood. Practice by containerizing a simple application and gradually introduce Compose and CI/CD.",
      },
    ],
  },

  // =========================================================
  // 8. DEVOPS CI/CD
  // =========================================================

  {
    id: 8,
    title: "DevOps CI/CD: From GitHub to Deployment",
    category: "Docker & DevOps",
    description:
      "Understand the DevOps workflow and learn how Git, GitHub, CI/CD, automated testing, Docker and deployment work together.",
    author: "Vikram Singh",
    date: "September 25, 2026",
    readTime: "24 min read",

    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1400&q=85",
        caption: "DevOps development workflow",
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
        caption: "Collaborative software engineering",
      },
      {
        url: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1400&q=85",
        caption: "Containerized deployment workflows",
      },
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
        caption: "Production server infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        caption: "Monitoring application metrics",
      },
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
        caption: "Cloud infrastructure for automated deployments",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "What is DevOps?",
        text:
          "DevOps combines development and operations practices to improve how software is built, tested, delivered and maintained. The goal is not simply to use a collection of tools but to create a reliable workflow where changes can move through development and delivery processes efficiently.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Why Automation Matters",
        text:
          "Manual deployment processes are repetitive and can introduce mistakes. Automation allows predictable tasks such as testing, building and deployment to be performed consistently whenever changes are submitted.",
      },
      {
        type: "paragraph",
        heading: "Git as the Foundation",
        text:
          "Git records changes to source code and allows developers to work with branches, commits and merges. It provides the version history needed for collaboration and controlled development.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "DevOps depends on collaboration between development and operations workflows.",
      },
      {
        type: "paragraph",
        heading: "GitHub",
        text:
          "GitHub provides remote repositories and collaboration features around Git. Developers can use repositories, branches, pull requests, issues and actions to manage software projects.",
      },
      {
        type: "paragraph",
        heading: "Continuous Integration",
        text:
          "Continuous Integration means frequently integrating changes into a shared codebase and automatically validating them through build and test processes. Early feedback can help identify problems before deployment.",
      },
      {
        type: "paragraph",
        heading: "Continuous Delivery",
        text:
          "Continuous Delivery extends the automation process so software can be prepared for release consistently. Depending on the workflow, deployment may happen automatically after successful validation or require an approval step.",
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Docker containers can provide consistent environments during CI/CD workflows.",
      },
      {
        type: "code",
        heading: "Basic CI/CD Flow",
        code: `Developer
   |
   v
Git Push
   |
   v
Build
   |
   v
Test
   |
   v
Docker Build
   |
   v
Push Image
   |
   v
Deploy
   |
   v
Monitor`,
      },
      {
        type: "paragraph",
        heading: "GitHub Actions",
        text:
          "GitHub Actions can automate workflows based on repository events. A workflow can install dependencies, run tests, build an application, create a Docker image and perform deployment tasks.",
      },
      {
        type: "code",
        heading: "Simple GitHub Actions Workflow",
        code: `name: CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - run: npm install

      - run: npm test

      - run: npm run build`,
      },
      {
        type: "paragraph",
        heading: "Docker in CI/CD",
        text:
          "Docker can package the application and its runtime dependencies into an image. The same image can then move through testing and deployment environments, reducing differences between environments.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "CI/CD pipelines can automatically deliver applications to server infrastructure.",
      },
      {
        type: "paragraph",
        heading: "Environment Variables",
        text:
          "Applications frequently require configuration values such as API endpoints or credentials. These values should be managed through appropriate environment configuration and secret-management mechanisms rather than hardcoded into source code.",
      },
      {
        type: "paragraph",
        heading: "Monitoring After Deployment",
        text:
          "Deployment is not the end of the workflow. Applications should be monitored after release so teams can detect errors, resource problems and unexpected behavior.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Monitoring provides visibility after software has been deployed.",
      },
      {
        type: "paragraph",
        heading: "Real-World DevOps Workflow",
        text:
          "A practical workflow may begin with a developer creating a feature branch, committing changes and opening a pull request. Automated checks validate the code. After review and merge, a pipeline can build and deploy the application.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "DevOps is best understood as a continuous workflow rather than a single technology. Git, GitHub, automated testing, Docker, CI/CD and monitoring can work together to create a repeatable software delivery process.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "Cloud infrastructure can support automated DevOps deployment pipelines.",
      },
    ],
  },

  // =========================================================
  // 9. GIT
  // =========================================================

  {
    id: 9,
    title: "Git Complete Beginner Guide",
    category: "Git & GitHub",
    description:
      "Learn Git from the beginning including repositories, commits, branches, merging, history, undoing changes and practical version-control workflows.",
    author: "Aditya Menon",
    date: "September 24, 2026",
    readTime: "20 min read",

    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1400&q=85",
        caption: "Git version control workflow",
      },
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",
        caption: "Working with source code",
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
        caption: "Managing development files",
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
        caption: "Collaborative software development",
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
        caption: "Planning software changes",
      },
      {
        url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
        caption: "Professional development workflow",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "What is Git?",
        text:
          "Git is a distributed version control system used to track changes in files. It allows developers to create a history of their work, experiment with branches and collaborate while maintaining a record of previous versions.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Why Version Control Matters",
        text:
          "Without version control, developers may lose track of changes or overwrite important work. Git provides a structured history so changes can be reviewed, compared and recovered when necessary.",
      },
      {
        type: "paragraph",
        heading: "Create a Repository",
        text:
          "A Git repository contains the information Git uses to track a project. A repository can be created in an existing project using git init or obtained from an existing remote repository using git clone.",
      },
      {
        type: "code",
        heading: "Initialize Git",
        code: `git init

git status

git add .

git commit -m "Initial commit"`,
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "Git tracks changes to source code throughout development.",
      },
      {
        type: "paragraph",
        heading: "Git Status",
        text:
          "git status shows the current state of the working directory and staging area. It helps developers understand which files have been modified, staged or left untracked.",
      },
      {
        type: "paragraph",
        heading: "Staging and Commit",
        text:
          "The staging area allows developers to select changes that should become part of the next commit. A commit records a snapshot of the selected changes along with a message.",
      },
      {
        type: "paragraph",
        heading: "Git History",
        text:
          "Git log displays commit history. Reviewing history helps developers understand how the project evolved and identify when a particular change was introduced.",
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Source code can be tracked through a sequence of commits.",
      },
      {
        type: "paragraph",
        heading: "Branches",
        text:
          "Branches allow developers to work on different lines of development. A feature can be developed independently and later merged into another branch after review.",
      },
      {
        type: "code",
        heading: "Branch Commands",
        code: `git branch

git switch -c feature-login

git add .

git commit -m "Add login feature"

git switch main

git merge feature-login`,
      },
      {
        type: "paragraph",
        heading: "Merge Conflicts",
        text:
          "A merge conflict can occur when Git cannot automatically combine changes from different branches. Developers must inspect the conflicting sections, decide which content should remain and then complete the merge.",
      },
      {
        type: "paragraph",
        heading: "Undoing Changes",
        text:
          "Git provides several commands for handling unwanted changes. The correct command depends on whether the change is only in the working directory, staged or already committed.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Teams use Git to collaborate on shared software projects.",
      },
      {
        type: "paragraph",
        heading: "The .gitignore File",
        text:
          "The .gitignore file tells Git which files and directories should not normally be tracked. Common examples include dependency directories, build output, local environment files and generated logs.",
      },
      {
        type: "code",
        heading: "Example .gitignore",
        code: `node_modules/
dist/
.env
*.log`,
      },
      {
        type: "paragraph",
        heading: "Good Commit Messages",
        text:
          "Commit messages should explain what changed. Clear messages make project history easier to understand and help teammates identify the purpose of individual changes.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Git history provides context for changes made during development.",
      },
      {
        type: "paragraph",
        heading: "Git Workflow for Beginners",
        text:
          "A simple workflow is to pull the latest changes, create a feature branch, make changes, review the files, stage them, commit with a meaningful message and push the branch to a remote repository.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "Git is an essential development skill because it provides control over source-code history and collaboration. Beginners should practice the basic workflow repeatedly until repositories, commits, branches and merges become familiar.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "A structured Git workflow improves software development and collaboration.",
      },
    ],
  },

  // =========================================================
  // 10. GITHUB
  // =========================================================

  {
    id: 10,
    title: "GitHub Professional Workflow Guide",
    category: "Git & GitHub",
    description:
      "Learn how GitHub works with Git and how to use repositories, branches, pull requests, issues, README files and collaborative workflows.",
    author: "Sneha Kapoor",
    date: "September 23, 2026",
    readTime: "21 min read",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
        caption: "Collaborative development workflow",
      },
      {
        url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1400&q=85",
        caption: "Version control and remote repositories",
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
        caption: "Team-based software development",
      },
      {
        url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
        caption: "Planning development projects",
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
        caption: "Managing code changes",
      },
      {
        url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
        caption: "Professional software project workflow",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "What is GitHub?",
        text:
          "GitHub is a platform built around Git repositories and software collaboration. Developers can store repositories remotely, work with branches, review changes, track issues and collaborate with other contributors.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Git vs GitHub",
        text:
          "Git is the version control system installed and used locally. GitHub is a hosted platform that provides remote repositories and collaboration features around Git. They are related but are not the same technology.",
      },
      {
        type: "paragraph",
        heading: "Creating a Repository",
        text:
          "A repository contains the source code and project documentation. A good repository should have a clear name, useful README documentation and appropriate files committed to version control.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "Remote repositories make source code accessible for collaboration.",
      },
      {
        type: "paragraph",
        heading: "Push and Pull",
        text:
          "git push sends local commits to a remote repository, while git pull retrieves remote changes and integrates them into the current branch. Understanding these commands is essential for collaborative development.",
      },
      {
        type: "code",
        heading: "Remote Workflow",
        code: `git remote add origin <repository-url>

git branch -M main

git push -u origin main

git pull origin main`,
      },
      {
        type: "paragraph",
        heading: "Branches on GitHub",
        text:
          "Branches allow developers to work on features without directly changing the main production branch. A feature branch can be pushed to GitHub and used to create a pull request.",
      },
      {
        type: "paragraph",
        heading: "Pull Requests",
        text:
          "Pull requests allow proposed changes to be reviewed before they are merged. Team members can inspect the code, leave comments and discuss improvements.",
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Collaboration platforms allow developers to review and discuss code changes.",
      },
      {
        type: "paragraph",
        heading: "Issues",
        text:
          "GitHub Issues can be used to track bugs, feature requests, tasks and project discussions. A well-maintained issue should explain the problem or goal clearly.",
      },
      {
        type: "paragraph",
        heading: "README Files",
        text:
          "The README is often the first document a visitor sees when opening a repository. It should explain what the project does, how to install it, how to run it and any important usage information.",
      },
      {
        type: "code",
        heading: "Useful README Structure",
        code: `# Project Name

## About

Project description.

## Features

- Feature one
- Feature two

## Installation

npm install

## Run

npm run dev`,
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Good project documentation helps others understand and use a repository.",
      },
      {
        type: "paragraph",
        heading: "GitHub Actions",
        text:
          "GitHub Actions can automate tasks such as testing, building and deployment. Workflows can run in response to pushes, pull requests and other repository events.",
      },
      {
        type: "paragraph",
        heading: "Professional GitHub Profile",
        text:
          "Developers can use GitHub as a portfolio of public work. Clear repositories, meaningful README files, sensible commit history and deployed projects can make a profile easier to understand.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "A professional GitHub workflow combines source control, documentation and collaboration.",
      },
      {
        type: "paragraph",
        heading: "Common Beginner Mistakes",
        text:
          "Avoid committing secrets, credentials or unnecessary generated files. Do not use unclear commit messages for every change. Keep repositories organized and document important setup instructions.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "GitHub becomes much more useful when it is treated as a collaboration platform rather than simply a place to upload code. Learn repositories, branches, pull requests, issues, documentation and automation to build a professional workflow.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "GitHub can support a complete software collaboration workflow.",
      },
    ],
  },

  // =========================================================
  // 11. FRONTEND DEVELOPMENT
  // =========================================================

  {
    id: 11,
    title: "Modern Frontend Development: HTML, CSS & JavaScript",
    category: "Frontend",
    description:
      "Understand the complete frontend foundation including HTML structure, CSS layout, responsive design, JavaScript interaction, forms, APIs and accessibility.",
    author: "Rohan Patel",
    date: "September 22, 2026",
    readTime: "22 min read",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
        caption: "Modern frontend development workspace",
      },
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",
        caption: "Writing frontend JavaScript",
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
        caption: "Developing web interfaces",
      },
      {
        url: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=85",
        caption: "Responsive web design",
      },
      {
        url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
        caption: "Designing modern user interfaces",
      },
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85",
        caption: "Building interactive websites",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "What is Frontend Development?",
        text:
          "Frontend development focuses on the part of a web application users see and interact with. HTML provides structure, CSS controls visual presentation and JavaScript provides behavior. Modern frontend development combines these foundations with frameworks, build tools, APIs and responsive design practices.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "HTML Structure",
        text:
          "HTML defines the semantic structure of a webpage. Developers should use appropriate elements for headings, navigation, articles, sections, forms, buttons and other content rather than relying only on generic div elements.",
      },
      {
        type: "code",
        heading: "Semantic HTML",
        code: `<header>
  <nav>
    <a href="/">Home</a>
    <a href="/blogs">Blogs</a>
  </nav>
</header>

<main>
  <article>
    <h1>Frontend Development</h1>
    <p>Learn modern web development.</p>
  </article>
</main>`,
      },
      {
        type: "paragraph",
        heading: "CSS Fundamentals",
        text:
          "CSS controls colors, spacing, typography, borders, layouts and responsive behavior. Understanding the box model, specificity and inheritance provides a strong foundation for creating consistent interfaces.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "Frontend development combines structure, styling and behavior.",
      },
      {
        type: "paragraph",
        heading: "Flexbox",
        text:
          "Flexbox is useful for one-dimensional layouts. It provides controls for alignment, spacing, direction and distribution of elements. Navigation bars, card rows and centered layouts are common Flexbox use cases.",
      },
      {
        type: "paragraph",
        heading: "CSS Grid",
        text:
          "CSS Grid is useful for two-dimensional layouts. It allows developers to define rows and columns and create structured page sections. Blog grids, dashboards and product layouts commonly benefit from Grid.",
      },
      {
        type: "code",
        heading: "Responsive Grid",
        code: `.cards {
  display: grid;
  grid-template-columns:
    repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 800px) {
  .cards {
    grid-template-columns:
      repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`,
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Responsive layouts adapt the interface to different screen sizes.",
      },
      {
        type: "paragraph",
        heading: "Responsive Web Design",
        text:
          "Responsive design allows a website to adapt to different screen sizes. Developers can use flexible layouts, relative units, media queries and responsive images to create interfaces that work across desktop, tablet and mobile devices.",
      },
      {
        type: "paragraph",
        heading: "JavaScript Interaction",
        text:
          "JavaScript adds behavior to websites. It can respond to user actions, validate forms, manipulate the DOM, communicate with APIs and update application data.",
      },
      {
        type: "paragraph",
        heading: "Forms",
        text:
          "Forms allow users to submit information. A professional form should have clear labels, appropriate input types, validation feedback and accessible controls.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Responsive design is essential for modern websites.",
      },
      {
        type: "paragraph",
        heading: "API Integration",
        text:
          "Frontend applications often retrieve information from backend APIs. JavaScript can use fetch or other HTTP clients to request data and display it dynamically.",
      },
      {
        type: "code",
        heading: "Fetch Example",
        code: `async function loadProducts() {
  const response =
    await fetch("/api/products");

  const products =
    await response.json();

  console.log(products);
}`,
      },
      {
        type: "paragraph",
        heading: "Accessibility",
        text:
          "Accessible interfaces should work for users with different abilities. Semantic HTML, labels, keyboard navigation, useful focus states and meaningful alternative text are important parts of accessible frontend development.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Good frontend design balances visual appearance and usability.",
      },
      {
        type: "paragraph",
        heading: "Frontend Performance",
        text:
          "Performance can be improved through optimized images, efficient JavaScript, appropriate asset loading and careful handling of large application bundles. Performance should be considered throughout development rather than only at the end.",
      },
      {
        type: "paragraph",
        heading: "Frontend Learning Roadmap",
        text:
          "A practical learning order is HTML, CSS, responsive design, JavaScript, DOM manipulation, APIs, Git and then a framework such as React. Build projects after every major stage so that each concept becomes practical.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "A strong frontend foundation supports modern framework development.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "Frontend development is a combination of structure, visual design, programming and user experience. Mastering HTML, CSS and JavaScript first creates a much stronger foundation for learning React and other modern frontend technologies.",
      },
    ],
  },

  // =========================================================
  // 12. RESPONSIVE WEBSITE
  // =========================================================

  {
    id: 12,
    title: "Building a Professional Responsive Website",
    category: "Frontend",
    description:
      "Learn how to plan, design and build a professional responsive website with navigation, hero sections, cards, forms, mobile layouts, accessibility and performance.",
    author: "Nisha Krishnan",
    date: "September 21, 2026",
    readTime: "23 min read",

    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=85",

    images: [
      {
        url: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=85",
        caption: "Designing a responsive website",
      },
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
        caption: "Frontend website development",
      },
      {
        url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
        caption: "Creating professional user interfaces",
      },
      {
        url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=85",
        caption: "Website UI and UX planning",
      },
      {
        url: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1400&q=85",
        caption: "Responsive interface design",
      },
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85",
        caption: "Professional website project",
      },
    ],

    content: [
      {
        type: "intro",
        heading: "Start With a Plan",
        text:
          "A professional website begins with planning rather than immediately writing code. Identify the purpose of the website, target users, important pages and primary actions. A simple plan prevents unnecessary sections and helps create a consistent user experience.",
        imageIndex: 1,
      },
      {
        type: "paragraph",
        heading: "Define the Website Structure",
        text:
          "Typical websites may contain a Home page, About page, Services or Products page, Blog page, Contact page and authentication screens when required. Each page should have a clear purpose and logical navigation path.",
      },
      {
        type: "paragraph",
        heading: "Design the Header",
        text:
          "The header usually contains the brand, primary navigation and one or more important actions. A good header should remain readable and easy to use on smaller screens.",
      },
      {
        type: "image",
        imageIndex: 2,
        caption:
          "A clean frontend structure makes navigation easier for users.",
      },
      {
        type: "paragraph",
        heading: "Build the Hero Section",
        text:
          "The hero section communicates the main value of the website. It should contain a clear heading, supporting text and an appropriate primary action. Visual content can strengthen the message without overwhelming the page.",
      },
      {
        type: "paragraph",
        heading: "Create Content Sections",
        text:
          "Content should be organized into sections with clear hierarchy. Headings, supporting text, cards and visual elements should work together to guide users through the page.",
      },
      {
        type: "code",
        heading: "Basic Hero Structure",
        code: `<section className="hero">
  <div className="hero-content">
    <span>Welcome</span>

    <h1>
      Build Something
      Amazing
    </h1>

    <p>
      Create modern digital
      experiences.
    </p>

    <a href="/contact">
      Get Started
    </a>
  </div>
</section>`,
      },
      {
        type: "paragraph",
        heading: "Card-Based Layouts",
        text:
          "Cards are useful for displaying products, services, blog posts and feature summaries. Consistent spacing, typography and image dimensions make a card grid look professional.",
      },
      {
        type: "image",
        imageIndex: 3,
        caption:
          "Professional interfaces use consistent spacing, hierarchy and reusable components.",
      },
      {
        type: "paragraph",
        heading: "Responsive Layout",
        text:
          "A website should not simply shrink on mobile. Navigation, spacing, typography, images and content order may need to change depending on available screen space.",
      },
      {
        type: "code",
        heading: "Responsive Navigation Example",
        code: `.nav-links {
  display: flex;
  gap: 30px;
}

@media (max-width: 700px) {
  .nav-links {
    display: none;
  }

  .mobile-menu {
    display: block;
  }
}`,
      },
      {
        type: "paragraph",
        heading: "Mobile-First Thinking",
        text:
          "Designing with smaller screens in mind helps developers focus on the most important content first. Additional layout complexity can then be introduced for larger screens.",
      },
      {
        type: "image",
        imageIndex: 4,
        caption:
          "Responsive design ensures websites remain usable across different devices.",
      },
      {
        type: "paragraph",
        heading: "Forms and Contact Pages",
        text:
          "Contact and signup forms should be simple and clear. Each field should have a meaningful label, suitable validation and understandable feedback. Avoid requesting unnecessary information.",
      },
      {
        type: "paragraph",
        heading: "Accessibility",
        text:
          "Use semantic HTML, sufficient contrast, keyboard-friendly controls, descriptive alternative text and clear focus states. Accessibility should be part of the design process rather than a final checklist.",
      },
      {
        type: "paragraph",
        heading: "Website Performance",
        text:
          "Large images can significantly affect page loading. Compress images, use appropriate dimensions and avoid loading resources that are not needed immediately. Keep JavaScript and CSS organized and avoid unnecessary dependencies.",
      },
      {
        type: "image",
        imageIndex: 5,
        caption:
          "Good responsive design balances visual quality, usability and performance.",
      },
      {
        type: "paragraph",
        heading: "Testing the Website",
        text:
          "Test the website at different viewport sizes and in multiple browsers. Check navigation, forms, links, images, loading states and interactive components. Testing on an actual mobile device can reveal issues that are difficult to notice on desktop.",
      },
      {
        type: "paragraph",
        heading: "Deployment",
        text:
          "Once the website has been tested, create a production build and deploy it using a suitable hosting platform. Verify routing, asset paths, environment variables and HTTPS configuration after deployment.",
      },
      {
        type: "image",
        imageIndex: 6,
        caption:
          "A completed responsive website should provide a consistent experience across devices.",
      },
      {
        type: "paragraph",
        heading: "Professional Website Checklist",
        text:
          "Before considering a website complete, verify responsive layouts, navigation, typography, spacing, forms, accessibility, image optimization, SEO basics, loading behavior and deployment configuration.",
      },
      {
        type: "paragraph",
        heading: "Conclusion",
        text:
          "A professional website is more than an attractive homepage. It combines clear structure, responsive design, useful content, accessible interactions and reliable performance. Building several complete websites is one of the best ways to improve frontend development skills.",
      },
    ],
  },
];

export default blogs;