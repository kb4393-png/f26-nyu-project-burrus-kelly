# Rehearsal Buddy

**Latest mockups:** [https://www.figma.com/design/nAOf9RkdAvkm9qQtZCuUeL/KellyBurrus_Assignment4_Mockups?node-id=0-1&t=kF4IcDTFVODnTbqg-1]

**Live site:** [https://kb4393-png.github.io/f26-nyu-project-burrus-kelly/]

## Project Log
Add a new entry at the top each week.

### Week 11 - 11/23/26  

**USER STORY AUDIT**

MAIN STORY: "As a singer in my local choir, I want to study my parts using a method that works for me, so that I can keep up with our more advanced singers."

Criterion 1: The recordings and sheet music must be able to be viewed side-by-side.
  Status: ❌
  Notes: Functional music player missing, only a placeholder.

Criterion 2: A 30-minute practice timer must be incorporated into the interface to help with self-study time management.
  Status: ❌
  Notes: No timer was designed. Dropped this to focus on the music education page. Might add this and keep both.

Criterion 3: All repertoire is listed visibly on the page, and can be selected at any time to switch between songs.
  Status: 🟡
  Notes: All repertoire is visible (1), but no way to choose between songs right now.

**USER TEST NOTES (filled in by the maker)**
Maker: Kelly Burrus
Tester: Noah In

Who the user is (one sentence): A singer in a local choir who is looking to use a new tool to self-study their sheet music at home.

Task 1 (full main story): "As a singer in my local choir, I want to study my parts using a method that works for me, so that I can keep up with our more advanced singers."
  Completed?  With trouble
  Where they hesitated or got stuck: Got stuck figuring out where on the page the music was supposed to be found, clicked a lot of buttons that I had been using as placeholders. Struggled to figure out what the two emoji buttons were that I was going to use to show categories of pop-ups that would have shown up on the sheet music images.
  What they said they expected: Expected music to only appear when a button is clicked, based on the user interface of the site. Also expected music player to play.

Task 2: Navigate to page 7 in the music and see the squiggly line in the second measure at the bottom of the page that says "gliss.". Go to the Music Education Resources page and find out what that symbol means.
  Completed?  Yes
  Where they hesitated or got stuck: Didn't really get stuck much - only hesitated when I was giving instruction on where to find the symbol, but when it came to the actual task of looking up a new symbol, that was easily completed.
  What they said they expected: No expectations that weren't already met.

Tester's one-line takeaway (ask them at the end):
"The one thing I'd fix first is the placement of the forward and back buttons on the sheet music. The placement at the top feels a little awkward/unnatural."


**PUNCH LIST**

MUST SHIP (aim for 3–5 items; note where each came from: story audit or user test)
- Change placement and style of forward and back buttons. This is from the tester's one-line takeaway, and coincidentally aligns with my goal for next week.
- Music player. This came from both witnessing the user test and from my story audit.
- Drop-down menu for song selection. This came from my story audit, in that I need the songs to be visibly available on screen to switch between.
- Timer for self-study. I am realizing this is something I totally forgot about pretty early on in the project, but since I might be cutting the education category emoji buttons, I might be able to swap them visually.

NICE TO HAVE
- Launch button should reveal the sheet music section, which is hidden upon first view of the website.
- This is a major stretch goal, but since I have both a Rehearsal Calendar button at the bottom and in the navbar, I thought it might be nice to create a demo page with an example picture of a rehearsal schedule/calendar.
- I could also create a very simple page with a list of links (dead links for the purpose of the demo site) to "downloadable versions" of the sheet music documents to link to Sheet Music Hub. Again, a major stretch goal.

CUT (item, then why)
- Educational icons by music player - scope is too small in this project to implement the pop-up educational tiles in the sheet music.
-



### Week 10 — 11/22/26

**Event Plan**
- **User story:** As a music learner, I want to search for a specific music term so that I can look it up in real-time when my conductor mentions it during rehearsal.
- **The event:** The event would be the user typing in a music term, and the displayed terms match what word the user typed. This fits what the user is doing and looking for in the user story because it allows them to search specifically for a term they don't understand when the conductor says it in person. It also would ideally show other terms that reference that term in their definitions to see other related terms.
- **State:** The page remembers what the user has typed into the search bar. It starts with no text in the search bar except for maybe a placeholder prompt. This is based on my Week 9 assignment work.
- **My function:** The question it answers would be "What is the user searching for, and do the resulting cards/terms match what the user has typed?". The parameter would be the text the user types in the search bar, and the return is a matching resource tile.

**What changed:**  
I added a search bar to the music term cards so the user can search by the name of a music term to find the definition. Cards only show up if they match the selected category AND if the term is searched for. I also gave my site text to display if no terms showed up after searching.  
**Why redraw on every event:** In 2–3 sentences, why does your handler call `render()` instead of changing the page itself?  
By redrawing the page every time a change is made, render provides a much cleaner way to display and process the search function than directly changing the page would. Calling render after any changes are made, like after each eventListener, automatically redraws everything to accommodate those changes, instead of having to specifically change everything directly in the page.  
**What was hard, and what I tried:**  
I felt this assignment was more straightforward after doing the code-along in class. I struggled when reading the instructions a few times to figure out where in my code certain functions and processes were supposed to go, like whether they made more sense inside or outside the render function for example. I was able to reference the codealong assignment and figure it out using that for the most part.  
**What happened when I tried to break it:**  
At first when I tested my code in Console with "searchMatch(educationItems[0])" it came back as true, but I didn't understand why. I realized I had to have something typed into the search bar before this would make sense, and I had to research what the [0] meant in that code. I then realized 0 was the first term in the order they're listed in on the page when All is selected, so I tested it by typing both fermata and crescendo, crescendo matching the [0] marker, and both came back as expected - fermata returning false, and crescendo returning true.  
When I tested the code that displayed a message when nothing was returned from the search input, the message displayed 5 times. I realized I had put it inside the forEach loop, so once I placed it outside those brackets, it only displayed once!  
Otherwise, the state was as expected when loading the page. The search box was empty and the selected category was All. I tested by typing quickly, misspelling, selecting different categories before searching, and typing different variations of capital letters and lowercase letters. The count still makes sense and displays the current shown count out of the total amount of terms. Including a space before or after the term did seem to "break" it, but since some of the terms have spaces in them, like "Important Staff Markings", I don't know that I'd want to totally disallow spaces from being counted.  
**What I learned or changed my mind about:**  
I think this particular lesson really hammered in what render does and how it can be way more effective for page changes like a search bar.I feel like before I sort-of understood it but wouldn't have been able to explain it, whereas now I feel I have a much better understanding. I wasn't sure if I should do this assignment for my term cards from my array, or if I should work on something with my drop-down menu idea for my sheet music page, but I'm glad I stuck to a more simple idea that we had gone over in class. I think I learned a lot more this way, and got a lot less frustrated than I would have gotten trying to start all over again for my drop-down idea.  
**Question for Joey:**  
Would using render be a good way to implement the drop-down for the sheet music page? I'd probably have to also change the page-turning mechanism to render as suggested in my week 9 feedback, right?  
**Next week's goal:**  
Same goal as last week unfortunately. I think with Thanksgiving break I may be able to explore this with the holiday time off! "I think I might want to replace my forward and back buttons with the arrows like I have in my mockup, I just have to make those images first. I'd also like to replace some of my elements with the real thing, like the drop-down menu and have the launch button display the rest of the initially-hidden page."  
**AI use:**  
- Helped break down the logic in some of the code examples given in the assignment instructions so I could better implement it in my project. Also broke down some of the concepts given in this week that I was still a little iffy on.  
- Helped debug and troubleshoot when I couldn't figure out why something wasn't working - usually I added an extra curly bracket or other syntax error.  
- Helped more with logic to help me understand why certain things needed to be in render and why certain things needed to be outside of it.  
- Double-checked that my educationItem and educationItems labels were used correctly. Wasn't sure if I was pluralizing them in a way that was correct.  


### Week 9 - 11/16/26

**Render Plan**
- **User story:** As a music learner, I want a filter for the music education terminology so that I can look for a term by category instead of by name (which I might not know!).
- **State:** What does the page remember, and what does it start at?
  - The page remembers what category is selected in the filter. It starts with all categories selected, with all terms displayed.
- **What changes it:** Which user actions, and what does each one set the state to?
  - The user will select the category, and the selected category sets the state to only show those labeled items, hiding the ones that don't match the selected category.
- **What render() draws:** Which part of the page is rebuilt, and from which array?
  - The Music Education Resources page is rebuilt, from the array educationItems.
- **The if inside the loop:** For each item, what does it decide?
  - It decides whether the chosen category matches the category of any given item.
- **What else render() works out:** The count, message, or style that comes from the state.
  - It highlights the filter option that is currently selected.

**What changed:** Made updates based on feedback from Week 8, and added week 8's redone assignment (based on my Week 6 array) into a render function, along with an if statement that checked if the shown tiles matched the selected categories from a series of buttons. Also added a highlight to each button to show which category was selected, and a "items shown" text that updates based on how many cards are being shown.

**Patching vs. rendering:** Last week, when I worked on my page-turning assignment, the page was being directly changed by the actions of the user. Now, with the changes I made to my educational resources page, the changes made on the site (button clicking, etc) are only changing selectedCategory, and render redraws the page without changing anything to the site directly. I had to re-do Week 8 because it did not have to do with my array from Week 6. I re-did that week's assignment with the visual goal of changing the button colors when I clicked on new category buttons in the Music Education page, and then completed this week's render assignment which completed my filtering system to organize the terminology tiles I had built in Week 6. I now have a functioning filtering system that filters my music terms by category!

**What was hard, and what I tried:** It was difficult to try and understand where exactly to place my assignment 6 loop per the instructions "Your existing Assignment 6 loop is probably most of render() already. Move it inside the function and add the if". I ended up doing a lot of trial and error on this step, and eventually hit something that worked. I also had to move forward and call render before I could see if it was actually working, then go back and tinker more.

**What happened when I tried to break it:** Everything worked at the start by the time I got to the "break it" step. I clicked my filter buttons 10+ times, in multiple different orders, and the buttons changed color appropriately, and the categories were correctly showing up. At first I noticed the "showing x of y items" text wasn't changing away from 0, so I referenced the code-along from last week to see if I was missing something, and it turns out I forgot to add the "shown = shown + 1;" line. Once I figured that out, I noticed the count was correct every time as well.

**What I learned or changed my mind about:** I feel like my understanding of Javascript has strengthened this week, especially since having to rework my Music Education site page to be able to use my array from week 6. I've also started a FreeCodeCamp Javascript course as a supplemental resource to improve my vocabulary, so I think that's also been helping. Even though things got a little more complicated this week, I still feel like I enjoy working with Javascript much more than with CSS or HTML. I feel like I only just scratched the surface of learning what render can do, and I could probably stand to do more research on it to fully be able to explain it in my own words.

**Question for Joey:** I'm curious how versatile render is, and what the more unique and fringe use cases for it would be.

**Next week's goal:** Same goal as last week, as I got really caught up in understanding render in my own words this week and didn't have the bandwidth to explore this. "I think I might want to replace my forward and back buttons with the arrows like I have in my mockup, I just have to make those images first. I'd also like to replace some of my elements with the real thing, like the drop-down menu and have the launch button display the rest of the initially-hidden page."

**AI use:**
- I used AI to help me understand some of the assignment instructions, particularly in Step 1 when discussing Assignment 8 and appropriate ways to prepare for this week. I tried to figure out if there was a way to work with my page-turning assignment from last week, but I had no ideas for it, so I made sure I understood what this part meant before re-doing assignment 8 to have an appropriate starting place for this week.
- I used it to quickly troubleshoot my build of my button color-changing mechanism I built for the Music Education section so I could move along quicker to this week's work.
- I used it to troubleshoot several times my tiles would disappear, before realizing I hadn't called render yet.
- General troubleshooting, identifying syntax errors and out-of-order code snippets.

### Week 8 — 11/8/26

**State Plan**
- **User story:** "As a music learner, I want to quickly turn my sheet music pages, so that I can follow along while singing."
- **What does the page remember?** The page remembers which page the user is on and which to turn to next.
- **What does it start at?** It starts at page 1.
- **What changes it?** There are interactive buttons on the sides of the sheet music. There is also a reset button that brings the user back to page 1.
- **What does the user see?** The user sees the forward and back buttons, and possibly a restart button to bring them back to page 1.
- **What does the `if/else` decide?** An If/else that hides the forward or back button at either end of the sheet music. It hides the back button on page 1, and hides the forward button on the last page. The if/else is also the primary function for flipping the pages and changing the image that pops up, based on the page number.

**What changed:**
- The sheet music pages changed when using the forward and back buttons, the restart button brought the page count back to 1. It was really satisfying to have already named my image files a formulaic name, so that when I realized I could just call the specific image and a custom number, it made it way easier to do that. I briefly worried that I would have to give them new id's in the code, but it worked out really smoothly!
- I had to make some changes to my grid format to make space for the buttons I needed to implement for the state change, so I changed it to 4 columns so the back and forward buttons could be on either side of the sheet music.
- I updated my sheet music display to convert it into several images instead of working with a pdf. I thought that flipping images back and forth would be a good start for the navigation I wanted to implement, and that maybe down the line I might have an easier time editing the images to be interactive instead of implementing an interactive pdf, which I have heard is a bit beyond scope of an intro class.

**What was hard, and what I tried:**
- It was difficult to understand the logic at first. I tried using the code I already understood to fix up my HTML and my javascript to work together better, and finally got there in the end. It was also difficult to troubleshoot why the buttons were or were not disappearing when they were supposed to. Just when I thought I had it all correct, both directional buttons disappeared when I used the restart button, and I realized I didn't set it up so the forward button ever reappeared. Decided to also re-hide the back button upon restart so that it resets to page 1 defaults I had already set.

**What happened when I tried to break it:**
- My initial attempts to break it mostly had to do with pressing the forward and back buttons a bunch of times when there was no page to turn to that matched the sheet music image formulas. This was before I implemented the hiding of the forward and the back buttons, so it was making me wait several button presses before it would proceed to the next page. Hiding the buttons prevented this from becoming an issue at all, as it totally removed the mechanism for changing the page count.
- Per my instructor's feedback, I did not realize before that the back buttons and forward buttons were not hiding on the right count. When I tried to fix this based on guidance, my forward button completely stopped functioning - I realized I forgot to add backticks to my currentPage.src line around the image path, so once that was corrected and I had input the new correct code, the buttons now operate perfectly.

**What I learned or changed my mind about:**
- I learned a lot about how to think in javascript. I much prefer working with javascript than with css, I find it a lot more engaging and a lot more interesting! I also really enjoyed picking up the different grammar of javascript, like using && instead of a comma in "if (pageCount <= pageTotal && pageCount >= 1)", to express both requirements at once.

**Question for Joey:**
- Is this a normal way to flip pages? I wondered if maybe it would have been better to do this process back when we were going through arrays, but I didn't consider it then. Somehow I figured that this might set me up better for an interactive image like I had wanted to do from the beginning, though that's seeming more and more complex the more I learn. Even if I make interactive pngs instead of pdfs.

**Next week's goal:**
- I think I might want to replace my forward and back buttons with the arrows like I have in my mockup, I just have to make those images first. I'd also like to replace some of my elements with the real thing, like the drop-down menu and have the launch button display the rest of the initially-hidden page.

**AI use - I used AI to:**
- help me understand how to re-upload my images as a series of png files instead of an embedded pdf
- figure out why my change state was not working. It changed my file for me without asking, so I had to ask it to undo its changes and instead explain the process to me to do it myself. The main issues were that I had education-resources javascript in my script.js file, and that I was not loading my javascript in my HTML.
- help me understand, analyze, and break down the logic in the assignment javascript code examples so I could better use it for my own purposes.
- help troubleshoot various parts of my code when I was at a loss as to why they weren't working, which nearly always illuminated incorrect grammar/syntax (which was how I learned about using && instead of commas, for example).

### Week 7 - 11/1/26

[Figma Mockup Link](https://www.figma.com/design/nAOf9RkdAvkm9qQtZCuUeL/KellyBurrus_Assignment4_Mockups?node-id=0-1&t=nn6uMZSzpGMNu3Gq-1)

I continued work on assignment 7, and unsuccessfully attempted a hamburger menu design. Also added some button characteristics. The breakpoint I worked on was to expand the sheet music when formatted for mobile, which I did by changing the grid columns from two to one. I am starting to wish that I chose a different website idea for this project, because it feels like I don't have enough sections or separate features to work with with each passing assignment.

**Challenges:**
  - Had a very difficult time understanding the grid system and how it would work with my specific site layout. The hero section was and is the most difficult - I want three rows basically, and just one column.
  - Did not see the "commit multiple times" request at the end of the assignment until it was too late. What I had already done was add two documentation entries to cover the chunks of work I did. Will keep this in mind for next time.


**AI Use:**
  - Used AI to understand some sizing issues in my self-study grid. My sheet music view was not expanding as I needed it to, in order to fill the grid section I created for it.
  - I asked AI for help understanding how to get started with a hamburger menu breakpoint, but I got overwhelmed with it and ended up ditching the whole thing for now, to be picked up another time after more reading and actual research.

### Week 7 (session 1) - 10/30/26

[Figma Mockup Link](https://www.figma.com/design/nAOf9RkdAvkm9qQtZCuUeL/KellyBurrus_Assignment4_Mockups?node-id=0-1&t=nn6uMZSzpGMNu3Gq-1)
I fixed some things per past feedback I received, including adding borders around the individual education tiles rather than just one big border around the whole set of tiles. I also added alt text to all images. Was not able to tell from the Live Server whether or not they were working, but I think I took the right actions. I started on Assignment 7, but only got through Step 2, and part of Step 3. I ended up starting with the nav bar as a flexbox so I could try and knock that out of the way before going into grid. Will have to source a logo for my nav bar.

**Challenges:**
  - I had some trouble implementing the alt text feedback, but ultimately figured it out.
  - At the time of writing this (making today a separate documentation for my own benefit of remembering where I left off), I'm unsure whether to put \"class='.page'" into \<body> or \<main>.
  - Needed to pull up an alternative source to learn how to make the navbar look and work better. Used this [Medium article](https://charlesfreeborn.medium.com/how-to-build-a-responsive-nav-using-css-flexbox-3511cd936af9) to break down the why's and how's. Did not use all of the tips, only what I needed to get to a decent appearance. Learned that I should have labeled each item a \<li>, to make them more flexible in Flexbox.

**AI Use:**
  - I used Github's AI Chatbot to help understand which section to add the alt text to, and how to label it so that I could recall it in education.js.
  - I also used it to troubleshoot why adding the alt text in education.js was making my entire set of tiles disappear. Turns out I was just missing some commas.
  - Also used AI to figure out why this mockup text was not formatting correctly. Did not use all of its suggestions, just the minimum for what I needed to format it the way I needed.

### Structure Audit 10/26/26

**Fixed today:**

- Added Google font link to heads in both index and education pages.
- Cleaned up section identification, based on assignment feedback.
- Added margin unit.

**Still missing (building before the layout assignment):**

- Linking nav links to a page
- Figure out :root change needed, css might be too hard-coded

**One thing I couldn't figure out:**

- :root issue in CSS

### Week 6 - 10/22/26

[Figma Mockup Link](https://www.figma.com/design/nAOf9RkdAvkm9qQtZCuUeL/KellyBurrus_Assignment4_Mockups?node-id=0-1&t=nn6uMZSzpGMNu3Gq-1)
<br>
<br>This week I added a new site education.html, alongside a collection of images and repeating elements in order to display educational resources to users. The new site is accessible through the navigation bar. I also updated some of the CSS to make sure the tiles looked neat, and to shrink the images in each tile a bit so they did not overlap with one another.
<br>
<br>The data I'm displaying is comprised of little educational tiles that can serve as a resource for users who are not strong sight readers. Because I don't have any repeating information in my index.html page, I decided to create a second page for this assignment called education.html. In the site, this page can be accessed from the navigation bar at the top, under "Music Education Resources". Each tile contains a title, a description, and an image of what the concept looks like in real sheet music.
<br>
<br>I used Javascript to create a separate education.js file to store my array, and a script.js file to run the actual Javascript code. Javascript uses the array information in education.js to know what information to include in each educational tile, and runs script from script.js to create tiles from that information in education.html.

**Challenges:**

  - I initially included a typo in my code, saying "getElement**s**ById" instead of singular element. I also couldn't figure out why nothing was loading in my site - it turns out that I had to include the following lines in education.html, which I then looked for in the codealong 06 file and found, clarifying what it meant:
    \<script defer src="js/education.js"></script>
    \<script defer src="js/script.js"></script>
  - I couldn't figure out what command to use to show images alongside the text. Turned out instead of following the same formula as title.textContent, I had to use image.src. I tried to ask the AI assistant what this meant, and why I needed to do it this way, but I was not clear enough in my ask, and it just went in and fixed my code for me. I had to then ask it to undo what it did and explain to me what to do so I could do it myself and understand what I was doing, and then I double-checked my code to make sure everything was back to normal before I made my own attempt.
  - The last challenge I had was just that my images came through at a massive size, overlapping one another, and I wanted to make them a bit smaller to better show the structure. I tried to figure the structure out by myself, using the #education-resources CSS structure recommended in the assignment, but had to Google it in the end. I ended up figuring it out, and got it to a size that I liked.
  - I committed my changes before realizing I forgot to add a couple of things in this README, so I had to add them and recommit. Added this challenge, a short summary of what I did this week at the beginning of my documentation entry, and a link to my Figma mockup.




## **Instructions**

### **Step-by-Step: Getting Set Up**

**1\. Click the green "Use this template" button**

This creates a brand new repository under your own GitHub account, pre-loaded with the starting files.

**2\. Name your repository**

Use this naming convention:

`nyu-f26-lastname-firstname`

**3\. Click "Create repository from template"**

GitHub copies the files and takes you to your new repo page.

**4\. Click the green "Code" button → "Create Codespace"**

**5\. Wait about 15 minutes while it boots up**

This is normal. Codespaces is spinning up a virtual computer for you in the cloud, installing dependencies, and opening VS Code in your browser. Grab a sip of water while it loads.

**6\. You're ready**

When the browser tab opens to VS Code, open the `style.css` file in the file explorer on the left. The base styles are already written for you, and each rule has **STEP** comments showing where the grid properties go. That's your starting point — we'll type the grid code together in class, one step at a time.

---

## **GitHub Codespaces — A Brief Guide**

### **What Is It?**

Codespaces is a development environment that runs entirely in your browser. Instead of installing software on your own computer, you get a virtual computer in the cloud — pre-configured and ready to code — that you access through a web browser. Microsoft (which owns GitHub) hosts it.

### **What It Saves Us From**

Normally, getting a development environment set up requires installing and configuring a bunch of tools:

- A code editor (VS Code)
- A terminal (command line)
- Git (version control)
- Node.js, Python, or whatever runtime the project needs
- Extensions, themes, settings

Each one of these can break in unique ways depending on your operating system, your computer's permissions, or just bad luck. **Codespaces eliminates all of that.** You click one button and you're in a fully working environment. No "it works on my machine" problems.

### **How It Works (High Level)**

1. A project lives in a GitHub repository.
2. You click the green **Code** button and select **Open with Codespaces**.
3. GitHub spins up a lightweight virtual machine running Linux, installs the project's dependencies automatically, and opens a browser-based version of VS Code.
4. You code, save, and commit just like you would on your local machine.
5. When you're done, you stop the Codespace. Next time you come back, everything is exactly where you left it.

The environment is defined by a file called `devcontainer.json` (or `.devcontainer/`) in the repository. It's like a recipe that tells GitHub "this project needs X, Y, and Z."

### **The Catch: It's Slow to Start (And Why)**

A cold start takes **1–3 minutes**. Here's why:

- **A new virtual machine has to boot.** Codespaces isn't "running" until you open it. There's no always-on computer — one is created for you on demand. That means spinning up an OS from scratch.
- **Your dependencies install.** If the project requires packages or libraries, Codespaces runs the install process when it starts. This is the same `npm install` or `pip install` you'd run locally — it just happens automatically.
- **Extensions and settings sync.** VS Code loads your extensions, themes, and preferences from your GitHub account.

**Once it's running, it's fast.** The delay is only on the first launch of the day (or after you've manually stopped the Codespace). If you keep it open between sessions, there's no wait.

### **Tips**

- **Don't close your Codespace mid-session.** Just leave the tab open. If you close it, stop the Codespace from the GitHub dashboard so it doesn't eat into your monthly usage hours.
- **Your work is saved automatically.** Even if the Codespace stops, the files are stored on GitHub. You won't lose anything.
- **You get a fixed number of free hours per month** through the GitHub Student Developer Pack. A cold start uses some of those hours just booting up, so it's worth keeping one Codespace alive while you're actively working.
- **If you need to work offline,** you can always install VS Code and Git locally instead but it does take some set up — Codespaces is a convenience, not a requirement.

---