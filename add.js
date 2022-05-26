class addElement{
    constructor(pic,des){
        this.pic=pic;
        this.des=des;
    }
}
class AddList{
    addlist=[
        new addElement(
            "pic",
            "this is my project"
        )
    ]
}







render() {
    const rootApps = document.getElementById("#add");
    const picture = document.createElement("div");
    picture.className = "image";
    picture.innerHTML = `
    <div class="addcard">
    <div class="images">
    </div>
    <div class="description">Description</div>
    <button class="btn">Upload</button>
    </div>
    `;
    
    rootApps.append(picture);
}
const add = new AddList();
add.render();
