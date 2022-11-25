[⬅ Step 02](Step02.md) | [🏠 HOME](../README.md) | [Step 04 ➡](Step04.md)

# Step 03

Now that you have the container for your map ready, and your map, for that matter, let's create an API key, so that you can actually see your map.

## Adding Google Maps to our app!

First of all, though, we need to enable the APIs and get credentials!

- Go to the [Google Cloud Console / Google Maps](https://console.cloud.google.com/google/maps-apis/) page.
- Click Agree and continue to accept the Terms of Service.
- It says "To view this page, select a project.". If it's your first time using GCP you will need to create a project. Click "Select a Project" on the navbar and then "New Project". Give it a name and click "Create".

Now let's enable the APIs:

- Click on the "View all APIs" button, in the Enabled APIs card.
- Click on the "Maps JavaScript API".
- Click "enable".

Now let's get our API key:

- Click on the "Credentials" tab on the sidenav
- Click "Create Credentials" and then "API Key" on the navbar.
- Copy your API key
- Don't worry about restricting it for the time being. We will do that later.

## Using the API key

Now that we have our API key, let's add it in our code. Go to [apps/base/src/app/app.element.ts](apps/base/src/app/app.element.ts) and replace `<YOUR_API_KEY>` with your actual API key.

## Serve the app

In your terminal, do:

```
npx nx serve base
```

And navigate to [http://localhost:4200](http://localhost:4200) to see your map!

Hmmmm, there's no map there, Katerina!!!

Let's look at the console. You will see an error:

```
You must enable Billing on the Google Cloud Project
```

What??

I know!!!! I omitted one tiny little detail. The Google Maps JS API is a paid service, so you need to enable billing. Really.

## Set up billing

However, Google's here for you. It offers you 300$ worth of free credits as a welcome gift. Go back to your Google Cloud Console. Above the navbar you see the message:

```
Start your free trial with $300 in credit. Don't worry – you won't be charged if you run out of credit. Learn more
```

Click "ACTIVATE". You will need to add your card number, but don't worry, during this exercise we will not spend a single penny, let alone get close to the free 300$ limit. After we finish you can disable everything, and remove your card.

## Serve the app

After you've set up billing, in your terminal, do:

```
npx nx serve base
```

And navigate to [http://localhost:4200](http://localhost:4200) to see your map!

The map's there now!! Let's go add stuff to it.

[⬅ Step 02](Step02.md) | [🏠 HOME](../README.md) | [Step 04 ➡](Step04.md)
