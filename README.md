<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://sftechtracker.vercel.app/">
    <img width="120" height="120" alt="logo" src="https://github.com/user-attachments/assets/6d8983a8-f545-4757-967f-1fde4f1844f0" />
  </a>

<h3 align="center">SF Tech Tracker</h3>

  <p align="center">
    A way to track your character's tech for Street Fighter 6!
    <br />
    <a href="https://github.com/frontierSpaceAlien/SpotBot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://sftechtracker.vercel.app/">View Demo</a>
    &middot;
    <a href="https://github.com/frontierSpaceAlien/SpotBot/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/frontierSpaceAlien/SpotBot/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#challenges">Challenges</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Track oki/setplay and combo options for multiple characters!  

I created this project because mentally tracking several new setplay options and combo routing options in Street Fighter 6 was always challenging. Especially when trying to practice these in matches, I generally tend to forget. This project helps alleviate these issues and keeps all the tech in one place.

### Built With

 [![TanstackStart][TanstackStart.com]][TanstackStart-url] [![TanstackQuery][TanstackQuery.com]][TanstackQuery-url] [![TanstackForm][TanstackForm.com]][TanstackForm-url] [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url] [![Supabase][Supabase.com]][Supabase-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* Grab your free Steam API key at [https://steamcommunity.com/dev](https://steamcommunity.com/dev)
* Setup your Supabase project at [https://supabase.com](https://supabase.com/) and retrieve your project url and publishable key
  
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/frontierSpaceAlien/SpotBot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API keys in `.env`
   ```env
   VITE_SUPABASE_URL=
   VITE_SUPABASE_PUBLISHABLE_KEY=
   STEAM_WEB_API_KEY = 
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin <NEW_GIT_URL_HERE>
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

This project does have authentication. You can sign up using any email as it does not send a confirmation email for account confirmation. However you can use the test account to try out the website yourself.
```sh
email: test@gmail.com
password: 123456
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CHALLENGES --> 
## Challenges
In this project, I decided to use Tanstack Start since I wanted to learn a new stack and Tanstack seemed like a good choice as I've heard great things about it. 

### Typescript
* Types
  - The first challenge I faced was learning about Types in functions. I was so used to Javascript where I can set a param without worrying what the type will be. In Typescript, I had to get used to the fact I had to explicity set the params type for all functions. This led to quite a few syntax errors during development and there would be times in early development where I spent 20 minutes on an error not realising that I just forgot to set a Type. 

### Tailwind CSS
* Tailwind CSS vs CSS
  - This change was really jarring initially. I used CSS for all of my projects up until now and having a styles.css file while calling the style as the classname was normal for me. When I first used Tailwind CSS, it felt like I was going against what I learned, however, the more I used Tailwind , the more I saw how much time it really saved when working on the frontend. Having all the CSS in the same file as my components redcued a lot of the tedious work going back and forth between two files. Plus, I was also amazed how Tailwind handles responsiveness.

### Backend
* Supabase Auth
  - This is the first project I have done a user auth feature. It was really confusing jumping into this without any prior experience, so I referred a lot to Youtube videos and the Supabase Auth docs. Especially learning Tanstack Query ontop of it, I had to learn how Tanstack Query and Supabase Auth fits together and how can I make it work. But after spending hours referring to Supabase docs and examples, I managed to get a basic grasp on how Supabase Auth works together with Tanstack Query. My understanding of it is: **query data to auth.api --> connect to Supabase Server Client --> auth.api calls supabase function --> Supabase processes data**
 
### Retrospective
After developing this project, I am satisfied with what I have learned and what I have achieved. Of course, I want to add more features to this project and expand it a bit more, but so far I have achieved what I set out to do initially. Which was to learn about authentication and a new tech stack. I do want to pursue more projects using Tanstack as I have barely scratched the surface and I want to learn more about Tanstack Query as I feel like I don't have a solid grasp on it yet. Additionally, I want to deepend my frontend skills as I feel like I am lacking in that area.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Enable control scheme change - Classic or Modern
- [ ] Profile management/Forgot password feature
- [ ] Add additional tech boxes for optional tech?
- [ ] Flesh out UI
- [ ] Add loading component on calls
      
See the [open issues](https://github.com/frontierSpaceAlien/SpotBot/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
<!-- ## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contact

frontierSpaceAlien - dereknlien@gmail.com

Project Link: [https://github.com/frontierSpaceAlien/SpotBot](https://github.com/frontierSpaceAlien/SpotBot)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/frontierSpaceAlien/SpotBot.svg?style=for-the-badge
[contributors-url]: https://github.com/frontierSpaceAlien/SpotBot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/frontierSpaceAlien/SpotBot.svg?style=for-the-badge
[forks-url]: https://github.com/frontierSpaceAlien/SpotBot/network/members
[stars-shield]: https://img.shields.io/github/stars/frontierSpaceAlien/SpotBot.svg?style=for-the-badge
[stars-url]: https://github.com/frontierSpaceAlien/SpotBot/stargazers
[issues-shield]: https://img.shields.io/github/issues/frontierSpaceAlien/SpotBot.svg?style=for-the-badge
[issues-url]: https://github.com/frontierSpaceAlien/SpotBot/issues
[license-shield]: https://img.shields.io/github/license/frontierSpaceAlien/SpotBot.svg?style=for-the-badge
[license-url]: https://github.com/frontierSpaceAlien/SpotBot/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
<!-- [product-screenshot]: https://github.com/user-attachments/assets/14f65b44-c22e-4b01-9165-8c76228137e9 -->

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Supabase.com]: https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[TanstackStart.com]: https://img.shields.io/badge/Tanstack%20Start-037bfc?style=for-the-badge&logo=TanstackStart&logoColor=white
[TanstackStart-url]: https://tanstack.com/start/latest
[TanstackQuery.com]: https://img.shields.io/badge/Tanstack%20Query-FF4154?style=for-the-badge&logo=TanstackQuery&logoColor=white
[TanstackQuery-url]: https://tanstack.com/query/latest
[TanstackForm.com]: https://img.shields.io/badge/Tanstack%20Form-fcb103?style=for-the-badge&logo=TanstackForm&logoColor=white
[TanstackForm-url]: https://tanstack.com/form/latest
[TailwindCSS.com]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
