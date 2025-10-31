function isMobile() {
  // only on app start but good for now
  const minWidth = 768;
  return window.innerWidth < minWidth || screen.width < minWidth;
}

export default {
  id: "demo",
  stacEndpoint:
    "https://ESA-EarthCODE.github.io/polar-science-cluster-catalog/polar-science-cluster/catalog.json",
  brand: {
    noLayout: true,
    name: "Polar Science Cluster",
    theme: {
      colors: {
        primary: "#003E6E",
        secondary: "#6E8E9C",
        surface: "#ffff",
      },
      variables: {
        "surface-opacity": 0.8,
        "primary-opacity": 0.9,
      },
      // Bank-Wong palette
      collectionsPalette: [
        "#009E73",
        "#E69F00",
        "#56B4E9",
        "#599111",
        "#F0E442",
        "#0072B2",
        "#D55E00",
        "#CC79A7",
        "#994F00",
      ],
    },
    footerText: "Demo configuration of eodash client",
  },
  templates: {
    expert: {
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-expert",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            center: [49, -56],
            zoom: 4,
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: true,
              enableSearch: false,
              enableBackToPOIs: true,
            },
            btnsPosition: {
              x: "12/8/9",
              y: 2,
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "light",
              layoutIcon:
                "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: isMobile() ? false : true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      cssVars: {
                        "--layer-toggle-button-visibility": "flex",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  title: "Information",
                  layout: { x: "8/8/9", y: 0, w: "4/4/3", h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  layout: { x: 4, y: 6, w: 4, h: 6 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Processes",
                  layout: { x: "8/8/9", y: 6, w: "4/4/3", h: 6 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-compare",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: {
                fallbackTemplate: "expert",
              },
              enableBackToPOIs: false,
              enableSearch: true,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 2,
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: isMobile() ? false : true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
              },
            },
          },
        },
        // compare indicators
        {
          id: Symbol(),
          type: "internal",
          title: "Compare Tools",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select second indicator",
              itemFilterConfig: {
                enableCompare: true,
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded: isMobile() ? false : true,
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                filtersTitle: "Select an indicator to compare",
                resultsTitle: "",
              },
            },
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          id: Symbol(),
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 11 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  layout: { x: 4, y: 7, w: 4, h: 5 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
  },
};
