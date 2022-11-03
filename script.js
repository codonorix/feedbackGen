const positiveComp = [
    "Amazing work! You've shown a good understanding of the concepts we've gone over. The task is well completed! Amazing work!",
    "You've shown a good understanding of the concepts taught in this task. It's important to keep implementing their usage in future programs to help reinforce the learning process.",
    "WOW! This was brilliantly done! Your code is well completed and I enjoyed every moment of going through it! Keep it up! This quality of code will never go unnoticed!",
    "You've completed the task and have gone above and beyond with this project! Keep working on this!",
    "Amazing work! You've completed this task and done exactly what was required of you! Making sure that you go through each of the required steps is important as this is what you can expect in the real world! Great job! Keep it up!",
    "Excellent work on this submission. You've shown a deep understanding of how to tackle these challenges and they are all matching the specifications given to you.",
]

const positiveStyle = [
    "Your code style follows all of the rules that are set up by the standard of this programming language. Style is incredibly important to keep a well-written flow structure in the world of code so it's important to always follow these rules. Keep it up!",
    "The styling in your code is very consistent, which helps a lot when reading through your work. It is important that you maintain high standards of style when you code because you'll most likely be working with a team that will need to read through your code.",

]

const positiveComments = [
    "Your code is well commented on. Your comments help us better understand what certain functions are doing and how the structure of your code works together. They helped me better understand your code! This means that in the world place the same thing would happen! Keep it up!"
]

const positiveEff = [
    "Your program follows a lot of code rules that make your program vastly more efficient compared to other content I have seen. Efficiency is one of the most important parts of programming which is why it's brilliant to see you providing this quality of work!"
]

const negComp = [
    "Great attempt at this submission! However, while looking through your project I've noticed that there are certain features missing. Take a look at some of the things I've picked up on."
]

const negStyle = [
    "A great attempt at style was made here! However, there is room for improvement. It's important to remember that the style of your code is incredibly important in the development process. Here are a few things that you can do to improve your code quality!",

]

const negComments = [
    "While looking through your code I've noticed that you haven't incorporated a large amount of well constructed comments that would help us better understand your code. Comments are a very important part of creating a flawless program so it's important that you attempt to add a good amount of comments for certain sections of code to help use better understand what your code is doing at points."
]

const negEff = [
    "While taking a look through your code I've noticed that there are portions of code that could improve your efficiency. Efficiency is a vital part of programming so it's important that we improve these sections as soon as possible! Take a look at a couple suggestions I've left to improve your code quality!"
]

const resub = [
    "Great attempt with this task! You've shown a good understanding of the concepts so far, however, there is still room for improvement. Please take a look at the above feedback and incorporate it into your program! Once you've done this please resubmit and I'll happily take another look!",
    "Please reach out to me on the HyperionDev Discord group at {mentor_name} - Mentor(As shown on the group), or any of the other mentors shown if you need any more assistance on this task. You can also book a live-session review if you need more in-depth assistance.\n" +
    "\n" +
    "Please make these corrections and resubmit, and I'll happily take another look.",
    
]

const noResub = [
    "You did an amazing job with this task! You should be proud of the quality of your work and I highly encourage you to keep this standard of code up!"
]

const generateFeedback = () => {
    let posTotal = document.getElementById('positive').value
    let improveTotal = document.getElementById('negative').value
    let overallTotal = document.getElementById('overall').value
    let resubmit = document.getElementById('resubyes').checked;

    const posArea = document.getElementById('postiveFeedback')
    const negArea = document.getElementById('negFeedback')
    const overallArea = document.getElementById('overallFeedback')

    posArea.innerHTML = postivieFeedbackGen(Number(posTotal))
    negArea.innerHTML = negFeedbackGen(Number(improveTotal))
    overallArea.innerHTML = overallFeedbackGen(overallTotal, resubmit)
}


const postivieFeedbackGen = (total) => {
    let output = "╠══════════════════════╣ 𝓞𝓥𝓔𝓡𝓐𝓛𝓛 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"

    for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * positiveComp.length);
        output += positiveComp[random] + "\n\n"
    }

    output += "╠══════════════════════╣ 𝓢𝓣𝓨𝓛𝓔 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"
    for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * positiveStyle.length);
        output += positiveStyle[random] + "\n\n"
    }

    output += "╠══════════════════════╣ 𝓒𝓞𝓜𝓜𝓔𝓝𝓣𝓢 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"
    for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * positiveComments.length);
        output += positiveComments[random] + "\n\n"
    }
    output += "╠══════════════════════╣ 𝓔𝓕𝓕𝓘𝓒𝓘𝓔𝓝𝓒𝓨 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"
    for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * positiveEff.length);
        output += positiveEff[random] + "\n\n"
    }
    return output
}


const negFeedbackGen = (total) => {
    let output = "╠══════════════════════╣ 𝓞𝓥𝓔𝓡𝓐𝓛𝓛 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"

    for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * negComp.length);
        output += negComp[random] + "\n\n"
    }

    output += "╠══════════════════════╣ 𝓢𝓣𝓨𝓛𝓔 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"
    for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * negStyle.length);
        output += negStyle[random] + "\n\n"
    }

    output += "╠══════════════════════╣ 𝓒𝓞𝓜𝓜𝓔𝓝𝓣𝓢 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"
    for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * negComments.length);
        output += negComments[random] + "\n\n"
    }
    output += "╠══════════════════════╣ 𝓔𝓕𝓕𝓘𝓒𝓘𝓔𝓝𝓒𝓨 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"
    for (let i = 0; i < total; i++) {
        const random = Math.floor(Math.random() * negEff.length);
        output += negEff[random] + "\n\n"
    }
    return output
}

const overallFeedbackGen = (total, isResub) => {
    let output = "╠══════════════════════╣ 𝓞𝓥𝓔𝓡𝓐𝓛𝓛 𝓕𝓔𝓔𝓓𝓑𝓐𝓒𝓚 ╠══════════════════════╣\n"

    if (isResub) {
        for (let i = 0; i < total; i++) {
            const random = Math.floor(Math.random() * resub.length);
            output += resub[random] + "\n\n"
        }
    } else {
        for (let i = 0; i < total; i++) {
            const random = Math.floor(Math.random() * noResub.length);
            output += noResub[random] + "\n\n"
        }
    }
    return output
}

const copyFeedback = (feedbackCopy) => {
    let copyText

    switch (feedbackCopy) {
        case 'pos':
            copyText = document.getElementById("postiveFeedback");
            break
        case 'neg':
            copyText = document.getElementById("negFeedback");
            break
        case 'overall':
            copyText = document.getElementById("overallFeedback");
            break
    }

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}