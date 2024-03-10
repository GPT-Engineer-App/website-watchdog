# website-watchdog

I am interested in developing a website monitoring service. This service will allow users to track changes on various websites. Here are the key features I envision:

Website List: Users can add or remove websites from their list. Each website on the list is associated with its HTML content.
Frequency Setting: Users can set a specific frequency at which the service checks for changes on each website in their list.
Change Sensitivity: Users can define a threshold for the number of character changes in the HTML content of a website that constitutes a significant change.
Email Notifications: If a website’s HTML content changes significantly (i.e., it deviates by more than the set threshold of characters), the service will send an email notification to the user’s registered email address.
the inputs the user can and has to input: the actual websites to track, for each website a threshold and a frequency (requests per hour, than ca be a max of 4) and his personal email to where the emails are to be sent with the notification. The notification email will contain the message changes detected + the url where the changes were detected. 
Make sure that all functionalities are implemented in their entirety and the code is complete. 


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/website-watchdog.git
cd website-watchdog
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
