interface IAddres {
    email: string
    name: string
}

interface IMessage {
    to: IAddres
    from: IAddres
    subject: string
    body: string
}

interface IMailProvider {
    sendMail(message: IMessage): Promise<void>
}

export { IMailProvider, IMessage }