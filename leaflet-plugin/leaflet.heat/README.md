# leaflet.Heat

地址：[https://github.com/Leaflet/Leaflet.heat](https://github.com/Leaflet/Leaflet.heat)

# Leaflet.heat

A tiny, simple and fast [Leaflet](http://leafletjs.com/) heatmap plugin. Uses [simpleheat](https://github.com/mourner/simpleheat) under the hood, additionally clustering points into a grid for performance.

# Demos

- [10,000 points →](http://leaflet.github.io/Leaflet.heat/demo)

- [Adding points dynamically →](http://leaflet.github.io/Leaflet.heat/demo/draw.html)

## Usage

```JavaScript
var heat = L.heatLayer([

  [50.5, 30.5, 0.2], // lat, lng, intensity

  [50.6, 30.4, 0.5],

  ...

], {radius: 25}).addTo(map);
```


To include the plugin, just use `leaflet-heat.js` from the `dist` folder:

```JavaScript
<script src="leaflet-heat.js"></script>
```


## Reference

```JavaScript
L.heatLayer(latlngs, options)
```


#### Constructs a heatmap layer given an array of points and an object with the following options:

- **minOpacity**  - the minimum opacity the heat will start at

- **maxZoom**  - zoom level where the points reach maximum intensity (as intensity scales with zoom), equals `maxZoom` of the map by default

- **max**  - maximum point intensity, `1.0` by default

- **radius**  - radius of each "point" of the heatmap, `25` by default

- **blur**  - amount of blur, `15` by default

- **gradient**  - color gradient config, e.g. `{0.4: 'blue', 0.65: 'lime', 1: 'red'}`

Each point in the input array can be either an array like `[50.5, 30.5, 0.5]`, or a [Leaflet LatLng object](http://leafletjs.com/reference.html#latlng).

Optional third argument in each `LatLng` point (`altitude`) represents point intensity. Unless `max` option is specified, intensity should range between `0.0` and `1.0`.

#### Methods

- **setOptions(options)** : Sets new heatmap options and redraws it.

- **addLatLng(latlng)** : Adds a new point to the heatmap and redraws it.

- **setLatLngs(latlngs)** : Resets heatmap data and redraws it.

- **redraw()** : Redraws the heatmap.

