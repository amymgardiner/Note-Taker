# Note Taker

## About

An application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.

The application’s front end was already created for this challenge, so I didn't design that. However, I did build the back end, connected the two, and then deployed the entire application to Heroku.

This application was made in VS Code and tested in both http://localhost:3001/ and Insomnia.

**Update: Due to the removal of Heroku's free product plans, I have found another free hosting platform that was not taught in the bootcamp. The [Heroku link](https://sleepy-caverns-23548.herokuapp.com/) for this site no longer works. Please view this site with the new link below. Thanks!**

## How it works

This is a note-taking application. When you open Note Taker, by either running it on your local server and going to http://localhost:3001/ or clicking on the link to the Heroku deployed application, then you will be presented with a landing page with a link to a notes page.

Once you click on the link to the notes page, then you will be presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.

After you enter in BOTH the new note's title and the note's text, then a Save icon will appear in the navigation at the top of the page. When you click on the Save icon, then the new note is saved and will appear in the left-hand column with the other existing notes.

If you click on an existing note in the list in the left-hand column, then that note appears in the right-hand column. Also, when you click on the Write icon in the navigation at the top of the page, then you will be presented with empty fields to enter a new note title and the note’s text in the right-hand column.

## How to use it

The easiest way to use this application, is to go to the live Render link:

[Note Taker](https://note-taker-fzox.onrender.com/)

You can also clone my [GitHub Repository](https://github.com/amymgardiner/Note-Taker). Please make sure you have [Node.js](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs) downloaded first.

Once cloned, open up your command line terminal and go to the file containing the repository on your computer. Then type in the following command:

npm install

which installs the dependencies to the local node_modules folder. By default, npm install will install all modules listed as dependencies in package.json.

Finally, the application's server can run when you type in the following command:

npm start

And you can view the application on your browser with the linke mentioned above:

http://localhost:3001/

## Example

![Screenshot 2022-07-24 164243](https://user-images.githubusercontent.com/99151426/180667018-b5fba5f9-687f-49d6-95ce-e0420d82855f.png)

![Screenshot 2022-07-24 16432367](https://user-images.githubusercontent.com/99151426/180667030-fcf4c54f-069c-4d65-84ef-c601d510d50e.png)
