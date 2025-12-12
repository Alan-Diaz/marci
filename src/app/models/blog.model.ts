interface BlogReduced{
    title:string
    text:string
}

export interface Blog{
    id:number
    title:string
    text:string
    img: string
    date:string
    label_main: string
    label_secondary: string
    sub_texts: [BlogReduced]

}