const listas = document.querySelectorAll('ul')
const todoCard = document.querySelector('#todo')
const doingCard = document.querySelector('#doing')
const doneCard = document.querySelector('#done')
const inputToDo = document.querySelector('#tarefa')
const addButton = document.querySelector('#addButton')
//const nextButton = document.querySelector("#nextBt")

/*const save = () => {
  let listasTransformadas = Array.from(listas)
    .map(lista => {
      return {
        nomeLista: lista.getAttribute('id'),
        itens: Array.from(lista.children)
          .map(filho => {
            const [tarefa] = filho.querySelectorAll('li')
            return {
              tarefa: tarefa.textContent
            }
          })
      }
    })

    localStorage.setItem('lista', JSON.stringify(listasTransformadas))
}*/

/*const transitarDone = (dItem) => {
  doingCard.removeChild(dItem)
  doneCard.appendChild(dItem)
}*/

const excluirItem = (eItem) => {
  doneCard.removeChild(eItem)
}

const transitarDone = (dItem, t) => {
  const li = document.createElement('li')
  const btExclude = document.createElement('i')
  const button = document.createElement('button')

  doingCard.removeChild(dItem)

  btExclude.setAttribute('class', 'fas fa-times-circle')

  button.appendChild(btExclude)
  button.onclick = () => excluirItem(li)

  li.append(t, button)

  doneCard.appendChild(li)
}

const transitarDoing = (item, trf) => {
  const li = document.createElement('li')
  const btNext = document.createElement('i')
  const button = document.createElement('button')

  todoCard.removeChild(item)

  btNext.setAttribute('class', 'fas fa-chevron-circle-right')

  button.appendChild(btNext)
  button.onclick = () => transitarDone(li, trf)

  li.append(trf, button)

  doingCard.appendChild(li)
}

const criarItem = (tarefa) => {
  const li = document.createElement('li')
  const btNext = document.createElement('i')
  const button = document.createElement('button')

  btNext.setAttribute('class', 'fas fa-chevron-circle-right')

  button.appendChild(btNext)

  button.onclick = () => transitarDoing(li, tarefa)

  inputToDo.textContent = tarefa

  li.append(tarefa, button)

  todoCard.appendChild(li)

  //tarefa.appendChild(li)

  // <li>Revisar HTML e CSS <button><i class="fas fa-chevron-circle-right"></i></button></li>
  // <li>Fazer a o Todo App <button><i class="fas fa-chevron-circle-right"></i></button></li>
  // <li>Postar meu código no GitHub <button><i class="fas fa-chevron-circle-right"></i></button></li>
  // <li>Ir na aula de JS <button><i class="fas fa-chevron-circle-right"></i></button></li>
}

const adicionarLista = () => {
  if (inputToDo.value) {
    criarItem(inputToDo.value + ' ')
    //save()
    inputToDo.value = ''
  }
}

addButton.onclick = adicionarLista