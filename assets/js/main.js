// show menu
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        }) 
    }

// remove mobile menu

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// change background header

const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50  ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);


// scroll section active link

const sections = document.querySelectorAll('section[id]')

function scrollActive () {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// show scroll up 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// scroll reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`choose__content, .calculate__img`, {origin: 'right'})


// calculate js

const   calculateForm = document.getElementById('calculate-form'),
        calculateCm = document.getElementById('calculate-cm'),
        calculateKg = document.getElementById('calculate-kg'),
        calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()

    // check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === '') {
        // add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        // show message
        calculateMessage.textContent = 'Fill in the Height and Weight 🐱‍💻'
        // remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

        if(bmi < 18.5) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😌`
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😌`
        }
        // to clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        // remove message four seconds

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)

    }
};

calculateForm.addEventListener('submit', calculateBmi)



// email js

const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message'),
        contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    // check if the field has a value
    if(contactUser.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        // show message
        contactMessage.textContent = 'You must enter your email ✉'
        // remove message three seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_rojxf4e','template_hstdm6o','#contact-form','dFoygVTdHPn3Ci0OF')
            .then(() => {
                // show message and add color
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully 👍'

                // remove message after three seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) => {
                // mail sending error
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })
            // to clear input
            contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)
