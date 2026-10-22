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

## **Documentation**

### 10/22/26
[Figma Mockup Link](https://www.figma.com/design/nAOf9RkdAvkm9qQtZCuUeL/KellyBurrus_Assignment4_Mockups?node-id=0-1&t=nn6uMZSzpGMNu3Gq-1)
<br>
<br>This week I added a new site education.html, alongside a collection of images and repeating elements in order to display educational resources to users. The new site is accessible through the navigation bar. I also updated some of the CSS to make sure the tiles looked neat, and to shrink the images in each tile a bit so they did not overlap with one another.
<br>
<br>The data I'm displaying is comprised of little educational tiles that can serve as a resource for users who are not strong sight readers. Because I don't have any repeating information in my index.html page, I decided to create a second page for this assignment called education.html. In the site, this page can be accessed from the navigation bar at the top, under "Music Education Resources". Each tile contains a title, a description, and an image of what the concept looks like in real sheet music.
<br>
<br>I used Javascript to create a separate education.js file to store my array, and a script.js file to run the actual Javascript code. Javascript uses the array information in education.js to know what information to include in each educational tile, and runs script from script.js to create tiles from that information in education.html.
<br>
<br>Challenges:

- I initially included a typo in my code, saying "getElement**s**ById" instead of singular element. I also couldn't figure out why nothing was loading in my site - it turns out that I had to include the following lines in education.html, which I then looked for in the codealong 06 file and found, clarifying what it meant:
  \<script defer src="js/education.js"></script>
  \<script defer src="js/script.js"></script>
- I couldn't figure out what command to use to show images alongside the text. Turned out instead of following the same formula as title.textContent, I had to use image.src. I tried to ask the AI assistant what this meant, and why I needed to do it this way, but I was not clear enough in my ask, and it just went in and fixed my code for me. I had to then ask it to undo what it did and explain to me what to do so I could do it myself and understand what I was doing, and then I double-checked my code to make sure everything was back to normal before I made my own attempt.
- The last challenge I had was just that my images came through at a massive size, overlapping one another, and I wanted to make them a bit smaller to better show the structure. I tried to figure the structure out by myself, using the #education-resources CSS structure recommended in the assignment, but had to Google it in the end. I ended up figuring it out, and got it to a size that I liked.
- I committed my changes before realizing I forgot to add a couple of things in this README, so I had to add them and recommit. Added this challenge, a short summary of what I did this week at the beginning of my documentation entry, and a link to my Figma mockup.
