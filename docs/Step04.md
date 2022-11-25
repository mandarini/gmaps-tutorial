[⬅ Step 03](Step03.md) | [🏠 HOME](../README.md) | [Step 05 ➡](Step05.md)

# Step 04

Let's see how we can manage a map on Google Cloud Platform.

## Create a Map ID

- Go to [https://console.cloud.google.com/google/maps-apis/studio/maps](https://console.cloud.google.com/google/maps-apis/studio/maps)
- Create a Map ID
- Choose as type "JavaScript – Vector" and add "Rotation".

Now you can see that there's a drop down menu to add a Map Style

## Create a new Map Style and add it to our Map ID

Let's create a new map style.

- Go the Map Styles tab on the side nav
- Click "Create Map Style"

Here you can either choose one of the predefined styles or create your own. Let's create our own, because it's more fun.

- Click on the "OPEN IN STYLE EDITOR" button at the bottom bar

Now let's play. Add or remove features, edit the colors and styles of the map features. Let's make the water green and the terrain blue for fun. You can change the colors of the roads, the buildings, the labels, the parks, the water, the terrain, the transit, the administrative boundaries and the points of interest. And anything else that's on the map really. We can change this later dynamically, but for now let's just play around.

- Now click on the "SAVE" button and give a name to your style.

After you save, you will see that it says "There are no map IDs associated with this style.". Let's fix that. Let's add it to the map we created earlier.

## Use Map ID to our project

- In `apps/base/src/app/app.element.ts`, in the `mapOptions`, add the `mapId` property and set it to the map ID we created earlier.

The changes may need some time to take effect, but soon you will see your map with all the new styles we created.

That way, you can easily and dynamically alter and adjust your map styles using the Google Maps Style Editor GUI!

## Docs

- [https://developers.google.com/maps/documentation/get-map-id](https://developers.google.com/maps/documentation/get-map-id)

[⬅ Step 03](Step03.md) | [🏠 HOME](../README.md) | [Step 05 ➡](Step05.md)
