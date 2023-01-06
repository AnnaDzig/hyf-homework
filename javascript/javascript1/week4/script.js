
 let username;
 let toDoList = [];


function getReply(command) {
   let reply;
   let action;
   switch (command) {
       case command.match('My name is')?.input:
           username = command.split(" ").pop();
           reply = `nice to meet you ${username}`;
           break;
       case 'What is my name?':
           reply = username || "I don't know your name";
           break;
       case command.match('Add .+ to my todo')?.input:
           action = command.match('Add (.+) to my todo')[1] //take first match
           toDoList.push(action);
           reply = `${action} added to your todo`;
           break;
       case command.match('Remove .+ from my todo')?.input:
           action = command.match('Remove (.+) from my todo')[1] //take first match
           let index = toDoList.indexOf(action);
           if (index > -1) {
               toDoList.splice(index, 1);
           }
           reply = `${action} removed from your todo`;
           break;
       case 'What is on my todo?':
           reply = toDoList.join(" and ");
           break;
       case 'What day is it today?':
           reply = new Date().toDateString();
           break;
       case command.match('what is .+')?.input:
           let expression = command.match('what is (.+)')[1];
           reply = eval(expression);
           break;
       case command.match('Set a timer for .+ minutes')?.input:
           let timeOut = command.match('Set a timer for (.+) minutes')[1];
           reply = `Timer set for ${timeOut} minutes`;
           setTimeout(alert("Timer done"), parseFloat(timeOut) * 60000);
           break;
       default: reply = 'Unknown command'; break;
   }
   return reply
}

console.log(getReply('What is my name?'))
console.log(getReply('My name is Anton'))
console.log(getReply('What is my name?'))
console.log(getReply('Add fishing to my todo'))
console.log(getReply('Add singing in the shower to my todo'))
console.log(getReply('Add cook fish to my todo'))
console.log(getReply('Remove fishing from my todo'))
console.log(getReply('What is on my todo?'))
console.log(getReply('What day is it today?'))
console.log(getReply('what is 6 * 10'))
console.log(getReply('what is 6 + 10'))
console.log(getReply('Set a timer for 0.1 minutes'))