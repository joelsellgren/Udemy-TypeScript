let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Hej';
if (typeof userInput === 'string') {
    userName = userInput;
}

const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code };
};

generateError('An error occured', 500);
