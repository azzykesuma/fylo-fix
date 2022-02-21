let input = document.getElementById('input')
let button = document.getElementById('button')
let error = document.querySelector('.error')
let success = document.querySelector('.success')
console.log(error)



button.addEventListener('click',(e) => {
    e.preventDefault();
    if(input.value === '' || !input.value.includes('@') ) {
        error.style.display = 'block'
    } else {
        error.style.display = 'none'
        success.style.display = 'block'
    }
})