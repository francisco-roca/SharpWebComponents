# SharpWebComponents
Native WebComponents, maximum modularity, flexibility and extremly lightweight.

The file components.html has an example of every component.

## How to use
Just download the component and reference the .js file in your website. And start using the component

### Example
  1. Download ./components/toggle/toggle.js and store it in somewhere accesible to your website
  2. Add the script tag with the src path where you put the toggle.js file
```html 
<script src="<somewhere-path>/toggle.js"></script>
```
  3. Start using your toggle component like this

```html 
<button is="toggle-button">
  <span toggle-before>Menu</span>
  <span toggle-after>Close</span>
</button>
```

The attributes: **is**, **toggle-before** and **toggle-after** are required to use the toggle component.

## Docs
Pending


