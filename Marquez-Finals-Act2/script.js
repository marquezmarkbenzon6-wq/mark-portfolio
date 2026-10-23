const Message = document.getElementById("message")
const LoaButton = document.getElementById("loadBtn")
const Prof = document.getElementById("profile")
const Grad = document.getElementById("grade")
const Sched = document.getElementById("schedule")
const ChanButton = document.getElementById("changeBtn")


function load(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account!")
        },2000)
    })
}

LoaButton.addEventListener("click",function(){
    Message.innerHTML = "Loading...."
    load()

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking......")
            },2000)
        })
    })

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Account.....")
            },2000)
        })
    })

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Welcomeeeee sa mark")
            }, 2000)
        })
    })

    .then(function(result){
        Message.innerHTML = result
    })
})


ChanButton.addEventListener("click", function(reload){
    Prof.innerHTML = "Profile: Waiting..."
    Grad.innerHTML = "Grades: Waiting..."
    Sched.innerHTML = "Schedule: Waiting..."

    const profilePromise = new Promise (function(reload){
    setTimeout(function(){
        Prof.innerHTML = "Profile: Loaded"
        Prof.style.color = "Red"
        Sched.style.color = "Pink"
        Grad.style.color = "Blue"
        Message.style.color = "Green"
        reload()
    },2000)
})

const gradePromise = new Promise (function(reload){
    setTimeout(function(){
        Grad.innerHTML = "Grade: Loaded"
        Prof.style.color = "Pink"
        Sched.style.color = "Blue"
        Grad.style.color = "Green"
        Message.style.color = "Red"
        reload()
    },4000)
})

const schedulePromise = new Promise (function(reload){
    setTimeout(function(){
        Sched.innerHTML = "Schedule: Loaded"
        Prof.style.color = "Blue"
        Sched.style.color = "Green"
        Grad.style.color = "Red"
        Message.style.color = "Pink"
        reload()
    },6000)
})

Promise.all([profilePromise, gradePromise, schedulePromise])
    .then(function(){
    setTimeout(function(){
        Message.innerHTML = "Dashboard Ready!!"
        Prof.style.color = "Green"
        Sched.style.color = "Red"
        Grad.style.color = "Pink"
        Message.style.color = "Blue"
    }, 3000)
})
})



