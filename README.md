Demo Website [Synapsis Blog](https://synapsis-fe-blog.vercel.app/)

# Synapsys Frontend Test

Muhammad Zainuddin Basyar (Frontend Developer)

[LinkedIn Profile](https://www.linkedin.com/in/muhammad-zainuddin-basyar/) - [Profile Website](http://muh-zaan.my.id/)

CRUD Website Blog and User with open API from [gorest.co.in](https://gorest.co.in/)

## Getting Started App

- First, clone this repository to your local device

```bash
git clone https://github.com/zainuddin25/synapsis-fe-challange.git
```

- Second, install the required dependencies

```bash
npm Install
```

OR

```bash
yarn install
```

- Third, run it on your local device

```bash
npm run dev
```

OR

```bash
yarn dev
```

## Routes

This project includes the following routes:

1. **`/`**: Displays a list of all blog posts.
2. **`/blog/[id]`**: Displays the details of a specific blog post based on the ID in the URL.
3. **`/my-blog`**: Displays the blogs created by the user and includes CRUD operations (Create, Read, Update, Delete) for blog posts.
4. **`/user`**: Displays a list of users and includes CRUD operations (Create, Read, Update, Delete) for user management.

## Technologies Used

This project uses the following libraries and frameworks:

1. **Next.js**: The React framework for production. ([Documentation](https://nextjs.org/docs))

2. **React**: A JavaScript library for building user interfaces. ([Documentation](https://reactjs.org/docs/getting-started.html))

3. **React DOM**: Serves as the entry point to the DOM and server renderers for React. ([Documentation](https://reactjs.org/docs/react-dom.html))

4. **@reduxjs/toolkit**: The official, recommended way to write Redux logic. It provides good defaults and simplifies the Redux development process. ([Documentation](https://redux-toolkit.js.org/introduction/getting-started))

5. **React Redux**: Official React bindings for Redux. ([Documentation](https://react-redux.js.org/introduction/quick-start))

6. **Axios**: A promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. ([Documentation](https://axios-http.com/docs/intro))

7. **React Feather**: Collection of simply beautiful open source icons for React. ([Documentation](https://github.com/feathericons/react-feather))
8. **SweetAlert2**: A beautiful, responsive, customizable, and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. ([Documentation](https://sweetalert2.github.io/))

## Folder Structure

The project structure is as follows:

- [public/](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/public)
- [src/](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src)
  - [app/](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/app)
  - [components/](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/components)
  - [helper/](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/helper)
  - [lib/](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/lib)
  - [types/](https://github.com/zainuddin25/synapsis-fe-challange/tree/master/src/types)

## Deployment

This project is deployed using [Vercel](https://vercel.com/), a platform for static sites and serverless functions.

## Environment Variables

In file [next.config.mjs](https://github.com/zainuddin25/synapsis-fe-challange/blob/master/next.config.mjs) to edit env

- API_URL
  public api endpoint
- ACCESS_TOKEN:
  token used to access the api. go to [gorest.co.id](https://gorest.co.in/consumer/login) to generate access token
- USER_ID: User ID is used as the default user when creating a blog. The user ID can be obtained by creating a new user or taking it from the list of registered users. [List User](https://gorest.co.in/public/v2/users) to get the user ID
