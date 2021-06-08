function searchMatch() {
    const pattern = document.getElementById('pattern').value;
    const regex = new RegExp(pattern, 'g');

    const getString = document.getElementById('incoming').value;

    let matches = '',
        match;
    
    while (match = regex.exec(getString)) {
        matches += match[0] + ' '
    }

    document.querySelector('.search-result').innerText = matches ? matches : 'NOT Found';
    console.log(matches);
}

document.getElementById('search').addEventListener('click', searchMatch);

const buffer = new ArrayBuffer(10);
const integerArray = new Int8Array(buffer);


console.log(buffer, integerArray)