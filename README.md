# Material UI - Next.js App Router in TypeScript

This is a [Next.js](https://nextjs.org/) project bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/HEAD/packages/create-next-app) with Material UI installed.

Visit the demo site here!

## How to use

Install it and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

or:

# Full-stack assignment

## Front End Part

Design System Component - focussed on converting a design into a reusable component.

## Back End Part

NodeJS Backend - back-end focussed task, where you can show off your hardcore development skills.

# Tasks

## FE - Design System Component

We want you to create this component using the following tools:

![example-gif](./images/design-system.gif)
![example-mobile|320x550](./images/design-system-mobile.png){width=320px}
![example-desktop|320x569](./images/design-system-desktop.png){width=320px}

Everything is done through git, so to share this project we would like you to send us a git repo on for example like Github/Gitlab etc.

We would like you to use [Storybook](https://storybook.js.org/) as a start for this assignment, and in our apps we use [Material-UI](https://material-ui.com]) as a base for our components.

Create a few pages like this with different kind of text and link them together in the menu.

Have MUI as a base for the components and incorperate the best way to have the animations how its shown in the design.

Have the component be responsive on Desktop and Mobile

Icons you can use either random from the internet or other packages.

## BE - NodeJS

Create a function/method that can assess a list of webservers and then returns
a server with the lowest priority. Also create a unit test that can check if
the function/method works as expected.

![diagram|301x481](./images/backend.jpeg)

#### Requirements

- A `findServer()` function which returns a Promise that either:
  - Resolves and return an online server with the lowest priority.
  - Reject with an error if no servers are online.
- The HTTP server requests should be used to check if the server is online or offline depending on the following requirements:
  - All server GET requests should be run in parallel.
  - The GET request should timeout after 5 seconds.
  - When the GET request responds with a status code of 200-299, it is considered online.
- A unit test that checks all the underlying components/requirements.
  - The server requests should be mocked.

#### JSON Array to use

```json
[
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 1
  },
  {
    "url": "https://gitlab.com",
    "priority": 4
  },
  {
    "url": "http://app.scnt.me",
    "priority": 3
  },
  {
    "url": "https://offline.scentronix.com",
    "priority": 2
  }
]
```
