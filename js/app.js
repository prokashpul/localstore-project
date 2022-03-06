// add item button event handel add
const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productNameValue = productName.value;
    const productNumber = document.getElementById('quadientity');
    const productNumberValue = productNumber.value;
    if (!productNameValue || !productNumberValue) {
        return;
    }
    displyResult(productNameValue, productNumberValue)
    setProduct(productNameValue, productNumberValue)
    productName.value = '';
    productNumber.value = '';
}


// set prodat localstor

const displyResult = (name, number) => {
    const showDisplay = document.getElementById('add-items');
    const tr = document.createElement('tr');
    tr.innerHTML = `
            <tr>
            <td>${name}</td>
            <td>${number}</td>
            </tr>
            `
    showDisplay.appendChild(tr);
}

const setProduct = (name, quadientity) => {
    let produtRecord = new Array();
    console.log(produtRecord)
    produtRecord = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : "";
    produtRecord.push({
        "name": name,
        "quadientity": quadientity
    })

    const productObj = JSON.stringify(produtRecord);
    localStorage.setItem("product", productObj);
}