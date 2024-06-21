document.addEventListener('DOMContentLoaded', ()=>{
    const inputNamaBarang = document.getElementById('barang')
    const inputHargaBarang = document.getElementById('harga')
    const submitForm = document.getElementById('submit')
    const alertKolomKosong = document.getElementById('alertKolomKosong')

    submitForm.addEventListener('click', (ev)=>{
        const inputBarang = inputNamaBarang.value
        const inputHarga = inputHargaBarang.value
        ev.preventDefault()

        if(inputBarang === ""|| inputHarga === ""){
            alertKolomKosong.innerText = 'Kolom tidak boleh kosong!'
        } else{
            alertKolomKosong.innerText = ''
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
        itemContainer.append(newElement)
        
    }

})