document.addEventListener('DOMContentLoaded', ()=>{
    const inputNamaBarang = document.getElementById('barang')
    const inputHargaBarang = document.getElementById('harga')
    const submitForm = document.getElementById('submit')

    submitForm.addEventListener('click', (ev)=>{
        const inputBarang = inputNamaBarang.value
        const inputHarga = inputHargaBarang.value
        ev.preventDefault()

        if(inputBarang === ""|| inputHarga === ""){
            alert('kolom tidak boleh kosong')
        } else{
            addContainerItem(inputBarang, inputHarga)
        }

        inputNamaBarang.value = ''
        inputHargaBarang.value = ''
    })

    function addContainerItem(namaBarng, harga_barang){
        const newElement = document.createElement('div')
        const container = document.querySelector('.container')
        newElement.setAttribute('class', 'namaHargaBarang')
        newElement.setAttribute('id', 'hiddenContainer')

        const newListHiddenElement = document.createElement('div')
        newListHiddenElement.setAttribute('class', 'listHidden')

        const barangHarga = document.createElement('div')
        barangHarga.setAttribute('class', 'barangHarga')

        const barang = document.createElement('div')
        const harga = document.createElement('div')
        barang.setAttribute('class', 'barang')
        harga.setAttribute('class', 'harga')
        barang.innerText = 'Nama Barang: '
        harga.innerText = ('Harga')

        const namaBarangSpan = document.createElement('span')
        const hargaSpan = document.createElement('span')

        namaBarangSpan.setAttribute('id', 'namaBarang')
        hargaSpan.setAttribute('id', 'namaHarga')

        namaBarangSpan.innerText = namaBarng
        hargaSpan.innerText = harga_barang


        barang.append(namaBarangSpan)
        harga.append(hargaSpan)
        barangHarga.append(barang, harga)
        newListHiddenElement.append(barangHarga)
        newElement.append(newListHiddenElement)
        container.append(newElement)
        
    }

})