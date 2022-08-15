import express, { Request, Response } from 'express'

const app = express()

app.get("/", (req: Request,res: Response): Response => {
    return res.json({message: "Starting Application..."})
})

app.listen(3333)