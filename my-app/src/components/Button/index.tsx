interface ButtonProps{
    text:string
}

const Button = ({text}:ButtonProps) => {
    return(<button>
        {text}
    </button>)
}