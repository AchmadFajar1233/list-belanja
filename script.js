document.addEventListener('DOMContentLoaded', ()=>{
    const inputNamaBarang = document.getElementById('barang')
    const inputHargaBarang = document.getElementById('harga')
    const submitForm = document.getElementById('submit')
    const alertKolomKosong = document.getElementById('alertKolomKosong')
    const arrayTotal = []
    submitForm.addEventListener('click', (ev)=>{
        const inputBarang = inputNamaBarang.value
        const inputHarga = inputHargaBarang.value
        const textTotal = document.getElementById('textTotal')
        ev.preventDefault()

        if(inputBarang === ""|| inputHarga === ""){
            alertKolomKosong.innerText = 'Kolom tidak boleh kosong!'
        } else{
            alertKolomKosong.innerText = ''
            addContainerItem(inputBarang, inputHarga)
        }

        addTextTotal(arrayTotal, textTotal)

        inputNamaBarang.value = ''
        inputHargaBarang.value = ''
    })

    function addContainerItem(namaBarng, harga_barang){
        const newElement = document.createElement('div')
        newElement.setAttribute('class', 'namaHargaBarang')
        newElement.setAttribute('id', 'hiddenContainer')
        const itemContainer = document.querySelector('.item-container')

        const newListHiddenElement = document.createElement('div')
        newListHiddenElement.setAttribute('class', 'listHidden')

        const barangHarga = document.createElement('div')
        barangHarga.setAttribute('class', 'barangHarga')

        const barang = document.createElement('div')
        const harga = document.createElement('div')
        barang.setAttribute('class', 'barang')
        harga.setAttribute('class', 'harga')
        barang.innerText = 'Nama Barang: '
        harga.innerText = ('Harga:')

        const namaBarangSpan = document.createElement('span')
        const hargaSpan = document.createElement('span')

        namaBarangSpan.setAttribute('id', 'namaBarang')
        hargaSpan.setAttribute('id', 'namaHarga')

        namaBarangSpan.innerText = namaBarng
        hargaSpan.innerText = harga_barang

        const icon = document.createElement('i')
        icon.setAttribute("class", "fa-solid fa-trash")
        const deleteButton = document.createElement('span')
        deleteButton.append(icon)
        deleteButton.style.cursor = 'pointer'
        deleteButton.addEventListener('click', () => {
            newElement.remove()
            const index = arrayTotal.indexOf(parseInt(harga_barang))
            if (index !== -1) {
                arrayTotal.splice(index, 1)
            }
            addTextTotal(arrayTotal, document.getElementById('textTotal'))
        })


        barang.append(namaBarangSpan)
        harga.append(hargaSpan)
        barangHarga.append(barang, harga)
        newListHiddenElement.append(barangHarga, deleteButton)
        newElement.append(newListHiddenElement)
        itemContainer.append(newElement)
        
    }

    const addTextTotal = (arrayTotal, textTotal)=>{
        if(inputHargaBarang.value !== "" && inputNamaBarang.value !== ""){
            arrayTotal.push(parseInt(inputHargaBarang.value))
        }
        const totalBelanja = arrayTotal.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue
        }, 0)
        textTotal.innerText = `harga total: ${totalBelanja}`
    }

})