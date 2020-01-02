const state = {
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
    ]
}
const formsData = {}

function onTopOfPage() {
    window.scrollTo(0, 0);

}
function sendForm(data){
    let id = 0;
    function add(data){
        formsData[id] = data;
        add++;
    }
    add(data);
    console.log(formsData);
    
}
// Удалит ь потом эту функцию
export { state, onTopOfPage, sendForm };