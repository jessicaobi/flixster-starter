## Unit Assignment: Flixster

Submitted by: **Jessica Obi**

Estimated time spent: **22** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://flixster-starter-zq0i.onrender.com/)

### Application Features

#### REQUIRED FEATURES

- [x] **Display Movies**
  - [x] Users can view a list of current movies from The Movie Database API in a grid view.
    - [x] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [x] For each movie displayed, users can see the movie's:
    - [x] Title
    - [x] Poster image
    - [x] Vote average
  - [x] Users can load more current movies by clicking a button which adds more movies to the grid without reloading the entire page. 
- [x] **Search Functionality**
  - [x] Users can use a search bar to search for movies by title.
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search button
    - [x] Clear button
  - [x] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [x] Presses the Enter key
    - [x] Clicks the Submit/Search button
  - [x] Users can click the Clear button. When clicked:
    - [x] All text in the text input field is deleted
    - [x] The most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [x] **Design Features**
  - [x] Website implements all of the following accessibility features:
    - [x] Semantic HTML
    - [x] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [x] Alt text for images 
  - [x] Website implements responsive web design.
    - [x] Uses CSS Flexbox or CSS Grid
    - [x] Movie tiles and images shrink/grow in response to window size
  - [x] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [x] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [x] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [x] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [x] The pop-up displays additional details about the moving including:
      - [x] Runtime in minutes
      - [x] Backdrop poster
      - [x] Release date
      - [x] Genres
      - [x] An overview
  - [x] Users can use a drop-down menu to sort movies.
    - [x] Drop-down allows movies to be sorted by:
      - [x] Title (alphabetic, A-Z)
      - [x] Release date (chronologically, most recent to oldest)
      - [x] Vote average (descending, highest to lowest)
    - [x] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [x] Website displays:
    - [x] Header section
    - [x] Banner section
    - [x] Search bar
    - [x] Movie grid
    - [x] Footer section
    - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 

#### STRETCH FEATURES

- [x] **Deployment**
  - [x] Website is deployed via Render.
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 
- [ ] **Embedded Movie Trailers**
  - [ ] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    - [ ] When the trailer is clicked, users can play the movie trailer.
- [x] **Favorite Button**
  - [x] For each movie displayed, users can favorite the movie.
  - [x] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [x] If the movie is not favorited:
    - [x] Clicking on the visual element should mark the movie as favorited
    - [x] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [x] If the movie is already favorited:
    - [x] Clicking on the visual element should mark the movie as *not* favorited.
    - [x] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited. 
- [x] **Watched Checkbox**
  - [x] For each movie displayed, users can mark the movie as watched.
  - [x] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [x] If the movie has not been watched:
    - [x] Clicking on the visual element should mark the movie as watched
    - [x] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [x] If the movie is already watched:
    - [x] Clicking on the visual element should mark the movie as *not* watched.
    - [x] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [ ] **Sidebar**
  - [ ] The website includes a side navigation bar.
  - [ ] The sidebar has three pages:
    - [ ] Home
    - [ ] Favorites
    - [ ] Watched
  - [ ] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [ ] The Favorites page displays all favorited movies in a grid view.
  - [ ] The Watched page displays all watched movies in a grid view.

### Walkthrough Video


Embedded Video:
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/3eb1a8e1019f406797431bee5d1ad9f0?sid=2ec77737-abab-4112-922e-3fae64e15ed5" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Link:
`https://www.loom.com/share/3eb1a8e1019f406797431bee5d1ad9f0?sid=8e6eb532-e96a-472d-bdb6-2873dc6d4333`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

They definitely did. I would say that things such as useState and useEffect significantly helped when it came to doing the project especially when we had to load different variables. However, I do wish that we had gone over useEffect a bit more in detail as it was used quite frequently throughout the project and the syntax and purpose of it was a bit convuluted throughout the completition of this project.

When it comes to unpreparedness to complete any specific features I think it just needed to be emphasized more that we needed to use different endpoints, which wasn't the most clear when we first started off with the project.


* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I definitely would have tried to make the search and sort fucntions into two completely different components. Unfortunately, when I did that, I ran into quite a few errors when it came to importing the component into the parent component which ultimately did not allow some of my code to run correctly. I would also clean up my code quite a bit more, because it is very ugly right now, as well as not having a lot of comments. So if I were to come back to this a week or a few months from now, the informaion would not be as comprehensive.

I also think that I would develop the CSS a littl ebit more. In terms of cohesiveness, I think this is not the best looking project, however, I simply did not have a lot of time to work too hard on CSS for this.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think overall the project demo went well. I got some good feedback from both my peers and my instructors. However, I personally did not feel the best about this project demo as it I felt like my site wasn't the best looking, as well as not all the functionality being there. I hope to improve this in the future with better time management and tasking how I work on things.

Some things that I noticed that my peers did was put a lot more effort into the presentation slides this week around. This definitely was a wakeup call to put more effort into my actual presentation slides, instead of spending no more than 15 minutes each week on them. I think also going through my presentation would allow for me to be more confident about my project. This week I wanted to go second, because I wasn't the most proud of what I was presenting. That even showed a bit, with one of the instructors mentioning how I should focus more on the things that did go well instead of possible improvements, which I will definitely take into account for the next project.

### Open-source libraries used
W3Schools for a lot of functions and properties related to CSS
Background: https://prismic.io/blog/css-background-effects
Search Function: https://youtu.be/sWVgMcz8Q44?si=XH-pXWg77FvkfvNY
Base Code from Class: https://github.com/dst2609/ftl-code-demo-2025/tree/main/week2/w2d5/pokemon-list/src/Components
Movie Endpoints: https://developer.themoviedb.org/reference/discover-movie#:~:text=Advanced%20Filtering,would%20return%20the%20theatrical%20date
Copilot for debugging and problem-solving assistance

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Amari- Explaining UseEffect and Sort Feature
Kenna- Providing the URLs for all of the API endpoints
Jasmine and Camilla- Search Feature
Keith- Card Feature
Devarsh- Understanding the difference between loading React.JS vs HTML as a web page