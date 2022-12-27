// alert(1);



fetch("https://fakestoreapi.com/products")
    .then((data) => {
        // console.log(data);   // json format
        return data.json();     // converted to object
    }).then((objectData) => {
        // console.log(objectData);
        console.log(objectData[0].title);
        let tableData = "";     // const neveikia cia, turi galeti keistis matyt
        objectData.map((values) => {
            // tableData += `<h1>${values.title}</h1>`;
            // tableData += `<tr>
            //             <td>random name</td>
            //             <td>Mark</td>
            //             <td>Otto</td>
            //             <td>@mdo</td>
            //         </tr>`;
            tableData += `<tr>
                        <td>${values.title}</td>
                        <td>${values.description}</td>
                        <td>${values.price}</td>
                        <td><img src="${values.image}"/></td>
                    </tr>`;
        });
        document.getElementById("table_body").
            innerHTML = tableData;
    }).catch((err) => {
        console.log("error!!!!", err); // mess the url and see the console output error message
    });
