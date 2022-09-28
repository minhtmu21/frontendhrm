const arr = [
    {name: 'minh'},
    {name: 'ngan'},
    {name: 'ngao'},
]
const test = document.getElementById('test');
const url = (<ul>
    {arr.map((x,index) =>
        <li key={index}>{x.name}</li>
    )}
</ul>)
ReactDOM.render(url, test)