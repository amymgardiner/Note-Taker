# Note Taker

## About

An application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.

The application’s front end was already created for this challenge, so I didn't design that. However, I did build the back end, connected the two, and then deployed the entire application to Heroku.

This application was made in VS Code and tested in both http://localhost:3001/ and Insomnia.

## How it works

This is a note-taking application. When you open Note Taker, by either running it on your local server and going to http://localhost:3001/ or clicking on the link to the Heroku deployed application, then you will be presented with a landing page with a link to a notes page.

Once you click on the link to the notes page, then you will be presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.

After you enter in BOTH the new note's title and the note's text, then a Save icon will appear in the navigation at the top of the page. When you click on the Save icon, then the new note is saved and will appear in the left-hand column with the other existing notes.

If you click on an existing note in the list in the left-hand column, then that note appears in the right-hand column. Also, when you click on the Write icon in the navigation at the top of the page, then you will be presented with empty fields to enter a new note title and the note’s text in the right-hand column.
