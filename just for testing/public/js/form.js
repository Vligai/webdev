/*
Vladislav Ligai
used: https://github.com/Stevens-CS546/CS-546-WS-Summer-1/tree/master/Lecture%20Code/lecture_09
*/
(function () {
    const staticForm = document.getElementById("static-form");
    if (staticForm) {
        const inputElement = document.getElementById("input");
		const palindromeElement = document.getElementsByClassName("is-palindrome")[0];
        const notPalindromeElement = document.getElementsByClassName("not-palindrome")[0];
        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];   
        staticForm.addEventListener("submit", (event) => {
            event.preventDefault();
            try {
                //clear error text
				errorTextElement.textContent = null;
				//errorContainer.classList.add("hidden");
                let palList = document.createElement('li');
                palList.appendChild(document.createTextNode(inputElement.value));
                unformatted_text = (inputElement.value).toLowerCase().match(/[a-z0-9]/g).join("");
				reversed_text = unformatted_text.split("").reverse().join("");
                if (unformatted_text === reversed_text)
                    palindromeElement.appendChild(palList);
                else 
                    notPalindromeElement.appendChild(palList);
				//clear text area
				inputElement.value = null;
            } catch (e) {
                const message = "Invalid input!";
                errorTextElement.textContent = message;
            }  
        });
    }
})();