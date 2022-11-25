interface UserData {
  id: number
  accountStatus: number
  email: string
}

interface UserMessage {
  ctime: number
  id: number
  messageContent: string
  messageType: number
  receiveUid: number
  status: number
}

interface NoReadMsg {
  noReadMsgCount: number
  userMessageList: UserMessage[]
}

export {
  UserData,
  NoReadMsg
}
