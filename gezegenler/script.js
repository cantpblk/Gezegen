const input = document.getElementById('number')
const select = document.getElementById('gezegen')
const btn = document.getElementById('btn')
const wrapper = document.querySelector('.wrapper')
// const imgs = document.querySelector('.wrapper img')
const img = wrapper.querySelector('img')
const p = wrapper.querySelector('p')




let gezegenler = [
    {
        'adı':'dünya',
        'yercekimi':10,
        'resim':'./img/earth.png'
    },
    {
        'adı':'jupiter',
        'yercekimi':25,
        'resim':'./img/jupiter.png'
    },
    {
        'adı':'mars',
        'yercekimi':3.7,
        'resim':'./img/mars.png'
    },
    {
        'adı':'mercur',
        'yercekimi':3.7,
        'resim':'./img/mercury.png'
    },
    {
        'adı':'ay',
        'yercekimi':1.6,
        'resim':'./img/moon.png'
    },
    {
        'adı':'neptün',
        'yercekimi':11.1,
        'resim':'./img/neptune.png'
    },
    {
        'adı':'pluto',
        'yercekimi':0.6,
        'resim':'./img/pluto.png'
    },
    {
        'adı':'saturn',
        'yercekimi':10.4,
        'resim':'./img/saturn.png'
    },
    {
        'adı':'uranus',
        'yercekimi':8.8,
        'resim':'./img/uranus.png'
    },
    {
        'adı':'venus',
        'yercekimi':8.8,
        'resim':'./img/venus.png'
    },
]

// let gezegenler = ['dünya','jupiter','mars','mercur','ay','neptun','pluton','saturn','uranus','venus']

for(let i of gezegenler){
    const option = document.createElement('option')
    option.textContent = i.adı[0].toUpperCase() + i.adı.slice(1)
    // option.textContent = i[0].toUpperCase() + i.slice(1)
    option.value = i.adı
    select.append(option)
}

btn.addEventListener('click',()=>{


    if(!isNaN(input.value) && select.value != 'Bir gezegen seçiniz'){
        let value = Number(input.value)
        let gezegen = select.value
        let kutle = value / 10
        for(let i of gezegenler){
            if(i.adı == gezegen){
                img.setAttribute('src',i.resim)
                img.className = 'active'
                p.textContent = `${gezegen} gezegende ağırlıgın ${(kutle * i.yercekimi).toFixed(1)}`
            }
        }
        
    }else if(isNaN(input.value)){
        p.textContent = `Sadece rakam ile hesap yapabiliyoruz.`
        img.setAttribute('src','')
        img.classList = ''
    }else if(select.value == 'Bir gezegen seçiniz'){
        img.setAttribute('src','')
        img.classList = ''
        p.textContent = `Bir gezegen seçmen lazım.`
    }
})
