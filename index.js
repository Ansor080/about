const about = document.querySelector('.about')
const yess = document.querySelectorAll('.yes')
const nows = document.querySelectorAll('.now')
const text = document.querySelector('h1')
const btn = document.querySelector('button')

about.onsubmit = (event) => {
    event.preventDefault()
     let error =  false

     yess.forEach(yes => {
        if(yes.value.length === 0) {
            yes.style.border = "1px solid red"
            error = true
        }
     })

     if(error === false) {
        submit(event.target)
        return
     }

     alert('Заполни таблицу пидбуль')
}

function submit(target) {
    const user = {} 

    const fm = new FormData(target)

    fm.forEach((val, key) => user[key] = val)

    console.log(user);
}