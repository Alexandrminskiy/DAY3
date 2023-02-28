console.log('work')

const $wr = document.querySelector('[data-wr]')

// функция getCatHTML принимает объект кота
const getCatHTML = (cat) => `
    <div class="card mb-4 mx-2" style="width: 18rem;">
                <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
                <div class="card-body">
                    <h5 class="card-title">${cat.name}</h5>
                    ${cat.description}
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `

fetch('https://cats.petiteweb.dev/api/single/alexandrminskiy/show/')
  .then((res) => res.json())
  .then((data) => {
    //   Обращаемся к контейнеру
    $wr.insertAdjacentHTML('afterbegin', data.map((cat) => getCatHTML(cat)).join(''))

    console.log({ data })
  })
