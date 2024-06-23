# Aframe-Museum
Aframe-Museum is A 3D Virtual Museum built using A-Frame; A web framework that provides HTML components to make WebVR and build virtual reality experience.The museum is located somewhere in the space where nobody lives except a cute penguin that will guide you through your journey.I hope you'll enjoy the experience.
## screenshots
<a href="https://user-images.githubusercontent.com/8776142/27985796-c5867608-63f2-11e7-9aab-a984da21bd83.png">
  <img alt="A-Painter" target="_blank" src="https://user-images.githubusercontent.com/8776142/27985796-c5867608-63f2-11e7-9aab-a984da21bd83.png" height="190" width="32%">
</a>

<a href="https://user-images.githubusercontent.com/8776142/27986549-82d593a8-6400-11e7-983e-d716750ded9a.png">
  <img alt="A-Painter" target="_blank" src="https://user-images.githubusercontent.com/8776142/27986549-82d593a8-6400-11e7-983e-d716750ded9a.png" height="190" width="32%">
</a>

<a href="https://user-images.githubusercontent.com/8776142/27986562-c203f7e0-6400-11e7-82c0-934ed4578291.png">
  <img alt="A-Painter" target="_blank" src="https://user-images.githubusercontent.com/8776142/27986562-c203f7e0-6400-11e7-82c0-934ed4578291.png" height="190" width="32%">
</a>

## How to visit the museum
Currently, you can visit the museum only with the browser **mozilla firefox.**
Navigate to the project folder and open index.html.

## Getting around

| key        | Action           | 
| ------------- |:-------------:| 
| z     | move forward |
| s | move backward      |
| q | move left     |
| d | move right     |
| space bar | jump |

to turn around, use the mouse.

## browser compatibility:
| browser        | verified version | 
| ------------- |:-------------:| 
| Mozilla firefox    | 54.0.1  |

## Built With
* [Aframe](https://github.com/aframevr/aframe/) - web framework for building virtual reality experiences.
* [Jquery](https://github.com/jquery/jquery) - Javascript library

## Development
if you want to contribute to the project or to manipulate it, you should have these tools :
* [npm](https://www.npmjs.com/) - npm is the package manager for JavaScript and the world’s largest software registry. 
* [browserify](http://browserify.org/) - Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
* [grunt](https://gruntjs.com/getting-started) the JavaScript Task Runner
* [grunt-script-link-tags](https://www.npmjs.com/package/grunt-script-link-tags) - Auto-generate <script> and <link> tags for your HTML files.
### why npm ?
We use npm to install the dependencies of the project which are listed in package.json.</br>
Navigate to the project folder and run the following command :
```
npm install
```
### why browserify ?
We use browserify to bundle up **maintobrowserify.js** (it contains some dependencies) into **bundle.js** which is included in index.html.</br>
Run the following command from **js/** if you want to bundle up maintobrowserify.js:
```
browserify maintobrowserify.js > bundle.js
``` 
### why grunt-script-link-tags?
We use the plugin **grunt-script-link-tags** to add automatically in 
index.html the script tags of all the javascript files located in **js/project**.To run the plugin, you should have grunt installed.</br>
If you want to update the tags, run the following command:
```
grunt slt
```
## Authors
Ismail/Ismaël QOUIQA :: [@QouiqaIsmail](https://twitter.com/QouiqaIsmail)

## License
This program is free software and is distributed under an MIT License.
