const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const chatSchema = new Schema({

    chatUser : {
        type : Array,
        Required : true
    },
    Message : {
        type : String,
    },
    Image : {
        type : String,
    },
    Sender : {
        type : String,
        Required : true
    },
    RecieverName : {
        type : String,
        Required : true
    },
    RecieverImage : {
        type : String,
    },
    RecieverPhone : {
        
    },
    RecieverPosition : {
        type : String,
    },
    Senderposition: {
        type : String
    },
    Senderphone: {
        type : String
    },
    
    
  
}, {timestamps : true});
export default mongoose.model("chat", chatSchema, "chats");
