// add item button event handel add
const addProduct = () => {
        const productName = document.getElementById('product-name');
        const productNameValue = productName.value;
        const productNumber = document.getElementById('quadientity');
        const productNumberValue = productNumber.value;
        if (!productNameValue || !productNumberValue || productNumberValue < 0) {
            alert("Please Input Field can't empity")
            location.reload()
            return;
        }
        setProduct(productNameValue, productNumberValue);
        showDataDispaly(productNameValue, productNumberValue);
        productName.value = '';
        productNumber.value = '';
    }
    // DISPALY SHOW
const showDataDispaly = (name, quadientity) => {
    const showDisplay = document.getElementById('add-items');
    const tr = document.createElement('tr');
    tr.innerHTML = `
                <tr>
                <td>${name}</td>
                <td>${quadientity}</td>
                </tr>
                `
    showDisplay.appendChild(tr);
}

// set prodat localstor

const displyResult = () => {

    const product = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : [];
    product.forEach(item => {
        showDataDispaly(item.name, item.quadientity)
            // console.log(item)
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
    // clear data
const clearData = () => {
    localStorage.clear();
    location.reload()
}