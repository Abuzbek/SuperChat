// const socket = io.connect("/")
const socketIo = io()

// ========== QS moduli ulanish ========== 

const {name,select,accountImg} = Qs.parse(location.search , {
    ignoreQueryPrefix:true,
})
console.log(name,select,accountImg);
// ========== QS moduli ulanish ========== 
//  ============= backenddan qabul qilinvotti ----------
socketIo.on('message' , (data)=>{
    console.log(data);
    cardMsg(data)
    scrollEl()
})
//  ============= backenddan qabul qilinvotti ----------
//  ============= habar yuborish backendga ----------

$('#preventButton').click((e)=>{
    e.preventDefault();
    let inp = $('#messageinp')
    let inpVal = inp.val()
    socketIo.emit('msg' ,  inpVal)
    inp.val('')
    scrollEl()
})
//  ============= habar yuborish backendga ----------

//  ============= habar korinishi  ----------

const cardMsg = (message)=>{
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
    <div class="card_img">
        <img src="./images/${message.img}" alt="">
    </div>
    <div class="card-body">
    <a href="#!" class="msgName">
    ${message.username}
    </a>
    <p class="msgEnv">
    ${message.msg}
    </p>
    <span class="msgTime">
    ${message.time}
    </span>
    </div>
    
    `
    let chatArea = document.querySelector('.chatArea')
    chatArea.appendChild(card)
}
//  ============= habar korinishi  ----------

//  ============= scroll korinishi  ----------

const scrollEl = ()=>{
    const el = document.querySelector('.chatArea')
    el.scrollTop = el.scrollHeight
}

//  ============= habar korinishi  ----------
