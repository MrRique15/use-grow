import mongoose, { Mongoose } from "mongoose"

class MongooseConfig {
    private mongoURI: string

    constructor(mongoURI: string) {
        this.mongoURI = mongoURI
    }

    async connect(): Promise<Mongoose> {
        console.log("Conecting to MongoDB...")
        return await mongoose.connect(this.mongoURI, 
            {
                autoIndex: true,
                autoCreate: true
            }
        );
    }
}

export { MongooseConfig }
    