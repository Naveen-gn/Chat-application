import Conversation from '../model/conversation.model.js';
import Message from '../model/message.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';

export const sendMessage= async(req,res)=>{
    try {
        const {id:reciverId}= req.params;
        const senderId = req.user._id;
        const {message} = req.body;
        console.log("message",message);
        // console.log("reciverId",reciverId);
        // console.log("senderId",senderId);
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,reciverId]},
        }) 
        if(!conversation){
            await Conversation.create(
                {
                    participants:[senderId,reciverId]
                }
            )
        }
        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        })
        if(newMessage){
            conversation.message.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(),newMessage.save()])
        //socket functionality
        const receiverSocketId = getReceiverSocketId(reciverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit('newMessage',newMessage);
        }


        res.status(200).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const getMessage= async(req,res)=>{
    try {
        const {id:userToChatId}= req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        })?.populate('message');
        if(!conversation){
            res.status(200).json([]);
        }
        if(conversation){
            res.status(200).json(conversation.message);
        }
        // const messages = conversation.message;
        // res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}