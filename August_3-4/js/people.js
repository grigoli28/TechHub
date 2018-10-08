// DRY, SRP (Single Responsibility Principle)
// element.find()
// element.delegate()
// element.on()
// arr.map()
// arr.splice()



/* let mainModule = (function() {
    let storage = localStorage;
    storage.setItem('Person 1', '5')
    storage.setItem('Person 2', '5')
    let people = ['Person 1', 'Person 2'];

    // DOM caching
    let $element = $('#peopleModule');
    let $button = $element.find('button'); // !important
    let $input = $element.find('input');
    let $ul = $element.find('ul');


    // event bindings
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', removePerson);

    _updateDOM();

    function template(items) {
        return items.map((item) =>
            `<li><span>${item}</span><i class="del">X</i></li>`).join('');
    }

    function _updateDOM() {
        $ul.html(template(people));
    }

    function addPerson(newVal) {
        let name = (typeof newVal === 'string') ? newVal : $input.val();
        people.push(name);
        _updateDOM();
        $input.val('');
    }

    function removePerson(event) {
        let index;
        if (typeof event === 'number') {
            if (event == 0) alert('Error');
            else {
                index = event - 1;
                people.splice(index, 1);
                _updateDOM();
            }
        } else {
            let $remove = $(event.target).closest('li');
            index = $ul.find('li').index($remove);
            people.splice(index, 1);
            _updateDOM();
        }
    }

    return {
        addPerson,
        removePerson
    }

})(); */




//#region 
/* Classwork */
let mainModule = ( function(){

    const STORAGE_KEY = 'MyModule-Persons';

    let people = ['Please add yours...'];

    // DOM caching

    let $element = $('#peopleModule');
    let $button  = $element.find('button');
    let $input   = $element.find('input');
    let $ul      = $element.find('ul');
    let ModuleStorage;

    // event bindings

    $button.on('click', addPerson);

    // selector, eventName, callback

    $ul.delegate('i.del', 'click',removePerson);

    _createStorage();
    _getStorage();
    _updateDOM();

    // DRY, SRP

    function template(items){
        return items.map( item => {
            return `<li><span>${item}</span><i class="del">X</i></li>`
        }).join('');
    }



    function _updateDOM(){
        $ul.html( template(people) );
    }



    function _updateStorage(){   

        ModuleStorage.setItem(STORAGE_KEY, JSON.stringify(people));  

    }



    function _createStorage(){

        if( (ModuleStorage = window.localStorage) && !ModuleStorage.getItem(STORAGE_KEY) ){

            ModuleStorage.setItem(STORAGE_KEY, JSON.stringify(people));

        }

    }



    function _getStorage(){

        people = JSON.parse(ModuleStorage.getItem(STORAGE_KEY));

    }



    function addPerson(newVal){

        let name = (typeof newVal === 'string') ? newVal : $input.val();

        people.push(name);

        _updateStorage();

        _updateDOM();

        $input.val('');

    }



    function removePerson(event){

        let index;

        if( typeof event === 'number'){

            index = event;

        }

        else {

            let $remove = $(event.target).closest('li');

            index = $ul.find('li').index($remove);

        }

        people.splice(index, 1);

        _updateStorage(true);

        _updateDOM();

    }



    // 

    return {

        addPerson,

        removePerson,

    }

})() //IIFE

//#endregion