/**
 * Получить карточку персонажа
 *
 * @param character
 * @returns {string}
 */
function getCharacterCard(character) {
    return `
        <div class="card mb-3 col-sm-12 col-md-6 col-lg-4">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${character.thumbnail}"
                         style="max-width: 100%;"
                         alt="${character.name}"
                    >
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <button type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-${character.id}"
                                class="btn btn-secondary btn-sm"
                        >Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Получить модальное окно персонажа
 *
 * @param character
 * @returns {string}
 */
function getCharacterModal(character) {
    return `
        <div id="exampleModal-${character.id}"
             tabindex="-1"
             aria-labelledby="exampleModalLabel-${character.id}"
             class="modal fade"
             style="display: none;" 
             aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${character.name}</h5>
                        <button type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                class="btn-close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <img src="${character.thumbnail}"
                             style="max-width: 100%;"
                             alt="${character.name}"
                        >
                        <div>
                            <p class="text-muted">${character.modified}</p>
                            <h5>Описание:</h5>
                            <p>${character.description}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button"
                                    data-bs-dismiss="modal"
                                    class="btn btn-secondary btn-sm"
                            >Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Получить информацию о персонажах с API
 */
function fetchCharacters() {
    return fetch('https://jsfree-les-3-api.onrender.com/characters')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке персонажей');
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('Ошибка:', error);
            return []; // Возвращаем пустой массив при ошибке
        });
}

/**
 * Получить массив карточек персонажей
 *
 * @param characters
 * @returns {Array}
 */
function getCharacterCards(characters) {
    return characters.map(character => getCharacterCard(character));
}

/**
 * Получить массив модальных окон персонажей
 *
 * @param characters
 * @returns {Array}
 */
function getCharacterModals(characters) {
    return characters.map(character => getCharacterModal(character));
}
