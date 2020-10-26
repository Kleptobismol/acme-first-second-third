const slots = ['first', 'second', 'third']

const users = {

    'moe': {slot: 'first', selected:false},
    'larry': {slot: 'second', selected:false},
    'curly': {slot: 'third', selected:false},
    'lucy': {slot: 'third', selected:true}

};

// Allows toggling the name buttons to have visual feedback.
function toggle(button) {
    let name = button.id

    if (button.style.backgroundColor == 'white') {
        button.style.backgroundColor = '#FF6347'
        users[name].selected = true
    } else {
        button.style.backgroundColor = 'white'
        users[name].selected = false
    }
}

// Sets correct slot value of users when movement button is pressed.
function stage(button, iter) {
    let slot = button.parentElement.id
    let idx = slots.indexOf(slot) + iter

    for (key in users) {
        if (users[key].slot == slot && users[key].selected == true) {
            users[key].slot = slots[idx]
        }
    }

    build()
}

// Resets names to avoid duplication.
function clear() {
    let names = Array.from(document.getElementsByClassName('user'))
    
    for (i=0; i < names.length; i++) {
        names[i].remove()
    }
}

// Populates the slots with names. Called every time names need to be moved.
function build() {
    clear()

    for (key in users) {
        let element = document.getElementById(users[key].slot)
        let button = document.createElement('button')
        let text = document.createTextNode(key)

        button.classList.add('user')
        button.setAttribute('id', key)
        button.setAttribute('onclick', 'toggle(this)');
        button.appendChild(text)

        if (users[key].selected == false) {
            button.setAttribute('style', 'background-color: white')
        } else {
            button.setAttribute('style', 'background-color: #FF6347')
        }

        element.appendChild(button)
    }
}

// Initialize names on page.
build()