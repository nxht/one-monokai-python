# One Monokai Python Theme Sample

This is a sample Markdown file to test the **One Monokai Python** theme's syntax highlighting for Markdown documents.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Code Examples](#code-examples)
- [Lists](#lists)
- [Links and Images](#links-and-images)
- [Tables](#tables)

## Introduction

One Monokai Python is a VS Code theme designed specifically for Python developers. It combines the popular Monokai color scheme with optimizations for Python syntax.

### Why Use This Theme?

1. **Optimized for Python**: Enhanced colors for Python-specific syntax
2. **Easy on the eyes**: Carefully chosen colors reduce eye strain
3. **Great contrast**: Clear distinction between different code elements

## Features

The theme includes support for:

- Python syntax highlighting
- TypeScript/JavaScript support
- Markdown rendering
- JSON and YAML files
- Git diff colors
- Terminal colors

## Code Examples

### Python Code

```python
def hello_world(name: str) -> str:
    """Return a greeting message."""
    return f"Hello, {name}!"

class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
    
    def greet(self):
        print(hello_world(self.name))

# Create instance
person = Person("Alice", 30)
person.greet()
```

### TypeScript Code

```typescript
interface Config {
  name: string;
  version: string;
  enabled: boolean;
}

const config: Config = {
  name: "MyApp",
  version: "1.0.0",
  enabled: true
};

function processConfig(cfg: Config): void {
  console.log(`Processing ${cfg.name} v${cfg.version}`);
}

processConfig(config);
```

### JavaScript Code

```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n ** 2);

console.log(squared); // [1, 4, 9, 16, 25]
```

### JSON Example

```json
{
  "name": "one-monokai-python",
  "version": "1.0.0",
  "description": "A Monokai-inspired theme for Python developers",
  "keywords": ["theme", "python", "monokai"],
  "author": "Your Name"
}
```

## Lists

### Unordered List

- First item
- Second item
  - Nested item 1
  - Nested item 2
- Third item

### Ordered List

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B
4. Fourth step

### Task List

- [x] Create theme
- [x] Test with Python
- [x] Test with TypeScript
- [ ] Publish to marketplace
- [ ] Gather feedback

## Links and Images

Here's a [link to VS Code](https://code.visualstudio.com/).

Here's a link with a title: [VS Code Documentation](https://code.visualstudio.com/docs "Visit the official docs").

Reference-style link: [Theme Guide][guide]

[guide]: https://code.visualstudio.com/api/extension-guides/color-theme

## Tables

| Feature | Python | TypeScript | Markdown |
|---------|--------|------------|----------|
| Syntax Highlighting | ✅ | ✅ | ✅ |
| Auto-completion | ✅ | ✅ | ❌ |
| Linting | ✅ | ✅ | ❌ |

## Text Formatting

You can use *italic*, **bold**, ***bold italic***, ~~strikethrough~~, and `inline code`.

> This is a blockquote.
> It can span multiple lines.
>
> And have multiple paragraphs.

### Horizontal Rule

---

## Math (if supported)

Inline math: $E = mc^2$

Block math:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote text.

## Emojis

:smile: :rocket: :python: :computer:

---

**Note**: Some features like emojis and math may require additional extensions to render properly in VS Code.
