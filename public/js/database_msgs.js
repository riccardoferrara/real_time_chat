var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

// //function writing a message on the front
// const chat_a_message = (msg) => {
//     var item = document.createElement('li');
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// }


// fetching initial chat messages from the database
(function() {
    fetch("/messages/db_messages")
        .then(data => {
            return data.json();
        })
        .then(json => {
            json.map(data => {
                console.log('front got msg: ', data.text)
                chat_a_message(data.text)
                    // let li = document.createElement("li");
                    // let messages = docuemtn.getElementById("messages")
                    // let span = document.createElement("span");
                    // messages.appendChild(li).append(data.message);

                // messages
                //     .appendChild(span)
                //     .append("by " + data.sender + ": " + formatTimeAgo(data.createdAt));
            });
        });
})();