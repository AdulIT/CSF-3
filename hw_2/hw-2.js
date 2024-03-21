const instructions = {
    'SET A': 0,
    'PRINT A': 1,
    'IFN A': 2,
    'RET': 3,
    'DEC A': 4,
    'JMP': 5
};

const program = [
    instructions['SET A'], // Ставим значения аккумулятора
    10, // В 10
    instructions['PRINT A'], // Выводим значение на экран
    instructions['IFN A'], // Если A равно 0
    instructions['RET'], // Программа завершается
    0, // И возвращает 0
    instructions['DEC A'], // Уменьшаем A на 1
    instructions['JMP'], // Устанавливаем курсор выполняемой инструкции
    2 // В значение 2
];

const instructionsReadable = Object.keys(instructions)
// console.log(instructionsReadable);

function execute(program)
{
    const step = 0
    const a = 0

    while (true)
    {
        switch(program[step])
        {
            case 'SET A':
                a = program[step + 1]
                step += 1
                break
            case 'PRINT A':
                console.log(a)
                step += 1
                break
            case 'IFN A':
                if (a === 0) return
                step += 1
                break
            case 'RET':
                console.log(program[step + 1])
                step += 1
                break
            case 'DEC A':
                a -= 1
                step += 1
                break
            case 'JMP':
                step = program[step + 1]
                break
            default:
                console.log('default')
                return 0;
        }
    }
}

// Выведет в консоль
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// И вернет 0
execute(program);