const p = document.querySelectorAll('#wordlistsContentPanel > ul > li ');
let datas = [];
let i = 0;
p.forEach(ele => {
    const name = ele.getAttribute('data-hw');
    const type = ele.getAttribute('data-ox3000');
    const level = ele.querySelector('span.pos').innerText;
    if (type === null) return;
    else {
        const data = { name, type, level }
        datas.push(data);
    }
    i++;
});


const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000');
await page.waitFor(15000)
let h = await page.evaluate(() => {
    const p = document.querySelectorAll('#wordlistsContentPanel > ul > li ');
    let datas = [];
    p.forEach(ele => {
        const name = ele.querySelector('a').innerText;
        const type = ele.querySelector('span').innerText;
        const level = ele.querySelector('div span.belong-to').innerText;
        const data = { name, type, level }
        datas.push(data);
    });
    return datas
})

for (let i in h) {
    console.log('es', h.name)
}

await browser.close();
