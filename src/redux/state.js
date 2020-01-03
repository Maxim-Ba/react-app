let store = {
    _state : {
        api: [
            {
                title: 'Первое Api',
                name: 'Api1',
                data: { data: 'DATA' },
                link: '/Api/Api1'
            },
            {
                title: 'Второе Api',
                name: 'Api2',
                data: { data: 'DATA2' },
                link: '/Api/Api2'
            },
            {
                title: 'Третье Api',
                name: 'Api3',
                data: { data: 'DATA3' },
                link: '/Api/Api3'
            },
            {
                title: 'Четвертое Api',
                name: 'Api4',
                data: { data: 'DATA4' },
                link: '/Api/Api4'
            },
            {
                title: 'Пятое Api',
                name: 'Api5',
                data: { data: 'DATA5' },
                link: '/Api/Api5'
            }
        ],
        formState : {
            name: '',
            email: '',
            number: '',
            textarea: ''
        }
    },
    getState(){
        return this._state;
    },
    _rerenderEntairTree (){
        console.log('1')
    },
    onTopOfPage() {
        window.scrollTo(0, 0);
    },
    
    handleChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;
        this._state.formState[name]= value;
        console.log(this._state.formState)
        this._rerenderEntairTree();
    },
    subscribe (observer){
        this._rerenderEntairTree=observer;
    }
}
window.store = store
export { store };