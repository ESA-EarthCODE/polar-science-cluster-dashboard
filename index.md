---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ESA Antarctica Datacube Dashboard"
  tagline: "Antarctica International Science & Infrastructure for Synchronous Observation"
  text: ""
  # background: 
  #   src: ./assets/EO_Dashboard_kv_no_logos.jpg
---

As part of an EarthCODE initiative to facilitate easier analysis of and access to EO Earth Sciences data, several datasets are combined into analysis ready zarr data cubes. 

Putting datasets on a common projection, resolution, and coordinate system reduces the amount of preprocessing needed before analysis.


## Land Ice Data Collections Overview

- All spatial layers are aligned to one projected epsg:3031 `x`/`y` grid. The working grid uses 100 m cells, with `x` from `-2867900` to `2867900` and `y` from `-2457900` to `2457900`, giving 57,358 columns by 49,158 rows.
- The same `x, y` position refers to the same place across every variable.
- Some datasets already closely match the target grid. Others had to to be reprojected, shifted, resampled and interpolated. The default interpolation method is **nearest neighbour**. 
- Vector datasets are converted into raster variables by burning their geometries onto the target grid.
