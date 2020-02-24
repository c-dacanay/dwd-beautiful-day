<!-- Every README should start with an H1 -->

# It's a Beautiful Day on Mars

Our brief this assignment was to develop a full dynamic front end web application using an API. Having never used an API before I wanted something simple to parse, so weather data seemed like a good starting point. NASA also has a robust collection of public APIs, so I chose to create a website for the InSight Mars lander to report it's data collection!

## Wireframe

I used Figma to create a sketch of the website with placeholder copy. The fact that I didn't fine tune the spacing at this stage meant that I lost a lot of time in the code. During the poster project, the meticulous measurements really paid of when I got to coding. I also didn't think carefully about what elements would be dynamic and responsive. Rushing this step meant that I was tweaking for a long time.

![Wireframe](https://github.com/c-dacanay/dwd-beautiful-day/blob/master/process/figma.png)

<!-- It is essential to describe how to set up your project -->

## Code

The first step was creating all the div elements and getting them aligned. This step was slower than I had wanted, and I spent a lot of time reading about the different type of flex elements.

![Progress 1](https://github.com/c-dacanay/dwd-beautiful-day/blob/master/process/1.png)

Connecting to the API wasn't hard, per se, but it definitely took some time to wrap my head around! The Sols (Martian Days) came in their own array, but each sol also had a separate array of data with things like the most common wind speed, the highs and lows of each day, and a variety of other information I didn't end up using.

![Progress 2](https://github.com/c-dacanay/dwd-beautiful-day/blob/master/process/2.png)
![Progress 3](https://github.com/c-dacanay/dwd-beautiful-day/blob/master/process/3.png)

<!-- ![Progress 4](https://github.com/c-dacanay/dwd-beautiful-day/blob/master/process/4.png) -->

I ended up grabbing the div elements by ids, meaning that there is a _ton_ of code that can be refactored in this project. That said, I was happy with the ease with which I was able to get the skeleton of this website up and working. With a little more time I would like to make more graphics that change depending on the direction of the wind speed (I even left space for it in the design, but wasn't able to get to it this week), and more dynamic elements on the page. Right now there's a feeble mouseover color change on the title. See the finished website below.

![Progress 5](https://github.com/c-dacanay/dwd-beautiful-day/blob/master/process/5.png)

## Glitch

This project [is hosted on Glitch.](https://c-dacanay-dwd-beautiful-day.glitch.me/)

## Built with

- [InSight API](https://mars.nasa.gov/insight/weather/)
- [VS Code](https://code.visualstudio.com/)
- [Figma](https://www.figma.com/)
- [Github](https://github.com)

## Author

- [Christina Dacanay](http://cdacanay.com/) -- for Dynamic Web Development at [NYU ITP](https://itp.nyu.edu)
