var empDetails: { emp_index: number, emp_id: number, Name: string, City: string, DOJ: string }[] =
  [{ "emp_index": 0, "emp_id": 100, "Name": "Ram", "City": "Indore", "DOJ":"2001" },
  { "emp_index": 1, "emp_id": 101, "Name": "Shyam", "City": "Indore", "DOJ": "2001"},
  { "emp_index": 2, "emp_id": 102, "Name": "Suresh", "City": "Indore", "DOJ": "2001" },
  { "emp_index": 3, "emp_id": 103, "Name": "Ravi", "City": "Indore", "DOJ":"2000" },
  { "emp_index": 4, "emp_id": 104, "Name": "Ramesh", "City": "Indore", "DOJ": "2000"}
  ]
// console.log(empDetails)

let a = <HTMLElement>document.getElementById("show");
let out = ''
for (let i of empDetails) {
  out += `
<tr>
<td  >${i.emp_index}</td>
<td  >${i.emp_id}</td>
<td>${i.Name}</td>
<td>${i.City}</td>
<td>${i.DOJ}</td>

      </tr>
      `
}
a.innerHTML = out;


function search1():void{
  var c = (<HTMLInputElement>document.getElementById("search")).value;
  var d=parseInt(c);
  var f=<HTMLElement>document.getElementById("out")
  let def=""
  for (let i of empDetails){
    if(i.emp_id==d){

def+=`<thead class=border-2>
<th>${i.emp_index}</th>

<th>${i.emp_id}</th>
<th>${i.Name}</th>
<th>${i.City}</th> 
<th>${i.DOJ}</th>
</thead>`
    }
  }
  f.innerHTML=def; 
}

function search2():void{
  var c = (<HTMLInputElement>document.getElementById("search1")).value;
  var d=parseInt(c);
  var f=<HTMLElement>document.getElementById("out1")
  let def=""
  for (let i of empDetails){
    if(i.emp_index==d){

def+=`<thead class=border-2>
<th>${i.emp_index}</th>

<th>${i.emp_id}</th>
<th>${i.Name}</th>
<th>${i.City}</th>
<th>${i.DOJ}</th>
</thead>`
    }
  }
  f.innerHTML=def;
}



function search3():void{
  var d=<HTMLElement>document.getElementById("show4");
  var f=(<HTMLInputElement>document.getElementById("Index")).value;

  let a="";
  for (let i of empDetails) {
    if(i.DOJ==f){

      a += `
      <tr class=border-2 >
      <td class="px-5" >${i.emp_index}</td>
      <td class="px-5" >${i.emp_id}</td>
      <td class="px-5">${i.Name}</td>
      <td class="px-5">${i.City}</td>
      <td class="px-5">${i.DOJ}</td>
      
            </tr>
            `
    }
  
  }
 
d.innerHTML=a
  

}
