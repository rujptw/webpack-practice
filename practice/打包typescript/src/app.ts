const NUM =45

interface Cat {
name:String,
gender:String
}

function touchCat(cat:Cat){
    console.log("~miao",cat.name)
}

touchCat({
    name:"jack",
    gender:"male"
})