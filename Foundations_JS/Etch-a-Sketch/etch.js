let gridSize = 4;
const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.width = "960px";
container.style.height = "960px";
container.style.backgroundColor = "black";
const colors = ['blue', 'red', 'white', 'tan', 'green', 'yellow', 'orange', 'gray', 'pink', 'aqua',
'purple', 'brown', 'violet', 'indigo', 'magenta', 'cyan', 'lime', 'teal', 'olive', 'maroon',
'navy', 'coral', 'turquoise', 'beige', 'lavender'];


function createGrid(container, gridSize)
{
    const newGrid = container;
    for(let i = 0; i < gridSize; i++)
        {
            newGrid.appendChild(createBlock(gridSize));
        }
}

function createBlock(gridSize)
{
    const newBlock = document.createElement("div");
    newBlock.className = "block";
    newBlock.style.display = "flex";
    newBlock.style.flexGrow = 1;
    for(let i = 0; i < gridSize; i++)
        {
            let currentDiv = createDiv();
            newBlock.appendChild(currentDiv);
        }
    return newBlock;
}

function createDiv()
{
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    randomizeColor(newDiv);
    newDiv.style.flexGrow = 1;
    newDiv.addEventListener("mouseout", () => {
        randomizeColor(newDiv);
        let opacity = newDiv.style.opacity;
        console.log("The opacity is " + opacity + " and the date is " + new Date());
        if(opacity)
        {
                if(opacity >= 0.1)
                    opacity -= 0.1;
                newDiv.style.opacity = opacity;
        }
        else
        {
            newDiv.style.opacity = 1;
        }

    });

    return newDiv;
}

function randomizeColor(newDiv)
{
    let index = getRandomInt();
    newDiv.style.backgroundColor = colors[index];
}

function removeGrid(container)
{
    const deleteGrid = container;
    let gridChildren = Array.from(deleteGrid.children);
    gridChildren.forEach(child =>
    {
        let i = 0;
        child.remove();
        console.log("Deleted a child " + new Date());
    });
}

function getRandomInt() {
    return Math.floor(Math.random() * 25);
}

function gridResizerButton()
{
    let theButton = document.querySelector('.gridchanger');
    let resizer;
    theButton.style.width = '200px';
    theButton.style.height = '25px';
    theButton.addEventListener('click', () => {
        resizer = prompt("Enter the number of squares per row.");
        if(resizer > 0 && resizer < 65)
        {
                resizer = Math.floor(resizer);
                removeGrid(container);
                createGrid(container, resizer);
                resizer = 0;
        }
        else
        {
            alert('Enter a positive integer between 1 and 64 inclusive.');
        }
    })   
    theButton.textContent = "Click to resize grid";
}

createGrid(container, gridSize);
gridResizerButton();

// removeGrid(container);