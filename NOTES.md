# NOTES

Used `npm create-react-app robofriends` to create the overall framework of this project.
* Installed the `create-react-app` feature globally.
* Use `npm start` to start the development server.
* Note that es-lint hints are automatically printed in the terminal when using the server. Keep the terminal open.

This project uses [Tachyons](http://tachyons.io/) CSS framework in the `Cards.js` and `Cardlist.js` files. Read up on this.
* Added to [KanbanFlow](https://kanbanflow.com/board/Emz6zrrv) 3/1/2018 so I can read up and tinker with Tachyons.

Check out [robohash.org](https://robohash.org/) for cool robot graphics.
* Again, added to [KanbanFlow](https://kanbanflow.com/board/Emz6zrrv) 3/1/2018.

Used [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to create a mini-API for testing.
* NOTE: This is an incredibly useful tool for writing AJAX code. It lets me use a dummy API while mucking around with the code.

Notice how the React files are organized as separate components, making them re-usable.

Re-organized React files into `components` and `containers` directories. This will make it easier to keep things organized if the app continues to scale up.

Ran `npm run build` to optimize the app for deployment. I can now deploy the `build` folder as a web app.
* NOTE: This didn't work as I expected. See the note below.

**Moved `robofriends` out of `webDevelProjects` and into `development` so it could have its own Git repository**
* Ran some extra code and tweaked the `package.json` file according to [instructions on how to turn a React app into a GitHub Pages site](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages). Worked like a charm.
* **The [robofriends app](https://pulamusic.github.io/robofriends/) now has its own site**.

---

#### Frustration!

> The instructor just blows through a bunch of stuff having to do with React, leaving me in the dust even though I have had some instruction in React already. I go back and forth as to whether this guy is a decent teacher.
>
> I need to re-do the Codecademy React Tutorial [part 1](https://www.codecademy.com/learn/react-101) and [part 2](https://www.codecademy.com/learn/react-102) in order to refresh my basic React skills.
