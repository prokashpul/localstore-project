// add item button event handel add
const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productNameValue = productName.value;
    const productNumber = document.getElementById('quadientity');
    const productNumberValue = productNumber.value;
    if (!productNameValue || !productNumberValue) {
        return;
    }
    setProduct(productNameValue, productNumberValue)
    productName.value = '';
    productNumber.value = '';
}


// set prodat localstor

const displyResult = () => {
    const showDisplay = document.getElementById('add-items');
    const product = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : [];
    product.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                <tr>
                <td>${item.name}</td>
                <td>${item.quadientity}</td>
                </tr>
                `
        showDisplay.appendChild(tr);
    });

}
displyResult()

const setProduct = (name, quadientity) => {
    let produtRecord = new Array();
    produtRecord = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : [];
    produtRecord.push({
        "name": name,
        "quadientity": quadientity
    })

    const productObj = JSON.stringify(produtRecord);
    localStorage.setItem("product", productObj);
}