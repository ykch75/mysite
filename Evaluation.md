## Evaluation Due time has been changed to Tuesday, 11 am, June 30th.

The Evaluation of frontend will be in two parts:
1. Create your own card in the [index.html](https://github.com/mercari-build/Week5/blob/8-firebase/src/pages/index.html)
    - Part 1 is for checking your knowledge on basic css and html.
    - Please do not use the css that I have provided, make some creative design on your own.
    - There is no limitation on how your card should look like. For example, if you want to create something like, [glowing buttons](https://codepen.io/bhadupranjal/pen/vYLZYqQ) or [interesting effects](https://codepen.io/shubniggurath/pen/OJMgyGY), you are very welcome to do it.
    - You may also use JS, if you want to have some special actions on your card.
    - Evaluation:
      - For scoring the basic points, you only need to have a card and some css correctly attached to your card and your card only. Your style shouldn't affect other part of the page.
    - Extra Credit:
      - For extra points, try something interesting, think of something cool and fun. Follow a tutorial and look up some interesting designs, and try to understand their css and html, and apply them to your homework.
      - For extra points, try to use some javascript and create some user interaction with your card.

***warning: please a PR with your html and css, PLEASE DON'T merge the PR by yourself. I will give suggestions and make comments on your PR like how it is done in our company when reviewing PRs to add a new feature to the code base.***

###### some code example:
```html
<div id="mytt"> // label your outter most div with id of your name
  <div class="mytt-content"> 
    <h2 class="mytt-title">mytt</h2>
  </div>
</div>
```
The easiest way to add some styles without affecting others is using class and attach your name in front of the class: 'your-name-your-class'

make something interesting!! GOOD luck

2. Create a blog-like website.
    - Part 2 is checking your ability to code in JS and create an interactive website.
    - For part 2, evaluation will focus on your javascript skill
    - You may use any kind of ***JS framework*** you are familiar with or you would like to learn about, [vue](https://vuejs.org/) or [react](https://reactjs.org/) will be highly recommended, if you decide to use a framework.
    - You may also use any kinf of UI framework: [ant.design](https://ant.design/), [bootstrap](https://getbootstrap.com/), or [material-ui](https://material-ui.com/), or without any css is also acceptable.
    - Evaluation: complete the main features for the blog website:
      - User should be able to create a new blog
      - User should be able to delete an existing blog
      - User should be able to edit an existing blog
      - User should be able to see the detail of a blog
      - User should be able to see a list of the blog
      - Use a mock server or some serverless service like (firebase) to store your data
    - Extra Credit: 
      - Setup your own dev environment using webpack or something else
      - Design some cool css and structure your css in some way (there are many standards: like [ckan](https://docs.ckan.org/en/ckan-2.7.3/contributing/css.html))
      - Use a state management library like [redux](https://redux.js.org/) (which usually goes with react), and [vuex](https://vuex.vuejs.org/) (which obviously usually goes with vue)

***warning: Please attach a link of your source code repo in your PR description for part 1***
***You may mark your PR with WIP label, and once you have finished the assignments, you may take off the WIP label and I will start checking***

If you have any further questions, plz post in the channel~~