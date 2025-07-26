const GET_NUMBERS = () => {
    AI_NUM = Math.floor(Math.random() * 200);
    return AI_NUM;
}

const GET_OPERATION = () => {
    AI_CHOICES = ["+", "-", "*", "/"];
    AI_NUM_CHOICE = Math.floor(Math.random() * 4);
    AI_OPERATION = AI_CHOICES[AI_NUM_CHOICE];
    return AI_OPERATION;
}