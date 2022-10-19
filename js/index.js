// Iteration 1: Names and Input

let hacker1 = "Daniel Ladeira"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Sylvester Stallone"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let biggestName = ""
if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    biggestName = hacker1
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    biggestName = hacker1
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    biggestName = hacker2
}

// Iteration 3: Loops
// 3.1 Driver's name saparated by space and in capitals.
let hacker1UpperSpaced = ""
let hacker1Upper = hacker1.toUpperCase()
for(let i = 0; i < hacker1Upper.length; i++) {
    hacker1UpperSpaced += hacker1Upper[i]+" "
}
console.log(hacker1UpperSpaced)

// 3.2 Navigator's name in reverse order.
let hacker2Reversed = ""
for(let i = hacker2.length-1; i >= 0; i--) {
    hacker2Reversed += hacker2[i]
}
console.log(hacker2Reversed)

// 3.3 Lexicographic order
if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?")
} else {
    for(let i = 0; i < biggestName.length; i++) {
            if (hacker1[i] == hacker2[i]){
                continue
            } else {
                if (hacker1[i] < hacker2[i]) {
                    console.log("The driver's name goes first.")
                    break
                } else {
                    console.log("Yo, the navigator goes first definitely.")
                    break
                }
            }
        }
    }

// Bonus 1
inputText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus veritatis tempora consequuntur tenetur! Vero sunt earum eos itaque cupiditate maxime delectus officia optio corrupti molestiae, quibusdam laborum consectetur? Consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus veritatis tempora consequuntur tenetur! Vero sunt earum eos itaque cupiditate maxime delectus officia optio corrupti molestiae, quibusdam laborum consectetur? Consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus veritatis tempora consequuntur tenetur! Vero sunt earum eos itaque cupiditate maxime delectus officia optio corrupti molestiae, quibusdam laborum consectetur? Consectetur!"
numberOfWords = 0;
for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] == " ") {
        if (inputText[i+1] == " ") {
            continue // Não conta se houver espaços em branco consecutivos.
        } else {
            numberOfWords += 1
        }
    }
}
// O loop conta o número de espaços, preciso acrescentar a última palavra depois do último espaço.
numberOfWords += 1
console.log(`The text has ${numberOfWords} words.`)

// Bonus 2
let phraseToCheck = "maam"
let phraseToCheckUpper = phraseToCheck.toUpperCase()
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let phrasedToCheckFormated = ""
// Elimina caracteres espaços, números e especiais
for ( let i = 0; i < phraseToCheck.length; i++ ) {
    if (alphabet.indexOf(phraseToCheckUpper[i]) != -1) {
        phrasedToCheckFormated += phraseToCheckUpper[i]
    }
}
// Define o número de iterações da próxima etapa, a depender se o número é par ou ímpar.
let iteration = 0
if (phrasedToCheckFormated.length % 2 == 0) {
    iteration = phrasedToCheckFormated.length / 2
} else {
    iteration = (phrasedToCheckFormated.length-1) / 2
}
// Verifica se é um palíndromo.
for (let i = 0; i < iteration; i++) {
    if (phrasedToCheckFormated[i] == phrasedToCheckFormated[(phrasedToCheckFormated.length-1)-i]) {
        if ( i == (iteration - 1) ) {
            console.log("Wow! It's a palindrome!")
        }
        continue
    } else {
        console.log("It isn't a palindrome.")
        break
    }
}
