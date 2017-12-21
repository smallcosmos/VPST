module.exports = {
  postcss: [
    require("autoprefixer")(),
    require("postcss-sorting")({
      "order": ["custom-properties", "dollar-variables", "declarations", "rules", "at-rules"],
      "properties-order": [
        "position", "z-index", "top", "right", "bottom", "left", "float", "display",
        "width", "maxWidth", "minWidth", "height", "maxHeight", "minHeight",
        "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
        "padding", "padding-top", "padding-right", "padding-bottom", "padding-left",
        "border", "border-top", "border-right", "border-bottom", "border-left",
        "background", "color", "text-align"
      ],
      "unspecified-properties-position": "bottom"
    }),
    require("postcss-bem")({
      "style": "suit", // suit or bem, suit by default, 
      "separators": {
        "descendent": "__" // overwrite any default separator for chosen style 
      },
      "shortcuts": {
        "component": "b",
        "modifier": "m",
        "descendent": "e",
        "utility": "util" //override at-rule name 
      }
    })
  ]
}
