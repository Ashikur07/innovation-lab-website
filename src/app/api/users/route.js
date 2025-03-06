
// get method
export async function GET(){
    return Response.json(
        data
    )
}


// post method
export async function POST(request){
    const newComment = await request.json()

    data.push(
        {
            id: data.length + 1,
            text: newComment.text
        }
    )

    return Response.json(
        {
            messege: 'added',
            data
        }
    )
}


const data = [
    {
        id:1,
        text:"comments 1"
    },
    {
        id:2,
        text:"comments 2"
    },
    {
        id:3,
        text:"comments 3"
    },
]