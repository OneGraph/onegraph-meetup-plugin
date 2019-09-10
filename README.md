# Meetup Plugin

Lists upcoming GraphQL Meetups using [OneGraph's](https://onegraph.com) Meetup integration and persisted queries.

View the [demo](https://onegraph.github.io/onegraph-meetup-plugin/).

## Developing

Install dependencies

```sh
yarn install
```

Start the demo
```sh
yarn start
```

1. Create a new app on [OneGraph](https://onegraph.com)
2. Replace the `APP_ID` in `src/index.js` with your app's id.
3. Go to the "Server-Side Auth" tab on the OneGraph dashboard and create a new token with your Meetup credentials.
4. Go to the "Persisted Queries" tab on the OneGraph dashboard, scroll down to the bottom and create a persisted query with the token you just created and the following query

    ```graphql
    query MeetupEvents {
      meetup {
        makeRestCall {
          get(
            path: "/find/upcoming_events"
            query: [
              ["radius", "global"],
              ["text", "graphql"],
              ["order", "time"]
            ]
          ) {
            jsonBody
          }
        }
      }
    }
    ```
5. Replace `QUERY_ID` in `src/index.js` with the doc_id for the query you just created.

Once you've done that, you can create new persisted queries that get events for different meetup groups or even create a list of events that you're planning to go to.

If you need help, [hop in to our Spectrum chat](https://www.onegraph.com/chat).
