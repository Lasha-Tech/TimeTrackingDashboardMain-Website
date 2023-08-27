const dot6 = document.querySelectorAll('.three-dot');
dot6.forEach(function(e) {
    e.addEventListener('mouseover', function(a) {
        a.target.style.cursor = 'pointer';
        const path = a.target.querySelector('svg path');
        path.setAttribute('fill', '#ffffff')
})

    e.addEventListener('mouseout', function(a) {
        const path = a.target.querySelector('svg path');
        path.setAttribute('fill', '#bdc1ff')
    });
});

//Work
const workHour = document.querySelector('#work-hour');
const workLastHour = document.querySelector('#work-last-hour');

//Play
const playHour = document.querySelector('#play-hour');
const playLastHour = document.querySelector('#play-last-hour');

//Study
const studyHour = document.querySelector('#study-hour');
const studyLastHour = document.querySelector('#study-last-hour');

//Exercise
const exerciseHour = document.querySelector('#exercise-hour');
const exerciseLastHour = document.querySelector('#exercise-last-hour');

//Social
const socialHour = document.querySelector('#social-hour');
const socialLastHour = document.querySelector('#social-last-hour');

//Self-Care
const selfHour = document.querySelector('#self-hour');
const selfLastHour = document.querySelector('#self-last-hour');


// Daily | Weekly | Monthly
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');


daily.addEventListener('click', function(a) {
        a.target.style.color = 'white'
        weekly.style.color = 'hsl(236, 100%, 87%)';
        monthly.style.color = 'hsl(236, 100%, 87%)';

        workHour.textContent = '5hrs';
        workLastHour.textContent = 'Yesterday - 7hrs';

        playHour.textContent = '1hrs';
        playLastHour.textContent = 'Yesterday - 2hrs';

        studyHour.textContent = '0hrs';
        studyLastHour.textContent = 'Yesterday - 1hrs';

        exerciseHour.textContent = '1hrs';
        exerciseLastHour.textContent = 'Yesterday - 1hrs';

        socialHour.textContent = '1hrs';
        socialLastHour.textContent = 'Yesterday - 3hrs';

        selfHour.textContent = '0hrs';
        selfLastHour.textContent = 'Yesterday - 1hrs';
});


weekly.addEventListener('click', function(a) {
    a.target.style.color = 'white'
    daily.style.color = 'hsl(236, 100%, 87%)';
    monthly.style.color = 'hsl(236, 100%, 87%)';

    workHour.textContent = '32hrs';
    workLastHour.textContent = 'Last Week - 36hrs';

    playHour.textContent = '10hrs';
    playLastHour.textContent = 'Last Week - 8hrs';

    studyHour.textContent = '4hrs';
    studyLastHour.textContent = 'Last Week - 7hrs';

    exerciseHour.textContent = '4hrs';
    exerciseLastHour.textContent = 'Last Week - 5hrs';

    socialHour.textContent = '5hrs';
    socialLastHour.textContent = 'Last Week - 10hrs';

    selfHour.textContent = '2hrs';
    selfLastHour.textContent = 'Last Week - 2hrs';
});


monthly.addEventListener('click', function(a) {
    a.target.style.color = 'white'
    daily.style.color = 'hsl(236, 100%, 87%)';
    weekly.style.color = 'hsl(236, 100%, 87%)';

    workHour.textContent = '103hrs';
    workLastHour.textContent = 'Last Month - 128hrs';

    playHour.textContent = '23hrs';
    playLastHour.textContent = 'Last Month - 29hrs';

    studyHour.textContent = '13hrs';
    studyLastHour.textContent = 'Last Month - 19hrs';

    exerciseHour.textContent = '11hrs';
    exerciseLastHour.textContent = 'Last Month - 18hrs';

    socialHour.textContent = '21hrs';
    socialLastHour.textContent = 'Last Month - 23hrs';

    selfHour.textContent = '7hrs';
    selfLastHour.textContent = 'Last Month - 11hrs';
});



