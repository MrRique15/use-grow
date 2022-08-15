import { ICodeGenerator } from "../ICodeGenerator";

class CodeGenerator implements ICodeGenerator {
    constructor() { }

    generateCode(): number {
        return Math.floor(Math.random() * (999999 - 100000) + 100000);
    }
}

export { CodeGenerator }