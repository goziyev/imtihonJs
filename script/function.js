function createCard(element) {
  return `
    <div class="card" id=${element.name.slug}>
    <img class="card-img" src=${element.flags.png} width="264" height="160" alt="" />
    <div class="card-texts">
      
    <p class="card-title">${element.name.common}</p>
    <p class="card-description">
      Population: <span>${element.population}</span>
    </p>
    <p class="card-description">Region: <span>${element.region}</span></p>
    <p class="card-description">Capital: <span>${element.capital}</span></p>
  
  </div>
  </div>`;
}

function createCardDetail(element) {
  return `
    <div class="in-detail container" id="in-detail-wrapper">
    <div class="indetail_img">
        <img src=${element.flags.png} width="559" height="483" alt=${
    element.flags.alt
  } >
    </div>
    <div class="in-detail__texts">
        <h1>${element.name.common}</h1>
        <div class="in-detail-flex">
            <div>
                <p class="card-description fonts">Native Name: <span>${
                  element.name.nativeName
                }</span>
                </p>
                <p class="card-description fonts">Population: <span>${
                  element.population
                }</span></p>
                <p class="card-description fonts">Region: <span>${
                  element.region
                }</span></p>
                <p class="card-description fonts">Sub Region: <span>${
                  element.subregion
                }</span></p>
                <p class="card-description fonts">Capital: <span>${
                  element.capital
                }</span></p>
              
            </div>
            <div>
                <p class="card-description fonts">Top Level Domain: <span>.be</span>
                </p>
                <p class="card-description fonts">Currencies: <span>${
                  element.currencies
                }</span></p>
                <p class="card-description fonts">Languages: <span>${
                  element.languages
                }</span></p>

            </div>
                
        </div>
        <div class="border-countries">
            <p class="card-description">Border Countries:</p>
            ${element.borders.map((el) => {
              return ` <p class="card-border-countries" id=${el.slug}>${el.common}</p>`;
            })}
        </div>
    </div>
</div>
`;
}


export { createCard, createCardDetail };
