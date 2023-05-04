import data from './items.json'assert {type:'json'}
const app = document.getElementById('app');

const createList = () => {
    data.forEach((value) => {
        const div = document.createElement('div');
        div.classList.add('bb')
        div.textContent = value.content;
        div.id = value.id
        div.addEventListener('click', () =>clickElement(div,value));
        app.appendChild(div);
    })
}
const clickElement = (tag, item) => {
    if (tag.classList.contains('green'))
    {
        clearState()
        return
    }
    clearState()
    tag.classList.add('green');
    relationsColor(item.relations)
}
const relationsColor = (rel) =>{
    rel.forEach((item) => {
        const div = document.getElementById(item)
        div.classList.add('orange')
    })
}
const clearState = () => {
    data.forEach((item) => {
        const div = document.getElementById(item.id)
        div.classList.remove('orange','green')
    }) 
}
createList()
