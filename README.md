# OpenLayers Network Project

## Problem Statement

Write a program in React that reads a list from a JSON file containing a network graph and displays the network in OpenLayers.
Use the included project as a starting point. After completing **Part 1**, the globe should look something
like the following: https://www.dropbox.com/s/n07uov7uvsrzczi/World-Wind-JSON-Network-Viewer.png?dl=0. Note: the colors
of the network elements may be different for your project. For **Part 2**, augment the application to accept a live JSON
feed and display the features on the globe. As the feed is processed, the globe should contain the same data as this
site: https://earthquake.usgs.gov/earthquakes/map/

## Prerequisites
- [Node.js](https://nodejs.org/en/download/)

## Getting Started

Outside of the prerequisites, this package should include everything you need to complete the task.

- Install the app dependencies by executing `yarn install` or `npm install` in the package root directory.
- To run the application execute `yarn start` or `npm start`. Your browser should automatically open to `localhost:3000`
  where the app will display. Note that this command will hot-reload any changes you make to React components, though you
  may need to manually refresh the page with `f5` when making changes to the map object.
- Resources and examples for OpenLayers are available at: https://openlayers.org/
- Some UI elements have been bootstrapped with React Bootstrap. Resources on React Bootstrap are available at: https://react-bootstrap.github.io/

## Part 1 - Parse network graph from a file

- Use the included file open action to allow the user to load a file of their choice.
  - A sample JSON file for testing is located in the root of the project, samplenetwork.json.
- Parse the user selected JSON file.
  - Hint: You may want to begin in the `AddLayerMenuItem` component located in `src/features/menu/menu-items/`.
  - Hint: OpenLayers has built-in GeoJSON parsing facilities.
- Create a layer containing the parsed GeoJSON in the OpenLayers map.

## Part 2 - Parse earthquake data from a live stream

- Add a menu option for the user to enter the address for a live JSON feed. Please default it to the earthquake URL
  below.
- Allow the user to configure the rate at which the live stream is queried. At a minimum, the user should be able to
  select rates from 1 second to 5 minutes. (This will also make it easier to test your solution.)
- Parse the live feed at: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson. This feed
  provides a summary of all magnitude 2.5+ earthquakes in the past day and is updated every 5 minutes. More information
  about the feed is available here: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php.
- Create a layer in the map and add the entries from the JSON feed to the World Wind globe.

## Bonus (Optional)

- Select one aspect of the user experience that you think can be improved upon and implement the improvement. Most commonly,
  this would target code added from or related to your solution above, but not necessarily. For example, showing the user the
  recently-imported data, adding keyboard shortcuts, etc. Be creative!

**Feel free to reach out with questions or difficulties.**

## Submission

When you are finished with the problem, submit the **updated** OpenLayersNetworks.zip file from
the root directory to the OneDrive URL you were provided in the email instructions for the exercise.
