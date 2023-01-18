const TOKEN = "5877812379:AAEI-BFLEs7E1Qr32bDfof7vUQgTMa6KER4";
const CHAT_ID = "-884124658";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();

    let message = `<b>Сообщение:</b>\n`
    message += `<b>Name and Surname:</b> ${ this.name.value }\n`;
    message += `<b>Phone:</b> ${ this.phone.value }\n`;
    message += `<b>Email:</b> ${ this.email.value }\n`;
    message += `<b>Message:</b> ${ this.message.value }\n`;


    axios.post(URI_API,{
        chat_id: CHAT_ID,
        parse_mode: `html`,
        text: message
    })
    .then((res) => {
        this.phone.value = "";
        this.email.value = "";
        this.message.value = "";
        this.name.value = "";
        alert("Сообщение было отправлено")
    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() =>{
        console.log('Конец');
    })

})