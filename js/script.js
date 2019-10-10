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
const transitarDoing = (item) => {
  todoCard.removeChild(item)
  doingCard.appendChild(item)
}

const criarItem = (tarefa) => {
  const li = document.createElement('li')
  const btNext = document.createElement('i')
  const button = document.createElement('button')

  btNext.setAttribute('class', 'fas fa-chevron-circle-right')

  button.appendChild(btNext)

  button.onclick = () => transitarDoing(li)

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