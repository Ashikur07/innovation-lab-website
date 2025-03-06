export async function PATCH(request, {params}){

    const body = await request.json()
    const index = data.findIndex((c) => c.id === parseInt(params.id));

    data[index] = {
        text: body.text
    }

    return Response.json({
        messege:"success",
        data
    })
    
}


export async function DELETE(request,{params}){
    const newData = data.filter((item)=>item.id !== parseInt(params.id))
    return Response.json({
        messege:"deleted",
        newData
    })
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