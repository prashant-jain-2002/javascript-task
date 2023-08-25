var mainObj = [
  {
    name: "prashant",
    age: 19,
    Gender: "male",
  },
  {
    name: "kapil",
    age: 27,
    Gender: "male",
  },
  {
    name: "bharti",
    age: 27,
    Gender: "femail",
  },
];
var k = "<tbody>";
for (i = 0; i < mainObj.length; i++) {
  sno = i + 1;
  k += "<tr>";
  k += "<td>" + sno + "</td>";
  k += "<td>" + mainObj[i].name + "</td>";
  k += "<td>" + mainObj[i].age + "</td>";
  k += "<td>" + mainObj[i].Gender + "</td>";
  k += "</tr>";
}
k += "</tbody>";
document.getElementById("tableData").innerHTML = k;

function reverse1(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i]; // r =
  }
  return r;
}

document.write(reverse1("jain"));

// duplecacy of array

const input = [1, 2, 3, 2, 4, 6, 78, 0];

function removeDuplicate(arr) {
  //     const result = [];
  //     let idx = 0;
  //     const tmp = [];

  //     for (let i = 0; i < arr.length; i++) {
  //     tmp[arr[i]]
  // //      console.log("i" ,arr[i]);
  // //      console.log("ivdsgbg");
  // console.log("i" ,tmp[arr[i]]);
  //         // if (!tmp[arr[i]]) {
  //         //     tmp[arr[i]] = 1;//tmp
  //         //     result[idx] = arr[i];
  //         //     idx++;
  //         // }
  //     }
  //      console.log(tmp, "jgasdh")

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (i !== j) {
          arr.splice(i, 1);
        }
      }
    }
  }

  return arr;
}

document.write(removeDuplicate(input));


function change(){
  document.getElementById('jain').innerHTML = "<iframe width='100%' height='1000px' src='https://webllisto.com/'> </iframe>"
}