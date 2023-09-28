# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://genuine-belekoy-445a00.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles



### What I learned

- I have learned how to apply my skills in this project... i am really glad that i've tried this project

```
const [timeFrame,setTimeFrame] = React.useState("daily");

    const [data,setData] = React.useState([]);

    React.useEffect(() =>{
       setData(jsonData) 
    },[]);

    const daily = () => {
        setTimeFrame("daily")
    }

    const weekly = () => {
        setTimeFrame("weekly")
    }

    const monthly = () => {
        setTimeFrame("monthly")
    }
```

- iam really proud of above code

### Continued development

I still want to improve my responsive skills

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - 

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
