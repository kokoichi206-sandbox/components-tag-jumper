# components-tag-jumper

This VSCode extension allows you to navigate to the code definition of tags named in kebab-case based on the directory structure.

## Usage

### 0. Requiring folder structures and registered tag names

Folder structures

```
.
├── components
│   └── ecosystems
│       └── UsersWidget
│          └── index.vue
│   ├── atomics
│   │   └── ...
│   ├── ...
└── assets
    ├── ...
```

Tag names

``` html
<ecosystems-user-widget /> 
```

### 1. Activate components-tag-jumper

Just adding this extension to your VSCode.

## Limitations

- Supporting only Vue projects (specifically .vue files)
- Requiring kebab-case tag names and camelCase filenames
- under

## License

This repository is under [MIT License](https://github.com/kokoichi206-sandbox/components-tag-jumper/blob/main/LICENSE).
